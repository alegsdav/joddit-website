'use client';

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import PricingSection from "@/components/sections/PricingSection";
import Footer from "@/components/sections/Footer";

const GradFlow = dynamic(() => import("gradflow").then((mod) => mod.GradFlow), {
  ssr: false,
});

export default function Home() {
  const [opacity, setOpacity] = useState(1);
  const featuresRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!featuresRef.current) return;

      const featuresTop = featuresRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Calculate opacity: fade from 1 to 0 as FeaturesSection approaches top of viewport
      // Opacity should be 0 when featuresTop === 0 (FeaturesSection at top)
      // Opacity should be 1 when featuresTop >= viewportHeight (FeaturesSection below viewport)
      const scrollProgress = Math.max(0, Math.min(1, 1 - (featuresTop / viewportHeight)));
      
      setOpacity(1 - scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen">
      <div 
        className="fixed inset-0 -z-10 transition-opacity duration-300" 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -10,
          opacity: opacity
        }}
      >
        <GradFlow
          config={{
            color1: { r: 245, g: 158, b: 71 },
            color2: { r: 231, g: 229, b: 219 },
            color3: { r: 48, g: 49, b: 56 },
            speed: 0.3,
            scale: 1,
            type: 'smoke',
            noise: 0.08
          }}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <section id="features" ref={featuresRef}>
          <FeaturesSection />
        </section>
        <section id="how-it-works">
          <ShowcaseSection />
        </section>
        <PricingSection />
        <Footer />
      </div>
    </main>
  );
}

