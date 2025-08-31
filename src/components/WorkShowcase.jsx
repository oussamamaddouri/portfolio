// src/components/WorkShowcase.jsx
import React from 'react';
import styled, { css } from 'styled-components';
import { SHOWCASE_PROJECTS as projects } from '../data/portfolioData';

// This is the main sticky container for the whole section
const ShowcaseSection = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #121212;
  
  // Use Flexbox to stack the title and card container vertically
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem; // This creates space between the title and the card area

  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
`;

// This is the title from the old component, now living here
const Title = styled.h2`
  color: #FCD4D4;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(3rem, 10vw, 5rem); // Slightly smaller to give card more room
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 0 20px rgba(252, 212, 212, 0.4);
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
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
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    `}
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

const WorkShowcase = React.forwardRef(({ scrollProgress }, ref) => {
  const activeIndex = Math.min(
    projects.length - 1,
    Math.floor(scrollProgress * projects.length)
  );

  return (
    <ShowcaseSection ref={ref}>
      <Title>Latest Work</Title>
      <CardContainer>
        {projects.map((project, index) => (
          <ProjectCardLink
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            isActive={index === activeIndex}
          >
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <ExternalLinkIcon />
            </CardHeader>
            <CardImage src={project.imageUrl} alt={`${project.name} project showcase`} />
          </ProjectCardLink>
        ))}
      </CardContainer>
    </ShowcaseSection>
  );
});

export default WorkShowcase;