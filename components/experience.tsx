"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "ElectPoll",
    role: "Frontend Engineer",
    date: "Mar 2024 - Present",
    location: "Remote",
    description: "Contributed to the deployment of a secure e-voting platform, participating in successful remote election deployments.",
    highlights: ["E-Voting Platform", "Remote Elections", "Secure Systems"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    company: "AIQ",
    role: "Full Stack Developer",
    date: "July 2024 - Sept 2025",
    location: "Remote",
    description: "Engineered and launched 3+ responsive client web applications using Angular, React, Next.js, and Tailwind CSS. Led the 'DIC Nigeria' project as project manager while developing the front-end interface.",
    highlights: ["Angular", "React", "Next.js", "Project Lead", "PHP", "Docker"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    company: "The Nebula",
    role: "Front-End Developer",
    date: "Sept 2025 - Oct 2025",
    location: "Remote",
    description: "Collaborate with a distributed open-source team as a freelance developer, contributing to a shared repository while maintaining high code quality and meeting task deadlines.",
    highlights: ["Open Source", "Collaboration", "Code Quality"],
    gradient: "from-orange-500 to-red-500",
  },
];

// Experience card with 3D tilt effect
function ExperienceCard({ 
  exp, 
  index 
}: { 
  exp: typeof experiences[0]; 
  index: number;
}) {
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
    
    rotateX.set(-(y / centerY) * 6);
    rotateY.set((x / centerX) * 6);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500`} />
      
      {/* Card */}
      <div className="relative p-6 md:p-8 rounded-2xl bg-background border border-border/50 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-300">
        {/* Company badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between mb-4">
          <motion.div 
            className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Briefcase className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {exp.date}
          </span>
        </div>

        {/* Role & Company */}
        <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
          {exp.role}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <span className={`font-semibold text-transparent bg-clip-text bg-gradient-to-r ${exp.gradient}`}>
            {exp.company}
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1 text-sm">
            <MapPin className="w-3.5 h-3.5" />
            {exp.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-4">
          {exp.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {exp.highlights.map((highlight, i) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + i * 0.05 + 0.2 }}
            >
              <Badge 
                variant="secondary" 
                className="bg-secondary/60 hover:bg-secondary text-xs cursor-default transition-colors"
              >
                {highlight}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
        >
          Career
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Work{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
            Experience
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          My professional journey building impactful digital solutions
        </motion.p>
      </motion.div>
      
      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/50 md:-translate-x-1/2">
          <motion.div 
            style={{ height: lineHeight }} 
            className="w-full bg-gradient-to-b from-primary via-purple-500 to-pink-500 origin-top"
          />
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background bg-gradient-to-br ${exp.gradient} md:-translate-x-1/2 mt-8 z-10 shadow-lg`}
              />
              
              {/* Card container */}
              <div className="flex-1 pl-10 md:pl-0">
                <ExperienceCard exp={exp} index={index} />
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}