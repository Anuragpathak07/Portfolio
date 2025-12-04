import { AnimatedSection } from "../AnimatedSection";

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


export const SkillsSection = () => {
  return (
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
                        <span
                          key={skill}
                          className="text-muted-foreground text-base"
                        >
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
  );
};
