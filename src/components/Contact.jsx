// src/components/Contact.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const WorkTitleSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: transparent; 

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
`;

// --- KEY CHANGES HERE TO ENABLE THE WIPE EFFECT ---
const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 12vw, 8rem);
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  
  /* 1. Make the text transparent */
  color: transparent;
  
  /* 2. Create a gradient background with pink at the top and white at the bottom */
  background-image: linear-gradient(to top, #FFFFFF 50%, #F2A2E8 50%);

  /* 3. Clip this gradient background to the shape of the text */
  -webkit-background-clip: text;
  background-clip: text;

  /* 4. Make the gradient tall enough to slide up and down */
  background-size: 100% 200%;
  
  /* 5. Start with the gradient positioned to only show the bottom (white) half */
  background-position: 0 100%;
  
  transition: background-position 0.5s ease; /* Optional: adds a bit of smoothing */
`;

const WordWrapper = styled.span`...`; // No changes
const AnimatedWord = styled.span`...`; // No changes

const Contact = React.forwardRef((props, ref) => {
  // ... rest of the component is unchanged
  const container = useRef(null);

  useGSAP(() => {
    // This reveal animation can be removed if you prefer, or kept.
    // It will reveal the white text initially.
    const words = gsap.utils.toArray('.animated-word');
    gsap.to(words, {
      y: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      }
    });
  }, { scope: container });

  return (
    <WorkTitleSection id="work" ref={(el) => { container.current = el; ref.current = el; }}>
      <Title className="contact-title">
        <WordWrapper>
          <AnimatedWord className="animated-word">Latest</AnimatedWord>
        </WordWrapper>
        <WordWrapper>
          <AnimatedWord className="animated-word">Work</AnimatedWord>
        </WordWrapper>
      </Title>
    </WorkTitleSection>
  );
});

export default Contact;