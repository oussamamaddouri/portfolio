// src/components/Skills.jsx
import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

// --- Data ---
const systemsAndVirtualization = [
    { id: 'linux', src: '/icons/linux.png', alt: 'Linux', noInvert: true },
    { id: 'docker', src: '/icons/docker.png', alt: 'Docker' },
    { id: 'powershell', src: '/icons/powershell.png', alt: 'PowerShell' },
    { id: 'shell', src: '/icons/shell.png', alt: 'Shell Scripting', noInvert: true },
];
const networkingAndInfrastructure = [
    { id: 'ccna', src: '/icons/ccna.png', alt: 'CCNA', noInvert: true },
    { id: 'wireshark', src: '/icons/wireshark.png', alt: 'Wireshark', noInvert: true },
    { id: 'nagios', src: '/icons/nagios.png', alt: 'Nagios' },
    { id: 'zabbix', src: '/icons/zabbix.png', alt: 'Zabbix', noInvert: true },
];
const iotSkills = [
    { id: 'raspberrypi', src: '/icons/raspberrypiwide.png', alt: 'Raspberry Pi', noInvert: true },
    { id: 'iot', src: '/icons/iot.png', alt: 'IoT' },
];
const webDevelopmentAndAPIs = [
    { id: 'html', src: '/icons/html.png', alt: 'HTML', noInvert: true },
    { id: 'css', src: '/icons/css.png', alt: 'CSS', noInvert: true },
    { id: 'javascript', src: '/icons/javascript.png', alt: 'JavaScript', noInvert: true },
    { id: 'react', src: '/icons/react.png', alt: 'React', noInvert: true },
    { id: 'tailwind', src: '/icons/tailwind-css.png', alt: 'Tailwind CSS', needsScale: true },
    { id: 'rest', src: '/icons/rest-api-icon.png', alt: 'REST API' },
    { id: 'graphql', src: '/icons/graphql-icon.png', alt: 'GraphQL' },
];
const databasesAndMonitoring = [
    { id: 'mysql', src: '/icons/mysql.png', alt: 'MySQL' },
    { id: 'postgresql', src: '/icons/postgresql.png', alt: 'PostgreSQL' },
    { id: 'elasticsearch', src: '/icons/elasticsearch.png', alt: 'Elasticsearch' },
    { id: 'kibana', src: '/icons/kibana.png', alt: 'Kibana' },
];
const programmingAndAutomation = [
    { id: 'python', src: '/icons/python.png', alt: 'Python', noInvert: true },
];

const allSkills = [
    ...systemsAndVirtualization, ...networkingAndInfrastructure,
    ...iotSkills, ...webDevelopmentAndAPIs,
    ...databasesAndMonitoring, ...programmingAndAutomation
];

// --- Styled Components ---

const SkillsSection = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  background-color: #1a1a1a;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    /* More padding on mobile so container doesn't touch the edges */
    padding: 1rem;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  height: 65vh;
  max-height: 700px;
  border-radius: 2rem;
  background-color: #242424;
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  box-sizing: border-box;

  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    /* --- CHANGE 1: Let the container's height be flexible --- */
    height: auto;           /* Let content determine height */
    min-height: 80vh;       /* Ensure it's still tall */
    max-height: none;       /* Remove any maximum height limit */
    
    padding: 1.5rem;
    width: 100%; /* Take up more of the screen width on mobile */
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  text-align: center;
  margin: 0 0 2.5rem 0;
  letter-spacing: -0.5px;
  background: linear-gradient(90deg, #b0b0b0, #ffffff, #b0b0b0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 0.75rem;

  @media (max-width: 768px) {
      margin-bottom: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #555, transparent);
  }
`;

const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.2rem 2.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
      /* --- CHANGE 2: Reduce the gap between logos --- */
      gap: 1.5rem;
  }
`;

const LogoWrapper = styled.div`
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  transition-delay: ${({ delay }) => delay}s;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

const LogoImage = styled.img`
  max-width: 65px;
  height: 65px;
  object-fit: contain;
  opacity: 0.7;
  transition: all 0.3s ease;

  ${(props) =>
    props.noInvert
      ? css`
          filter: grayscale(1) brightness(0.8);
        `
      : css`
          filter: grayscale(1) invert(1);
        `}

  transform: ${(props) => (props.needsScale ? 'scale(1.2)' : 'scale(1)')};

  &:hover {
    opacity: 1;
    filter: none;
    transform: ${(props) => (props.needsScale ? 'scale(1.35)' : 'scale(1.15)')};
  }

  @media (max-width: 768px) {
    /* --- CHANGE 3: Reduce the logo size --- */
    max-width: 50px;
    height: 50px;
  }
  
  @media (max-width: 480px) {
      /* Even smaller for very narrow phones */
      max-width: 45px;
      height: 45px;
  }
`;


// --- Main Component ---
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <SkillsSection id="skills">
      <ContentContainer ref={containerRef} className={isVisible ? 'is-visible' : ''}>
        <SectionTitle>Technologies & Skills</SectionTitle>
        <LogosContainer>
          {allSkills.map((logo, index) => (
            <LogoWrapper
              key={logo.id}
              isVisible={isVisible}
              delay={0.6 + index * 0.05}
            >
              <LogoImage
                src={logo.src}
                alt={logo.alt}
                noInvert={logo.noInvert}
                needsScale={logo.needsScale}
              />
            </LogoWrapper>
          ))}
        </LogosContainer>
      </ContentContainer>
    </SkillsSection>
  );
};

export default Skills;