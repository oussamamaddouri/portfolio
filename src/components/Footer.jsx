// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { SOCIAL_LINKS } from '../data/portfolioData';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

// This is the main container for the entire footer section.
// It sets the dark background and centers the content.
const FooterContainer = styled.footer`
  /* A dark, near-black background as seen in the image. */
  background-color: #1a1a1a;
  color: #FFFFFF;

  /* This makes the footer section take up the full height of the browser window. */
  height: 100vh;
  /* A min-height is good practice to ensure the layout doesn't break on very short screens. */
  min-height: 500px;

  /* Flexbox is used to perfectly center the content both vertically and horizontally. */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  overflow: hidden; /* Prevents anything from spilling out */
  padding: 2rem; /* Added padding to prevent content from touching screen edges */

  /* This pseudo-element creates the subtle, rounded panel behind the text */
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
    /* A slightly lighter dark shade creates the panel effect */
    background-color: #242424;
    border-radius: 32px;
    z-index: 0;
  }
`;

// The large, two-toned heading.
const ContactHeading = styled.h2`
  /* A bold, modern sans-serif font stack is a good choice here.
     For a perfect match, you might need to import a specific font like 'Inter' or 'Montserrat'. */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 800;
  /* Using clamp() for a fluidly responsive font size. */
  font-size: clamp(3.5rem, 12vw, 9rem);
  text-transform: uppercase;
  /* Negative letter-spacing tightens the text, matching the design. */
  letter-spacing: -0.05em;
  line-height: 0.9;
  margin: 0 0 2.5rem 0;
  position: relative;
  z-index: 1; /* Ensures text is on top of the background panel. */

  /* The gradient provides the split-color effect. */
  background: linear-gradient(to bottom, #FFFFFF 50%, #FBEBEB 50%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

// The email link styled as a pill-shaped button.
const EmailLink = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  color: #e0e0e0;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.8rem 1.75rem;
  border-radius: 9999px; /* Creates the pill shape. */
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1; /* Sits on top of the panel. */
  margin-bottom: 2rem;


  &:hover {
    background-color: #FFFFFF;
    color: #121212;
    border-color: #FFFFFF;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1.5rem; /* Adds space between the icons */
  position: relative;
  z-index: 1;
`;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  opacity: 0.7;
  transition: all 0.3s ease;
  filter: grayscale(1) brightness(0.8); /* Apply the filter by default */
`;

const SocialLink = styled.a`
  display: inline-block;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Adds a subtle "lift" effect on hover */
  }
  
  /* On hover of the link, remove the filter from the icon */
  &:hover ${SocialIcon} {
    opacity: 1;
    filter: none;
  }
`;

const Footer = () => {
  const email = "oussamamaddouri108@gmail.com";

  return (
    // ID attribute is REMOVED from this container
    <FooterContainer>
      
      {/* ID attribute is MOVED to this visible heading */}
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
      </SocialLinksContainer>
    </FooterContainer>
  );
};

export default Footer;