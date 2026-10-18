import { useApp } from '../../context/AppContext';
import { Star, Clock, BookOpen, Heart, Eye, Check } from 'lucide-react';

export const CourseCard = ({ course }) => {
  const { wishlist, toggleWishlist, enrolledCourses, enrollCourse, setActiveCourseModal } = useApp();

  const isWishlisted = wishlist.includes(course.id);
  const isEnrolled = enrolledCourses.includes(course.id);

  return (
    <div className="course-card">
      {/* Thumbnail & Badges */}
      <div className="course-card-thumb-wrap">
        <img src={course.thumbnail} alt={course.title} className="course-card-thumb" />

        {course.badge && (
          <div className="course-card-badge">
            <span className={`badge badge-${course.badgeColor}`}>
              {course.badge}
            </span>
          </div>
        )}

        <button
          className="course-card-wishlist"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(course.id);
          }}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            size={18}
            fill={isWishlisted ? '#EF4444' : 'none'}
            color={isWishlisted ? '#EF4444' : 'currentColor'}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="course-card-body">
        <div className="course-card-meta-top">
          <span className="course-card-cat-tag">{course.categoryName}</span>
          <span>{course.level}</span>
        </div>

        <h3
          className="course-card-title"
          onClick={() => setActiveCourseModal(course)}
          title="Click to view details"
        >
          {course.title}
        </h3>

        {/* Instructor */}
        <div className="course-card-instructor">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="instructor-avatar"
          />
          <div className="instructor-info">
            <span className="instructor-name">{course.instructor.name}</span>
            <span className="instructor-role">{course.instructor.role}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="course-card-stats">
          <div className="stat-item">
            <Star size={15} fill="#F59E0B" color="#F59E0B" />
            <span className="rating-score">{course.rating}</span>
            <span style={{ color: 'var(--text-muted)' }}>({course.reviewsCount})</span>
          </div>

          <div className="stat-item">
            <Clock size={14} color="var(--text-muted)" />
            <span>{course.duration}</span>
          </div>

          <div className="stat-item">
            <BookOpen size={14} color="var(--text-muted)" />
            <span>{course.lessonsCount} lessons</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="course-card-footer">
          <div className="course-price-wrap">
            <span className="course-price">${course.price}</span>
            {course.originalPrice && (
              <span className="course-orig-price">${course.originalPrice}</span>
            )}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setActiveCourseModal(course)}
              title="Quick preview"
            >
              <Eye size={14} />
              Preview
            </button>

            {isEnrolled ? (
              <button
                className="btn btn-sm"
                style={{ backgroundColor: '#10B981', color: '#fff' }}
                onClick={() => setActiveCourseModal(course)}
              >
                <Check size={14} />
                Enrolled
              </button>
            ) : (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => enrollCourse(course.id)}
              >
                Enroll Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
