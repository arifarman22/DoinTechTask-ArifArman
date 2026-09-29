import { CheckCircle2, ArrowRight, Video, Sparkles, TrendingUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import '../../styles/sections.css';

export const InstructorBanner = () => {
  const { navigateTo, showToast } = useApp();

  const handleBecomeInstructor = () => {
    showToast('Instructor application portal opened! Apply today 🎉', 'info');
    navigateTo('signup');
  };

  return (
    <section className="section-wrapper">
      <div className="container">
        <div className="instructor-banner">
          <div className="instructor-banner-grid">
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}
              >
                <Sparkles size={14} />
                <span>Instructor Partner Program</span>
              </div>

              <h2>Unlock Your Creator Potential with ByteSpace</h2>
              <p>
                Teach what you love. Join thousands of world-class instructors and reach over 100,000+
                eager tech students worldwide while building a recurring income stream.
              </p>

              <div className="instructor-features-list">
                <div className="instructor-feature-item">
                  <CheckCircle2 size={18} color="#38BDF8" />
                  <span>Earn up to 85% revenue share</span>
                </div>
                <div className="instructor-feature-item">
                  <CheckCircle2 size={18} color="#38BDF8" />
                  <span>Dedicated curriculum design support</span>
                </div>
                <div className="instructor-feature-item">
                  <CheckCircle2 size={18} color="#38BDF8" />
                  <span>Interactive coding sandbox tooling</span>
                </div>
                <div className="instructor-feature-item">
                  <CheckCircle2 size={18} color="#38BDF8" />
                  <span>Global audience & marketing boost</span>
                </div>
              </div>

              <button
                className="btn btn-primary"
                style={{
                  background: '#ffffff',
                  color: '#4F46E5',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                }}
                onClick={handleBecomeInstructor}
              >
                Start Teaching Today
                <ArrowRight size={16} color="#4F46E5" />
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="Instructor teaching"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 20px 30px rgba(0,0,0,0.3)',
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  maxWidth: '380px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
