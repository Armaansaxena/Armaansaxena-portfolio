/**
 * ============================================================================
 * EXPERIENCE COMPONENT
 * ============================================================================
 * 
 * TODO: CONFIGURATION NEEDED
 * --------------------------
 * 1. Update the experiences array with your actual work history
 * 2. Add your company logos to src/assets/ and import them
 * 3. Update descriptions with your achievements and responsibilities
 * 
 * FUTURE UPGRADES:
 * - Add company logo images
 * - Link to company websites
 * - Add collapsible detailed descriptions
 * - Integrate with LinkedIn API for automatic updates
 * ============================================================================
 */

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

// TODO: Replace with your actual work experience
const experiences = [
  {
    title: "Senior Blockchain Developer",
    company: "DeFi Protocol Inc.",
    period: "2022 - Present",
    description:
      "Leading smart contract development for a multi-chain DeFi platform. Built yield optimization strategies handling $50M+ TVL. Implemented security best practices and conducted code audits.",
    technologies: ["Solidity", "Rust", "React", "The Graph"],
  },
  {
    title: "Full Stack Developer",
    company: "Web3 Startup",
    period: "2020 - 2022",
    description:
      "Developed NFT marketplace with lazy minting and auction features. Built microservices architecture handling 10k+ daily transactions. Led frontend team of 4 developers.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Software Engineer",
    company: "Tech Company",
    period: "2018 - 2020",
    description:
      "Built scalable REST APIs and real-time data pipelines. Migrated legacy systems to modern cloud infrastructure. Improved system performance by 40% through optimization.",
    technologies: ["Python", "Django", "React", "Docker"],
  },
  {
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2016 - 2018",
    description:
      "Developed responsive web applications for various clients. Collaborated with design team to implement pixel-perfect UIs. Maintained and improved existing codebases.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 -translate-x-1/2 mt-6 z-10" />

              {/* Content Card */}
              <div
                className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="card-elevated p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="font-mono text-sm">{exp.company}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
