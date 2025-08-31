// src/components/LatestWorkTitle.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const TitleSection = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Starts transparent and fades in when active */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  
  /* This component is on the bottom layer */
  z-index: 1; 

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
    `}
`;

const Title = styled.h2`
  color: #FCD4D4;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 800;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 0 20px rgba(252, 212, 212, 0.4);
`;

const LatestWorkTitle = ({ isActive }) => {
  return (
    <TitleSection isActive={isActive}>
      <Title>Latest Work</Title>
    </TitleSection>
  );
};

export default LatestWorkTitle;