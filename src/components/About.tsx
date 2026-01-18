import { motion } from "framer-motion";
import { Code2, Blocks, Rocket } from "lucide-react";

const highlights = [
  {
  icon: Blocks,
  title: "Blockchain & Web3 Developer",
  description: "Building smart contracts and decentralized applications using Solana, Rust, and modern Web3 tooling."
},
{
  icon: Code2,
  title: "Full-Stack Developer",
  description: "Developing scalable web applications with React, Node.js, Express, MongoDB, and modern frontend tooling."
}

  
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-foreground">
            Bridging Web2 and Web3
          </h2>
            I develop full-stack applications and decentralized products using modern web
            technologies and blockchain platforms. My experience includes frontend
            engineering, backend API development, and Web3 integrations, with a strong
            emphasis on clean architecture, performance optimization, and intuitive user
            experiences.
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-6 text-center group hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
