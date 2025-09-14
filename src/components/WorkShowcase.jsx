// src/components/WorkShowcase.jsx
import React from 'react';
import styled from 'styled-components';
import { SHOWCASE_PROJECTS as projects } from '../data/portfolioData';

// --- STYLED COMPONENTS ---

// ADDED the animation trigger logic here
const ShowcaseSection = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #1a1a1a;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative; 
  
  /* When this section has the .is-active class, target the title's pseudo-element */
  &.is-active .work-title::after {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 25rem;
  width: 50%;
  z-index: 5;

  @media (max-width: 768px) {
    top: 10%;
    left: 2rem;
    width: auto;
  }
`;

const ProjectsContainer = styled.div`
  position: absolute;
  top: 82%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px;
  z-index: 1;

   @media (max-width: 768px) {
    max-width: 90vw;
  }
`;

// --- MODIFIED THE TITLE COMPONENT ---
const Title = styled.h2`
  color: #FFFFFF; /* Base color is now white */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(3rem, 10vw, 5rem);
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  position: relative; /* Required for the pseudo-element */

  /* The pseudo-element holds the pink, animated text */
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    color: #FCD4D4; /* The pink highlight color */
    text-shadow: 0 0 20px rgba(252, 212, 212, 0.4);
    
    /* Start with the pink text hidden */
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    
    /* Define the smooth animation */
    transition: clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 900 / 745;
`;

const ProjectCardLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  background-color: #1c1c1c;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  pointer-events: auto;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #2a2a2a;
`;

const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const ExternalLinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const WorkShowcase = React.forwardRef((props, ref) => {
  // --- ADDED THE TEXT to a variable for re-use ---
  const titleText = "Latest Work";

  return (
    <ShowcaseSection ref={ref}>
      <TitleContainer>
        {/* MODIFIED the Title element to include the data-text attribute */}
        <Title className="work-title" data-text={titleText}>
          {titleText}
        </Title>
      </TitleContainer>

      <ProjectsContainer>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCardLink
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
                <ExternalLinkIcon />
              </CardHeader>
              <CardImage src={project.imageUrl} alt={`${project.name} project showcase`} />
            </ProjectCardLink>
          ))}
        </CardContainer>
      </ProjectsContainer>
    </ShowcaseSection>
  );
});

export default WorkShowcase;