import { AnimatedSection } from "../AnimatedSection";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Anurag Pathak. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Built with precision
            </p>
          </div>
        
      </div>
    </footer>
  );
};
