import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, PenTool, Star } from 'lucide-react';
import studentHeroImg from '../../assets/student-hero.jpg';
import {
  LimeZigzag,
  WhiteDonut,
  LimeCylinder,
  WhiteCone,
  WhiteZigzag
} from './HeroOrnaments';
import '../../styles/hero.css';

export const Hero = () => {
  const { navigateTo, setSearchQuery } = useApp();
  const [localInput, setLocalInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localInput.trim()) {
      setSearchQuery(localInput.trim());
      navigateTo('courses');
    }
  };

  return (
    <section className="hero-figma-frame" id="hero-frame">
      <div className="hero-figma-container">
        {/* Main Headline */}
        <h1 className="hero-figma-headline">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="hero-figma-subtitle">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range
          of courses.
        </p>

        {/* Search Bar */}
        <form className="hero-figma-search-bar" onSubmit={handleSearchSubmit}>
          <div className="hero-figma-search-input-wrap">
            <Search size={18} color="#94A3B8" />
            <input
              type="text"
              className="hero-figma-search-input"
              placeholder="Course, topic, creator"
              value={localInput}
              onChange={(e) => setLocalInput(e.target.value)}
            />
          </div>
          <button type="submit" className="hero-figma-search-btn">
            Search
          </button>
        </form>

        {/* Central Graphic Section with Floating Badges & 3D Ornaments */}
        <div className="hero-figma-visual-area">
          {/* Floating 3D Ornaments (Left) */}
          <div className="ornament ornament-left-zigzag">
            <LimeZigzag />
          </div>
          <div className="ornament ornament-left-donut">
            <WhiteDonut />
          </div>

          {/* Neon Lime Circle Backdrop (Ellipse 7) */}
          <div className="hero-lime-backdrop-circle" />

          {/* Student Photo */}
          <div className="hero-student-wrapper">
            <img
              src={studentHeroImg}
              alt="ByteSpace Student"
              className="hero-student-img"
            />
          </div>

          {/* Floating 3D Ornaments (Right) */}
          <div className="ornament ornament-right-cylinder">
            <LimeCylinder />
          </div>
          <div className="ornament ornament-right-cone">
            <WhiteCone />
          </div>
          <div className="ornament ornament-right-zigzag">
            <WhiteZigzag />
          </div>

          {/* Floating Card 1: UI/UX Design (Top-Left) */}
          <div
            className="hero-overlay-card card-uiux"
            onClick={() => navigateTo('courses')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-uiux-icon">
              <PenTool size={20} />
            </div>
            <div>
              <div className="card-uiux-title">UI/UX Design</div>
              <div className="card-uiux-meta">200 Courses • 1000+ Students</div>
            </div>
          </div>

          {/* Floating Card 2: Learning Progress (Top-Right) */}
          <div className="hero-overlay-card card-progress">
            <div className="card-progress-title">Learning Progress</div>
            <div className="card-progress-val">55%</div>
            <div className="card-progress-bar-track">
              <div className="card-progress-bar-fill" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom-Left) */}
          <div className="hero-overlay-card card-students">
            <div className="card-students-title">Happy Students</div>
            <div className="card-students-rating">
              <strong>4.5 (240)</strong>
              <Star size={13} fill="#F59E0B" color="#F59E0B" />
            </div>
            <div className="card-avatars-row">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Student 1"
                className="card-student-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Student 2"
                className="card-student-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                alt="Student 3"
                className="card-student-avatar"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                alt="Student 4"
                className="card-student-avatar"
              />
              <span className="card-avatars-badge">2K+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
