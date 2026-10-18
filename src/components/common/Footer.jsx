import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import '../../styles/footer.css';

// Neon Lime ByteSpace Emblem matching Figma
const ByteSpaceFooterEmblem = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="10" fill="#D4FF00" />
    <path d="M13 10L23 16L13 22V10Z" fill="#000000" />
  </svg>
);

export const Footer = () => {
  const { navigateTo, setSelectedCategory, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast('Thank you for subscribing to ByteSpace updates!', 'success');
    setEmail('');
  };

  const handleLinkClick = (action) => {
    if (typeof action === 'string') {
      if (action.startsWith('cat:')) {
        setSelectedCategory(action.replace('cat:', ''));
        navigateTo('courses');
      } else {
        navigateTo(action);
      }
    }
  };

  return (
    <footer className="figma-footer">
      <div className="figma-footer-container">
        {/* Top: Left Brand/Newsletter + Right 3 Nav Columns */}
        <div className="figma-footer-top">
          {/* Left Column: Brand & Newsletter */}
          <div className="figma-footer-left">
            <div className="figma-footer-logo" onClick={() => navigateTo('home')}>
              <ByteSpaceFooterEmblem />
              <span className="figma-footer-brand-name">ByteSpace</span>
            </div>

            <p className="figma-footer-tagline">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={handleSubscribe} className="figma-footer-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="figma-footer-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="figma-footer-btn">
                Search
              </button>
            </form>

            <p className="figma-footer-disclaimer">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>

          {/* Right: 3 Nav Columns matching Figma */}
          <div className="figma-footer-nav-grid">
            {/* Column 1 */}
            <div className="figma-footer-nav-col">
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('courses')}>
                Featured Courses
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('courses')}>
                Featured Categories
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('cat:ai-data')}>
                Business
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('cat:cloud-devops')}>
                IT
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('cat:ui-ux')}>
                Design
              </span>
            </div>

            {/* Column 2 */}
            <div className="figma-footer-nav-col">
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('cat:web-dev')}>
                Development
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('cat:ui-ux')}>
                Marketing
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('courses')}>
                Photography
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('cat:ai-data')}>
                Finance
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('courses')}>
                Sport
              </span>
            </div>

            {/* Column 3 */}
            <div className="figma-footer-nav-col">
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('signup')}>
                Become a Creator
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('signup')}>
                Affiliate Program
              </span>
              <span className="figma-footer-nav-link" onClick={() => showToast('Contact support: support@bytespace.com', 'info')}>
                Contact
              </span>
              <span className="figma-footer-nav-link" onClick={() => showToast('Help Center is available 24/7', 'info')}>
                Help
              </span>
              <span className="figma-footer-nav-link" onClick={() => handleLinkClick('home')}>
                About
              </span>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="figma-footer-divider" />

        {/* Bottom Row */}
        <div className="figma-footer-bottom">
          <div className="figma-footer-copyright">
            © 2023 ByteSpace. All rights reserved.
          </div>

          <div className="figma-footer-bottom-links">
            <span className="figma-footer-bottom-link" onClick={() => showToast('Privacy Policy viewed', 'info')}>
              Privacy Policy
            </span>
            <span className="figma-footer-bottom-link" onClick={() => showToast('Terms of Service viewed', 'info')}>
              Terms of Service
            </span>
            <span className="figma-footer-bottom-link" onClick={() => showToast('Cookies Settings opened', 'info')}>
              Cookies Settings
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
