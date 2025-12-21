import Main from './components/Main';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FourForcesArticle from './components/widgets/Articles/The-Four-Forces-of-Systems/FourForcesArticle';

function App() {

  const [activeSection, setActiveSection] = useState("hero");
  const [manualOverride, setManualOverride] = useState(false);

  // Navigation Tracking
  useEffect(() => {
    const handleScroll = () => {
      if (manualOverride) {
        return;
      }

      const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

      // Get header height
      const header = document.getElementById('header');
      const headerOffset = header ? header.offsetHeight : 80;

      // Current scroll position plus offset
      const scrollPosition = window.scrollY + headerOffset + 100;

      // Check if we're near the bottom of the page
      const isNearBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100;

      // If near bottom, always set to contact (last section)
      if (isNearBottom) {
        if (activeSection !== 'contact') {
          setActiveSection('contact');
        }
        return;
      }

      // Loop through sections from bottom to top to find which one we're in
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;

          // If we've scrolled past this section's top, it's the active one
          if (scrollPosition >= sectionTop) {
            if (activeSection !== sectionIds[i]) {
              setActiveSection(sectionIds[i]);
            }
            return;
          }
        }
      }

      // Default to hero if we're at the very top
      if (activeSection !== 'hero') {
        setActiveSection('hero');
      }
    };

    // Run on mount
    const timer = setTimeout(() => handleScroll(), 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [manualOverride, activeSection]);

  // Handle direct navigation via URL hash
  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
      const targetElement = document.getElementById(currentHash);
      if (targetElement) {
        setActiveSection(currentHash);
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const handleNavClick = (id) => {

    // Immediately set active section
    setActiveSection(id);
    setManualOverride(true);

    const element = document.getElementById(id);

    if (element) {
      // Get header height
      const header = document.getElementById('header');
      const headerOffset = header ? header.offsetHeight : 80;

      // Calculate target position accounting for header
      const targetPosition = element.offsetTop - headerOffset - 10;

      // Scroll directly to the calculated position
      window.scrollTo({
        top: Math.max(0, targetPosition), // Ensure it's not negative
        behavior: 'smooth'
      });
    }

    // Re-enable scroll tracking after scroll animation completes
    setTimeout(() => {
      setManualOverride(false);
    }, 1500);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main handleNavClick={handleNavClick} activeSection={activeSection} />} />
        <Route path="/article/fourforces" element={<FourForcesArticle />} />
      </Routes>
    </Router>
  );
}

export default App;