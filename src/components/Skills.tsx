import { motion } from "framer-motion";



const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: "react" },
      { name: "TypeScript", logo: "typescript" },
      { name: "Next.js", logo: "nextdotjs" },
      { name: "Tailwind CSS", logo: "tailwindcss" },
      { name: "Framer Motion", logo: "framer" },
      { name: "Redux", logo: "redux" }
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Solidity", logo: "solidity" },
      { name: "Ethereum", logo: "ethereum" },
      { name: "Rust", logo: "rust" },
      { name: "Solana", logo: "solana" },
      { name: "Web3.js", logo: "web3.js" },
      { name: "Ethers.js", logo: "ethers" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "nodedotjs" },
      { name: "Express.js", logo: "express" },
      { name: "MongoDB", logo: "mongodb" },
      { name: "Redis", logo: "redis" },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Docker", logo: "docker" },
      { name: "GCP", logo: "googlecloud" },
      { name: "Git", logo: "git" },
    ],
  },
  // ... other categories
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-mono text-primary text-sm font-medium mb-6 uppercase tracking-widest">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    {/* Dynamic Logo from Simple Icons */}
                    <div className="w-8 h-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                      <img
                        src={`https://cdn.simpleicons.org/${skill.logo}/6366f1`} // 6366f1 is a primary indigo hex
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
