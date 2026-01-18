/**
 * ============================================================================
 * INDEX PAGE - Main Portfolio Landing Page
 * ============================================================================
 * 
 * This is the main entry point for the portfolio website.
 * All sections are imported and rendered in order.
 * 
 * TODO: CUSTOMIZATION OPTIONS
 * ---------------------------
 * 1. Reorder sections by changing the order below
 * 2. Add/remove sections as needed
 * 3. Create new section components in src/components/
 * 
 * FUTURE UPGRADES:
 * - Add a Blog section with your technical articles
 * - Add a Testimonials section with client reviews
 * - Add a Services section if offering consulting
 * - Implement page transitions with framer-motion
 * - Add analytics tracking (Google Analytics, Plausible, etc.)
 * ============================================================================
 */

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section - Photo on right, intro on left */}
        <Hero />
        
        {/* About Section - Brief introduction */}
        <About />
        
        {/* Experience Section - Work history timeline */}
        <Experience />
        
        {/* Skills Section - Technical capabilities */}
        <Skills />
        
        {/* Projects Section - Featured work with images */}
        <Projects />

        {/* Achievements Section - Featured work with images */}
        <Achievements />

        {/* Certifications Section - Featured work with images */}
        <Certifications />
        
        {/* Contact Section - Form with email integration */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
