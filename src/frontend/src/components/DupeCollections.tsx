import { useProducts } from '../hooks/useProducts';
import { Skeleton } from '@/components/ui/skeleton';
import { Category } from '../backend';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

export function DupeCollections() {
  const { data: products, isLoading, error } = useProducts();
  const { ref, isVisible } = useFadeInOnScroll();

  // Filter to show only dupe products
  const dupeProducts = products?.filter(
    (product) => product.category === Category.dupe
  );

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, imageName: string) => {
    console.error(`Failed to load image: ${imageName}`, e.currentTarget.src);
    e.currentTarget.style.backgroundColor = '#1a1a1a';
  };

  return (
    <section 
      id="refined" 
      ref={ref}
      className={`py-32 lg:py-42 bg-background fade-in-section ${isVisible ? 'fade-in-visible' : ''}`}
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-20 lg:mb-32 space-y-8">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-8">
            Refined Alternatives
          </h2>
          <div className="gold-divider max-w-md mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Sophisticated style, accessible luxury—inspired by the finest
          </p>
        </div>

        {/* Featured dupe product imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 lg:mb-32">
          <div className="luxury-image-frame luxury-image-hover overflow-hidden h-[500px] lg:h-[600px] bg-muted border-[#E0C9A6]">
            <img
              src="/assets/generated/dupe-product-1.dim_600x800.png"
              alt="Refined alternative collection piece"
              className="w-full h-full object-cover"
              width={600}
              height={800}
              style={{ aspectRatio: '3/4' }}
              onError={(e) => handleImageError(e, 'dupe-product-1')}
            />
          </div>
          <div className="luxury-image-frame luxury-image-hover overflow-hidden h-[500px] lg:h-[600px] bg-muted border-[#E0C9A6]">
            <img
              src="/assets/generated/dupe-product-2.dim_600x800.png"
              alt="Inspired luxury alternative"
              className="w-full h-full object-cover"
              width={600}
              height={800}
              style={{ aspectRatio: '3/4' }}
              onError={(e) => handleImageError(e, 'dupe-product-2')}
            />
          </div>
          <div className="luxury-image-frame luxury-image-hover overflow-hidden h-[500px] lg:h-[600px] bg-muted border-[#E0C9A6]">
            <img
              src="/assets/generated/dupe-product-3.dim_600x800.png"
              alt="Reimagined luxury style"
              className="w-full h-full object-cover"
              width={600}
              height={800}
              style={{ aspectRatio: '3/4' }}
              onError={(e) => handleImageError(e, 'dupe-product-3')}
            />
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-6">
                <Skeleton className="aspect-[3/4] w-full bg-muted" />
                <Skeleton className="h-8 w-3/4 bg-muted" />
                <Skeleton className="h-6 w-full bg-muted" />
                <Skeleton className="h-6 w-1/4 bg-muted" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <p className="text-destructive text-lg">Unable to load refined alternatives. Please try again later.</p>
          </div>
        )}

        {dupeProducts && dupeProducts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {dupeProducts.map((product) => (
              <article 
                key={product.name}
                className="group cursor-pointer card-hover"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-8 border border-[#E0C9A6] hover:border-[#C6A75E] transition-all duration-700 shadow-luxury hover:shadow-gold-glow-soft product-spotlight-light">
                  <img
                    src={product.imageRef}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    style={{ aspectRatio: '3/4' }}
                    onError={(e) => handleImageError(e, product.name)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                    <p className="text-foreground/90 leading-relaxed text-base">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 px-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-3xl font-light text-foreground group-hover:text-[#E0C9A6] transition-colors duration-500">
                      {product.name}
                    </h3>
                    <span className="text-xs tracking-ultra-wide uppercase text-[#E0C9A6] border border-[#E0C9A6] px-4 py-2 whitespace-nowrap">
                      Inspired
                    </span>
                  </div>
                  
                  <p className="text-2xl font-light text-[#E0C9A6] tracking-wide">
                    ${Number(product.price).toLocaleString()}
                  </p>
                  
                  <button className="border-2 border-[#E0C9A6] text-[#E0C9A6] bg-transparent hover:bg-[#E0C9A6]/10 hover:shadow-gold-glow-soft transition-all duration-500 px-8 py-3 text-xs tracking-ultra-wide uppercase w-full">
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {dupeProducts && dupeProducts.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <p className="text-foreground/60 text-xl">
              New refined alternatives coming soon. Stay tuned for accessible luxury.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
