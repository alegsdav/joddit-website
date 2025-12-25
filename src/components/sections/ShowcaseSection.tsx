import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";

const ShowcaseSection = () => {
  return (
    <section className="py-24 px-4 overflow-hidden">
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
            How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple. Intuitive. Beautiful.
          </h2>
          <p className="text-lg text-muted-foreground">
            From first tap to organized notes in seconds. No learning curve required.
          </p>
        </motion.div>

        {/* Phone showcase */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px]" />
          </div>

          {/* Phones row */}
          <div className="relative flex justify-center items-end gap-4 md:gap-8">
            {/* Phone 1 - Login */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
              className="hidden md:block"
            >
              <div className="bg-foreground rounded-[2rem] p-1.5 shadow-card scale-75 md:scale-90">
                <div className="bg-background rounded-[1.75rem] overflow-hidden w-48 aspect-[9/19.5] p-5 pt-14 flex flex-col items-center">
                  {/* Decorative blob */}
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" />
                  
                  <div className="relative z-10 mt-auto text-center pb-8">
                    <h3 className="font-display text-3xl font-bold text-foreground mb-2">Joddit</h3>
                    <p className="text-xs text-muted-foreground mb-6">Capture your ideas as they happen.</p>
                    <div className="space-y-2">
                      <div className="bg-transparent border border-border rounded-full px-6 py-2 text-xs">Log In</div>
                      <div className="bg-foreground text-primary-foreground rounded-full px-6 py-2 text-xs">Continue</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone 2 - Notes list (main) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="bg-foreground rounded-[2.5rem] p-2 shadow-elevated">
                <div className="bg-background rounded-[2rem] overflow-hidden w-56 md:w-64 aspect-[9/19.5] p-5 pt-10">
                  <p className="text-xs text-muted-foreground mb-1">Hi, alex</p>
                  <h2 className="font-display text-2xl font-bold text-foreground leading-tight">My</h2>
                  <h2 className="font-display text-2xl font-bold text-foreground leading-tight mb-4">Personal Jots</h2>
                  
                  <div className="bg-secondary/60 rounded-lg px-3 py-2 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full border border-muted-foreground/40" />
                    <span className="text-xs text-muted-foreground">Search</span>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <div className="bg-foreground text-primary-foreground text-[10px] px-3 py-1 rounded-full">All (5)</div>
                    <div className="bg-secondary text-secondary-foreground text-[10px] px-3 py-1 rounded-full">Ideas (1)</div>
                    <div className="text-muted-foreground text-[10px] flex items-center">+</div>
                  </div>
                  
                  <p className="text-[10px] font-medium text-muted-foreground mb-2">Recent</p>
                  
                  <div className="space-y-2">
                    <div className="bg-foreground/90 rounded-xl p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-[10px] font-semibold text-primary-foreground">App Ideas</p>
                          <p className="text-[8px] text-primary-foreground/70">A note taking app that uses STT!</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-accent/50 rounded-xl p-3">
                      <p className="text-[10px] font-semibold text-foreground">hellooooo</p>
                      <p className="text-[8px] text-muted-foreground">The ultimate hello note :)</p>
                    </div>
                    <div className="bg-secondary rounded-xl p-3">
                      <p className="text-[10px] font-semibold text-foreground">Other Note</p>
                      <p className="text-[8px] text-muted-foreground">This is also an example...</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone 3 - Note detail */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="bg-foreground rounded-[2rem] p-1.5 shadow-card scale-75 md:scale-90">
                <div className="bg-background rounded-[1.75rem] overflow-hidden w-48 aspect-[9/19.5] p-4 pt-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] bg-secondary px-2 py-0.5 rounded">← Ideas</span>
                    <span className="text-[8px] text-muted-foreground">10:42PM Dec 12</span>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">App Ideas</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <span className="bg-accent/60 text-[8px] px-2 py-0.5 rounded-full shrink-0">Speaker 1</span>
                      <p className="text-[9px] text-muted-foreground">A note taking app that uses STT!</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="bg-highlight/60 text-[8px] px-2 py-0.5 rounded-full shrink-0">Speaker 2</span>
                      <p className="text-[9px] text-muted-foreground">Dude, that's so sick. Can we be part?</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-8 flex items-center gap-2 border-t border-border pt-3">
                    <div className="flex gap-1">
                      <span className="text-[10px] font-bold">B</span>
                      <span className="text-[10px] underline">U</span>
                      <span className="text-[10px] italic">I</span>
                    </div>
                    <div className="ml-auto bg-foreground text-primary-foreground text-[8px] px-2 py-1 rounded">Coming Soon</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone 4 - Settings */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-foreground rounded-[2rem] p-1.5 shadow-card scale-75">
                <div className="bg-background rounded-[1.75rem] overflow-hidden w-44 aspect-[9/19.5] p-4 pt-10">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Settings</h3>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">John Doe</p>
                    </div>
                  </div>
                  
                  <div className="bg-card rounded-xl p-4">
                    <p className="text-xs font-semibold text-foreground mb-3">Sign In to Access:</p>
                    <ul className="space-y-2 text-[10px] text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✦</span> Cloud Syncing
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✦</span> +4min/day Transcribing
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-accent">✦</span> Paid Tier
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
