// src/components/Skills.jsx
import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

// --- Data ---
// This remains unchanged.
const systemsAndVirtualization = [
    { id: 'linux', src: '/icons/linux.png', alt: 'Linux', noInvert: true },
    { id: 'docker', src: '/icons/docker.png', alt: 'Docker' },
    { id: 'powershell', src: '/icons/powershell.png', alt: 'PowerShell' },
    { id: 'shell', src: '/icons/shell.png', alt: 'Shell Scripting' },
];
const networkingAndInfrastructure = [
    { id: 'ccna', src: '/icons/ccna.png', alt: 'CCNA' },
    { id: 'wireshark', src: '/icons/wireshark.png', alt: 'Wireshark' },
    { id: 'nagios', src: '/icons/nagios.png', alt: 'Nagios' },
    { id: 'zabbix', src: '/icons/zabbix.png', alt: 'Zabbix', noInvert: true },
];
const iotSkills = [
    { id: 'raspberrypi', src: '/icons/raspberrypiwide.png', alt: 'Raspberry Pi', noInvert: true },
    { id: 'iot', src: '/icons/iot.png', alt: 'IoT' },
];
const webDevelopmentAndAPIs = [
    { id: 'html', src: '/icons/html.png', alt: 'HTML' },
    { id: 'css', src: '/icons/css.png', alt: 'CSS' },
    { id: 'javascript', src: '/icons/javascript.png', alt: 'JavaScript' },
    { id: 'react', src: '/icons/react.png', alt: 'React' },
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
    { id: 'python', src: '/icons/python.png', alt: 'Python' },
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
`;

// FIXED: Restored original dimensions and corrected animation trigger logic.
const ContentContainer = styled.div`
  /* --- Restored dimensions from Hero component --- */
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

  /* --- Animation setup --- */
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  /* Class applied by observer to trigger animation */
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    height: 80vh;
    padding: 1.5rem;
  }
`;

// Title style remains, it's solid.
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

// Adjusted gap to ensure fit.
const LogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.2rem 2.5rem; /* row-gap column-gap */
  padding: 1rem 0;
`;

// FIXED: Animation logic now directly tied to a prop.
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

// Adjusted size to fit the container.
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
`;


// --- Main Component ---
// Logic is now robust and correctly passes props.

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
      { threshold: 0.2 } // Trigger when 20% of the container is visible.
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
              isVisible={isVisible} // The prop that makes the animation work
              // Delay starts after the main container animates (0.6s) + a stagger
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