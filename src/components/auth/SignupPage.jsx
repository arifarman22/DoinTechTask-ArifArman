import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Layers,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight
} from 'lucide-react';
import { GoogleIcon, GithubIcon } from '../common/BrandIcons';
import '../../styles/auth.css';

export const SignupPage = () => {
  const { navigateTo, signupUser, showToast } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // student | instructor
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }
    if (password.length < 6) {
      showToast('Password should be at least 6 characters.', 'error');
      return;
    }
    if (!agreeTerms) {
      showToast('Please accept the Terms of Service to continue.', 'error');
      return;
    }
    signupUser(name, email);
  };

  const handleOAuth = (provider) => {
    signupUser('Alex Developer', `alex@${provider.toLowerCase()}.com`);
    showToast(`Signed up with ${provider}!`, 'success');
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo-badge" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
            <Layers size={26} />
          </div>
          <h2 className="auth-title">Welcome to ByteSpace</h2>
          <p className="auth-subtitle">
            Join 50,000+ engineers leveling up their coding & design careers
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div
          style={{
            display: 'flex',
            backgroundColor: 'var(--bg-secondary)',
            padding: '4px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px'
          }}
        >
          <button
            type="button"
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: role === 'student' ? 'var(--bg-surface)' : 'transparent',
              color: role === 'student' ? 'var(--primary)' : 'var(--text-secondary)',
              boxShadow: role === 'student' ? 'var(--shadow-sm)' : 'none'
            }}
            onClick={() => setRole('student')}
          >
            I want to Learn
          </button>
          <button
            type="button"
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '13px',
              fontWeight: 600,
              backgroundColor: role === 'instructor' ? 'var(--bg-surface)' : 'transparent',
              color: role === 'instructor' ? 'var(--primary)' : 'var(--text-secondary)',
              boxShadow: role === 'instructor' ? 'var(--shadow-sm)' : 'none'
            }}
            onClick={() => setRole('instructor')}
          >
            I want to Teach
          </button>
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
          <span className="auth-divider-text">Or register with email</span>
          <div className="auth-divider-line" />
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="form-input-wrap">
              <User size={16} className="form-icon-left" />
              <input
                type="text"
                className="form-input"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

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
                placeholder="At least 6 characters"
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

          <div>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '13px' }}>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{ marginTop: '3px' }}
              />
              <span style={{ color: 'var(--text-secondary)' }}>
                I agree to the <span style={{ color: 'var(--primary)' }}>Terms of Service</span> and{' '}
                <span style={{ color: 'var(--primary)' }}>Privacy Policy</span>
              </span>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '4px' }}>
            Create ByteSpace Account
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="auth-switch-text">
          Already have an account?
          <span className="auth-switch-link" onClick={() => navigateTo('login')}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};
