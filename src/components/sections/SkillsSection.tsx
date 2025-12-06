import { AnimatedSection } from "../AnimatedSection";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Core Languages & Frameworks",
    items: ["Python", "JavaScript/TypeScript", "Kotlin", "React", "Django", "Flask"],
  },
  {
    category: "Machine Learning & Data",
    items: ["TensorFlow", "Scikit-learn", "NLP", "Computer Vision", "Pandas", "NumPy"],
  },
  {
    category: "Web & Mobile Development",
    items: ["Full-Stack Apps", "REST APIs", "Android Development", "Dashboard UI/UX"],
  },
  {
    category: "Geospatial & Remote Sensing",
    items: ["Leaflet", "Cesium", "GeoServer", "QGIS", "GDAL", "Spatial Workflows"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Linux", "Google Drive API", "Cloud & Mapping APIs"],
  },
];

const certificates = [
  {
    name: "Professional Certificate in IBM RAG and Agentic AI",
    issuer: "IBM",
    year: "2025",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/497KNBQEP0W8",
  },
  {
    name: "Data Analysis with R Programmings",
    issuer: "Google",
    year: "2025",
    link: "http://coursera.org/account/accomplishments/verify/CAN4O1I7GOED",
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/90KLN4HGWUE7",
  },
  {
    name: "Cyber Security Fundamentals",
    issuer: "University of London",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/WCI3UIVTD3C7",
  },
  {
    name: "Machine Learning for All",
    issuer: "University of London",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/verify/M4WHK8YF53U6",
  },
  
];

export const SkillsSection = () => {
  return (
    <>
      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-2xl font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Skills
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-20">
              What I work with
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {skills.map((skillGroup, index) => (
              <AnimatedSection key={skillGroup.category} delay={0.1 * (index + 1)}>
                <div className="py-8 border-t border-border first:border-t-0">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-8 items-start">
                    <h3 className="text-lg font-medium text-primary">
                      {skillGroup.category}
                    </h3>
                    <div className="md:col-span-2">
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill) => (
                          <span key={skill} className="text-muted-foreground text-base">
                            {skill}
                            {skillGroup.items.indexOf(skill) < skillGroup.items.length - 1 && (
                              <span className="ml-3 text-border">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES SECTION FULL-WIDTH CARDS */}
<section id="certificates" className="py-32 px-6">
  <div className="container mx-auto max-w-5xl">

    <AnimatedSection>
      <span className="text-2xl font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
        Certificates
      </span>
    </AnimatedSection>

    <AnimatedSection delay={0.1}>
      <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-20">
        Verified Achievements
      </h2>
    </AnimatedSection>

    <div className="space-y-6">
      {certificates.map((cert, index) => (
        <AnimatedSection key={cert.name} delay={0.1 * (index + 1)}>
          <motion.div
            className="border border-border rounded-2xl p-6 bg-card shadow-sm hover:shadow-xl hover:bg-secondary/10 transition-all cursor-pointer w-full"
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="flex justify-between items-center flex-wrap gap-3">
              <div>
                <h3 className="text-xl font-semibold text-primary">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-block px-4 py-1 text-xs rounded-full bg-secondary text-primary font-medium">
                  {cert.year}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>

  </div>
</section>

    </>
  );
};
