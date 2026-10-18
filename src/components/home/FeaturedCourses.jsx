import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Star } from 'lucide-react';
import '../../styles/figmaCourses.css';

const FIGMA_COURSES = [
  {
    id: 'figma-1',
    displayTitle: 'Learn Figma from Basic',
    title: 'Learn Figma from Basic',
    category: 'UI/UX Design',
    categoryName: 'UI/UX Design',
    instructor: {
      name: 'purepearl studio',
      role: 'Product Design Studio',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80'
    },
    rating: 4.5,
    reviewsCount: 1420,
    level: 'Beginner',
    lessons: '17 Lessons',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    price: 25,
    pricePeriod: '/lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
    description: 'Master the fundamentals of UI/UX design in Figma from scratch. Learn wireframing, component variants, and interactive prototyping.'
  },
  {
    id: 'figma-2',
    displayTitle: 'Build Digital Asset',
    title: 'Build Digital Asset',
    category: 'Creative Marketing',
    categoryName: 'Creative Marketing',
    instructor: {
      name: 'purepearl studio',
      role: 'Creative Studio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80'
    },
    rating: 4.5,
    reviewsCount: 980,
    level: 'Beginner',
    lessons: '17 Lessons',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    price: 25,
    pricePeriod: '/lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    description: 'Learn how to conceptualize, design, and package high-value 3D digital assets, icons, and templates for global marketplaces.'
  },
  {
    id: 'figma-3',
    displayTitle: 'the Power of Big Data',
    title: 'the Power of Big Data',
    category: 'Data Science',
    categoryName: 'Data Science',
    instructor: {
      name: 'purepearl studio',
      role: 'Analytics Expert',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80'
    },
    rating: 4.5,
    reviewsCount: 2150,
    level: 'Beginner',
    lessons: '17 Lessons',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    price: 25,
    pricePeriod: '/lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    description: 'Unlock business intelligence with modern big data pipelines, visual dashboards, and real-time predictive metrics.'
  },
  {
    id: 'figma-4',
    displayTitle: 'Balancing Productivity an...',
    title: 'Balancing Productivity and Life',
    category: 'Productivity',
    categoryName: 'Productivity',
    instructor: {
      name: 'purepearl studio',
      role: 'Performance Coach',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80'
    },
    rating: 4.5,
    reviewsCount: 840,
    level: 'Beginner',
    lessons: '17 Lessons',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    price: 25,
    pricePeriod: '/lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    description: 'Build sustainable deep work habits, avoid burnout, and master digital workflows with structured workspace balance.'
  },
  {
    id: 'figma-5',
    displayTitle: 'Mastering Money Manage...',
    title: 'Mastering Money Management',
    category: 'Freelance & Entrepreneurship',
    categoryName: 'Freelance & Entrepreneurship',
    instructor: {
      name: 'purepearl studio',
      role: 'Financial Strategist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80'
    },
    rating: 4.5,
    reviewsCount: 1320,
    level: 'Beginner',
    lessons: '17 Lessons',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    price: 25,
    pricePeriod: '/lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
    description: 'Learn budgeting, investment principles, freelance cash flow handling, and financial planning for high-growth careers.'
  },
  {
    id: 'figma-6',
    displayTitle: 'From Idea to Startup Succ...',
    title: 'From Idea to Startup Success',
    category: 'Marketing',
    categoryName: 'Marketing',
    instructor: {
      name: 'purepearl studio',
      role: 'Venture Builder',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80'
    },
    rating: 4.5,
    reviewsCount: 1760,
    level: 'Beginner',
    lessons: '17 Lessons',
    lessonsCount: 17,
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    price: 25,
    pricePeriod: '/lifetime',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    description: 'Turn your concepts into validated ventures. Learn lean startup methodology, pitch deck crafting, and initial customer acquisition.'
  }
];

const ROW_1_CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing'
];

const ROW_2_CATEGORIES = [
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography'
];

const ROW_3_CATEGORIES = [
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
  '+ More'
];

const STUDENT_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80'
];

const LevelBarsIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
    <rect x="2" y="9" width="2.6" height="5" rx="0.8" />
    <rect x="6.7" y="5.5" width="2.6" height="8.5" rx="0.8" />
    <rect x="11.4" y="2" width="2.6" height="12" rx="0.8" />
  </svg>
);

export const FeaturedCourses = () => {
  const { setActiveCourseModal, navigateTo } = useApp();
  const [activeCategory, setActiveCategory] = useState('Featured');

  const handlePillClick = (cat) => {
    if (cat === '+ More') {
      navigateTo('courses');
      return;
    }
    setActiveCategory(cat);
  };

  // Filter logic: if 'Featured', show all 6 cards, otherwise filter by category
  const displayedCourses =
    activeCategory === 'Featured'
      ? FIGMA_COURSES
      : FIGMA_COURSES.filter(
          (c) =>
            c.category.toLowerCase() === activeCategory.toLowerCase() ||
            c.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  // If a category has no exact course, fallback to all courses
  const visibleCards = displayedCourses.length > 0 ? displayedCourses : FIGMA_COURSES;

  return (
    <section id="courses-section" className="figma-courses-section">
      <div className="figma-courses-container">
        {/* Header */}
        <div className="figma-courses-header">
          <h2 className="figma-courses-title">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="figma-courses-subtitle">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
            courses across different fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>

        {/* 3 Rows of Category Filter Pills */}
        <div className="figma-pills-container">
          {/* Row 1 */}
          <div className="figma-pills-row">
            {ROW_1_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`figma-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handlePillClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="figma-pills-row">
            {ROW_2_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`figma-pill-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handlePillClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="figma-pills-row">
            {ROW_3_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`figma-pill-btn ${cat === '+ More' ? 'pill-more' : ''} ${
                  activeCategory === cat ? 'active' : ''
                }`}
                onClick={() => handlePillClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Course Cards Grid */}
        <div className="figma-cards-grid">
          {visibleCards.map((course) => (
            <div
              key={course.id}
              className="figma-course-card"
              onClick={() => setActiveCourseModal(course)}
            >
              {/* Thumbnail with 3 Bottom Overlay Pills */}
              <div className="figma-card-thumb-wrap">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="figma-card-thumb-img"
                  loading="lazy"
                />

                <div className="figma-card-overlay-pills">
                  <span className="figma-overlay-pill">{course.lessons}</span>
                  <span className="figma-overlay-pill">{course.duration}</span>
                  <span className="figma-overlay-pill">{course.comments}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="figma-card-body">
                {/* Title & Rating */}
                <div className="figma-card-title-row">
                  <h3 className="figma-card-title" title={course.title}>
                    {course.displayTitle}
                  </h3>
                  <div className="figma-card-rating">
                    <span>{course.rating}</span>
                    <Star size={13} fill="#94A3B8" color="#94A3B8" />
                  </div>
                </div>

                {/* Instructor */}
                <div className="figma-card-instructor">
                  by <span className="figma-instructor-name">{course.instructor.name}</span>
                </div>

                {/* Level Badge + Avatar Stack */}
                <div className="figma-card-meta-row">
                  <div className="figma-level-badge">
                    <LevelBarsIcon />
                    <span>{course.level}</span>
                  </div>

                  <div className="figma-avatars-stack">
                    {STUDENT_AVATARS.map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar}
                        alt={`Student ${idx + 1}`}
                        className="figma-avatar-img"
                      />
                    ))}
                    <span className="figma-avatar-badge">26+</span>
                  </div>
                </div>

                {/* Price */}
                <div className="figma-card-price-row">
                  <span className="figma-price-val">${course.price}</span>
                  <span className="figma-price-period">{course.pricePeriod}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
