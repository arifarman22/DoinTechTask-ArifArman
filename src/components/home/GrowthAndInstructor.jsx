import studentHeroImg from '../../assets/student-hero.png';
import instructorFemaleImg from '../../assets/instructor-female.jpg';
import { LimeZigzag } from './HeroOrnaments';
import { Star } from 'lucide-react';
import '../../styles/figmaFeatures.css';

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="#003BE2" />
    <path d="m6 10 3 3 5-5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HAPPY_STUDENTS_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80'
];

export const GrowthAndInstructor = () => {
  return (
    <section className="figma-features-section">
      <div className="figma-features-container">
        {/* ========================================================
            BLOCK 1: Your Path to Professional Growth Starts Here!
        ======================================================== */}
        <div className="figma-feature-row row-growth">
          {/* Left: Text & 3 Stats */}
          <div className="figma-feature-content">
            <h2 className="figma-feature-title">
              Your Path to Professional <br />
              Growth Starts Here!
            </h2>
            <p className="figma-feature-desc">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="figma-stats-row">
              <div className="figma-stat-item">
                <span className="figma-stat-val">12K</span>
                <span className="figma-stat-label">Students</span>
              </div>
              <div className="figma-stat-item">
                <span className="figma-stat-val">70+</span>
                <span className="figma-stat-label">Courses</span>
              </div>
              <div className="figma-stat-item">
                <span className="figma-stat-val">16</span>
                <span className="figma-stat-label">Creators</span>
              </div>
            </div>
          </div>

          {/* Right: Graphic Composite (Figma Course Card + Student + Progress Card + 3D Lime Zigzag) */}
          <div className="figma-growth-visual">
            {/* Background Course Card */}
            <div className="figma-mini-course-card">
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80"
                alt="Learn Figma from Basic"
                className="figma-mini-card-thumb"
              />
              <div className="figma-mini-card-title">Learn Figma from Basic</div>
              <div className="figma-mini-card-instructor">by purepearl studio</div>
              <div className="figma-mini-card-footer">
                <span style={{ fontSize: '11px', color: '#64748b' }}>📶 Beginner</span>
                <span className="figma-mini-card-price">$25</span>
              </div>
            </div>

            {/* Student Photo */}
            <img
              src={studentHeroImg}
              alt="ByteSpace Student"
              className="figma-growth-student-img"
            />

            {/* 3D Lime Zigzag Ornament */}
            <div className="figma-growth-zigzag">
              <LimeZigzag />
            </div>

            {/* Floating Learning Progress Card */}
            <div className="figma-progress-card">
              <div className="figma-progress-card-title">Learning Progress</div>
              <div className="figma-progress-card-val">55%</div>
              <div className="figma-progress-card-track">
                <div className="figma-progress-card-fill" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BLOCK 2: Create & Manage Courses Easily.
        ======================================================== */}
        <div className="figma-feature-row row-manage">
          {/* Left: Graphic Composite (Female Instructor + Revenue Cards + Happy Students + 3D Lime Zigzag) */}
          <div className="figma-manage-visual">
            <div className="figma-manage-frame-bg" />

            {/* Instructor Photo */}
            <img
              src={instructorFemaleImg}
              alt="ByteSpace Course Creator"
              className="figma-manage-instructor-img"
            />

            {/* Blue Floating Card 1: Total Revenue */}
            <div className="figma-revenue-card-1">
              <div className="figma-rev-meta">
                <span>Total Revenue</span>
                <span style={{ fontSize: '11px', opacity: 0.8 }}>July 1-28</span>
              </div>
              <div className="figma-rev-val">$120.29</div>
              <div className="figma-rev-bar-track">
                <div className="figma-rev-bar-fill" />
              </div>
            </div>

            {/* Blue Floating Card 2: Year to Date */}
            <div className="figma-revenue-card-2">
              <div className="figma-rev-meta">
                <span>Year to Date</span>
                <span style={{ fontSize: '11px', opacity: 0.8 }}>2023</span>
              </div>
              <div className="figma-rev-val">$1,200.38</div>
              <div>
                <span className="figma-rev-pill-badge">+123</span>
              </div>
            </div>

            {/* 3D Lime Zigzag Ornament */}
            <div className="figma-manage-zigzag">
              <LimeZigzag />
            </div>

            {/* White Floating Card: Happy Students */}
            <div className="figma-happy-students-card">
              <div className="figma-happy-title">Happy Students</div>
              <div className="figma-happy-rating">
                <strong>4.5 (240)</strong>
                <Star size={13} fill="#F59E0B" color="#F59E0B" />
              </div>
              <div className="figma-happy-avatars">
                {HAPPY_STUDENTS_AVATARS.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar}
                    alt={`Student ${idx + 1}`}
                    className="figma-happy-avatar"
                  />
                ))}
                <span className="figma-happy-badge">2K+</span>
              </div>
            </div>
          </div>

          {/* Right: Text & 4 Checklist Points */}
          <div className="figma-feature-content">
            <h2 className="figma-feature-title">
              Create & Manage <br />
              Courses Easily.
            </h2>
            <p className="figma-feature-desc">
              ByteSpace supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <div className="figma-checklist">
              <div className="figma-check-item">
                <CheckCircleIcon />
                <span className="figma-check-text">Share Your Expertise</span>
              </div>
              <div className="figma-check-item">
                <CheckCircleIcon />
                <span className="figma-check-text">Monetize Your Passion</span>
              </div>
              <div className="figma-check-item">
                <CheckCircleIcon />
                <span className="figma-check-text">Flexibility and Autonomy</span>
              </div>
              <div className="figma-check-item">
                <CheckCircleIcon />
                <span className="figma-check-text">Build a Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
