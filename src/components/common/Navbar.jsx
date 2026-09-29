import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Search,
  X,
  Sun,
  Moon,
  Heart,
  BookOpen,
  Menu,
  LogIn,
  UserPlus,
  LogOut,
  Layers
} from 'lucide-react';
import '../../styles/navbar.css';

export const Navbar = () => {
  const {
    currentView,
    navigateTo,
    searchQuery,
    setSearchQuery,
    user,
    logoutUser,
    wishlist,
    enrolledCourses,
    theme,
    toggleTheme
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view, anchorId = null) => {
    navigateTo(view);
    setMobileMenuOpen(false);

    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          <div className="brand-icon-wrapper">
            <Layers size={22} strokeWidth={2.4} />
          </div>
          <span className="brand-name">
            Byte<span>Space</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="navbar-links">
            <li
              className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </li>
            <li
              className={`nav-link ${currentView === 'courses' ? 'active' : ''}`}
              onClick={() => handleNavClick('courses')}
            >
              Courses
            </li>
            <li
              className="nav-link"
              onClick={() => handleNavClick('home', 'categories-section')}
            >
              Categories
            </li>
            <li
              className="nav-link"
              onClick={() => handleNavClick('home', 'why-us-section')}
            >
              Why Us
            </li>
            <li
              className="nav-link"
              onClick={() => handleNavClick('home', 'pricing-section')}
            >
              Pricing
            </li>
            <li
              className="nav-link"
              onClick={() => handleNavClick('home', 'faq-section')}
            >
              FAQ
            </li>
          </ul>
        </nav>

        {/* Global Search Input */}
        <div className="navbar-search">
          <Search size={16} className="navbar-search-icon" />
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search courses, skills..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentView !== 'courses' && e.target.value.trim().length > 0) {
                navigateTo('courses');
              }
            }}
          />
          {searchQuery && (
            <button
              className="navbar-search-clear"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            className="btn-icon"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} color="#FBBF24" />}
          </button>

          {/* Wishlist Indicator */}
          {wishlist.length > 0 && (
            <button
              className="btn-icon"
              style={{ position: 'relative' }}
              title="Your Wishlist"
              onClick={() => handleNavClick('courses')}
            >
              <Heart size={18} fill="#EF4444" color="#EF4444" />
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: '#EF4444',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {wishlist.length}
              </span>
            </button>
          )}

          {/* User state / Auth buttons */}
          {user ? (
            <div className="user-badge-menu">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <span className="user-name">{user.name}</span>
              <button
                className="btn-icon btn-sm"
                onClick={logoutUser}
                title="Log Out"
                style={{ width: '28px', height: '28px', border: 'none' }}
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => handleNavClick('login')}
              >
                <LogIn size={15} />
                Log In
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleNavClick('signup')}
              >
                <UserPlus size={15} />
                Sign Up
              </button>
            </>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ position: 'relative', marginBottom: '8px' }}>
          <Search size={16} className="navbar-search-icon" />
          <input
            type="text"
            className="navbar-search-input"
            style={{ width: '100%' }}
            placeholder="Search courses, skills..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (currentView !== 'courses') {
                navigateTo('courses');
              }
            }}
          />
        </div>

        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('home')}
        >
          Home
        </div>
        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('courses')}
        >
          All Courses
        </div>
        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('home', 'categories-section')}
        >
          Categories
        </div>
        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('home', 'why-us-section')}
        >
          Why Choose Us
        </div>
        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('home', 'pricing-section')}
        >
          Pricing Plans
        </div>
        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('home', 'faq-section')}
        >
          FAQ
        </div>

        <div className="mobile-actions-wrapper">
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src={user.avatar} alt={user.name} className="user-avatar" />
                <span className="user-name">{user.name}</span>
              </div>
              <button className="btn btn-secondary btn-sm" onClick={logoutUser}>
                Log Out
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className="btn btn-secondary"
                style={{ flex: 1 }}
                onClick={() => handleNavClick('login')}
              >
                Log In
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => handleNavClick('signup')}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
