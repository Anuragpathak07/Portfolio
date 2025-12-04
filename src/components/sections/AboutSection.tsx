import { AnimatedSection } from "../AnimatedSection";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <span className="text-2xl font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            About
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary leading-tight mb-12">
          I design purposeful digital experiences and build solutions that are precise, scalable, and user-focused.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground leading-relaxed">
             I’m Anurag Pathak, a 3rd-year Computer Science student at RCOEM with a CGPA of 9.01 ,A Full-stack AI/ML & Web GIS developer focused on building
              high-performance applications and modern geospatial solutions. I work across
              backend systems, interfaces, and automation pipelines, ensuring technology
              that is scalable, efficient, and user-centric.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience in software development, spatial analytics, and machine
              learning, I enjoy transforming complex workflows into seamless digital
              experiences. I believe in purposeful design, practical engineering, and
              solutions that create clear value.
            </p>
          </AnimatedSection>
        </div>


        
      </div>
    </section>
  );
};
