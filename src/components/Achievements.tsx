import { motion } from "framer-motion";
import { Cloud, Trophy, Award, Github, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "National Finalist | HACKSAGON 2025",
    organization: "ABV-IIITM Gwalior",
    description: "Ranked among the final teams out of 600+ registered teams in a National Level Software & Hardware Hackathon.",
    certificateUrl: "https://drive.google.com/file/d/19chP-uE0uH6T5uk3yiEf_D9WRCmS38uk/view?usp=sharing", 
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    title: "Semi Finalist | Hack for Impact",
    organization: "IIIT Delhi E-Summit'25",
    description: "Represented Team CTRL Freaks in a high-stakes competitive hackathon focusing on social impact solutions.",
    certificateUrl: "https://drive.google.com/file/d/1B7FQywxzIcvrfh-tzn-zAXMHnJScywkE/view?usp=sharing", 
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Tech Contributor | GSSOC 2025",
    organization: "GirlScript Summer of Code",
    description: "Recognized as a contributor for one of India's largest open-source programs, contributing to various tech stacks.",
    certificateUrl: "https://drive.google.com/file/d/17YYmHGm9YbUOvE5OwXz8zIC1uP0SI67z/view?usp=drive_link",
    icon: <Github className="w-6 h-6" />,
  },
  {
  title: "Cloud Engineering Participant",
  organization: "Google Cloud Arcade Program",
  description: "Completed the Cloud & AI Learning Track (Cohort 1). Gained hands-on experience in GCP services including Compute Engine, BigQuery, and Vertex AI workflows.",
  certificateUrl: "https://drive.google.com/file/d/1FMJl-aB82CHz9zbUADiVpOnEXWRJVxRH/view?usp=sharing", // Link to your Google Cloud Skills Boost public profile
  icon: <Cloud className="w-6 h-6" />, // Ensure you import { Cloud } from "lucide-react"
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">// Milestones</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Achievements & Awards</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group overflow-hidden"
            >
              {/* Action Button Overlay */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href={item.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="View Certificate"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Achievement Content */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 pr-8">{item.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{item.organization}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};