import { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { COURSES_DATA, CATEGORIES_DATA } from '../../data/coursesData';
import { CourseCard } from '../home/CourseCard';
import { Search, Filter, SlidersHorizontal, BookOpen, X } from 'lucide-react';

export const CoursesView = () => {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, wishlist, enrolledCourses } = useApp();
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [onlyEnrolled, setOnlyEnrolled] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    let list = [...COURSES_DATA];

    // Filter by Search Query
    if (searchQuery.trim().length > 0) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.categoryName.toLowerCase().includes(q) ||
          c.instructor.name.toLowerCase().includes(q) ||
          c.overview.toLowerCase().includes(q)
      );
    }

    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter((c) => c.category === selectedCategory);
    }

    // Filter by Level
    if (selectedLevel !== 'all') {
      list = list.filter((c) => c.level.toLowerCase().includes(selectedLevel.toLowerCase()));
    }

    // Filter only Wishlist
    if (onlyWishlist) {
      list = list.filter((c) => wishlist.includes(c.id));
    }

    // Filter only Enrolled
    if (onlyEnrolled) {
      list = list.filter((c) => enrolledCourses.includes(c.id));
    }

    // Sorting
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [searchQuery, selectedCategory, selectedLevel, sortBy, onlyWishlist, onlyEnrolled, wishlist, enrolledCourses]);

  return (
    <section className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>
            Explore All <span className="gradient-text">ByteSpace Courses</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '16px' }}>
            Find the perfect program to advance your tech career. Filter by topic, level, or rating.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div
          style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '18px 24px',
            marginBottom: '36px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          {/* Search field */}
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by title, topic, or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 36px 9px 38px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-input)',
                color: 'var(--text-primary)',
                fontSize: '14px'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '11px',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Select */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                padding: '9px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-input)',
                color: 'var(--text-primary)',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <option value="all">All Categories</option>
              {CATEGORIES_DATA.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>

            {/* Level Select */}
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              style={{
                padding: '9px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-input)',
                color: 'var(--text-primary)',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <option value="all">All Difficulty Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '9px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-input)',
                color: 'var(--text-primary)',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            {/* Wishlist toggle filter */}
            <button
              className={`btn btn-sm ${onlyWishlist ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => {
                setOnlyWishlist(!onlyWishlist);
                if (!onlyWishlist) setOnlyEnrolled(false);
              }}
            >
              Wishlist ({wishlist.length})
            </button>

            {/* Enrolled filter */}
            <button
              className={`btn btn-sm ${onlyEnrolled ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => {
                setOnlyEnrolled(!onlyEnrolled);
                if (!onlyEnrolled) setOnlyWishlist(false);
              }}
            >
              My Courses ({enrolledCourses.length})
            </button>
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            Showing <strong>{filteredAndSortedCourses.length}</strong> matching courses
          </span>

          {(selectedCategory !== 'all' || selectedLevel !== 'all' || searchQuery || onlyWishlist || onlyEnrolled) && (
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSearchQuery('');
                setOnlyWishlist(false);
                setOnlyEnrolled(false);
              }}
              style={{ color: 'var(--primary)' }}
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Course Grid or Empty State */}
        {filteredAndSortedCourses.length > 0 ? (
          <div className="courses-grid">
            {filteredAndSortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '64px 20px',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <BookOpen size={48} color="var(--text-muted)" style={{ margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>No courses match your criteria</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
              Try adjusting your keywords, resetting your filters, or browsing other categories.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSearchQuery('');
                setOnlyWishlist(false);
                setOnlyEnrolled(false);
              }}
            >
              Show All Courses
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
