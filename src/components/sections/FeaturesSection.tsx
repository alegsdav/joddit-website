import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import { Mic, Users, Cloud, Folder, Sparkles, Lock } from "lucide-react";

const FeaturesSection = () => {
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
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="relative inline-block">
              capture
              <motion.span 
                className="absolute -bottom-1 left-0 h-3 w-full bg-highlight/40 -z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
              />
            </span>{" "}
            ideas
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features wrapped in simplicity. Start capturing your thoughts in seconds.
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
