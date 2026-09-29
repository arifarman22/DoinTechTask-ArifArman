import { useApp } from '../../context/AppContext';
import '../../styles/categories.css';

// Exact 6 category icons matching the Figma screenshot
const DesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    <path d="m15 5 3 3" />
    <path d="m5 15 4 4" />
  </svg>
);

const DevelopmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <path d="m9 9.5-2 2.5 2 2.5" />
    <path d="m15 9.5 2 2.5-2 2.5" />
  </svg>
);

const ITSoftwareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M1 20h22" />
  </svg>
);

const BusinessIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M4 21V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14" />
    <path d="M14 10h4a2 2 0 0 1 2 2v9" />
    <path d="M8 9h.01" />
    <path d="M8 13h.01" />
    <path d="M8 17h.01" />
    <path d="M11 9h.01" />
    <path d="M11 13h.01" />
    <path d="M11 17h.01" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 14-5v12L3 13v-2z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    <path d="M19 8c1.3.9 2 2.2 2 4s-.7 3.1-2 4" />
    <path d="M21 5c2.3 1.8 3.5 4.3 3.5 7s-1.2 5.2-3.5 7" />
  </svg>
);

const PhotographyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

const LEARNING_PATHS = [
  {
    id: 'design',
    title: 'Design',
    icon: <DesignIcon />,
    categoryFilter: 'ui-ux'
  },
  {
    id: 'development',
    title: 'Development',
    icon: <DevelopmentIcon />,
    categoryFilter: 'web-dev'
  },
  {
    id: 'it-software',
    title: 'IT & Software',
    icon: <ITSoftwareIcon />,
    categoryFilter: 'cloud-devops'
  },
  {
    id: 'business',
    title: 'Business',
    icon: <BusinessIcon />,
    categoryFilter: 'ai-data'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: <MarketingIcon />,
    categoryFilter: 'ui-ux'
  },
  {
    id: 'photography',
    title: 'Photography',
    icon: <PhotographyIcon />,
    categoryFilter: 'all'
  }
];

export const Categories = () => {
  const { setSelectedCategory, navigateTo } = useApp();

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat.categoryFilter);
    navigateTo('courses');
  };

  return (
    <section id="categories-section" className="figma-learning-paths-section">
      <div className="figma-learning-paths-container">
        {/* Header */}
        <div className="figma-learning-paths-header">
          <h2 className="figma-learning-paths-title">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="figma-learning-paths-subtitle">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range
            of courses spans various fields, ensuring there's something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards in a Row */}
        <div className="figma-learning-paths-grid">
          {LEARNING_PATHS.map((item) => (
            <div
              key={item.id}
              className="figma-path-card"
              onClick={() => handleCategoryClick(item)}
            >
              <div className="figma-path-icon-circle">
                {item.icon}
              </div>
              <h3 className="figma-path-label">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
