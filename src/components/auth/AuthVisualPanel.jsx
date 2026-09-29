import { Star, BarChart2 } from 'lucide-react';

// 3D Lime Torus (Ring)
export const LimeTorus = () => (
  <svg width="84" height="84" viewBox="0 0 100 100" fill="none" className="auth-3d-torus">
    <defs>
      <linearGradient id="torusGrad" x1="15%" y1="15%" x2="85%" y2="85%">
        <stop offset="0%" stopColor="#F5FF80" />
        <stop offset="35%" stopColor="#D4FF00" />
        <stop offset="75%" stopColor="#96C800" />
        <stop offset="100%" stopColor="#678E00" />
      </linearGradient>
      <filter id="torusShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="10" stdDeviation="6" floodColor="rgba(0, 0, 0, 0.35)" />
      </filter>
    </defs>
    <path
      d="M50 14 C70 14 86 30 86 50 C86 70 70 86 50 86 C30 86 14 70 14 50 C14 30 30 14 50 14 Z M50 34 C41 34 34 41 34 50 C34 59 41 66 50 66 C59 66 66 59 66 50 C66 41 59 34 50 34 Z"
      fill="url(#torusGrad)"
      filter="url(#torusShadow)"
    />
  </svg>
);

// 3D Lime Faceted Pyramid / Tetrahedron
export const LimePyramid = () => (
  <svg width="90" height="90" viewBox="0 0 120 120" fill="none" className="auth-3d-pyramid">
    <defs>
      <filter id="pyramidShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="-2" dy="12" stdDeviation="8" floodColor="rgba(0, 0, 0, 0.4)" />
      </filter>
    </defs>
    <g filter="url(#pyramidShadow)">
      {/* Light highlighted left face */}
      <polygon points="58,12 12,96 68,112" fill="#E8FF54" />
      {/* Medium right face */}
      <polygon points="58,12 68,112 114,76" fill="#D4FF00" />
      {/* Shadow underside bevel */}
      <polygon points="12,96 68,112 52,118" fill="#88B800" opacity="0.85" />
    </g>
  </svg>
);

// 3D White Squiggly Ribbon
export const WhiteRibbon = () => (
  <svg width="86" height="120" viewBox="0 0 90 130" fill="none" className="auth-3d-ribbon">
    <defs>
      <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <filter id="ribbonShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="rgba(0, 0, 0, 0.25)" />
      </filter>
    </defs>
    <path
      d="M20 20 C60 32 75 52 45 72 C15 92 65 106 50 120"
      stroke="url(#ribbonGrad)"
      strokeWidth="24"
      strokeLinecap="round"
      filter="url(#ribbonShadow)"
    />
  </svg>
);

// Curated avatar pictures
const AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80'
];

