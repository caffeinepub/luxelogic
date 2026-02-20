import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function Hero() {
  const { ref, isVisible } = useFadeInOnScroll();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, imageName: string) => {
    console.error(`Failed to load image: ${imageName}`, e.currentTarget.src);
  };

  return (
    <section 
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden fade-in-section ${isVisible ? 'fade-in-visible' : ''}`}
    >
      {/* Animated gold light streak */}
      <div className="gold-streak" style={{ top: '20%' }} />
      <div className="gold-streak" style={{ top: '60%', animationDelay: '5s' }} />
      
      {/* Layered background with lifestyle imagery - increased visibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Luxury fashion hero background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
          onError={(e) => handleImageError(e, 'hero-bg')}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/35 to-background/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-8 lg:px-16 py-32 mt-24">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-semibold tracking-wide text-primary text-shadow-gold">
              Curated Luxury. Timeless Power.
            </h1>
            
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-primary" />
              <div className="w-3 h-3 rotate-45 border-2 border-primary" />
              <div className="w-32 h-px bg-gradient-to-l from-transparent via-primary to-primary" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/95 max-w-4xl mx-auto tracking-wide">
            Where fashion meets legacy.
          </p>
          
          <div className="pt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#collections"
              className="inline-block px-16 py-5 btn-gold-outline text-sm tracking-ultra-wide uppercase font-medium"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
