import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Layers,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight
} from 'lucide-react';
import { GoogleIcon, GithubIcon } from '../common/BrandIcons';
import '../../styles/auth.css';

export const LoginPage = () => {
  const { navigateTo, loginUser, showToast } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in both email and password.', 'error');
      return;
    }
    loginUser(email);
  };

  const handleOAuth = (provider) => {
    loginUser(`alex.student@${provider.toLowerCase()}.com`, 'Alex Student');
    showToast(`Logged in with ${provider}!`, 'success');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo-badge" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
            <Layers size={26} />
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">
            Log in to continue building your skills on ByteSpace
          </p>
        </div>

        {/* Social Auth */}
        <div className="oauth-buttons-row">
          <button className="btn-oauth" onClick={() => handleOAuth('Google')}>
            <GoogleIcon size={18} />
            <span>Google</span>
          </button>
          <button className="btn-oauth" onClick={() => handleOAuth('GitHub')}>
            <GithubIcon size={18} />
            <span>GitHub</span>
          </button>
        </div>

        <div className="auth-divider">
          <div className="auth-divider-line" />
          <span className="auth-divider-text">Or with email</span>
          <div className="auth-divider-line" />
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="form-input-wrap">
              <Mail size={16} className="form-icon-left" />
              <input
                type="email"
                className="form-input"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="form-input-wrap">
              <Lock size={16} className="form-icon-left" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="form-icon-toggle"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="form-row-between">
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span style={{ color: 'var(--text-secondary)' }}>Remember me</span>
            </label>

            <span
              style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}
              onClick={() => showToast('Password reset instructions sent to your email.', 'info')}
            >
              Forgot password?
            </span>
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '8px' }}>
            Sign In to ByteSpace
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="auth-switch-text">
          Don't have an account yet?
          <span className="auth-switch-link" onClick={() => navigateTo('signup')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};
