"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Copy, Check, Sun, Moon, Menu, X, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useTheme } from "next-themes";


const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];



const EMAIL = "emmanuelakinola255@gmail.com";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Needed to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using IntersectionObserver
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          `fixed top-0 w-full z-50 transition-all duration-300`,
          scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        )}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 px-4">
          <Link 
            href="/" 
            className="font-heading text-xl font-bold relative z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            EmmanuelAkinola
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-5">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-foreground transition-colors relative group"
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
             {/* Email Copy - Visible on large screens */}
            <div className="hidden lg:flex items-center gap-2">
              {!copied &&
              <p className="text-sm">{EMAIL}</p>
              }
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md hover:bg-muted transition-colors"
                title={copied ? "Email copied!" : "Copy email"}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-foreground" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                )}
              </button>
              {copied && (
                <span className="text-xs text-foreground animate-in fade-in">
                  Email copied!
                </span>
              )}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <motion.button
                onClick={toggleTheme}
                className="relative p-2 rounded-full transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="w-5 h-5 text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon className="w-5 h-5 text-foreground" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}

            {/* Mobile Menu Toggle - Visible until Laptop */}
            <button
              className="lg:hidden p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background border-l border-border z-40 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="flex flex-col h-full pt-10 px-6 pb-6">
                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-6 mt-8">
                  {navItems.map((item, index) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive = activeSection === sectionId;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "text-2xl font-heading font-bold transition-colors block",
                            isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-auto space-y-8">
                  {/* Mobile Email Copy */}
                  <div className="p-3 rounded-xl bg-secondary/30">
                    <p className="text-xs text-muted-foreground mb-2">Get in touch</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-mono truncate">{EMAIL}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 rounded-md hover:bg-background transition-colors"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-foreground" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Social Links Mini */}
                  <div className="flex justify-center gap-6">
                    {[
                      { icon: Github, href: "https://github.com/AkinolaEmmanuel" },
                      { icon: Linkedin, href: "https://linkedin.com/in/emmanuel-tijesunimi-akinola" },
                      { icon: Twitter, href: "https://twitter.com/akinolatijesu7" },
                      { icon: Mail, href: "mailto:akinolaemmanueltijesunimi@gmail.com" }
                    ].map((Item, i) => (
                      <a 
                        key={i} 
                        href={Item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Item.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}