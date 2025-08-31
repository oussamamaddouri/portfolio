// src/components/common/CustomCursor.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.teal};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference; // A very cool effect against other colors
  transform: translate(-50%, -50%); // Center it on the cursor point
  transition: width 0.3s, height 0.3s;
`;

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    
    // QuickSet is faster for properties that update constantly
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.1;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    // The animation loop for the smooth "lerp" effect
    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    const mouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    window.addEventListener('mousemove', mouseMove);
    
    // Add hover effects for links/buttons
    document.querySelectorAll('a, button, .interactive').forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { width: 45, height: 45, duration: 0.3 });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { width: 25, height: 25, duration: 0.3 });
      });
    });

    return () => { // Cleanup
      window.removeEventListener('mousemove', mouseMove);
    };

  }, []);

  return <Cursor ref={cursorRef} />;
};

export default CustomCursor;