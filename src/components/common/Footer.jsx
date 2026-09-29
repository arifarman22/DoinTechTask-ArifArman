import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Layers,
  Send,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, DiscordIcon } from './BrandIcons';
import '../../styles/footer.css';

export const Footer = () => {
  const { navigateTo, setSelectedCategory, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed to ByteSpace newsletter! Check your inbox soon.', 'success');
    setEmail('');
  };

  const handleCategoryNav = (catId) => {
    setSelectedCategory(catId);
    navigateTo('courses');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  background: 'var(--gradient-brand)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <Layers size={20} />
              </div>
              <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Byte<span style={{ color: 'var(--primary)' }}>Space</span>
              </span>
            </div>

            <p className="footer-desc">
              The modern online platform for mastering high-demand tech skills through project-driven
              learning, 1-on-1 engineering mentorship, and certified career tracks.
            </p>

            <div className="footer-socials">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <GithubIcon size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Twitter / X"
              >
                <TwitterIcon size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={17} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn"
                aria-label="Discord"
              >
                <DiscordIcon size={17} />
              </a>
            </div>
          </div>

          {/* Learning Tracks */}
          <div>
            <h4 className="footer-col-title">Learning Tracks</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item" onClick={() => handleCategoryNav('web-dev')}>
                Web Development
              </li>
              <li className="footer-link-item" onClick={() => handleCategoryNav('ui-ux')}>
                UI/UX Design
              </li>
              <li className="footer-link-item" onClick={() => handleCategoryNav('ai-data')}>
                Data Science & AI
              </li>
              <li className="footer-link-item" onClick={() => handleCategoryNav('cloud-devops')}>
                Cloud & DevOps
              </li>
              <li className="footer-link-item" onClick={() => handleCategoryNav('mobile-dev')}>
                Mobile App Dev
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item" onClick={() => navigateTo('courses')}>
                Course Catalog
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                Student Stories
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                Mentor Network
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                Hiring Partners
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                Free Workshops
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                About Us
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                Careers (Hiring!)
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('signup')}>
                Become an Instructor
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                Press & News
              </li>
              <li className="footer-link-item" onClick={() => navigateTo('home')}>
                Contact Support
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="footer-col-title">Stay Ahead in Tech</h4>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: 1.5 }}>
              Subscribe to get free weekly coding tutorials, design breakdowns, and exclusive course discounts.
            </p>

            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                <Send size={14} />
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} ByteSpace Inc. Built for modern engineers & designers.
          </div>

          <div className="footer-bottom-links">
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>Cookie Settings</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