export const AuthVisualPanel = ({
  title = 'Sign in with ease',
  subtitle = 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'
}) => {
  return (
    <div className="auth-left-panel">
      {/* Title & Subtitle */}
      <div className="auth-intro-content">
        <h1 className="auth-hero-title">{title}</h1>
        <p className="auth-hero-subtitle">{subtitle}</p>
      </div>

      {/* Visual Composition Container */}
      <div className="auth-visual-stage">
        {/* Floating 3D Elements */}
        <LimeTorus />
        <LimePyramid />
        <WhiteRibbon />

        {/* Back Stacked Card */}
        <div className="auth-card-back" aria-hidden="true">
          <div className="card-back-header">
            <span className="pill-badge pill-small">17 Lessons</span>
          </div>
          <div className="card-back-body">
            <h4 className="card-back-title">Build Digital Products</h4>
            <p className="card-back-author">by purepearl studio</p>
            <div className="card-back-meta">
              <span className="level-pill">
                <BarChart2 size={12} />
                Beginner
              </span>
              <div className="avatar-stack">
                <img src={AVATARS[0]} alt="" className="avatar-tiny" />
                <img src={AVATARS[1]} alt="" className="avatar-tiny" />
                <img src={AVATARS[2]} alt="" className="avatar-tiny" />
              </div>
            </div>
            <div className="card-back-price">
              <strong>$25</strong>
              <span>/lifetime</span>
            </div>
          </div>
        </div>

        {/* Front Main Card: the Power of Big Data */}
        <div className="auth-card-main">
          {/* Card Top: Dark UI Analytics Chart */}
          <div className="chart-preview-container">
            <div className="chart-header-line">
              <span className="chart-header-text">USERS LAST 7 DAYS USING REMAX</span>
              <div className="chart-stat-box">24.5k</div>
            </div>

            {/* SVG Analytics Visualization */}
            <svg
              className="chart-svg-graphic"
              viewBox="0 0 320 110"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#0055FF" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>

              {/* Area Wave */}
              <path
                d="M 10 75 Q 40 15, 80 50 T 150 70 L 150 100 L 10 100 Z"
                fill="url(#areaGradient)"
              />
              <path
                d="M 10 75 Q 40 15, 80 50 T 150 70"
                stroke="#00E5FF"
                strokeWidth="2.5"
                fill="none"
              />

              {/* Histogram Bars */}
              <rect x="170" y="55" width="4" height="40" rx="2" fill="url(#barGradient)" />
              <rect x="178" y="42" width="4" height="53" rx="2" fill="url(#barGradient)" />
              <rect x="186" y="28" width="4" height="67" rx="2" fill="url(#barGradient)" />
              <rect x="194" y="36" width="4" height="59" rx="2" fill="url(#barGradient)" />
              <rect x="202" y="20" width="4" height="75" rx="2" fill="url(#barGradient)" />
              <rect x="210" y="32" width="4" height="63" rx="2" fill="url(#barGradient)" />
              <rect x="218" y="45" width="4" height="50" rx="2" fill="url(#barGradient)" />
              <rect x="226" y="60" width="4" height="35" rx="2" fill="url(#barGradient)" />
              <rect x="234" y="68" width="4" height="27" rx="2" fill="url(#barGradient)" />
            </svg>

            {/* Floating Info Pills on Chart */}
            <div className="chart-floating-pills">
              <span className="chart-pill">17 Lessons</span>
              <span className="chart-pill">2 hours 16 mins</span>
              <span className="chart-pill">59 Comments</span>
            </div>
          </div>

          {/* Card Body Details */}
          <div className="card-main-content">
            <div className="card-title-row">
              <h3 className="card-main-title">the Power of Big Data</h3>
              <div className="card-rating">
                <span>4.5</span>
                <Star size={14} className="star-icon-filled" />
              </div>
            </div>

            <p className="card-author-text">by purepearl studio</p>

            <div className="card-info-row">
              <span className="level-badge">
                <BarChart2 size={13} />
                Beginner
              </span>

              <div className="avatar-group">
                <img src={AVATARS[0]} alt="" className="avatar-circle" />
                <img src={AVATARS[1]} alt="" className="avatar-circle" />
                <img src={AVATARS[2]} alt="" className="avatar-circle" />
                <img src={AVATARS[3]} alt="" className="avatar-circle" />
                <span className="avatar-badge-count">26+</span>
              </div>
            </div>

            <div className="card-price-row">
              <span className="price-bold">$25</span>
              <span className="price-term">/lifetime</span>
            </div>
          </div>
        </div>

        {/* Front-Right Overlapping Card: Happy Students */}
        <div className="auth-card-students">
          <div className="students-header">
            <h4 className="students-title">Happy Students</h4>
            <div className="students-rating">
              <span>4.5 (240)</span>
              <Star size={12} className="star-blue-filled" />
            </div>
          </div>

          <div className="students-avatars-row">
            {AVATARS.map((src, i) => (
              <img key={i} src={src} alt="Student" className="student-avatar-img" />
            ))}
            <div className="students-badge-pill">2K+</div>
          </div>
        </div>
      </div>
    </div>
  );
};
