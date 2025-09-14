// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { PROFILE_DATA } from '../data/portfolioData';
import logoSrc from '../assets/images/logo.png';
import { gsap } from 'gsap'; // Keep GSAP import

// --- No changes to your styled components below ---

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const LogoImage = styled.img`
  height: 45px;
  width: auto;
  cursor: pointer;
`;

const LogoAvatar = styled.a`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.5);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContactIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #242424;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer; /* Good practice for clickable non-link elements */
`;

const ChatBubbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);


// --- Main component with updated logic ---

const Navbar = () => {

  // This function will handle the click event
  const handleContactClick = (e) => {
    // 1. Prevent the default browser jump
    e.preventDefault(); 
    
    // 2. Use GSAP to animate the scroll to the element with id="contact"
    gsap.to(window, {
      duration: 1.5,           // Animation duration in seconds for a smooth effect
      scrollTo: "#contact",    // The target selector
      ease: "power3.inOut"     // A nice easing function for acceleration/deceleration
    });
  };

  return (
    <Nav>
      <LogoAvatar href="#home">
        <LogoImage src={logoSrc} alt="Portfolio Logo" />
      </LogoAvatar>

      {/* The `href` is kept for semantics, but `onClick` now controls the behavior */}
      <ContactIcon href="#contact" onClick={handleContactClick}>
        <ChatBubbleIcon />
      </ContactIcon>
    </Nav>
  );
};

export default Navbar;