import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/armaan_saxena/", label: "LeetCode" },
    { icon: SiCodeforces, href: "https://codeforces.com/profile/armaan_saxena", label: "Codeforces" },
    { icon: SiGeeksforgeeks, href: "https://www.geeksforgeeks.org/profile/armaansaxena", label: "GeeksforGeeks" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm font-mono"
          >
            © {currentYear} Armaan Saxena. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
