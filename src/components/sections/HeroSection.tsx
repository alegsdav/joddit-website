'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Mic } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-40 px-4">

      {/* Main content - centered */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Eyebrow / Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          
            <Mic className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">Voice-Powered Note Taking</span>
          
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-jersey-25 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-foreground !leading-[.75] mb-8 tracking-wide"
        >
          Capture your{" "}
          <span className="relative inline-block">
            ideas
            <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 8C50 3 150 3 198 8" stroke="#000" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </span>{" "}
          as they happen
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Joddit transforms your voice into organized notes. Speak freely, and let our 
          AI handle the rest—from transcription to speaker identification.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <Button 
            size="lg" 
            className="group text-base px-8 py-6 rounded-xl hover:scale-[1.02] transition-all duration-200"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="group text-base px-8 py-6 rounded-xl hover:scale-[1.02] transition-all duration-200"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </Button>
        </motion.div>

        
      </div>
    </section>
  );
};

export default HeroSection;
