import {
  Code,
  Users2,
  Award,
  Zap,
  CheckCircle,
  ShieldCheck,
  Headphones,
  Laptop
} from 'lucide-react';
import '../../styles/sections.css';

export const WhyUs = () => {
  const pillars = [
    {
      icon: <Laptop size={26} color="#4F46E5" />,
      bg: '#EEF2FF',
      title: 'Industry-Led Curriculum',
      description:
        'Every course syllabus is engineered and verified by senior engineers and hiring managers from leading tech companies.'
    },
    {
      icon: <Zap size={26} color="#F59E0B" />,
      bg: '#FEF3C7',
      title: 'Real Production Projects',
      description:
        'Graduate with real apps deployed to production on your GitHub, not toy calculator tutorials or copy-paste exercises.'
    },
    {
      icon: <Users2 size={26} color="#10B981" />,
      bg: '#ECFDF5',
      title: '1-on-1 Code Reviews',
      description:
        'Receive deep line-by-line feedback and optimization tips from experienced mentor practitioners on every pull request.'
    },
    {
      icon: <Award size={26} color="#8B5CF6" />,
      bg: '#F5F3FF',
      title: 'Verified Certificates',
      description:
        'Earn tamper-proof accredited certificates to showcase on LinkedIn and your resume to attract recruiter inbound messages.'
    }
  ];

  return (
    <section id="why-us-section" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>The ByteSpace Advantage</span>
          </div>
          <h2 className="section-title">
            Why Millions <span className="gradient-text">Choose ByteSpace</span>
          </h2>
          <p className="section-subtitle">
            We focus on outcome-driven education designed to transform passionate beginners into
            high-impact engineers and designers.
          </p>
        </div>

        <div className="why-us-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="why-us-card">
              <div className="why-us-icon-box" style={{ backgroundColor: pillar.bg }}>
                {pillar.icon}
              </div>
              <h3 className="why-us-card-title">{pillar.title}</h3>
              <p className="why-us-card-desc">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
