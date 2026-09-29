import { useApp } from './context/AppContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import { Hero } from './components/home/Hero';
import { PartnerLogos } from './components/home/PartnerLogos';
import { Categories } from './components/home/Categories';
import { FeaturedCourses } from './components/home/FeaturedCourses';
import { WhyUs } from './components/home/WhyUs';
import { HowItWorks } from './components/home/HowItWorks';
import { InstructorBanner } from './components/home/InstructorBanner';
import { Testimonials } from './components/home/Testimonials';
import { Pricing } from './components/home/Pricing';
import { FAQ } from './components/home/FAQ';
import { CTASection } from './components/home/CTASection';
import { CourseDetailModal } from './components/courses/CourseDetailModal';
import { CoursesView } from './components/courses/CoursesView';
import { LoginPage } from './components/auth/LoginPage';
import { SignupPage } from './components/auth/SignupPage';

export function App() {
  const { currentView } = useApp();

  return (
    <div className="app-layout">
      <Navbar />

      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <PartnerLogos />
            <Categories />
            <FeaturedCourses />
            <WhyUs />
            <HowItWorks />
            <InstructorBanner />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTASection />
          </>
        )}

        {currentView === 'courses' && <CoursesView />}
        {currentView === 'login' && <LoginPage />}
        {currentView === 'signup' && <SignupPage />}
      </main>

      <Footer />
      <CourseDetailModal />
      <Toast />
    </div>
  );
}

export default App;
