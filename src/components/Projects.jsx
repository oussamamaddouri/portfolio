// src/components/Contact.jsx
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Styled components (no changes needed)
// --- [Your Styled Components Go Here] ---
const WorkWithSection = styled.section`
  background-color: #1a1a1a;
  padding: 4rem 2rem;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  background-color: #242424;
  border-radius: 12px;
  padding: 4rem;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 600;
  line-height: 1.3;
`;

const ListContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const WorkItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(10, 10, 10, 0.5);
  border: 1px solid #333;
  border-radius: 8px;
  text-decoration: none;
  color: #c4c4c4;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    background-color: #333;
    border-color: #444;
  }
`;

const ItemText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
`;

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4c4c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);


const Contact = () => {
  const component = useRef(null); // Ref for the main section component
  const workItemsData = [
    { text: 'Startups', href: '#' },
    { text: 'Marketing teams', href: '#' },
    { text: 'Agencies', href: '#' },
    { text: 'B2B SaaS', href: '#' },
  ];

  useLayoutEffect(() => {
    // Create GSAP context for safe cleanup
    let ctx = gsap.context(() => {
      // Create a timeline for the entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top 80%", // Animate when the top of the component is 80% down the viewport
          end: "bottom 20%",
          toggleActions: "play none none none", // Play the animation once it enters the viewport
        },
      });

      // Set initial state (invisible)
      gsap.set('.content-box, .work-heading, .work-item', { opacity: 0 });

      // Animate the main container
      tl.fromTo('.content-box', 
        { scale: 0.9, y: 50 },
        { scale: 1, y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      // Animate the heading with a slight delay
      tl.fromTo('.work-heading',
        { x: -30 },
        { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        "-=0.6" // Overlap with the previous animation
      );
      
      // Animate the work items with a stagger effect
      tl.fromTo('.work-item',
        { y: 20 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          ease: 'power3.out',
          stagger: 0.15 // This creates the cool, cascading effect
        },
        "-=0.5" // Overlap slightly
      );

    }, component);

    // Cleanup function
    return () => ctx.revert();
  }, []);


  return (
    // Add the ref and ID to the main section
    <WorkWithSection id="contact" ref={component}>
      {/* 
        ADD CLASSES: Assign specific class names for GSAP to target reliably.
      */}
      <ContentContainer className="content-box">
        <TitleContainer>
          <Heading className="work-heading">I often work with:</Heading>
        </TitleContainer>
        <ListContainer>
          {workItemsData.map((item) => (
            // Add className to each list item
            <WorkItem key={item.text} href={item.href} className="work-item">
              <ExternalLinkIcon />
              <ItemText>{item.text}</ItemText>
            </WorkItem>
          ))}
        </ListContainer>
      </ContentContainer>
    </WorkWithSection>
  );
};

export default Contact;