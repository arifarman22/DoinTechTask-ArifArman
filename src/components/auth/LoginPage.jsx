import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AuthVisualPanel } from './AuthVisualPanel';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import '../../styles/auth.css';

// Square logo badge with neon purple border and lime 'b' glyph
export const AuthBrandLogo = ({ onClick }) => (
  <div className="auth-brand-badge" onClick={onClick} title="Return to ByteSpace Home">
    <div className="auth-brand-box">
      <span className="auth-brand-glyph">b</span>
    </div>
  </div>
);

// Monochrome Facebook Icon
export const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Monochrome Google Icon
export const GoogleGIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const LoginPage = () => {
  const { navigateTo, loginUser, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in both email and password.', 'error');
      return;
    }
    loginUser(email);
  };

  const handleOAuth = (provider) => {
    loginUser(`alex.${provider.toLowerCase()}@example.com`, 'Alex Designer');
    showToast(`Logged in successfully with ${provider}!`, 'success');
  };

  return (
    <div className="auth-fullscreen-container">
      {/* Top Header Bar with horizontal grid rule */}
      <header className="auth-top-header">
        <AuthBrandLogo onClick={() => navigateTo('home')} />
        <button
          type="button"
          className="auth-back-link"
          onClick={() => navigateTo('home')}
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </header>

      {/* Main Content Area: Left Visuals & Right Card */}
      <main className="auth-content-body">
        {/* Left Visual Panel with Course Cards & 3D Elements */}
        <AuthVisualPanel
          title="Sign in with ease"
          subtitle="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        />

        {/* Right Auth Card */}
        <div className="auth-card-container">
          <div className="auth-white-card">
            <span className="auth-card-tag">Sign In</span>
            <h2 className="auth-card-heading">Welcome Back</h2>

            <form onSubmit={handleSubmit} className="auth-form-fields">
              <div className="auth-input-group">
                <label className="auth-input-label" htmlFor="login-email">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  className="auth-text-input"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="auth-input-group">
                <label className="auth-input-label" htmlFor="login-password">
                  Password
                </label>
                <div className="auth-password-wrapper">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    className="auth-text-input"
                    placeholder="*********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="auth-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="auth-btn-row">
                <button type="submit" className="auth-lime-pill-btn">
                  Sign In
                </button>
              </div>
            </form>

            <div className="auth-middle-divider">
              <div className="auth-divider-line" />
              <span className="auth-divider-text">or</span>
              <div className="auth-divider-line" />
            </div>

            <div className="auth-social-row">
              <button
                type="button"
                className="auth-social-circle-btn"
                onClick={() => handleOAuth('Facebook')}
                aria-label="Sign in with Facebook"
                title="Sign in with Facebook"
              >
                <FacebookIcon />
              </button>
              <button
                type="button"
                className="auth-social-circle-btn"
                onClick={() => handleOAuth('Google')}
                aria-label="Sign in with Google"
                title="Sign in with Google"
              >
                <GoogleGIcon />
              </button>
            </div>

            <p className="auth-switch-prompt">
              New user?{' '}
              <span
                className="auth-switch-link"
                onClick={() => navigateTo('signup')}
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
