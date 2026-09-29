export const CATEGORIES_DATA = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: 'Code2',
    count: '142 Courses',
    gradient: 'from-blue to-indigo',
    color: '#3B82F6',
    popular: true,
    description: 'Master modern frontend, backend, Full-Stack, React, Next.js and Node.js.'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    icon: 'Palette',
    count: '98 Courses',
    color: '#EC4899',
    popular: true,
    description: 'Learn Figma, design systems, wireframing, UX research, and interactive prototypes.'
  },
  {
    id: 'ai-data',
    title: 'Data Science & AI',
    icon: 'BrainCircuit',
    count: '115 Courses',
    color: '#8B5CF6',
    popular: true,
    description: 'Machine learning, deep learning, Python data pipelines, and LLM engineering.'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    count: '76 Courses',
    color: '#06B6D4',
    popular: false,
    description: 'Docker, Kubernetes, AWS infrastructure, CI/CD pipelines, and microservices.'
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Dev',
    icon: 'Smartphone',
    count: '84 Courses',
    color: '#10B981',
    popular: false,
    description: 'Cross-platform mobile apps using Flutter, React Native, Swift, and Kotlin.'
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security',
    icon: 'ShieldCheck',
    count: '53 Courses',
    color: '#F59E0B',
    popular: false,
    description: 'Ethical hacking, penetration testing, threat detection, and secure coding.'
  },
  {
    id: 'digital-marketing',
    title: 'Growth Marketing',
    icon: 'TrendingUp',
    count: '62 Courses',
    color: '#F97316',
    popular: false,
    description: 'SEO strategy, performance marketing, conversion optimization, and analytics.'
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    icon: 'Layers',
    count: '41 Courses',
    color: '#6366F1',
    popular: false,
    description: 'Smart contracts, Solidity programming, DeFi protocols, and decentralized apps.'
  }
];

