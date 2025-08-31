// src/components/ProjectShowcase.jsx
import React from 'react';
import styled, { css } from 'styled-components';
import { SHOWCASE_PROJECTS as projects } from '../data/portfolioData';

const ShowcaseSection = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  
  /* This is the top layer, it will cover the title */
  z-index: 2; 
  
  /* The section itself is see-through; only the cards have a background */
  background-color: transparent;
  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;
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
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
      transform: scale(1);
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

const ProjectShowcase = React.forwardRef(({ scrollProgress }, ref) => {
  const activeIndex = Math.min(
    projects.length - 1,
    Math.floor(scrollProgress * projects.length)
  );

  return (
    <ShowcaseSection ref={ref}>
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

export default ProjectShowcase;