import '../../styles/figmaTestimonials.css';

const FIGMA_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.'
  },
  {
    id: 't-2',
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
  },
  {
    id: 't-3',
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials-section" className="figma-testimonials-section">
      <div className="figma-testimonials-container">
        {/* Split Header */}
        <div className="figma-testimonials-header">
          <h2 className="figma-testimonials-headline">
            Discover What Our <br />
            Community Is Saying
          </h2>
          <p className="figma-testimonials-intro">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="figma-testimonials-grid">
          {FIGMA_TESTIMONIALS.map((t) => (
            <div key={t.id} className="figma-testimonial-card">
              <img src={t.avatar} alt={t.name} className="figma-t-avatar" />
              <h3 className="figma-t-author-name">{t.name}</h3>
              <div className="figma-t-author-role">{t.role}</div>
              <p className="figma-t-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
