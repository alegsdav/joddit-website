'use client';

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const GradFlow = dynamic(() => import("gradflow").then((mod) => mod.GradFlow), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div 
        className="fixed inset-0 -z-10" 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -10
        }}
      >
        <GradFlow
          config={{
            color1: { r: 206, g: 145, b: 39 },
            color2: { r: 255, g: 255, b: 255 },
            color3: { r: 166, g: 166, b: 166 },
            speed: 0.6,
            scale: 2,
            type: 'smoke',
            noise: 0.30
          }}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="how-it-works">
          <ShowcaseSection />
        </section>
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}

