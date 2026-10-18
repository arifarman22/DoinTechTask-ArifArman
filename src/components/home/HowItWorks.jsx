import { Compass, Code2, Users, Trophy } from 'lucide-react';
import '../../styles/sections.css';

export const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      icon: <Compass size={22} />,
      title: 'Pick Your Track',
      desc: 'Select your target career path or skill gap with personalized diagnostic recommendations.'
    },
    {
      num: '02',
      icon: <Code2 size={22} />,
      title: 'Build Real Apps',
      desc: 'Work through interactive video modules and build hands-on applications from scratch.'
    },
    {
      num: '03',
      icon: <Users size={22} />,
      title: 'Get Mentored',
      desc: 'Submit your code via GitHub pull requests and receive personalized feedback from staff engineers.'
    },
    {
      num: '04',
      icon: <Trophy size={22} />,
      title: 'Get Hired',
      desc: 'Earn your verified credential and get connected directly to our 100+ vetted hiring partners.'
    }
  ];

  return (
    <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Simple 4-Step Process</span>
          </div>
          <h2 className="section-title">
            Your Journey to <span className="gradient-text">Mastery</span>
          </h2>
          <p className="section-subtitle">
            A proven structured learning framework designed to take you from foundational syntax to
            career-ready confidence.
          </p>
        </div>

        <div className="how-it-works-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="step-card">
              <span className="step-number">{s.num}</span>
              <div className="step-icon-wrap">{s.icon}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
