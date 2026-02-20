import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function About() {
  const { ref, isVisible } = useFadeInOnScroll();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, imageName: string) => {
    console.error(`Failed to load image: ${imageName}`, e.currentTarget.src);
    e.currentTarget.style.backgroundColor = '#1a1a1a';
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-32 lg:py-42 bg-background fade-in-section ${isVisible ? 'fade-in-visible' : ''}`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div className="relative h-[450px] lg:h-[550px] overflow-hidden border border-primary/30 shadow-luxury-lg bg-muted">
            <img
              src="/assets/generated/about-bg.dim_1200x800.png"
              alt="LuxeLogic luxury fashion experience"
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              style={{ aspectRatio: '3/2', minHeight: '450px' }}
              onError={(e) => handleImageError(e, 'about-bg')}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/20" />
            <div className="absolute inset-0 border border-primary/20 pointer-events-none" style={{ margin: '1rem' }} />
          </div>
          
          <div className="space-y-10 lg:space-y-12">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8">
                A Personalized Experience
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-primary to-transparent mb-10" />
            </div>
            
            <div className="space-y-8 text-lg md:text-xl text-foreground/85 leading-relaxed">
              <p>
                At LuxeLogic, we believe that luxury is not just about owning beautiful things—it's about the experience of discovering pieces that resonate with your unique style and story.
              </p>
              
              <p>
                Our carefully curated collections blend contemporary luxury fashion with timeless vintage treasures, each selected for its exceptional quality, craftsmanship, and ability to elevate your personal aesthetic.
              </p>
              
              <p>
                We are committed to showcasing an aspirational lifestyle where every product represents more than just an acquisition—it's an investment in timeless elegance and enduring style.
              </p>
              
              <p>
                For those seeking accessible luxury, our refined alternatives collection offers meticulously curated pieces that capture the essence of high-end fashion, making sophisticated style attainable for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-10 pt-12 border-t border-primary/30">
              <div className="text-center lg:text-left">
                <p className="font-heading text-4xl md:text-5xl text-primary mb-3 font-light">100+</p>
                <p className="text-xs md:text-sm tracking-widest uppercase text-foreground/70">Curated Pieces</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-heading text-4xl md:text-5xl text-primary mb-3 font-light">50+</p>
                <p className="text-xs md:text-sm tracking-widest uppercase text-foreground/70">Luxury Brands</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-heading text-4xl md:text-5xl text-primary mb-3 font-light">20+</p>
                <p className="text-xs md:text-sm tracking-widest uppercase text-foreground/70">Years Heritage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury accessories flat lay showcase - increased sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">
          <div className="luxury-image-frame luxury-image-overlay luxury-image-hover overflow-hidden h-[450px] lg:h-[550px] bg-muted">
            <img
              src="/assets/generated/product-1.dim_600x800.png"
              alt="Curated luxury accessories flat lay"
              className="w-full h-full object-cover"
              width={600}
              height={800}
              style={{ aspectRatio: '3/4', minHeight: '450px' }}
              onError={(e) => handleImageError(e, 'accessories-1')}
            />
          </div>
          <div className="luxury-image-frame luxury-image-overlay luxury-image-hover overflow-hidden h-[450px] lg:h-[550px] bg-muted">
            <img
              src="/assets/generated/product-2.dim_600x800.png"
              alt="Elegant styling and curation details"
              className="w-full h-full object-cover"
              width={600}
              height={800}
              style={{ aspectRatio: '3/4', minHeight: '450px' }}
              onError={(e) => handleImageError(e, 'accessories-2')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
