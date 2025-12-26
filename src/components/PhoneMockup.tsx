'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const PhoneMockup = ({ children, className = "", delay = 0 }: PhoneMockupProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      {/* Phone frame */}
      <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground rounded-b-2xl z-10" />
        
        {/* Screen */}
        <div className="relative bg-background rounded-[2rem] overflow-hidden aspect-[9/19.5] w-56 md:w-64">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneMockup;
