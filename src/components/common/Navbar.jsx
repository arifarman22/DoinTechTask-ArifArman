import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sun,
  Moon,
  Heart,
  ShoppingBag,
  Menu,
  X,
  LogOut
} from 'lucide-react';
import '../../styles/navbar.css';

export const Navbar = () => {
  const {
    currentView,
    navigateTo,
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

  const isFigmaHome = currentView === 'home';

  return (
    <header className={`navbar-header ${isFigmaHome ? 'navbar-figma-blue' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo matching Figma: Neon Lime Emblem + White ByteSpace */}
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          <div className="brand-figma-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 4H13C16.3137 4 19 6.68629 19 10C19 12.222 17.789 14.1613 16 15.1973C17.789 16.2333 19 18.1726 19 20.3946C19 23.7083 16.3137 26.3946 13 26.3946H5V4Z"
                fill="#000000"
              />
              <circle cx="8" cy="12" r="3" fill="#D4FF00" />
            </svg>
          </div>
          <span className="brand-figma-name">ByteSpace</span>
        </div>

        {/* Desktop Navigation Links matching Figma (Home, Courses, Creators) */}
        <nav>
          <ul className="navbar-figma-links">
            <li
              className={`nav-figma-link ${currentView === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </li>
            <li
              className={`nav-figma-link ${currentView === 'courses' ? 'active' : ''}`}
              onClick={() => handleNavClick('courses')}
            >
              Courses
            </li>
            <li
              className="nav-figma-link"
              onClick={() => handleNavClick('home', 'why-us-section')}
            >
              Creators
            </li>
          </ul>
        </nav>

        {/* Right Actions matching Figma: Sign In, Join Us, Shopping Bag, Theme Toggle */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            className="btn-icon-figma"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} color="#D4FF00" />}
          </button>

          {/* Wishlist / Cart Indicator */}
          <button
            className="btn-icon-figma"
            style={{ position: 'relative' }}
            title="Wishlist"
            onClick={() => handleNavClick('courses')}
          >
            {wishlist.length > 0 ? (
              <>
                <Heart size={19} fill="#EF4444" color="#EF4444" />
                <span className="badge-count-pill">{wishlist.length}</span>
              </>
            ) : (
              <ShoppingBag size={19} />
            )}
          </button>

          {/* User state / Auth buttons */}
          {user ? (
            <div className="user-badge-menu-figma">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <span className="user-name-figma">{user.name}</span>
              <button
                className="btn-icon-figma btn-sm"
                onClick={logoutUser}
                title="Log Out"
                style={{ width: '28px', height: '28px', border: 'none' }}
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <div className="auth-btns-group">
              <span
                className="btn-link-figma"
                onClick={() => handleNavClick('login')}
              >
                Sign In
              </span>
              <button
                className="btn-join-figma"
                onClick={() => handleNavClick('signup')}
              >
                Join Us
              </button>
            </div>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-toggle-btn-figma"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
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
          Courses
        </div>
        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('home', 'why-us-section')}
        >
          Creators
        </div>
        <div
          className="mobile-nav-link"
          onClick={() => handleNavClick('home', 'pricing-section')}
        >
          Pricing
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
                Sign In
              </button>
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => handleNavClick('signup')}
              >
                Join Us
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
