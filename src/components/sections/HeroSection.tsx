'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/PhoneMockup";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-accent/30 blob-shape blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-highlight/20 blob-shape blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            

            {/* Heading */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Capture your{" "}
              <span className="relative inline-block">
                ideas
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 3 150 3 198 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              as they happen.
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Joddit transforms your voice into organized notes. Speak freely, and let our 
              AI handle the rest—from transcription to speaker identification.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">10,000+ users</p>
                <p className="text-xs text-muted-foreground">capturing ideas daily</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockups */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Main phone */}
              <PhoneMockup delay={0.3}>
                <div className="p-5 pt-10">
                  <p className="text-xs text-muted-foreground mb-1">Hi, alex</p>
                  <h2 className="font-display text-2xl font-bold text-foreground leading-tight mb-1">My</h2>
                  <h2 className="font-display text-2xl font-bold text-foreground leading-tight mb-4">Personal Jots</h2>
                  
                  <div className="flex gap-2 mb-4">
                    <div className="bg-foreground text-primary-foreground text-xs px-3 py-1 rounded-full">All (5)</div>
                    <div className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Ideas (1)</div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">Recent</p>
                  
                  <div className="space-y-2">
                    <div className="bg-secondary/80 rounded-xl p-3">
                      <p className="text-xs font-semibold text-foreground">App Ideas</p>
                      <p className="text-[10px] text-muted-foreground">A note taking app that uses STT!</p>
                    </div>
                    <div className="bg-accent/50 rounded-xl p-3">
                      <p className="text-xs font-semibold text-foreground">hellooooo</p>
                      <p className="text-[10px] text-muted-foreground">The ultimate hello note :)</p>
                    </div>
                  </div>
                </div>
              </PhoneMockup>

              {/* Secondary phone - slightly behind */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-16 md:-right-24 top-10 -z-10 scale-90 opacity-60"
              >
                <div className="bg-foreground/80 rounded-[2.5rem] p-2 shadow-card">
                  <div className="bg-background rounded-[2rem] overflow-hidden aspect-[9/19.5] w-48 md:w-56 p-4 pt-8">
                    <p className="text-xs text-muted-foreground mb-1">10:42PM December 12, 2025</p>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">App Ideas</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="bg-accent/60 text-[9px] px-2 py-0.5 rounded-full">Speaker 1</span>
                      <span className="bg-highlight/60 text-[9px] px-2 py-0.5 rounded-full">Speaker 2</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">
                      A note taking app that uses STT! Dude, that's so sick...
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
