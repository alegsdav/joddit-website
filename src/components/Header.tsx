'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  const [darkProgress, setDarkProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById('features');
      if (!featuresSection) return;

      const featuresTop = featuresSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Calculate dark mode progress: 0 (light) to 1 (dark) as FeaturesSection approaches top
      // Same calculation as GradFlow fade and section backgrounds
      const scrollProgress = Math.max(0, Math.min(1, 1 - (featuresTop / viewportHeight)));
      
      setDarkProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background colors - interpolate between light and dark
  const bgOpacity = 0.8;
  const lightBgR = 247;
  const lightBgG = 245;
  const lightBgB = 237;
  const darkBgR = 30;
  const darkBgG = 10;
  const darkBgB = 12;
  
  const r = Math.round(lightBgR + (darkBgR - lightBgR) * darkProgress);
  const g = Math.round(lightBgG + (darkBgG - lightBgG) * darkProgress);
  const b = Math.round(lightBgB + (darkBgB - lightBgB) * darkProgress);
  const currentBg = `rgba(${r}, ${g}, ${b}, ${bgOpacity})`;
  
  // Text colors
  const lightText = 'hsl(30 10% 12%)'; // Dark text for light bg
  const darkText = 'hsl(40 20% 92%)'; // Light text for dark bg
  const lightMutedText = 'hsl(30 8% 45%)';
  const darkMutedText = 'rgba(255, 255, 255, 0.7)';
  
  // Interpolate text colors
  const textColor = darkProgress > 0.5 ? darkText : lightText;
  const mutedTextColor = darkProgress > 0.5 ? darkMutedText : lightMutedText;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <div 
          className="flex items-center justify-between backdrop-blur-lg rounded-full px-6 py-3 shadow-soft transition-all duration-300"
          style={{ 
            backgroundColor: currentBg
          }}
        >
          {/* Logo */}
          <Link 
            href="/" 
            className="font-jersey text-3xl font-bold transition-colors duration-300 cursor-pointer"
            style={{ color: textColor }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Joddit
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="text-sm transition-colors duration-300"
              style={{ color: mutedTextColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = textColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = mutedTextColor;
              }}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm transition-colors duration-300"
              style={{ color: mutedTextColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = textColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = mutedTextColor;
              }}
            >
              How it works
            </a>
            <a 
              href="#pricing" 
              className="text-sm transition-colors duration-300"
              style={{ color: mutedTextColor }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = textColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = mutedTextColor;
              }}
            >
              Pricing
            </a>
          </nav>

          {/* CTA */}
          <Button 
            size="sm" 
            className="transition-all duration-300"
            style={{
              backgroundColor: darkProgress > 0.5 ? 'white' : undefined,
              color: darkProgress > 0.5 ? 'black' : undefined,
            }}
          >
            Download App
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
