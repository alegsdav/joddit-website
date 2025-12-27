'use client';

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import { Mic, Users, Cloud, Folder, Sparkles, Lock } from "lucide-react";

const FeaturesSection = () => {
  const [bgOpacity, setBgOpacity] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const featuresTop = sectionRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Calculate opacity: fade from 0 to 1 as FeaturesSection approaches top of viewport
      // This is the inverse of GradFlow fade (1 to 0)
      // Opacity should be 1 when featuresTop === 0 (FeaturesSection at top)
      // Opacity should be 0 when featuresTop >= viewportHeight (FeaturesSection below viewport)
      const scrollProgress = Math.max(0, Math.min(1, 1 - (featuresTop / viewportHeight)));
      
      setBgOpacity(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const features = [
    {
      icon: <Mic className="w-6 h-6 text-foreground" />,
      title: "Voice Transcription",
      description: "Speak your thoughts naturally. Our AI converts your voice to text in real-time with remarkable accuracy.",
      accentColor: "accent" as const,
    },
    {
      icon: <Users className="w-6 h-6 text-foreground" />,
      title: "Speaker Detection",
      description: "Automatically identify different speakers in your recordings. Perfect for meetings and interviews.",
      accentColor: "highlight" as const,
    },
    {
      icon: <Folder className="w-6 h-6 text-foreground" />,
      title: "Smart Organization",
      description: "Categories, tags, and filters that just work. Find any note instantly with powerful search.",
      accentColor: "muted" as const,
    },
    {
      icon: <Cloud className="w-6 h-6 text-foreground" />,
      title: "Cloud Syncing",
      description: "Your notes follow you everywhere. Seamless sync across all your devices, always up to date.",
      accentColor: "accent" as const,
    },
    {
      icon: <Sparkles className="w-6 h-6 text-foreground" />,
      title: "AI Summaries",
      description: "Get instant summaries of long recordings. Let AI highlight the key points for you.",
      accentColor: "highlight" as const,
    },
    {
      icon: <Lock className="w-6 h-6 text-foreground" />,
      title: "Private & Secure",
      description: "Your ideas are yours alone. End-to-end encryption keeps your notes completely private.",
      accentColor: "muted" as const,
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 px-4">
      {/* Background layer with scroll-based opacity */}
      <div 
        className="absolute inset-0 bg-[#e7e5db] transition-opacity duration-300"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative container mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Features
          </span>
          <h2 className="font-jersey-25 text-4xl md:text-5xl font-bold text-foreground mb-4 !leading-[.9]">
            The one thing you wish you had when you're in a rush
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features wrapped in simplicity. Start recording your thoughts in seconds.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
