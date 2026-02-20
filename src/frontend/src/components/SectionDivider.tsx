import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

interface SectionDividerProps {
  imageSrc: string;
  text?: string;
}

export function SectionDivider({ imageSrc, text }: SectionDividerProps) {
  const { ref, isVisible } = useFadeInOnScroll();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load divider image:`, e.currentTarget.src);
    e.currentTarget.style.display = 'none';
  };

  return (
    <section 
      ref={ref}
      className={`relative h-80 lg:h-96 overflow-hidden fade-in-section ${isVisible ? 'fade-in-visible' : ''}`}
      style={{ backgroundColor: '#0B0B0B' }}
    >
      {/* Background image with reduced overlay for better visibility */}
      <img
        src={imageSrc}
        alt="Luxury lifestyle divider"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          opacity: 0.35,
          minHeight: '320px',
          zIndex: 0
        }}
        width={1200}
        height={100}
        onError={handleImageError}
      />
      
      {/* Subtle dark overlay to maintain text readability */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Gold borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary opacity-30 z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-primary opacity-30 z-20" />
      
      {/* Optional text overlay */}
      {text && (
        <div className="relative z-30 h-full flex items-center justify-center">
          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-primary text-shadow-gold">
            {text}
          </h3>
        </div>
      )}
    </section>
  );
}
