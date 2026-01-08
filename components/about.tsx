"use client";

import { motion, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Badge } from "@/components/ui/badge";

// Tech stack - flat list of technologies
const techStack = [
  "React", "Next.js", "TypeScript", "JavaScript", "Angular", "TanStack", "ShadCN", 
  "Tailwind CSS", "Bootstrap", "Node.js", "Express", "PHP", 
  "Laravel", "PostgreSQL", "MongoDB", "Firebase", "MySQL",
  "Figma", "Git", "Docker", "Vercel"
];

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;
    
    rotateX.set(-(y / centerY) * 4);
    rotateY.set((x / centerX) * 4);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <section id="about" className="max-w-7xl mx-auto p-5">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          About Me
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-heading font-bold mb-4"
        >
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
            Emmanuel Akinola<span className="animate-pulse text-purple-600">.</span>
          </span>
          
        
        </motion.h2>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative max-w-6xl mx-auto"
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700" />
        
        {/* Card */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-background border border-border/50 group-hover:border-transparent transition-all duration-300">
          
          {/* Introduction */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center"
          >
            I'm a <span className="text-foreground font-semibold">Full Stack Developer</span> passionate about 
            building beautiful, functional, and seamless digital experiences. I love turning complex 
            problems into simple, elegant solutions.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
              Some Tools I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.02 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="bg-secondary/60 hover:bg-primary hover:text-primary-foreground text-sm px-3 py-1 cursor-default transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
