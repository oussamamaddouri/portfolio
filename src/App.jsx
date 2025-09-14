// src/App.jsx
import React, { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { SHOWCASE_PROJECTS as projects } from './data/portfolioData';

// --- GSAP Imports ---
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'


// --- Import Components ---
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
// Replaced LatestWorkTitle and ProjectShowcase with the single, more robust component
import WorkShowcase from './components/WorkShowcase.jsx';
import Footer from './components/Footer.jsx';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// The main container for the showcase. Its height is determined by the number of projects.
// This gives GSAP enough room to animate the scroll sequence smoothly.
const ShowcaseContainer = styled.div`
  position: relative;
  /* Total height: 100vh for the title reveal, 100vh for each project to have its moment */
  height: ${(projects.length + 1) * 100}vh;
  background-color: ${({ theme }) => theme.colors.background};
`;


function App() {
  const showcaseContainerRef = useRef(null);
  const workShowcaseRef = useRef(null);

  // --- MASTER GSAP TIMELINE FOR THE SHOWCASE ---
  useGSAP(() => {
    const showcase = workShowcaseRef.current;
    if (!showcase) return;

    const projects = showcase.querySelectorAll('.project-card');
    const title = showcase.querySelector('.work-title');

    // Create a master timeline that is controlled by the scroll position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: showcaseContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // Smoothly ties the animation progress to the scrollbar
        pin: showcase, // Pin the WorkShowcase component while the timeline runs
      },
    });

    // 1. Animate the title into view
    tl.fromTo(title,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    // 2. Animate the projects in and out sequentially
    projects.forEach((project, index) => {
      // Animate the current project card into view
      tl.to(project, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power3.inOut'
      }, index + 0.8); // Stagger the start time of each card animation

      // If it's not the last project, animate it out
      if (index < projects.length - 1) {
        tl.to(project, {
          opacity: 0,
          y: -40,
          scale: 0.95,
          duration: 1.5,
          ease: 'power3.inOut'
        }, index + 1.5); // Start fading out before the next one is fully in
      }
    });

  }, { scope: showcaseContainerRef }); // Scope the GSAP context for better performance

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />

        <ShowcaseContainer ref={showcaseContainerRef}>
          {/*
            The WorkShowcase is now "sticky" but controlled by the GSAP timeline
            instead of CSS. This provides a smoother, more reliable animation.
            Passing the ref allows GSAP to target it.
          */}
          <WorkShowcase ref={workShowcaseRef} />
        </ShowcaseContainer>

      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
