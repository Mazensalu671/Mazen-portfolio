import { useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ToolsSection from './components/ToolsSection';
import CredentialsSection from './components/CredentialsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          @keyframes floatTitle {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animated-title {
            font-size: 3rem;
            font-weight: 700;
            background: linear-gradient(90deg, #3f7dff, #8fb3ff);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 4px 14px rgba(63, 125, 255, 0.35);
            animation: floatTitle 3.5s ease-in-out infinite;
          }
        `}
      </style>
      <Navigation />
      {/* 1. HERO */}
      <HeroSection />
      {/* 2. Meta Blueprint Official Certification */}
      <AboutSection />
      {/* 4. My Expertise */}
      <SkillsSection />
      {/* 6. Professional Credential */}
      <ProjectsSection />
      {/* 8. Verified Professional Credentials */}
      <CredentialsSection />
      {/* 9. Experience */}
       {/* 5. Tools & Platforms */}
      <ToolsSection />
      
      {/* Simple Footer - All Pages */}
      <Footer />
    </div>
  );
}
