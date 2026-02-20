import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CollectionsShowcase } from './components/CollectionsShowcase';
import { MenswearShowcase } from './components/MenswearShowcase';
import { DupeCollections } from './components/DupeCollections';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <SectionDivider imageSrc="/assets/generated/gold-divider.dim_1200x100.png" />
          <CollectionsShowcase />
          <SectionDivider imageSrc="/assets/generated/hero-bg.dim_1920x1080.png" />
          <MenswearShowcase />
          <SectionDivider imageSrc="/assets/generated/about-bg.dim_1200x800.png" />
          <DupeCollections />
          <SectionDivider imageSrc="/assets/generated/product-1.dim_600x800.png" />
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
