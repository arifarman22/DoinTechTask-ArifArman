import { useState } from 'react';
import { FAQS_DATA } from '../../data/coursesData';
import { HelpCircle, ChevronDown } from 'lucide-react';
import '../../styles/sections.css';

export const FAQ = () => {
  const [openId, setOpenId] = useState('faq1');

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about course access, certificates, mentorship, and career
            support at ByteSpace.
          </p>
        </div>

        <div className="faq-wrapper">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div key={faq.id} className="faq-item">
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    color="var(--text-secondary)"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
