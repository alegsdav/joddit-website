'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between bg-card/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-soft border border-border/50">
          {/* Logo */}
          <Link href="/" className="font-jersey text-3xl font-bold text-foreground">
            Joddit
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </nav>

          {/* CTA */}
          <Button size="sm">
            Download App
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
