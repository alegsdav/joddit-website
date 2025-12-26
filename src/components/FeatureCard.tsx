'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: "accent" | "highlight" | "muted";
  delay?: number;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  accentColor = "accent",
  delay = 0 
}: FeatureCardProps) => {
  const accentClasses = {
    accent: "bg-accent",
    highlight: "bg-highlight",
    muted: "bg-muted",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-500"
    >
      {/* Icon container */}
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${accentClasses[accentColor]} mb-5`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground font-body leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