export const COURSES_DATA = [
  {
    id: 'c1',
    title: 'Complete Full-Stack Web Developer Bootcamp 2026',
    category: 'web-dev',
    categoryName: 'Web Development',
    level: 'All Levels',
    rating: 4.9,
    reviewsCount: '3,840',
    studentsCount: '18,520',
    duration: '42 Hours',
    lessonsCount: 94,
    price: 49.99,
    originalPrice: 129.99,
    badge: 'Bestseller',
    badgeColor: 'amber',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Alex Rivera',
      role: 'Staff Software Engineer @ Google',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    overview: 'Become a job-ready full-stack developer by building 10 production-grade web applications with React 19, Node.js, Express, PostgreSQL, and modern DevOps tools.',
    syllabus: [
      'Modern JavaScript & TypeScript Fundamentals',
      'React 19 Hooks, Server Components & State Management',
      'RESTful & GraphQL API Architecture with Node.js',
      'Database Modeling with PostgreSQL & Prisma ORM',
      'Production Deployment with Docker, CI/CD & Vercel'
    ]
  },
  {
    id: 'c2',
    title: 'UI/UX Design Masterclass: Systems & Figma Prototyping',
    category: 'ui-ux',
    categoryName: 'UI/UX Design',
    level: 'Beginner to Advanced',
    rating: 4.95,
    reviewsCount: '2,920',
    studentsCount: '14,210',
    duration: '28 Hours',
    lessonsCount: 68,
    price: 39.99,
    originalPrice: 99.99,
    badge: 'Popular',
    badgeColor: 'purple',
    thumbnail: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Sophia Chen',
      role: 'Principal Product Designer @ Figma',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
    },
    overview: 'Learn professional UI/UX design from scratch. Master design thinking, wireframing, color psychology, typography, responsive design tokens, and high-fidelity interactive prototypes in Figma.',
    syllabus: [
      'Design Thinking & User Research Methods',
      'Wireframing & Information Architecture',
      'Creating Scalable Figma Design Systems & Components',
      'Micro-Interactions, Smart Animations & Prototyping',
      'Handoff to Engineering & Client Presentation Mastery'
    ]
  },
  {
    id: 'c3',
    title: 'Data Science & Machine Learning with Python A-Z',
    category: 'ai-data',
    categoryName: 'Data Science & AI',
    level: 'Intermediate',
    rating: 4.88,
    reviewsCount: '4,105',
    studentsCount: '22,400',
    duration: '38 Hours',
    lessonsCount: 82,
    price: 54.99,
    originalPrice: 149.99,
    badge: 'Hot',
    badgeColor: 'rose',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Dr. David Marcus',
      role: 'Head of AI Research @ DeepMind Alum',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    overview: 'Comprehensive guide to modern predictive data science. Clean noisy datasets, train supervised and unsupervised machine learning algorithms, and deploy models into production.',
    syllabus: [
      'Python for Scientific Computing (NumPy & Pandas)',
      'Exploratory Data Analysis & Visualization',
      'Supervised & Unsupervised Machine Learning Models',
      'Deep Neural Networks with PyTorch',
      'Deploying AI Models as Scalable REST Microservices'
    ]
  },
  {
    id: 'c4',
    title: 'Cloud Architecture & DevOps with AWS, Docker & K8s',
    category: 'cloud-devops',
    categoryName: 'Cloud & DevOps',
    level: 'Intermediate',
    rating: 4.85,
    reviewsCount: '1,890',
    studentsCount: '9,840',
    duration: '32 Hours',
    lessonsCount: 74,
    price: 44.99,
    originalPrice: 119.99,
    badge: 'Featured',
    badgeColor: 'blue',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Vikram Patel',
      role: 'AWS Certified Solutions Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    overview: 'Learn how to architect, containerize, and orchestrate resilient, zero-downtime cloud infrastructures on Amazon Web Services using Docker, Kubernetes, and Terraform.',
    syllabus: [
      'AWS Core Infrastructure (EC2, S3, VPC, RDS)',
      'Docker Containerization & Multi-Stage Builds',
      'Kubernetes Cluster Orchestration & Helm Charts',
      'Infrastructure as Code (IaC) with Terraform',
      'Automated CI/CD Pipelines with GitHub Actions'
    ]
  },
  {
    id: 'c5',
    title: 'Cross-Platform Mobile App Development with Flutter 3',
    category: 'mobile-dev',
    categoryName: 'Mobile App Dev',
    level: 'Beginner to Intermediate',
    rating: 4.91,
    reviewsCount: '2,310',
    studentsCount: '11,760',
    duration: '30 Hours',
    lessonsCount: 70,
    price: 42.99,
    originalPrice: 109.99,
    badge: 'Updated',
    badgeColor: 'emerald',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'Elena Rostova',
      role: 'Senior Mobile Engineer @ Uber',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    overview: 'Build stunning native iOS and Android apps using a single codebase with Flutter and Dart. Covers animations, state management with Bloc/Riverpod, and Firebase backend integration.',
    syllabus: [
      'Dart Programming Language Mastery',
      'Flutter Widget Architecture & Responsive Layouts',
      'State Management with Riverpod and Bloc',
      'Firebase Authentication, Firestore & Cloud Messaging',
      'App Store & Google Play Publishing Pipeline'
    ]
  },
  {
    id: 'c6',
    title: 'Practical Cyber Security & Ethical Hacking Bootcamp',
    category: 'cybersecurity',
    categoryName: 'Cyber Security',
    level: 'All Levels',
    rating: 4.87,
    reviewsCount: '1,640',
    studentsCount: '8,420',
    duration: '26 Hours',
    lessonsCount: 60,
    price: 47.99,
    originalPrice: 124.99,
    badge: 'Popular',
    badgeColor: 'amber',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    instructor: {
      name: 'James Wright',
      role: 'Offensive Security Certified Professional (OSCP)',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&q=80'
    },
    overview: 'Learn how to protect networks, servers, and applications against real-world cyber attacks by mastering ethical penetration testing, Kali Linux tools, and defensive architecture.',
    syllabus: [
      'Network Protocols, Reconnaissance & Port Scanning',
      'Vulnerability Assessment with Nmap, Wireshark & Burp Suite',
      'Web Application Exploitation (OWASP Top 10)',
      'Privilege Escalation & Post-Exploitation',
      'Incident Response & Defensive Remediation Strategies'
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Frontend Engineer @ Stripe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'ByteSpace transformed my career path completely. The curriculum matches what hiring managers actually look for in technical interviews. Within 4 months of completing the Full-Stack bootcamp, I received 3 job offers!'
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Lead Product Designer @ Airbnb',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'The Figma and Design System Masterclass is unmatched. The mentor feedback helped me refine my portfolio from amateur wireframes to production-grade interactive prototypes. Highly recommend to any aspiring designer.'
  },
  {
    id: 't3',
    name: 'David Okafor',
    role: 'Cloud Architect @ Amazon Web Services',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'What sets ByteSpace apart is the hands-on project approach. You do not just watch videos; you build real CI/CD pipelines and orchestrate Kubernetes clusters. The community is supportive and inspiring.'
  },
  {
    id: 't4',
    name: 'Amara Lopez',
    role: 'AI Research Associate @ Stanford Lab',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    text: 'Clear explanations, zero fluff, and modern industry standards. The instructors are practitioners working at top tech firms, which makes every single lesson relevant to today market.'
  }
];

