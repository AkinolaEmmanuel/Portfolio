"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";


const projects = [
  {
    id: 1,
    title: "DIC Nigeria",
    image: "/Screenshot4.png",
    description: "A Project I led and built in collaboration with the team at AIQ. Features a website and functional school portal for student application and educational activities.",
    repo: "https://github.com/aiq-ng/dicon-ui",
    link: "https://dic-nigeria.com.ng/home",
    tags: ["Next.js", "Tailwindcss", "Strapi"],
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Emmanuel Akinola's Blog",
    image: "/Screenshot16.png",
    description: "A personal blog website for my writing. Designed with React, Vite, Tailwindcss.",
    repo: "https://www.github.com/AkinolaEmmanuel/myBlog",
    link: "https://emmanuelakinola-blog.netlify.app",
    tags: ["React", "Vite", "Tailwindcss"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: 3,
    title: "BlockChain Masters",
    image: "/Screenshot3.png",
    description: "A company website for BlockChain Masters, an affiliate of Blockfuse Labs where I served.",
    repo: "https://www.github.com/AkinolaEmmanuel/blockchain-masters",
    link: "https://blockchain-masters.vercel.app/",
    tags: ["Next.js", "Tailwindcss"],
    gradient: "from-orange-500 via-red-500 to-rose-500",
  },
  {
    id: 4,
    title: "Billionaire Bukunmi",
    image: "/Screenshot6.png",
    description: "A portfolio website for Billionaire Bukunmi - A public speaker, founder, counsellor and author.",
    repo: "https://www.github.com/AkinolaEmmanuel/portfolio-website-for-client",
    link: "https://billionairebukunmi.com/",
    tags: ["Next.js", "Tailwindcss"],
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    id: 5,
    title: "Movie Summary Encyclopedia",
    image: "/Screenshot7.png",
    description: "A movie summary encyclopedia website that provides concise summaries of movies.",
    repo: "https://www.github.com/AkinolaEmmanuel/movie-home",
    link: "https://movie-home-rflu.onrender.com/",
    tags: ["React", "Vite", "Tailwindcss", "Node.js", "Express"],
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
  },
  {
    id: 6,
    title: "AMCAN",
    image: "/Screenshot8.png",
    description: "A demo website for AMCAN website at AIQ. Showcasing AMCAN's services and features.",
    repo: "https://www.github.com/aiq-ng/amcan-web",
    link: "https://amcan-text.vercel.app/",
    tags: ["Next.js", "Tailwindcss"],
    gradient: "from-green-500 via-lime-500 to-yellow-500",
  }
];

// Animated project card with 3D tilt effect
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // 3D tilt values with spring physics
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  function handleMouseMove(e: MouseEvent) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Spotlight position
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // 3D tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;
    
    rotateX.set(-(y / centerY) * 8);
    rotateY.set((x / centerX) * 8);
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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      {/* Pulsing glow effect on hover */}
      <motion.div 
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700`}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Card container */}
      <div 
        className="relative h-full rounded-2xl bg-background border border-border/50 overflow-hidden transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Spotlight effect following cursor */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(120, 119, 198, 0.12),
                transparent 70%
              )
            `,
          }}
        />

        {/* Project image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          
          {/* Project number badge */}
          <motion.div 
            className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>

          {/* Quick action buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.12 + 0.3 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.12 + 0.4 }}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm items-center justify-center text-gray-900 hover:bg-white hover:scale-110 transition-all shadow-lg"
              >
                <Github className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4" style={{ transform: "translateZ(20px)" }}>
          {/* Tags with staggered animation */}
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, tagIndex) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + tagIndex * 0.05 + 0.2 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-secondary/60 hover:bg-secondary text-xs font-medium transition-colors cursor-default"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          {/* Title with arrow animation */}
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
              {project.title}
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="inline-block"
              >
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.span>
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* View Project Link */}
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent transition-all duration-300`}
            >
              View Project
              <ArrowUpRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectGrid() {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-10 px-4">
      {/* Section Header with animations */}
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
          Portfolio
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500">
            Projects
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground max-w-2xl mx-auto text-lg"
        >
          A curated collection of projects showcasing my expertise in building
          digital solutions.
        </motion.p>
      </motion.div>

      {/* Uniform Grid - No bento, all equal sizes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* View All CTA 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-16"
      >
        <Link
          href="https://github.com/AkinolaEmmanuel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 hover:bg-secondary text-foreground font-medium transition-all duration-300 hover:gap-3 group hover:shadow-lg"
        >
          <Github className="w-5 h-5" />
          View More on GitHub
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>
      */}
    </section>
  );
}