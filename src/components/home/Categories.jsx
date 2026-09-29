import { useApp } from '../../context/AppContext';
import { CATEGORIES_DATA } from '../../data/coursesData';
import {
  Code2,
  Palette,
  BrainCircuit,
  Cloud,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  Layers,
  ArrowRight,
  Compass
} from 'lucide-react';
import '../../styles/categories.css';

export const Categories = () => {
  const { setSelectedCategory, navigateTo } = useApp();

  const getIcon = (iconName, color) => {
    const props = { size: 26, color: color };
    switch (iconName) {
      case 'Code2':
        return <Code2 {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'BrainCircuit':
        return <BrainCircuit {...props} />;
      case 'Cloud':
        return <Cloud {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      case 'Layers':
      default:
        return <Layers {...props} />;
    }
  };

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    navigateTo('courses');
  };

  return (
    <section id="categories-section" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Compass size={14} />
            <span>Popular Categories</span>
          </div>
          <h2 className="section-title">
            Explore Endless <span className="gradient-text">Learning Paths</span>
          </h2>
          <p className="section-subtitle">
            Choose from comprehensive career roadmaps designed by industry leaders to take you from
            beginner to hireable professional.
          </p>
        </div>

        <div className="categories-grid">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => handleCategoryClick(cat.id)}
            >
              <div
                className="category-icon-box"
                style={{
                  backgroundColor: `${cat.color}15`,
                  border: `1px solid ${cat.color}30`
                }}
              >
                {getIcon(cat.icon, cat.color)}
              </div>

              <span className="category-count">{cat.count}</span>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">{cat.description}</p>

              <div className="category-footer-link">
                <span>Explore Path</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
