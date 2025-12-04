import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative gradient-hero px-6"
    >
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-6"
        >
          <span className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground">
          Solution-Driven Product Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-primary mb-8"
        >
          Anurag Pathak
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16"
        >
          Solving real problems with clean design and intelligent, user-focused development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            whileHover={{ y: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
