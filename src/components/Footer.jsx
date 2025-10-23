// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { SOCIAL_LINKS } from '../data/portfolioData';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
// --- 1. IMPORT THE NEW ICON ---
import credlyIcon from '../assets/icons/credly.png'; // Make sure you have credly.png in this folder

// --- (No changes to styled components) ---
const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #FFFFFF;
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95%;
    max-width: 1400px;
    height: 70%;
    min-height: 350px;
    background-color: #242424;
    border-radius: 32px;
    z-index: 0;
  }
`;

const ContactHeading = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 800;
  font-size: clamp(3.5rem, 12vw, 9rem);
  text-transform: uppercase;
  letter-spacing: -0.05em;
  line-height: 0.9;
  margin: 0 0 2.5rem 0;
  position: relative;
  z-index: 1;

  background: linear-gradient(to bottom, #FFFFFF 50%, #FBEBEB 50%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const EmailLink = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  color: #e0e0e0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.75rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;


  &:hover {
    background-color: #FFFFFF;
    color: #121212;
    border-color: #FFFFFF;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  opacity: 0.7;
  transition: all 0.3s ease;
  filter: grayscale(1) brightness(0.8);
`;

const SocialLink = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover ${SocialIcon} {
    opacity: 1;
    filter: none;
  }
`;

const Footer = () => {
  const email = "oussamamaddouri108@gmail.com";

  return (
    <FooterContainer>
      <ContactHeading id="contact">
        Get in Touch
      </ContactHeading>

      <EmailLink href={`mailto:${email}`}>
        {email}
      </EmailLink>
      <SocialLinksContainer>
        <SocialLink href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
          <SocialIcon src={githubIcon} alt="GitHub" />
        </SocialLink>
        <SocialLink href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          <SocialIcon src={linkedinIcon} alt="LinkedIn" />
        </SocialLink>
        {/* This is the line you want to keep */}
        <SocialLink href={SOCIAL_LINKS.credly} target="_blank" rel="noopener noreferrer">
          <SocialIcon src={credlyIcon} alt="Credly" />
        </SocialLink>
      </SocialLinksContainer>
    </FooterContainer>
  );
};

export default Footer;