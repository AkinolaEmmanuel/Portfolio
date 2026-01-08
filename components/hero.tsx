"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Database, Globe, Layers, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Typewriter hook for typing and erasing effect
function useTypewriter(text: string, typingSpeed = 100, erasingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, text, typingSpeed, erasingSpeed, pauseTime]);

  return displayText;
}

// Floating icons configuration
const floatingIcons = [
  { Icon: Code2, position: "top-[15%] left-[10%]", delay: 0, color: "text-primary" },
  { Icon: Database, position: "top-[20%] right-[12%]", delay: 0.5, color: "text-secondary" },
  { Icon: Globe, position: "bottom-[25%] left-[8%]", delay: 1, color: "text-accent" },
  { Icon: Layers, position: "bottom-[30%] right-[10%]", delay: 1.5, color: "text-primary" },
  { Icon: Terminal, position: "top-[40%] left-[5%]", delay: 2, color: "text-secondary" },
  { Icon: Zap, position: "top-[35%] right-[6%]", delay: 2.5, color: "text-accent" },
];

export default function Hero() {
  const typewriterText = useTypewriter("Available for Work", 120, 80, 2500);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, position, delay, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} hidden md:block`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`p-3 rounded-xl bg-background/80 backdrop-blur-sm border shadow-lg ${color}`}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          </motion.div>
        ))}

        <div className="container px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-secondary/10 text-secondary text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-heading font-bold tracking-tight"
            >
              Software Engineer building
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary block mt-2">
                digital and ground-breaking solutions.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-muted-foreground max-w-2xl mx-auto"
            >
              I'm a Full Stack Developer specializing in building digital solutions.
              Currently focused on accessible, human-centered products at speed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="rounded-full group">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full hover:bg-secondary/90 group">
                <Download className="mr-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                Download CV
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}