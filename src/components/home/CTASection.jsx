import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import '../../styles/sections.css';

export const CTASection = () => {
  const { navigateTo } = useApp();

  return (
    <section className="section-wrapper">
      <div className="container">
        <div className="cta-banner">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '20px'
            }}
          >
            <Sparkles size={15} />
            <span>Join 50,000+ Active Students</span>
          </div>

          <h2>Ready to Accelerate Your Tech Career?</h2>
          <p>
            Get unlimited access to industry-curated courses, live mentors, and projects designed to
            land your next frontend, full-stack, or design role.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '28px'
            }}
          >
            <button
              className="btn btn-lg"
              style={{
                backgroundColor: '#ffffff',
                color: '#4F46E5',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
              }}
              onClick={() => navigateTo('signup')}
            >
              Get Started Free
              <ArrowRight size={18} />
            </button>

            <button
              className="btn btn-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                fontWeight: 600
              }}
              onClick={() => navigateTo('courses')}
            >
              Browse All Courses
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.85)',
              flexWrap: 'wrap'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} /> No credit card required
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} /> 14-day free trial
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} /> Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
