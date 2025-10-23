// src/data/portfolioData.js

// --- (1) IMPORT YOUR ASSETS AT THE TOP ---
import profilePic from "/src/assets/images/me.png";
import logoImg from "/src/assets/images/logo.png";
import reloImage from '/src/assets/fonts/relo.png'; // Added for the showcase
import dashboardImage from '/src/assets/fonts/dashboard.png';
import iberostar from '/src/assets/fonts/iberostar.png';

export const PROFILE_DATA = {
  name: "Maddouri Oussama",
  title: "DevSecOps & Cloud Infrastructure Engineer",
  bioTitle: "Hi, I’m Oussama a DevSecOps engineer who loves turning complex infrastructure problems into elegant, automated solutions",
  bioDescription: " I’m a DevSecOps and Cloud Engineer who thrives on solving infrastructure and security challenges. I design and automate scalable systems using kubernetes, Docker, CI/CD piplines, and Linux environements, helping startups deliver faster with confidence. I'm driven by curiosity I love identifying technical problems and transforming them into innovative, secure and automated solutions ",
  picture: profilePic,
  logo: logoImg,
};

export const SOCIAL_LINKS = {
  github: "https://github.com/oussamamaddouri",
  linkedin: "https://www.linkedin.com/in/maddouriouss/",
  instagram: "https://instagram.com/your-username",
  credly: "https://www.credly.com/users/oussama-maddouri/badges#credly"
};

export const SKILLS_DATA = {
  web: [
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "React", icon: "/icons/react.png" },
  ],
  sys: [
    { name: "Python", icon: "/icons/python.png" },
    { name: "Linux", icon: "/icons/linux.png" },
    { name: "Shell Script", icon: "/icons/shell.png" },
    { name: "Docker", icon: "/icons/docker.png" },
    { name: "CCNA", icon: "/icons/ccna.png" },
  ]
};


export const STATS_DATA = [
  { label: "Years of Experience", value: 7, unit: "+" },
  { label: "Completed Projects", value: 34, unit: "" },
  { label: "Primary Technologies", value: 5, unit: "" },
];

export const RESUME_DATA = [
    { year: "2021-Present", title: "Lead Frontend Engineer", company: "Tech Solutions Inc.", description: "Led a team of 4 and improved performance by 30%." },
    { year: "2018-2021", title: "React Developer", company: "Creative Agency Co.", description: "Built and maintained dozens of client websites." },
];

export const PROJECTS_DATA = [
  {
    id: "proj-01",
    title: "Project Alpha",
    tagline: "An interactive data visualization platform.",
    description: "Full description here...",
    tech: ["React", "D3.js", "GSAP", "Node.js"],
    image: "https://via.placeholder.com/400x300/04253A/E1DDBF?text=Project+Alpha",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "proj-02",
    title: "Project Beta",
    tagline: "A sleek e-commerce storefront.",
    description: "Full description here...",
    tech: ["React", "Styled-Components", "Node.js"],
    image: "https://via.placeholder.com/400x300/4C837A/E1DDBF?text=Project+Beta",
    liveUrl: "#",
    repoUrl: "#",
  }
];

// --- THIS IS THE NEW PART FOR YOUR SCROLLING SHOWCASE ---
export const SHOWCASE_PROJECTS = [
  {
    id: 'show-01',
    name: 'Relo',
    imageUrl: reloImage,
    link: 'https://www.your-relo-project-url.com', // Update this link
  },
  {
    id: 'show-02',
    name: 'Tierra Verde', // Example, change this
    imageUrl: iberostar, // Placeholder image
    link: '#', // Remember to update link
  },
  {
    id: 'show-03',
    name: 'CybersecurityX', // Example, change this
    imageUrl: dashboardImage, // Placeholder image
    link: '#', // Remember to update link
  },
];
