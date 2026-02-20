export function Header() {
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Failed to load logo:', e.currentTarget.src);
    e.currentTarget.style.display = 'none';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-24 lg:h-28">
          <div className="flex items-center space-x-2">
            <img 
              src="/assets/generated/luxelogic-logo.dim_400x150.png" 
              alt="LuxeLogic - Curated Luxury" 
              className="h-12 lg:h-14 w-auto"
              width={400}
              height={150}
              style={{ maxHeight: '56px' }}
              onError={handleLogoError}
            />
          </div>
          
          <nav className="flex items-center space-x-12 lg:space-x-16">
            <a 
              href="#collections" 
              className="text-sm tracking-ultra-wide uppercase text-foreground/80 hover:text-primary transition-all duration-300 relative group"
            >
              Collections
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </a>
            <a 
              href="#refined" 
              className="text-sm tracking-ultra-wide uppercase text-foreground/80 hover:text-primary transition-all duration-300 relative group"
            >
              Refined Alternatives
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </a>
            <a 
              href="#about" 
              className="text-sm tracking-ultra-wide uppercase text-foreground/80 hover:text-primary transition-all duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
