import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Cpu, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Fundamentals of Web Apps",
    issuer: "IBM SkillsBuild",
    id: "URL-08D6D135B771",
    certificateUrl: "https://drive.google.com/file/d/1OYQHT0K7P2t5DE6VVHRhm2AsNagedPq4/view?usp=sharing",
    icon: <CheckCircle className="w-5 h-5" />,
    date: "2024",
  },
  {
    name: "AI & Cloud Deployment",
    issuer: "Microsoft Learn",
    id: "STU681a199480ad61746540948",
    certificateUrl: "https://drive.google.com/file/d/1V_jUnb0sFOUjWDfN1IsOvpsPFzLMVdyL/view?usp=sharing",
    icon: <Cpu className="w-5 h-5" />,
    date: "Aug 2024",
  },
  {
    name: "Cybersecurity Threat Landscape",
    issuer: "LinkedIn Learning",
    id: "00491253ce94449767cfb2ab19659f5d7a5037b6a1c1757f8f5266419b2ef4e2",
    certificateUrl: "https://drive.google.com/file/d/1AtMiw-VsnSdaXOWtH0Ailj2rALQT9RDi/view?usp=sharing",
    icon: <ShieldCheck className="w-5 h-5" />,
    date: "2024",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="font-mono text-primary text-sm tracking-wider">// Verification</span>
          <h2 className="text-3xl font-bold mt-2">Professional Certifications</h2>
        </motion.div>

        <div className="space-y-4 max-w-4xl">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-border bg-secondary/5 hover:border-primary/50 hover:bg-secondary/10 transition-all overflow-hidden"
            >
              {/* Action Button Overlay */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <motion.a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="flex items-center gap-4 mb-4 md:mb-0 group-hover:pr-12 transition-all">
                <div className="text-primary">{cert.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer} • {cert.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="font-mono text-[10px] md:text-xs text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                  ID: {cert.id}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};