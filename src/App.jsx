// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { SHOWCASE_PROJECTS as projects } from './data/portfolioData';

// Import Components
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import LatestWorkTitle from './components/LatestWorkTitle.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import Footer from './components/Footer.jsx';

// The main container for the scroll sequence. Its height determines how long the animation lasts.
// Height = 1 screen for the title, + 1 screen for EACH project.
const ShowcaseContainer = styled.div`
  position: relative;
  height: ${(projects.length + 1) * 100}vh; 
  background-color: #121212;
`;

function App() {
  const [showcaseProgress, setShowcaseProgress] = useState(0);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = showcaseRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableHeight = height - viewportHeight;
      if (scrollableHeight <= 0) return;
      const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
      setShowcaseProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine which phase of the animation we are in
  const totalSteps = projects.length + 1; // 1 step for the title + 1 for each project
  const currentStep = showcaseProgress * totalSteps;

  // The title is active only during the first "step"
  const isTitleActive = currentStep < 1;
  
  // The project animation starts after the first "step" (the title's step)
  // This calculates a new progress from 0 to 1 just for the projects
  const projectScroll = Math.max(0, (currentStep - 1) / projects.length);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        
        <ShowcaseContainer ref={showcaseRef}>
          {/* Both sticky components live here, layered by their z-index */}
          <LatestWorkTitle isActive={isTitleActive} />
          <ProjectShowcase scrollProgress={projectScroll} />
        </ShowcaseContainer>

      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;