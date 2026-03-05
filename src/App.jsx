import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ReactLenis } from 'lenis/react';
import { useGSAPConfig } from './hooks/useGSAPConfig';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTraveler from './components/ui/ScrollTraveler';

const HomePage = lazy(() => import('./components/HomePage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));

function App() {
  useGSAPConfig();

  return (
    <ReactLenis root>
      <BrowserRouter>
        <div className="bg-background text-text-primary font-sans antialiased selection:bg-accent-new selection:text-white">
          <ScrollTraveler />
          <Navbar />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-accent-new border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
