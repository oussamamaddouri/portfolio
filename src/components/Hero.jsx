// src/components/Hero.jsx
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROFILE_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  position: relative;
`;

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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 5rem;
    height: auto;
    overflow: hidden;
    padding: 2rem;
  }
`;

const BioContainer = styled.div`
  position: absolute;
  top: 4rem;
  left: 3rem;
  z-index: 5;
  /* --- FIX 1: Stretched Bio Text --- */
  max-width: 650px; /* Increased from 480px */
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    max-width: 100%;
    padding: 0;
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const BioTitle = styled.h2`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.3;
  margin: 0;
  margin-bottom: 0.75rem;
`;

const BioDescription = styled.p`
  color: #c4c4c4;
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  white-space: pre-line;
  margin: 0;
`;

/* --- FIX 2: Restored original Name styling --- */
const Name = styled.h1`
  position: absolute;
  top: 45rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.3rem, 12vw, 7rem);
  font-weight: 800;
  text-transform: uppercase;
  line-height: 0.9;
  letter-spacing: -0.04em;
  white-space: normal;
  background: linear-gradient(to bottom, #FFFFFF 50%, #FBEBEB 50%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  @media (max-height: 950px) {
    top: 42rem;
  }
  @media (max-height: 850px) {
    top: 38rem;
  }
  @media (max-height: 750px) {
    top: 34rem;
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 3.5rem;
    left: 50%;
    transform: translateX(calc(-50% + 5px));
    line-height: 1;
  }
`;

const Subtitle = styled.p`
  position: absolute;
  bottom: 1.3rem;
  left: 3rem;
  z-index: 10;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #c4c4c4;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    bottom: 2rem;
  }
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

const ProfileImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 83%;
  transform: translateX(-50%);
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
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;

  @media (max-width: 768px) {
    position: relative;
    left: auto;
    bottom: auto;
    transform: none; /* Reset transform on mobile */
    height: 75vh;
    transform: translateX(20%) translateY(-5%);
  }
`;

const Hero = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(".reveal-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: false,
        }
      });

      tl.to(".profile-image", {
        y: -100,
        duration: 2,
        ease: "power2.inOut",
      })
      .to(".content-container, .name-reveal, .reveal-text", {
        opacity: 0,
        duration: 1,
        ease: "power2.in"
      }, "-=0.5");

    }, component);

    return () => ctx.revert();
  }, []);


  return (
    <HeroSection id="home" ref={component}>
      {/* Name is back outside the container */}
      <Name className="name-reveal">
        {PROFILE_DATA.name}
      </Name>

      <ContentContainer className="content-container">
        <BioContainer>
          <BioTitle className="reveal-text">{PROFILE_DATA.bioTitle}</BioTitle>
          <BioDescription className="reveal-text">{PROFILE_DATA.bioDescription}</BioDescription>
        </BioContainer>
        <ProfileImage className="profile-image" src={PROFILE_DATA.picture} alt={PROFILE_DATA.name} />
      </ContentContainer>

      <Subtitle className="reveal-text">{PROFILE_DATA.title}</Subtitle>
      <CtaButton className="reveal-text" href="#contact">
        Get in touch &rarr;
      </CtaButton>
    </HeroSection>
  );
};

export default Hero;
