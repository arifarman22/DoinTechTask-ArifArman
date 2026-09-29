import { useState } from 'react';
import { COURSES_DATA } from '../../data/coursesData';
import { CourseCard } from './CourseCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FeaturedCourses = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Courses' },
    { id: 'web-dev', label: 'Web Development' },
    { id: 'ui-ux', label: 'UI/UX Design' },
    { id: 'ai-data', label: 'Data Science & AI' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' }
  ];

  const filteredCourses =
    activeTab === 'all'
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === activeTab);

  return (
    <section id="courses-section" className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Top Rated Programs</span>
          </div>
          <h2 className="section-title">
            Your Path to <span className="gradient-text">Professional Growth</span>
          </h2>
          <p className="section-subtitle">
            Curated hands-on courses built by industry practitioners. Gain the real-world skills
            hiring managers demand today.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="courses-filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigateTo('courses')}
          >
            Explore All 500+ Courses
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
