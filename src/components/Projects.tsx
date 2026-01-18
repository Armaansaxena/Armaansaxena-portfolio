import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "DeFi Yield Aggregator",
    description:
      "A decentralized yield optimization platform that automatically moves funds between protocols for maximum returns.",
    tags: ["Solidity", "React", "The Graph", "Hardhat"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "NFT Marketplace",
    description:
      "Full-featured NFT marketplace with lazy minting, royalties, and auction functionality built on Ethereum.",
    tags: ["Ethereum", "Next.js", "IPFS", "TypeScript"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Cross-Chain Bridge",
    description:
      "A secure bridge protocol enabling seamless asset transfers between EVM-compatible blockchains.",
    tags: ["Solidity", "Node.js", "PostgreSQL", "Web3"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "DAO Governance Platform",
    description:
      "Decentralized governance platform with proposal creation, voting, and treasury management features.",
    tags: ["Smart Contracts", "React", "GraphQL", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
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

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
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
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="View Live"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
