'use client';

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import { Mic, Users, Cloud, Folder, Sparkles, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Mic className="w-6 h-6 text-foreground" />,
    title: "Voice Transcription",
    headerTitle: "Capture Every Word",
    headerDescription: "Crystal clear transcription for your deepest thoughts and sudden realizations.",
    description: "Speak your thoughts naturally. Our AI converts your voice to text in real-time with remarkable accuracy.",
    accentColor: "accent" as const,
  },
  {
    icon: <Users className="w-6 h-6 text-foreground" />,
    title: "Speaker Detection",
    headerTitle: "Know Who Spoke",
    headerDescription: "Identify multiple speakers automatically. Perfect for meetings, interviews, and group brainstorming.",
    description: "Automatically identify different speakers in your recordings. Perfect for meetings and interviews.",
    accentColor: "highlight" as const,
  },
  {
    icon: <Folder className="w-6 h-6 text-foreground" />,
    title: "Smart Organization",
    headerTitle: "Think Clearly",
    headerDescription: "Automated tags and categories that keep your digital mind clutter-free and organized.",
    description: "Categories, tags, and filters that just work. Find any note instantly with powerful search.",
    accentColor: "muted" as const,
  },
  {
    icon: <Cloud className="w-6 h-6 text-foreground" />,
    title: "Cloud Syncing",
    headerTitle: "Always With You",
    headerDescription: "Your notes live in the cloud, encrypted and ready on all your devices, whenever you need them.",
    description: "Your notes follow you everywhere. Seamless sync across all your devices, always up to date.",
    accentColor: "accent" as const,
  },
  {
    icon: <Sparkles className="w-6 h-6 text-foreground" />,
    title: "AI Summaries",
    headerTitle: "Get The Gist",
    headerDescription: "Long recordings condensed into powerful, actionable insights and key takeaways in seconds.",
    description: "Get instant summaries of long recordings. Let AI highlight the key points for you.",
    accentColor: "highlight" as const,
  },
  {
    icon: <Lock className="w-6 h-6 text-foreground" />,
    title: "Private & Secure",
    headerTitle: "Safe and Sound",
    headerDescription: "Military-grade encryption for your most personal ideas. Your data belongs to you alone.",
    description: "Your ideas are yours alone. End-to-end encryption keeps your notes completely private.",
    accentColor: "muted" as const,
  },
];

const GooeyHeader = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={cn("relative h-20 md:h-28 flex items-center justify-center overflow-visible", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full flex items-center justify-center" style={{ filter: "url(#threshold)" }}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={title}
            initial={{ filter: "blur(20px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            exit={{ filter: "blur(20px)", opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="absolute inline-block select-none text-center font-jersey-25 text-5xl md:text-7xl font-bold text-foreground !leading-[.9] tracking-wide whitespace-nowrap"
          >
            {title}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgOpacity, setBgOpacity] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const featuresTop = containerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, 1 - (featuresTop / viewportHeight)));
      setBgOpacity(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerX = useTransform(
    scrollYProgress,
    [0, 0.40, 0.50, 0.76, 0.86, 1],
    ["-50%", "-50%", "-80%", "-80%", "-50%", "-50%"]
  );
  
  const headerY = useTransform(
    scrollYProgress,
    [0, 0.40, 0.50, 0.76, 0.86, 1],
    ["-135%", "-135%", "-50%", "-50%", "100%", "100%"]
  );

  const [currentIdx, setCurrentIdx] = useState(0);
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  
  useEffect(() => {
    const initialProgress = scrollYProgress.get();
    let initialIdx = -1;
    if (initialProgress >= 0 && initialProgress <= 0.12) initialIdx = 0;
    else if (initialProgress > 0.14 && initialProgress <= 0.26) initialIdx = 1;
    else if (initialProgress > 0.28 && initialProgress <= 0.40) initialIdx = 2;
    else if (initialProgress > 0.50 && initialProgress <= 0.64) initialIdx = 3;
    else if (initialProgress > 0.66 && initialProgress <= 0.80) initialIdx = 4;
    else if (initialProgress > 0.84 && initialProgress <= 0.98) initialIdx = 5;
    
    if (initialIdx !== -1) {
      setCurrentIdx(initialIdx);
    }
    setActiveCardIdx(initialIdx);

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      let cardIdx = -1;
      if (latest >= 0 && latest <= 0.12) cardIdx = 0;
      else if (latest > 0.14 && latest <= 0.26) cardIdx = 1;
      else if (latest > 0.28 && latest <= 0.40) cardIdx = 2;
      else if (latest > 0.50 && latest <= 0.64) cardIdx = 3;
      else if (latest > 0.64 && latest <= 0.76) cardIdx = 4;
      else if (latest > 0.86 && latest <= 0.98) cardIdx = 5;
      
      setActiveCardIdx(cardIdx);
      
      if (cardIdx !== -1) {
        setCurrentIdx(cardIdx);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section id="features" ref={containerRef} className="relative h-[1200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-[#e7e5db] z-0"
          style={{ opacity: bgOpacity }}
        />

        <div className="relative container mx-auto max-w-7xl px-4 h-full flex items-center justify-center z-10">
          
          <motion.div
            style={{ 
              left: "50%",
              top: "50%",
              x: headerX, 
              y: headerY,
            }}
            className="absolute z-20 w-full max-w-4xl flex flex-col items-center justify-center text-center pointer-events-none"
          >
            <span className="inline-block text-sm font-medium text-muted-foreground uppercase tracking-wider mb-0">
              Features
            </span>
            
            <GooeyHeader title={features[currentIdx]?.headerTitle || ""} className="-mb-4" />

            <div className="h-24 flex items-start justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
                >
                  {features[currentIdx]?.headerDescription}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <AnimatePresence mode="wait">
              {activeCardIdx !== -1 && (
                <motion.div
                  key={activeCardIdx}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute pointer-events-auto w-full max-w-[400px]"
                  style={{
                    top: activeCardIdx <= 2 ? "50%" : activeCardIdx <= 4 ? "40%" : "30%",
                    left: activeCardIdx <= 2 ? "50%" : activeCardIdx <= 4 ? "80%" : "50%",
                    x: "-50%",
                    y: "-50%"
                  }}
                >
                  <FeatureCard {...features[activeCardIdx]} isStatic />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
