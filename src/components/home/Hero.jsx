import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  Search,
  Star,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import '../../styles/hero.css';

export const Hero = () => {
  const { navigateTo, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useApp();
  const [localInput, setLocalInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localInput);
    navigateTo('courses');
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline, Subtitle, Search, Social Proof */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Next-Gen Tech Learning Platform 2026</span>
            </div>

            <h1 className="hero-title">
              Discover Your Passion, <br />
              Build Your <span className="highlight">In-Demand Skills</span>
            </h1>

            <p className="hero-subtitle">
              Empower your journey with real-world industry projects, 1-on-1 mentorship from top
              tech engineers, and accredited certifications trusted by global employers.
            </p>

            {/* Interactive Search Bar */}
            <form className="hero-search-box" onSubmit={handleSearchSubmit}>
              <div className="hero-search-input-wrap">
                <Search size={20} color="var(--primary)" />
                <input
                  type="text"
                  className="hero-search-input"
                  placeholder="What do you want to learn today? (e.g., React, AI, Figma)"
                  value={localInput}
                  onChange={(e) => setLocalInput(e.target.value)}
                />
              </div>

              <select
                className="hero-category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Disciplines</option>
                <option value="web-dev">Web Development</option>
                <option value="ui-ux">UI/UX Design</option>
                <option value="ai-data">Data Science & AI</option>
                <option value="cloud-devops">Cloud & DevOps</option>
                <option value="mobile-dev">Mobile App Dev</option>
              </select>

              <button type="submit" className="btn btn-primary">
                Explore
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Social Proof */}
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="stack-avatar"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="stack-avatar"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="stack-avatar"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="stack-avatar"
                />
              </div>

              <div className="proof-text">
                <div className="proof-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                  ))}
                  <strong style={{ color: 'var(--text-primary)', marginLeft: '4px' }}>4.9/5.0</strong>
                </div>
                <span className="proof-label">
                  Trusted by <strong>50,000+ ambitious learners</strong> worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Stats */}
          <div className="hero-visual-wrapper">
            {/* Top Left Floating Stat */}
            <div className="floating-stat-card top-left">
              <div className="stat-icon-circle" style={{ backgroundColor: '#EEF2FF', color: '#4F46E5' }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>500+</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Verified Courses</div>
              </div>
            </div>

            {/* Center Main Card */}
            <div className="hero-main-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Students Collaborating"
                className="hero-img"
              />
              <div className="hero-img-overlay">
                <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38BDF8' }}>
                  Live Interactive Cohorts
                </span>
                <h3 style={{ fontSize: '20px', color: '#ffffff', marginTop: '4px' }}>
                  Learn from senior engineers at Google, Meta & Stripe
                </h3>
              </div>
            </div>

            {/* Bottom Right Floating Stat */}
            <div className="floating-stat-card bottom-right">
              <div className="stat-icon-circle" style={{ backgroundColor: '#ECFDF5', color: '#10B981' }}>
                <CheckCircle2 size={22} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>96%</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Career Placement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
