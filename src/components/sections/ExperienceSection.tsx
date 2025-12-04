import { AnimatedSection } from "../AnimatedSection";

const experiences = [
  {
    role: "AI/ML & Web GIS Developer",
    company: "Maharashtra Remote Sensing Application Centre (MRSAC)",
    period: "April 2025 - May 2025",
    description:
    "Gained hands-on experience applying AI/ML to automate remote-sensing workflows and improve data usability at scale. Designed a desktop automation tool that streamlined NetCDF preprocessing by 95%, now used daily in operational pipelines. Also created a 3D Web Geo Portal with high-performance rendering, providing an intuitive interface for exploring complex datasets.",
  },
  {
    role: "Full Stack Developer",
    company: "ABsynergy",
    period: "June 2025 - September 2025",
    description:
    "Engineered full-stack web platforms featuring real-time dashboards, interactive data workflows, and AI-driven insights. Delivered a production-ready mobile survey app that streamlined field operations and enabled seamless data syncing.",
  },
  
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <span className="text-2xl font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Experience
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-20">
            Career journey
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <div className={`relative grid md:grid-cols-2 gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:direction-rtl'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 hidden md:block" />
                  
                  <div className={`${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                    <span className="text-sm text-muted-foreground mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-4">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
