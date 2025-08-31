import React from 'react';
import styled from 'styled-components';

// The main section container
const WorkWithSection = styled.section`
  background-color: #1a1a1a;
  padding: 4rem 2rem;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; // No longer needed */
`;

// The inner container with the rounded corners
const ContentContainer = styled.div`
  background-color: #242424;
  border-radius: 12px;
  padding: 4rem;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center; // Vertically center title with list
  gap: 3rem;

  // Stack columns on smaller screens
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start; // Align content to the left
    padding: 2.5rem;
    gap: 2rem;
  }
`;

// Container for the left-side title
const TitleContainer = styled.div`
  flex: 1;
`;

// The main heading "I often work with:"
const Heading = styled.h2`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 5vw, 2.5rem); // Responsive font size
  font-weight: 600;
  line-height: 1.3;
`;

// Container for the right-side list
const ListContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem; // Space between list items
`;

// Each individual item in the list
const WorkItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(10, 10, 10, 0.5); // Dark, semi-transparent background
  border: 1px solid #333;
  border-radius: 8px;
  text-decoration: none;
  color: #c4c4c4;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    background-color: #333;
    border-color: #444;
  }
`;

const ItemText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
`;

// The SVG icon for the external link inside each list item
const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c4c4c4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// The component, keeping the original "Contact" name
const Contact = () => {
  // Data for the list items
  const workItems = [
    { text: 'Startups', href: '#' },
    { text: 'Marketing teams', href: '#' },
    { text: 'Agencies', href: '#' },
    { text: 'B2B SaaS', href: '#' },
  ];

  return (
    <WorkWithSection id="contact">
      {/* --- The ChatButton has been removed from here --- */}
      <ContentContainer>
        <TitleContainer>
          <Heading>I often work with:</Heading>
        </TitleContainer>
        <ListContainer>
          {workItems.map((item) => (
            <WorkItem key={item.text} href={item.href}>
              <ExternalLinkIcon />
              <ItemText>{item.text}</ItemText>
            </WorkItem>
          ))}
        </ListContainer>
      </ContentContainer>
    </WorkWithSection>
  );
};

export default Contact;