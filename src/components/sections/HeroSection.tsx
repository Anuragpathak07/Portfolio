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
              src="/images/profile.jpeg"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
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
          >
            Solution-Driven Product Developer
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold tracking-tight text-primary mb-6"
          >
            Anurag Pathak
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-6 mx-auto lg:mx-0"
          >
            Solving real problems with clean design and intelligent, user-focused development.
          </motion.p>

          {/* Download Resume Button */}
          <motion.a
            href="/resume.pdf"       // 👈 PLACE YOUR RESUME IN /public/resume.pdf
            download
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/80 transition-all duration-300 mb-8"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
