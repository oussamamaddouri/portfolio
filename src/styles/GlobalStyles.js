// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  p {
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
        color: ${({ theme }) => theme.colors.text};
    }
  }
`;