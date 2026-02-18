import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { useGSAPConfig } from './hooks/useGSAPConfig';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTraveler from './components/ui/ScrollTraveler';

import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';

function App() {
  useGSAPConfig();

  return (
    <ReactLenis root>
      <BrowserRouter>
        <div className="bg-background text-text-primary font-sans antialiased selection:bg-accent-new selection:text-white">
          <ScrollTraveler />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;
