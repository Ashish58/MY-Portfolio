import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection'
import ProjectsSection from '../components/ProjectsSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import Skills from '../components/Skills'
export default function Home() {
  return (
    <div>
   <HeroSection />
   <AboutSection />
   <ServiceSection />
   <Skills />
   <ProjectsSection />
   {/* <TestimonialsSection /> */}
   <ContactBanner />

    </div>
  );
}
