"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "TM30",
    role: "Software Engineer",
    date: "March 2026 - Present",
    location: "Lagos, Nigeria",
    description: "Leading the Frontend Revamp of a legacy banking system, Built two websites with CMS functionality and managing team of interns.",
    highlights: ["Nextjs", "Reactjs", "Sanity", "Figma", "Team Management"],
    gradient: "from-foreground/80 to-foreground/40"

  },
  {
    company: "LASEPA (Contract)",
    role: "Full-Stack Developer",
    date: "Jan 2026 – April 2026",
    location: "Lagos, Nigeria",
    description: "Engineered the Front-End and Back-end for a state-wide ticketing complaint system including a multi role based admin portal for managing tickets and assets with NestJs on the Backend and React on the Frontend. Setup the Front-end using TanstackQuery and Zustand, translating Figma prototypes to responsive interfaces. Configured the Backend with Redis, Amazon S3 Bucket, Amazon EC2 and Resend for the Email service",
    highlights: ["NestJs", "Reactjs", "Redis", "Amazon S3", "Amazon EC2", "Resend", "TanstackQuery", "Zustand", "System Design"],
    gradient: "from-foreground/80 to-foreground/40",
  },
  {
    company: "Electpoll",
    role: "Front-End Developer",
    date: "Mar 2024 – Present",
    location: "Remote",
    description: "Team member for the brand offering electronic voting for 12,000+ voters. Developed revamped React setup for the platform and built the NestJs/Prisma Back-end.",
    highlights: ["React", "NestJs", "Prisma", "E-Voting", "Figma"],
    gradient: "from-foreground/60 to-foreground/20",
  },
  {
    company: "AIQ",
    role: "Full-Stack Developer",
    date: "July 2024 - Aug 2025",
    location: "Remote",
    description: "Launched 3+ responsive web apps using Angular, React, and Next.js. Led the 'DIC Nigeria' project as project manager and pioneered NextJs adoption for internal projects.",
    highlights: ["Next.js", "Angular", "Project Lead", "PHP", "MySQL", "Docker"],
    gradient: "from-foreground/40 to-foreground/10",
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
      <div className={`absolute -inset-1 rounded-2xl bg-foreground opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`} />

      {/* Card */}
      <div className="relative p-6 md:p-8 rounded-2xl bg-background border border-border group-hover:border-transparent group-hover:shadow-2xl transition-all duration-300">
        {/* Company badge */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {exp.date}
          </span>
        </div>

        {/* Role & Company */}
        <h3 className="text-xl md:text-2xl font-bold mb-1 transition-colors">
          {exp.role}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <span className="font-semibold text-foreground">
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

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-4"
        >
          Work{" "}
          <span className="font-serif italic font-normal tracking-tight text-foreground lowercase">
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
            className="w-full bg-foreground/30 origin-top"
          />
        </div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
                className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-background bg-foreground md:-translate-x-1/2 mt-8 z-10 shadow-lg`}
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