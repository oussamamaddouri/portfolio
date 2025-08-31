// src/components/About.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PROFILE_DATA, STATS_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = styled.section`
  padding: 120px 2rem;
  position: relative;
  
  /* --- SECTION-SPECIFIC COLOR: LIGHT THEME --- */
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};

  .container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media(min-width: 992px) {
      grid-template-columns: repeat(12, 1fr);
      align-items: center;
    }
  }
`;

const TextContainer = styled.div`
  grid-column: 1 / -1;
  @media(min-width: 992px) {
    grid-column: 6 / 13;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 6vw, 3rem);
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 1rem;
`;

const BioText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.background};
  opacity: 0.85;
  margin: 1.5rem 0;
  max-width: 600px;
`;

// --- New Infographic & Image Styles ---

const InfographicContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  grid-row: 1; /* Puts image before text on mobile */

  @media(min-width: 992px) {
    grid-column: 1 / 7;
    grid-row: 1; /* Explicitly set row */
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  max-width: 400px;
  margin: 0 auto; /* Center on mobile */

  /* --- REFINED IMAGE FILTER --- */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, 
        rgba(76, 131, 122, 0.4) 0%,   /* Accent color with transparency */
        rgba(76, 131, 122, 0) 60%
    );
    z-index: 1;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
  display: block;
  position: relative;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  /* Add contrast and keep it grayscale for the duotone effect */
  filter: grayscale(100%) contrast(1.1);
`;

const StatsGrid = styled.div`
  margin-top: -80px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media(min-width: 992px) {
    margin-top: 0;
    position: absolute;
    bottom: -40px;
    left: -40px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  width: 120px;

  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.accent};
  }
  .stat-label {
    font-size: 0.8rem;
    opacity: 0.8;
  }
`;


const About = () => {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 70%',
                end: 'top 40%',
                scrub: 1,
            }
        });
        
        tl.from(".reveal-text", { y: 50, opacity: 0, stagger: 0.2 });
        tl.from(".stat-card", { x: -50, opacity: 0, stagger: 0.2 }, "-=0.3");
        tl.from(".image-wrapper", { scale: 0.9, opacity: 0}, 0);
        
    }, { scope: container });

  return (
    <AboutSection ref={container} id="about">
        <div className="container">
            <InfographicContainer>
                <ImageWrapper className="image-wrapper">
                    <ProfileImage src={PROFILE_DATA.picture} alt={PROFILE_DATA.name} />
                </ImageWrapper>
                <StatsGrid>
                    {STATS_DATA.map((stat, index) => (
                        <StatCard key={index} className="stat-card">
                            <div className="stat-value">{stat.value}{stat.unit}</div>
                            <div className="stat-label">{stat.label}</div>
                        </StatCard>
                    ))}
                </StatsGrid>
            </InfographicContainer>

            <TextContainer>
                <SectionTitle className="reveal-text">{PROFILE_DATA.title}</SectionTitle>
                <BioText className="reveal-text">
                    {PROFILE_DATA.bio}
                </BioText>
            </TextContainer>
        </div>
    </AboutSection>
  );
};

export default About;