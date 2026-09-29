import { createContext, useContext, useState, useEffect } from 'react';
import { COURSES_DATA } from '../data/coursesData';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  // Navigation / View State: 'home' | 'courses' | 'login' | 'signup'
  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'courses', 'login', 'signup'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal & Detail state
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  // User & Auth state
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('bytespace_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  // Wishlist and Enrolled courses
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('bytespace_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    try {
      const saved = localStorage.getItem('bytespace_enrolled');
      return saved ? JSON.parse(saved) : ['c1'];
    } catch {
      return ['c1'];
    }
  });

  // Theme: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('bytespace_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  // Toast notification system
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bytespace_theme', theme);
  }, [theme]);

  // Sync hash with view
  const navigateTo = (view) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'courses', 'login', 'signup'].includes(hash)) {
        setCurrentView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const toggleWishlist = (courseId) => {
    setWishlist((prev) => {
      const updated = prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId];
      localStorage.setItem('bytespace_wishlist', JSON.stringify(updated));
      showToast(
        updated.includes(courseId) ? 'Added to your wishlist!' : 'Removed from wishlist',
        'info'
      );
      return updated;
    });
  };

  const enrollCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      const updated = [...enrolledCourses, courseId];
      setEnrolledCourses(updated);
      localStorage.setItem('bytespace_enrolled', JSON.stringify(updated));
      showToast('Successfully enrolled in course! Happy learning 🎉', 'success');
    } else {
      showToast('You are already enrolled in this course!', 'info');
    }
  };

  const loginUser = (email, name) => {
    const newUser = {
      email,
      name: name || email.split('@')[0],
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Student'
    };
    setUser(newUser);
    localStorage.setItem('bytespace_user', JSON.stringify(newUser));
    showToast(`Welcome back, ${newUser.name}!`, 'success');
    navigateTo('home');
  };

  const signupUser = (name, email) => {
    const newUser = {
      name,
      email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      role: 'Student'
    };
    setUser(newUser);
    localStorage.setItem('bytespace_user', JSON.stringify(newUser));
    showToast(`Account created successfully! Welcome to ByteSpace, ${name}.`, 'success');
    navigateTo('home');
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('bytespace_user');
    showToast('You have been logged out.', 'info');
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        navigateTo,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        activeCourseModal,
        setActiveCourseModal,
        user,
        loginUser,
        signupUser,
        logoutUser,
        wishlist,
        toggleWishlist,
        enrolledCourses,
        enrollCourse,
        theme,
        toggleTheme,
        toast,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
