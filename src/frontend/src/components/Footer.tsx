import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <footer 
      ref={ref}
      className={`bg-card/50 fade-in-section ${isVisible ? 'fade-in-visible' : ''}`}
    >
      <div className="container mx-auto px-8 lg:px-16 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <img 
              src="/assets/generated/luxelogic-logo.dim_400x400.png" 
              alt="LuxeLogic" 
              className="h-16 w-auto mb-8"
            />
            <p className="text-foreground/75 leading-relaxed text-lg">
              Curating timeless luxury and vintage fashion for the discerning individual.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm tracking-ultra-wide uppercase text-primary mb-8 font-medium">Navigate</h3>
            <nav className="space-y-4">
              <a 
                href="#collections" 
                className="block text-foreground/70 hover:text-primary transition-colors duration-300 text-base"
              >
                Collections
              </a>
              <a 
                href="#refined" 
                className="block text-foreground/70 hover:text-primary transition-colors duration-300 text-base"
              >
                Refined Alternatives
              </a>
              <a 
                href="#about" 
                className="block text-foreground/70 hover:text-primary transition-colors duration-300 text-base"
              >
                About
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-sm tracking-ultra-wide uppercase text-primary mb-8 font-medium">Experience</h3>
            <p className="text-foreground/70 leading-relaxed text-base">
              Discover the art of curated luxury. Each piece in our collection is selected to embody timeless elegance and sophisticated style.
            </p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-primary/20 text-center">
          <p className="text-foreground/60 text-sm flex items-center justify-center gap-2">
            © {currentYear} LuxeLogic.{' '}
            <span className="text-primary">by Nav</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
