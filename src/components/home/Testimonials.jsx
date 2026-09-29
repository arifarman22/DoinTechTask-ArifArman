import { TESTIMONIALS_DATA } from '../../data/coursesData';
import { Star, MessageSquareQuote, Quote } from 'lucide-react';
import '../../styles/sections.css';

export const Testimonials = () => {
  return (
    <section id="testimonials-section" className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <MessageSquareQuote size={14} />
            <span>Success Stories</span>
          </div>
          <h2 className="section-title">
            Discover What Our <span className="gradient-text">Community Is Saying</span>
          </h2>
          <p className="section-subtitle">
            Read inspiring stories from ambitious learners who transformed their careers and landed
            roles at world-class tech firms.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={28} color="var(--primary)" style={{ opacity: 0.35 }} />
                </div>
                <p className="testimonial-quote">"{t.text}"</p>
              </div>

              <div className="testimonial-author">
                <img src={t.avatar} alt={t.name} className="author-avatar" />
                <div>
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
