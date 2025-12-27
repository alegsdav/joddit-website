'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Easy-to-edit feature lists for each tier
const FREE_FEATURES = [
  "4 minutes of transcription per day",
  "Voice-to-text conversion",
  "Basic note organization",
  "Up to 10 saved notes",
  "Mobile app access",
];

const INNOVATOR_FEATURES = [
  "Unlimited transcription",
  "Voice-to-text conversion",
  "Advanced note organization",
  "Unlimited saved notes",
  "Cloud sync across devices",
  "Speaker identification",
  "AI-powered summaries",
  "Priority support",
  "Export notes (PDF, TXT)",
];

interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  variant?: "default" | "outline";
}

const PricingSection = () => {
  const tiers: PricingTier[] = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: FREE_FEATURES,
      ctaText: "Get Started",
      variant: "outline",
    },
    {
      name: "Innovator",
      price: "$2.99",
      period: "per month",
      features: INNOVATOR_FEATURES,
      ctaText: "Start Free Trial",
      popular: true,
      variant: "default",
    },
  ];

  return (
    <section className="py-24 px-4 bg-[#e7e5db]" id="pricing">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="font-jersey-25 text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent pricing. Start free, upgrade when you need more.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-card rounded-3xl p-8 md:p-10 shadow-soft border-2 transition-all duration-300 ${
                tier.popular
                  ? 'border-foreground/30 scale-105 md:scale-110 shadow-card'
                  : 'border-border hover:border-foreground/20'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-foreground text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold font-jersey">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className="mb-6">
                <h3 className="font-jersey-25 text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="font-jersey-25 text-5xl md:text-6xl font-semibold text-foreground">
                    {tier.price}
                  </span>
                  {tier.price !== "$0" && (
                    <span className="text-muted-foreground text-sm">/mo</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.period}</p>
              </div>

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 shrink-0">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        tier.popular ? 'bg-foreground' : 'bg-muted'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          tier.popular ? 'text-primary-foreground' : 'text-foreground'
                        }`} />
                      </div>
                    </div>
                    <span className="text-muted-foreground font-body leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={tier.variant}
                size="lg"
                className={`w-full font-semibold rounded-xl ${
                  tier.popular
                    ? 'bg-foreground text-primary-foreground hover:bg-foreground/90'
                    : ''
                }`}
              >
                {tier.ctaText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include access to our mobile apps. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;

