import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
import '../../styles/navbar.css';

// Neon Lime ByteSpace Emblem matching Figma navbar
const ByteSpaceNavEmblem = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="10" fill="#D4FF00" />
    <path d="M13 10L23 16L13 22V10Z" fill="#000000" />
  </svg>
);

export const Navbar = () => {
  const { navigateTo, user, logoutUser } = useApp();
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
      <div className="navbar-container">
        {/* Brand Logo (Left): Neon Lime Emblem + White ByteSpace */}
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          <div className="brand-figma-icon">
            <ByteSpaceNavEmblem />
          </div>
          <span className="brand-figma-name">ByteSpace</span>
        </div>

        {/* Center Navigation Links: Home, Courses, Creators */}
        <nav className="navbar-center-nav">
          <ul className="navbar-figma-links">
            <li className="nav-figma-link" onClick={() => handleNavClick('home')}>
              Home
            </li>
            <li className="nav-figma-link" onClick={() => handleNavClick('courses')}>
              Courses
            </li>
            <li className="nav-figma-link" onClick={() => handleNavClick('home', 'why-us-section')}>
              Creators
            </li>
          </ul>
        </nav>

        {/* Right Actions: Sign In, Join Us, or Logged In User & Shopping Bag */}
        <div className="navbar-actions">
          {user ? (
            <div className="nav-user-dropdown-wrap">
              <div className="nav-user-info" title={user.email}>
                <img src={user.avatar} alt={user.name} className="nav-user-avatar-img" />
                <span className="nav-user-display-name">{user.name}</span>
              </div>
              <button
                type="button"
                className="nav-logout-btn"
                onClick={logoutUser}
                title="Sign Out"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <span className="nav-figma-auth-link" onClick={() => handleNavClick('login')}>
                Sign In
              </span>
              <span className="nav-figma-auth-link" onClick={() => handleNavClick('signup')}>
                Join Us
              </span>
            </>
          )}
          <button
            className="nav-figma-cart-btn"
            onClick={() => handleNavClick('courses')}
            title="Cart"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={20} color="#FFFFFF" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle-btn-figma"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <span className="nav-figma-link" onClick={() => handleNavClick('home')}>
              Home
            </span>
            <span className="nav-figma-link" onClick={() => handleNavClick('courses')}>
              Courses
            </span>
            <span className="nav-figma-link" onClick={() => handleNavClick('home', 'why-us-section')}>
              Creators
            </span>
            <hr style={{ borderColor: 'rgba(255,255,255,0.15)', margin: '4px 0' }} />
            {user ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <span style={{ fontWeight: 600 }}>{user.name}</span>
                </div>
                <button
                  type="button"
                  className="nav-logout-btn"
                  onClick={() => {
                    logoutUser();
                    setMobileMenuOpen(false);
                  }}
                  style={{ alignSelf: 'flex-start' }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <span className="nav-figma-auth-link" onClick={() => handleNavClick('login')}>
                  Sign In
                </span>
                <span className="nav-figma-auth-link" onClick={() => handleNavClick('signup')}>
                  Join Us
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
