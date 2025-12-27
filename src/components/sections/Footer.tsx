'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Smartphone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#e7e5db] relative">
      <div className="footer-bg-gradient" />
      {/* CTA Section */}
      <section className="py-48 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-foreground rounded-3xl p-8 md:p-16 text-center overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-highlight/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
              >
                Start capturing ideas today
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8"
              >
                Join thousands of creative minds using Joddit to never lose a thought again. 
                Free to start, powerful to grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 group"
                >
                  <Apple className="w-5 h-5" />
                  Download for iOS
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Smartphone className="w-5 h-5" />
                  Android Coming Soon
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-sm text-primary-foreground/50"
              >
                No credit card required • Free 4 min/day transcription
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="pt-12 pb-4 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-start"
            >
              <Link href="/" className="font-jersey text-2xl font-bold text-foreground">Joddit</Link>
            </motion.div>

            {/* Links - Centered */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-foreground text-center md:text-right">
              <span className="font-bold">© 2025 Joddit.</span> All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
