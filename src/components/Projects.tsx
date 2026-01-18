/**
 * ============================================================================
 * PROJECTS COMPONENT
 * ============================================================================
 * 
 * TODO: CONFIGURATION NEEDED
 * --------------------------
 * 1. Update the projects array with your actual projects
 * 2. Replace generated images with your actual project screenshots
 * 3. Update GitHub and live demo URLs
 * 4. Add more projects as needed
 * 
 * FUTURE UPGRADES:
 * - Create individual project detail pages with routing
 * - Add project filtering by technology
 * - Integrate with GitHub API to show repo stats
 * - Add case study sections with detailed breakdowns
 * ============================================================================
 */

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import projectNotesChain from "@/assets/projectNotesChain.png";
import projectYoutweet from "@/assets/projectYouTweet.png";


// TODO: Replace with your actual projects
const projects = [
  {
    title: "NotesChain",
    description:
      "A decentralized note-taking application on Solana that ensures data immutability and user-owned privacy by removing centralized login systems.",
    tags: ["Solana", "Rust", "React", "Web3.js", "Vercel"],
    github: "https://github.com/Armaansaxena/Notes-Chain", // Standard link from your resume profile
    live: "https://noteschain.vercel.app/", // Replace with your actual project link
    image: projectNotesChain,
  },
  {
    title: "YouTweet API",
    description:
      "A production-grade backend for video and social media platforms, featuring secure JWT authentication and optimized media storage using Cloudinary.",
    tags: ["Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
    github: "https://github.com/Armaansaxena/Youtweet",
    image: projectYoutweet,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated group hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                
                {/* Action buttons overlay */}
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background transition-colors text-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-background transition-colors text-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View Live"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 
          TODO: FUTURE ENHANCEMENT
          Add a "View All Projects" button that links to a dedicated projects page
          with more detailed case studies
        */}
      </div>
    </section>
  );
};
