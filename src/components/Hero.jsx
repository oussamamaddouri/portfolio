// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';
import { PROFILE_DATA } from '../data/portfolioData';

// The HeroSection acts as the main container and positioning context.
const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: #1a1a1a;
  overflow: hidden;
  position: relative;
`;

// This container now primarily holds the background and the profile image.
const ContentContainer = styled.div`
  position: absolute;
  top: 190px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1300px;
  height: 440px;
  border-radius: 2rem 2rem 0 0 ;
  background-color: #242424;
  overflow: visible;
`;

// NEW: A container to hold and position the bio title and description together.
const BioContainer = styled.div`
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 5;
  max-width: 480px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    top: 2rem;
    left: 2rem;
    right: 2rem;
    max-width: 100%;
  }
`;

// NEW: Styled component specifically for the larger bio title.
const BioTitle = styled.h2`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.3;
  margin: 0;
  margin-bottom: 0.75rem;
`;

// MODIFIED: This is now just for the description paragraph.
const BioDescription = styled.p`
  color: #c4c4c4;
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  white-space: pre-line;
  margin: 0;
`;

// Main name headline that overlaps the image
const Name = styled.h1`
  position: absolute;
  top: 36rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 10vw, 7rem);
  font-weight: 700;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.02em;
  white-space: nowrap;
  color: #ffffff;

  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #ffc4c4;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
  }
`;

// Subtitle at the bottom-left
const Subtitle = styled.p`
  position: absolute;
  bottom: 1.3rem;
  left: 3rem;
  z-index: 10;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #c4c4c4;
`;

const CtaButton = styled.a`
  display: inline-block;
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid #c4c4c4;
  border-radius: 50px;
  color: #c4c4c4;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: #ffffff;
    color: #1a1a1a;
    border-color: #ffffff;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

// FINAL: Profile image with sharpness fixes and correct centering
const ProfileImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 83%; /* This is required for translateX(-50%) to center correctly */
  transform: translateX(-50%); /* Centers the image */
  height: 580px;
  width: auto;
  object-fit: contain;
  object-position: bottom;
  z-index: 1;
  user-select: none;
  filter:
    grayscale(1)
    contrast(1.1)
    drop-shadow(0 -0px 2px rgba(255, 255, 255, 0.6))
    drop-shadow(-2px 0px 10px rgba(255, 255, 255, 0.4))
    drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.4));
  
  /* --- STYLES FOR SHARPNESS --- */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
`;


const Hero = () => {
  return (
    <HeroSection id="home">
      <Name data-text={PROFILE_DATA.name}>{PROFILE_DATA.name}</Name>

      <ContentContainer>
        {/* Render the new bio structure */}
        <BioContainer>
          <BioTitle>{PROFILE_DATA.bioTitle}</BioTitle>
          <BioDescription>{PROFILE_DATA.bioDescription}</BioDescription>
        </BioContainer>

        <ProfileImage src={PROFILE_DATA.picture} alt={PROFILE_DATA.name} />
      </ContentContainer>

      <Subtitle>{PROFILE_DATA.title}</Subtitle>
      <CtaButton href="#contact">
        Get in touch &rarr;
      </CtaButton>
    </HeroSection>
  );
};

export default Hero;