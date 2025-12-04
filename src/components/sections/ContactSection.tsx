import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";  // ⬅ Correct Toast Library
import { AnimatedSection } from "../AnimatedSection";
import { Mail, MapPin, ArrowUpRight, Github, Linkedin, Send } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anurag-pathak-2b043b197/",
    icon: <Linkedin size={18} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Anuragpathak07",
    icon: <Github size={18} />,
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "Portfolio_Anuragpathak", // Service ID
        "template_u0he7l5",       // Template ID
        {
          name: formData.name,
          email: formData.email,
          project: formData.project,
        },
        "uqJR1YqWH1fALWimN"       // Public Key
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", project: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Try again.");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        
        <AnimatedSection>
          <span className="text-2xl font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Contact
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight mb-8">
            Let's create something <br /> amazing together.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Let’s connect and explore the possibilities.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE CONTACT DETAILS */}
          <AnimatedSection delay={0.3}>
            <div className="space-y-10">
              
              <div>
                <div className="flex items-center gap-3 text-muted-foreground mb-2">
                  <Mail size={18} />
                  <span className="text-sm uppercase tracking-wider">Email</span>
                </div>
                <motion.a
                  href="mailto:anuragpathak2005@gmail.com"
                  className="text-xl md:text-2xl font-medium text-primary hover:text-muted-foreground inline-flex items-center gap-2 group"
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

              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                  Connect
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socials.map(({ name, href, icon }) => (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-border rounded-xl text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {icon}
                      {name}
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* RIGHT SIDE CONTACT FORM */}
          <AnimatedSection delay={0.4}>
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Insert Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-[#D8D8D8] bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/50 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Insert Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-[#D8D8D8] bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/50 transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project
                </label>
                <textarea
                  name="project"
                  required
                  rows={5}
                  placeholder="Write your project | feedback | msg"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-[#D8D8D8] bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/50 transition-colors duration-300 resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#232323] text-white font-medium rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </motion.form>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};
