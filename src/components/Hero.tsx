/**
 * ============================================================================
 * HERO COMPONENT
 * ============================================================================
 * 
 * TODO: CONFIGURATION NEEDED
 * --------------------------
 * 1. Replace "Your Name" with your actual name
 * 2. Replace the photo placeholder with your actual photo:
 *    - Add your photo to src/assets/profile-photo.jpg
 *    - Import it: import profilePhoto from "@/assets/profile-photo.jpg"
 *    - Replace the placeholder div with: <img src={profilePhoto} ... />
 * 3. Update social links with your actual URLs
 * 4. Add your resume PDF to public/resume.pdf for download functionality
 * 5. Update the intro text to match your personal brand
 * 
 * FUTURE UPGRADES:
 * - Add animated background particles
 * - Integrate with CMS for dynamic content
 * - Add multiple language support
 * ============================================================================
 */

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import profilePhoto from "@/assets/profile-photo.jpg";

// TODO: Update these roles to match your expertise
const roles = ["Blockchain Developer", "Full Stack Engineer", "Web3 Builder"];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  // TODO: Update these links with your actual social profiles
  const socialLinks = [
    { icon: Github, href: "https://github.com/Armaansaxena", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/armaan-saxena-3a8185328/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/Armaan__Saxena", label: "Twitter" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/armaan_saxena/", label: "LeetCode" },
    { icon: SiCodeforces, href: "https://codeforces.com/profile/armaan_saxena", label: "Codeforces" },
    { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/profile/armaansaxena", label: "GeeksforGeeks" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Side - Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 15 }} // Lift effect feels more modern
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="font-mono text-primary text-sm tracking-wider">
              Hello, I'm
            </span>

            
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-foreground">
              Armaan Saxena
            </h1>

            <div className="h-12 md:h-14">
              <span className="font-mono text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <span className="text-primary animate-pulse">|</span>
              </span>
            </div>

            {/* TODO: Update this intro text */}
            <p className="text-muted-foreground text-lg mt-6 max-w-xl leading-relaxed">
              Building decentralized applications and scalable web solutions. 
              Passionate about smart contracts, DeFi protocols, and creating 
              seamless user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              {/* TODO: Add your resume PDF to public/resume.pdf */}
              <motion.a
                href="https://drive.google.com/file/d/15GFvOsoJV1SQu7OpbYuPMlVnvkxNbJeX/view?usp=sharing"
                download
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} // Scale is smoother than X-axis movement
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.4, 
              ease: [0.22, 1, 0.36, 1] // Custom "Expo" ease for a premium feel
            }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="Armaan Saxena"
                fetchPriority="high" // Prioritizes this download over other scripts
                loading="eager"      // Forces immediate loading
                className="w-72 h-72 md:w-96 md:h-96 rounded-2xl object-cover shadow-2xl"
                style={{ 
                  aspectRatio: "1/1",           // Prevents layout shift/jumping
                  contentVisibility: "auto",    // Optimizes rendering
                  backgroundColor: "#1a1a1a"    // Subtle placeholder color
                }}
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-2xl border border-primary/30 -z-10" />
              <div className="absolute -bottom-8 -right-8 w-72 h-72 md:w-96 md:h-96 rounded-2xl border border-primary/10 -z-20" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};
