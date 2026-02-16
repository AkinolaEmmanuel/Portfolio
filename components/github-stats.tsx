"use client";

import { motion } from "framer-motion";
import { Github, Star, GitBranch, Code2 } from "lucide-react";

const stats = [
  { label: "Repositories", value: "50+", icon: Github },
  { label: "Total Stars", value: "200+", icon: Star },
  { label: "Pull Requests", value: "500+", icon: GitBranch },
  { label: "Lines written", value: "100k+", icon: Code2 },
];

export default function GithubStats() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 border-t border-border/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Building in{" "}
            <span className="font-serif italic font-normal lowercase tracking-tight">
              Public
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I believe in the power of open source and consistent contribution. 
            My GitHub activity reflects my commitment to software quality and 
            collaborative growth in the tech community.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <s.icon className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-medium">{s.label}</span>
                </div>
                <div className="text-3xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-secondary/20 flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-dot-pattern opacity-10" />
          <Github className="w-24 h-24 text-foreground/5 group-hover:scale-110 group-hover:text-foreground/10 transition-all duration-700" />
          <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-background/80 backdrop-blur-md border border-border flex justify-between items-center">
             <div className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-foreground animate-pulse" />
               <span className="text-sm font-medium">Tracking Git Activity...</span>
             </div>
             <a 
               href="https://github.com/AkinolaEmmanuel" 
               target="_blank" 
               className="text-sm font-bold hover:underline"
              >
                Follow on GitHub →
              </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
