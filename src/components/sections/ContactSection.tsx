import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin, Twitter, DribbbleIcon } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    href: "www.linkedin.com/in/anurag-pathak-2b043b197",
    icon: <Linkedin size={18} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Anuragpathak07",
    icon: <Github size={18} />,
  },
  
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <span className="text-2xl font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Contact
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-8">
            Let's create something
            <br />
            amazing together.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let's connect and explore
            the possibilities.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT SIDE */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 text-muted-foreground mb-2">
                  <Mail size={18} />
                  <span className="text-sm uppercase tracking-wider">Email</span>
                </div>
                <motion.a
                  href="mailto:anuragpathak2005@gmail.com"
                  className="text-xl md:text-2xl font-medium text-primary hover:text-muted-foreground transition-colors inline-flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  anuragpathak2005@gmail.com
                  <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </div>

              <div>
                <div className="flex items-center gap-3 text-muted-foreground mb-2">
                  <MapPin size={18} />
                  <span className="text-sm uppercase tracking-wider">Location</span>
                </div>
                <p className="text-xl md:text-2xl font-medium text-primary">
                  Nagpur, Maharashtra, India
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT SIDE - SOCIAL LINKS */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Connect
              </h3>

              <div className="flex flex-wrap gap-4">
                {socials.map(({ name, href, icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-border rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                    {name}
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
};
