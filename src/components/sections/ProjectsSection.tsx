import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "CogniPrep AI Learning Platform",
    description: "AI-powered study assistant that extracts key concepts from academic PDFs and generates structured flashcards, summaries, quizzes, and Q&A modules to improve learning efficiency.",
    category: "Full-stack Development",
    year: "2025",
    image: "/images/screenshot2.png",
    href: "https://summarizer-ai-front-git-34a5ea-anurag-pathaks-projects-0efc2869.vercel.app/",
  },
  {
    title: "Web Development",
    description: "Engineered a 3D GeoPortal with advanced spatial tools including elevation profile analysis, reverse geocoding, buffer proximity mapping, and shapefile insights, delivering 40% faster analytics and a Google Earth–like experience for enterprise users.",
    category: "UI/UX Design",
    year: "2025",
    image: "/images/screenshot3.png",
    href: "https://anuragpathak07.github.io/Geoportal/",
  },
  {
    title: "NetCDF-to-CSV",
    description: "Built a cross-platform React + ML desktop application that automates NetCDF-to-CSV conversion, reducing manual preprocessing by 95%, now deployed at MRSAC Nagpur and used daily across 100+ satellite data workflows.",
    category: "Windows Desktop Application",
    year: "2025",
    image: "/images/screenshot4.png",
    href: "https://drive.google.com/drive/folders/17BUBeghte88Gu4SCKVZJSocdhbhWbb7g?usp=sharing",
  },
  {
    title: "Azimuth Maps",
    description: "Engineered a geospatial survey app for Android featuring geofencing, GeoPDF mapping, and auto-sync to Google Drive—streamlining surveys by 50% and improving accuracy across more than 200 field submissions.",
    category: "Mobile Development",
    year: "2025",
    image: "/images/screenshot5.png",
    href: "https://drive.google.com/drive/folders/1aFHG_w3TAbo8NrfaUQ8OkdswrGVWWhw9?usp=sharing",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-screen-xl">
        
        <AnimatedSection>
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Projects
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-20">
            Selected Work
          </h2>
        </AnimatedSection>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.1 * (index + 1)}>
              <motion.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 cursor-pointer block"
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
                  
                  {/* Left Image */}
                  <div className="w-full h-60 md:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="p-6 md:pr-10">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span className="uppercase font-medium tracking-wide">
                        {project.category}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium text-primary"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project</span>
                      <ArrowUpRight
                        size={18}
                        className="group-hover:rotate-45 transition-transform duration-300"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
