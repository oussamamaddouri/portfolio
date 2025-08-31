// src/components/WorkTransition.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Contact from './Contact.jsx'; 
import Closing from './Closing.jsx';

gsap.registerPlugin(ScrollTrigger);

const TransitionContainer = styled.div`
  /* We might need a bit more scroll room for this super-smooth effect */
  height: 250vh; 
  position: relative;
  background-color: #1a1a1a;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const WorkTransition = () => {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const contactRef = useRef(null);
  const closingRef = useRef(null);

  useGSAP(() => {
    const contactSection = contactRef.current;
    const closingSection = closingRef.current;
    const title = contactSection.querySelector('.contact-title');

    // This part is the same - it pins the stage for the animation to happen on.
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: stickyRef.current,
    });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        // --- CHANGE 1: HIGHER SCRUB FOR A BUTTERY FEEL ---
        // A higher value creates a smoother, more delayed reaction to the scroll.
        scrub: 1.5,
      },
    });

    // --- THIS IS THE KEY TO THE "IMPERCEPTIBLE" SCROLL ---
    // All animations now start at a later point in the timeline (e.g., 0.2).
    // This creates the "dead zone" where the user scrolls but the animation doesn't start yet.

    const animationStartTime = 0.2; // The first 20% of the scroll does nothing.

    // 1. Animate the 'Closing' section into view
    tl.from(closingSection, { 
      yPercent: 100,
      // --- CHANGE 2: MORE PRONOUNCED Easing for a pro feel
      ease: 'power3.inOut', 
    }, animationStartTime); // Start at the new delayed time
    
    // 2. Animate the 'Contact' container to move the title to the top
    tl.to(contactSection, { 
      alignItems: 'flex-start',
      paddingTop: '6vh',
      ease: 'power3.inOut',
    }, animationStartTime); // Start at the new delayed time
    
    // 3. Animate the font-size of the 'Latest Work' title
    tl.to(title, { 
      fontSize: 'clamp(3rem, 7vw, 5rem)',
      ease: 'power3.inOut',
    }, animationStartTime); // Start at the new delayed time

  }, { scope: containerRef });

  return (
    <TransitionContainer ref={containerRef}>
      <StickyContainer ref={stickyRef}>
        <Contact ref={contactRef} />
        <Closing ref={closingRef} />
      </StickyContainer>
    </TransitionContainer>
  );
};

export default WorkTransition;