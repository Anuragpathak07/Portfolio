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
      className="min-h-screen flex items-center justify-center relative gradient-hero px-6"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border border-border">
            <img
              src="/images/profile.jpeg"   // <-- CHANGE THIS TO YOUR PROFILE IMAGE PATH
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />

            {/* Soft glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* RIGHT SIDE — Text Content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-muted-foreground block mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Solution-Driven Product Developer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tight text-primary mb-6"
          >
            Anurag Pathak
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 mx-auto lg:mx-0"
          >
            Solving real problems with clean design and intelligent, user-focused development.
          </motion.p>

          {/* Scroll Button */}
          <motion.button
            onClick={scrollToAbout}
            className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mx-auto lg:mx-0"
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

      {/* Decorative fade bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
