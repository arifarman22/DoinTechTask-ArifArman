import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AuthVisualPanel } from './AuthVisualPanel';
import { AuthBrandLogo, FacebookIcon, GoogleGIcon } from './LoginPage';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import '../../styles/auth.css';

export const SignupPage = () => {
  const { navigateTo, signupUser, showToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast('Please fill in all fields.', 'error');
      return;
    }
    if (password.length < 6) {
      showToast('Password should be at least 6 characters.', 'error');
      return;
    }
    signupUser(name, email);
  };

  const handleOAuth = (provider) => {
    signupUser('Alex Morgan', `alex.${provider.toLowerCase()}@example.com`);
    showToast(`Signed up successfully with ${provider}!`, 'success');
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
          title="Sign up with ease"
          subtitle="Experience a seamless and efficient registration process that grants you instant access to a world of knowledge."
        />

        {/* Right Auth Card */}
        <div className="auth-card-container">
          <div className="auth-white-card">
            <span className="auth-card-tag">Sign Up</span>
            <h2 className="auth-card-heading">Create Account</h2>

            <form onSubmit={handleSubmit} className="auth-form-fields">
              <div className="auth-input-group">
                <label className="auth-input-label" htmlFor="signup-name">
                  Full Name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  className="auth-text-input"
                  placeholder="Alex Morgan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="auth-input-group">
                <label className="auth-input-label" htmlFor="signup-email">
                  Email
                </label>
                <input
                  id="signup-email"
                  type="email"
                  className="auth-text-input"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="auth-input-group">
                <label className="auth-input-label" htmlFor="signup-password">
                  Password
                </label>
                <div className="auth-password-wrapper">
                  <input
                    id="signup-password"
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
                  Sign Up
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
                aria-label="Sign up with Facebook"
                title="Sign up with Facebook"
              >
                <FacebookIcon />
              </button>
              <button
                type="button"
                className="auth-social-circle-btn"
                onClick={() => handleOAuth('Google')}
                aria-label="Sign up with Google"
                title="Sign up with Google"
              >
                <GoogleGIcon />
              </button>
            </div>

            <p className="auth-switch-prompt">
              Already have an account?{' '}
              <span
                className="auth-switch-link"
                onClick={() => navigateTo('login')}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
