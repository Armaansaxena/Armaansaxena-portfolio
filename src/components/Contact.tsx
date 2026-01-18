/**
 * ============================================================================
 * CONTACT COMPONENT
 * ============================================================================
 * 
 * TODO: CONFIGURATION NEEDED
 * --------------------------
 * 1. Update email address (hello@yourname.dev)
 * 2. Update location
 * 3. Configure email sending by setting up RESEND_API_KEY:
 *    - Go to https://resend.com and create an account
 *    - Verify your domain at https://resend.com/domains
 *    - Create an API key at https://resend.com/api-keys
 *    - Add the RESEND_API_KEY secret in your Lovable project settings
 * 
 * FUTURE UPGRADES:
 * - Add form validation with better error messages
 * - Add reCAPTCHA to prevent spam
 * - Store submissions in database for backup
 * - Add file attachment support
 * - Integrate with calendar for scheduling meetings
 * ============================================================================
 */

import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("DEBUG - Env Variables:", {
      service: import.meta.env.VITE_EMAIL_SERVICE_ID,
      template: import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      key: import.meta.env.VITE_EMAIL_PUBLIC_KEY
    });

    // Environment Variables
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; // Added JS
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Added JS
    const GREETING_TEMPLATE_ID = import.meta.env.VITE_EMAIL_GREETING_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Added JS

    try {
      // 1. Send notification to YOU
      const adminRes = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );

      if (adminRes.text !== 'OK') throw new Error("Admin notification failed");

      // 2. Send greeting email to the SENDER
      // We use .send() here to map the existing state data to the greeting template
      await emailjs.send(
        SERVICE_ID,
        GREETING_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Success! Check your inbox for a confirmation email.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            // Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            {/* TODO: Update with your email */}
            <a
              href="mailto:armaansaxena704@gmail.com?subject=Contacting%20from%20Portfolio&body=Hi%20Armaan,"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm">armaansaxena704@gmail.com</span>
            </a>
            {/* TODO: Update with your location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm">Gwalior, India</span>
            </div>
          </motion.div>

          <motion.form
            ref={formRef} // Attach the ref here
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" // Important: match your EmailJS template variable
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="reply_to" // Important: match your EmailJS template variable
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message" // Important: match your EmailJS template variable
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                placeholder="Tell me about your project..."
                required
                disabled={isSubmitting}
              />
            </div>
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