export const FAQS_DATA = [
  {
    id: 'faq1',
    question: 'How does ByteSpace course access work?',
    answer: 'Once you enroll in any course on ByteSpace, you gain lifetime access to all course materials, code repositories, future updates, and our private developer community forum.'
  },
  {
    id: 'faq2',
    question: 'Are there any prerequisites before joining?',
    answer: 'Most beginner-level courses require zero prior coding experience. For intermediate and advanced tracks, we provide free refresher prep modules to get you up to speed quickly.'
  },
  {
    id: 'faq3',
    question: 'Do I receive an accredited certificate upon completion?',
    answer: 'Yes! Upon finishing all lessons and submitting the capstone portfolio project, you receive a verified, cryptographically signed certificate of achievement ready to display on LinkedIn and resumes.'
  },
  {
    id: 'faq4',
    question: 'What is the refund policy if I am not satisfied?',
    answer: 'We offer a 30-day, no-questions-asked 100% money-back guarantee. If you feel the course is not the right fit for your learning goals, simply contact support for a prompt refund.'
  },
  {
    id: 'faq5',
    question: 'Can I interact with instructors and fellow students?',
    answer: 'Absolutely. Every course has dedicated Q&A discussions under each lesson, weekly live mentor office hours, and access to our active Discord learning community.'
  }
];

export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Free Starter',
    description: 'Perfect for exploring introductory topics and fundamentals.',
    monthlyPrice: 0,
    annualPrice: 0,
    popular: false,
    features: [
      'Access to 25+ introductory courses',
      'Community discussion forums',
      'Course completion badges',
      'Mobile and web access'
    ],
    ctaText: 'Get Started Free'
  },
  {
    id: 'pro',
    name: 'Pro Learner',
    description: 'Best for ambitious individuals seeking job-ready skills & career shifts.',
    monthlyPrice: 24,
    annualPrice: 19,
    popular: true,
    features: [
      'Unlimited access to all 500+ courses',
      'Real-world portfolio projects',
      'Official verified certificates',
      '1-on-1 code reviews from mentors',
      'Exclusive hiring partner network',
      'Offline video downloads'
    ],
    ctaText: 'Start 7-Day Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Team / Enterprise',
    description: 'Designed for engineering and design teams leveling up together.',
    monthlyPrice: 59,
    annualPrice: 48,
    popular: false,
    features: [
      'Everything in Pro for all team members',
      'Custom learning paths & skill benchmarks',
      'Dedicated Customer Success Manager',
      'Manager analytics dashboard & reports',
      'SSO & LMS integration support'
    ],
    ctaText: 'Contact Enterprise Sales'
  }
];
