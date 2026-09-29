import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Star,
  Clock,
  BookOpen,
  CheckCircle2,
  Play,
  Heart,
  Award,
  Download,
  Shield,
  Share2
} from 'lucide-react';
import '../../styles/modal.css';

export const CourseDetailModal = () => {
  const {
    activeCourseModal,
    setActiveCourseModal,
    enrolledCourses,
    enrollCourse,
    wishlist,
    toggleWishlist,
    showToast
  } = useApp();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCourseModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveCourseModal]);

  if (!activeCourseModal) return null;

  const course = activeCourseModal;
  const isEnrolled = enrolledCourses.includes(course.id);
  const isWishlisted = wishlist.includes(course.id);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Course link copied to clipboard!', 'info');
  };

  return (
    <div className="modal-backdrop" onClick={() => setActiveCourseModal(null)}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="course-card-cat-tag" style={{ fontSize: '14px' }}>
              {course.categoryName}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>•</span>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{course.level}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              className="btn-icon btn-sm"
              onClick={handleShare}
              title="Share course"
            >
              <Share2 size={16} />
            </button>
            <button
              className="btn-icon btn-sm"
              onClick={() => setActiveCourseModal(null)}
              title="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Grid */}
        <div className="modal-body-grid">
          {/* Left Column */}
          <div>
            <h2 className="modal-title">{course.title}</h2>

            {/* Instructor Details */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>{course.instructor.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{course.instructor.role}</div>
              </div>
            </div>

            {/* Rating & Stats */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Star size={16} fill="#F59E0B" color="#F59E0B" />
                <strong style={{ fontSize: '15px' }}>{course.rating}</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                  ({course.reviewsCount} reviews)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <Clock size={15} />
                <span>{course.duration} on-demand video</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <BookOpen size={15} />
                <span>{course.lessonsCount} lessons</span>
              </div>
            </div>

            {/* Course Overview */}
            <p className="modal-overview">{course.overview}</p>

            {/* Syllabus */}
            <div className="modal-syllabus-section">
              <h4>What You Will Learn</h4>
              <ul className="modal-syllabus-list">
                {course.syllabus.map((topic, i) => (
                  <li key={i} className="modal-syllabus-item">
                    <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0 }} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Sticky Preview Box */}
          <div>
            <div className="modal-preview-box">
              <div className="modal-thumb-wrap">
                <img src={course.thumbnail} alt={course.title} className="modal-thumb-img" />
                <div className="modal-play-overlay">
                  <div
                    className="modal-play-btn"
                    onClick={() => showToast('Playing course trailer preview...', 'info')}
                  >
                    <Play size={20} fill="#ffffff" style={{ marginLeft: '3px' }} />
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px', fontWeight: 800 }}>${course.price}</span>
                {course.originalPrice && (
                  <span style={{ fontSize: '16px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                    ${course.originalPrice}
                  </span>
                )}
                <span
                  style={{
                    marginLeft: 'auto',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#EF4444',
                    backgroundColor: '#FEE2E2',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-full)'
                  }}
                >
                  62% OFF
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {isEnrolled ? (
                  <button
                    className="btn btn-lg"
                    style={{ backgroundColor: '#10B981', color: '#ffffff' }}
                    onClick={() => {
                      showToast('Opening course workspace...', 'success');
                      setActiveCourseModal(null);
                    }}
                  >
                    Go to Course Workspace
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => enrollCourse(course.id)}
                  >
                    Enroll Now
                  </button>
                )}

                <button
                  className="btn btn-secondary"
                  onClick={() => toggleWishlist(course.id)}
                >
                  <Heart
                    size={16}
                    fill={isWishlisted ? '#EF4444' : 'none'}
                    color={isWishlisted ? '#EF4444' : 'currentColor'}
                  />
                  {isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                </button>
              </div>

              <ul className="modal-benefits-list">
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={15} color="var(--primary)" />
                  <span>Accredited certificate on completion</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Download size={15} color="var(--primary)" />
                  <span>Full downloadable source code repositories</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Shield size={15} color="var(--primary)" />
                  <span>30-Day Money-Back Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
