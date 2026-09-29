import { useState } from 'react';
import { PRICING_PLANS } from '../../data/coursesData';
import { Check, CreditCard, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import '../../styles/sections.css';

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { navigateTo, showToast } = useApp();

  const handlePlanSelect = (plan) => {
    showToast(`Selected ${plan.name}! Redirecting to registration...`, 'success');
    navigateTo('signup');
  };

  return (
    <section id="pricing-section" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <CreditCard size={14} />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="section-title">
            Flexible Plans for <span className="gradient-text">Every Stage</span>
          </h2>
          <p className="section-subtitle">
            Invest in your future with affordable monthly or annual plans. Cancel or upgrade
            anytime with our 30-day money-back guarantee.
          </p>
        </div>

        {/* Annual / Monthly Toggle */}
        <div className="pricing-billing-toggle">
          <span style={{ fontSize: '14px', fontWeight: !isAnnual ? 700 : 500, color: !isAnnual ? 'var(--text-primary)' : 'var(--text-muted)' }}>
            Monthly Billing
          </span>

          <button
            onClick={() => setIsAnnual(!isAnnual)}
            style={{
              width: '52px',
              height: '28px',
              backgroundColor: 'var(--primary)',
              borderRadius: 'var(--radius-full)',
              position: 'relative',
              padding: '2px',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                transform: isAnnual ? 'translateX(24px)' : 'translateX(0)',
                transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
          </button>

          <span style={{ fontSize: '14px', fontWeight: isAnnual ? 700 : 500, color: isAnnual ? 'var(--text-primary)' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Annual Billing
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#10B981',
                backgroundColor: '#ECFDF5',
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)'
              }}
            >
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'featured' : ''}`}
              >
                {plan.popular && (
                  <div className="pricing-popular-badge">
                    Most Popular
                  </div>
                )}

                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '6px' }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {plan.description}
                </p>

                <div className="pricing-price-wrap">
                  <span className="pricing-amount">${price}</span>
                  <span className="pricing-cycle">{price === 0 ? '' : '/ month'}</span>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((f, i) => (
                    <li key={i} className="pricing-feature-item">
                      <Check size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%' }}
                  onClick={() => handlePlanSelect(plan)}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
