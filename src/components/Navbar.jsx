// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';
import { PROFILE_DATA } from '../data/portfolioData';
import logoSrc from '../assets/images/logo.png'

// Simple nav container, fixed to the top
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem; /* A little bit of padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const LogoImage = styled.img`
  /* --- THIS IS HOW YOU CONTROL THE SIZE --- */
  height: 45px; /* Adjust this value to make the logo bigger or smaller */

  width: auto; /* Maintains the aspect ratio */
  cursor: pointer;
`;

// The small avatar/logo on the left
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

// The chat icon/button on the right
const ContactIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 10px; /* Squircle shape */
  background-color: #242424;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  text-decoration: none;
`;

// A simple SVG icon for the chat bubble
const ChatBubbleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const Navbar = () => {
  return (
    <Nav>
      <LogoAvatar href="#home">
        {/* Using your profile picture for the avatar */ }
        <LogoImage src={logoSrc} alt="Portfolio Logo" />
      </LogoAvatar>
      
      <ContactIcon href="#contact">
        <ChatBubbleIcon />
      </ContactIcon>
    </Nav>
  );
};

export default Navbar;