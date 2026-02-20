import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function MenswearShowcase() {
  const { ref, isVisible } = useFadeInOnScroll();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, imageName: string) => {
    console.error(`Failed to load image: ${imageName}`, e.currentTarget.src);
    e.currentTarget.style.backgroundColor = '#1a1a1a';
  };

  return (
    <section 
      ref={ref}
      className={`py-32 lg:py-42 bg-background fade-in-section ${isVisible ? 'fade-in-visible' : ''}`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-20 lg:mb-32 space-y-8">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8">
            Timeless Elegance
          </h2>
          <div className="gold-divider max-w-md mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Power and sophistication in every detail
          </p>
        </div>

        {/* Asymmetric menswear layout - increased sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 luxury-image-frame luxury-image-hover overflow-hidden h-[500px] lg:h-[700px] bg-muted">
            <img
              src="/assets/generated/product-1.dim_600x800.png"
              alt="Sophisticated menswear collection"
              className="w-full h-full object-cover"
              width={600}
              height={800}
              style={{ aspectRatio: '3/4', minHeight: '500px' }}
              onError={(e) => handleImageError(e, 'menswear-main')}
            />
          </div>
          <div className="luxury-image-frame luxury-image-hover overflow-hidden h-[500px] lg:h-[700px] bg-muted">
            <img
              src="/assets/generated/product-2.dim_600x800.png"
              alt="Luxury accessories and details"
              className="w-full h-full object-cover"
              width={600}
              height={800}
              style={{ aspectRatio: '3/4', minHeight: '500px' }}
              onError={(e) => handleImageError(e, 'menswear-accessories')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="luxury-image-frame luxury-image-hover overflow-hidden h-[450px] lg:h-[550px] bg-muted">
            <img
              src="/assets/generated/about-bg.dim_1200x800.png"
              alt="Luxury watches and fragrances collection"
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              style={{ aspectRatio: '3/2', minHeight: '450px' }}
              onError={(e) => handleImageError(e, 'menswear-watches')}
            />
          </div>
          <div className="flex flex-col justify-center space-y-8 px-4 lg:px-12">
            <h3 className="font-heading text-4xl md:text-5xl font-light text-foreground">
              Power & Sophistication
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-primary to-transparent" />
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
              Every detail matters. From the precision of a timepiece to the confidence of a perfectly tailored suit, our menswear collection embodies the essence of modern elegance and timeless style.
            </p>
            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed">
              Curated for those who understand that true luxury lies in the details—the weight of fine leather, the gleam of polished metal, the perfect drape of premium fabric.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
