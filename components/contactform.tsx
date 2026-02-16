"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Send,
  ArrowUp,
  Sparkles,
  CheckCircle,
  X
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

// Social links
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AkinolaEmmanuel",
    icon: Github,
    gradient: "from-foreground/80 to-foreground/60",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/emmanuel-tijesunimi-akinola",
    icon: Linkedin,
    gradient: "from-foreground/60 to-foreground/40",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/akinolatijesu7",
    icon: Twitter,
    gradient: "from-foreground/40 to-foreground/20",
  },
  {
    name: "Email",
    href: "mailto:akinolaemmanueltijesunimi@gmail.com",
    icon: Mail,
    gradient: "from-foreground/20 to-foreground/5",
  },
];

export default function ContactForm() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Show scroll-to-top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/emmanuelakinola255@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: "New Portfolio Contact Message!",
        }),
      });

      if (response.ok) {
        setShowThankYouModal(true);
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="max-w-7xl mx-auto px-4">
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
            className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4"
          >
            Contact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Let's{" "}
            <span className="text-foreground">
              Connect
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Have a project in mind? Let's build something amazing together.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Social Links & Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-xl md:text-3xl font-bold">Get in Touch</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Find me on
                  </h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <motion.div
                          key={social.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <Link
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link relative"
                          >
                             <div className={`absolute -inset-2 rounded-xl bg-foreground opacity-0 group-hover/link:opacity-20 blur-lg transition-all duration-300`} />
                            
                            <motion.div
                              whileHover={{ scale: 1.1, y: -2 }}
                              whileTap={{ scale: 0.95 }}
                               className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-foreground shadow-lg cursor-pointer`}
                            >
                              <Icon className="w-5 h-5 text-background" />
                            </motion.div>
                            
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap">
                              {social.name}
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-foreground opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700" />
              
              <div className="relative p-8 rounded-3xl bg-background border border-border group-hover:border-transparent transition-all duration-300">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Input 
                      placeholder="Your Name"
                      {...register("name")}
                      className="bg-secondary/20 border border-border focus:border-foreground/50 h-12 rounded-xl transition-colors" 
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                  </div>
                  
                  <div className="space-y-2">
                    <Input 
                      placeholder="Your Email"
                      type="email"
                      {...register("email")}
                      className="bg-secondary/20 border border-border focus:border-foreground/50 h-12 rounded-xl transition-colors" 
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                  </div>
                  
                  <div className="space-y-2">
                    <Textarea 
                      placeholder="Your Message"
                      {...register("message")}
                      className="min-h-[150px] bg-secondary/20 border-border focus:border-foreground/50 rounded-xl transition-colors resize-none" 
                    />
                    {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-foreground hover:bg-foreground/90 text-background font-semibold shadow-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYouModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowThankYouModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-md w-full bg-background rounded-3xl p-8 shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowThankYouModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-foreground blur-xl opacity-20" />
                  <div className="relative w-20 h-20 rounded-full bg-foreground flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-10 h-10 text-background" />
                  </div>
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Thank{" "}
                  <span className="text-foreground">
                    You!
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your message has been received successfully!
                  <br />
                  I'll respond by mail shortly.
                </p>
              </motion.div>

              {/* Email indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6"
              >
                <Mail className="w-4 h-4" />
                <span>Check your inbox for my response</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
          >
            <div className="absolute -inset-2 rounded-full bg-foreground opacity-0 group-hover:opacity-20 blur-lg transition-all duration-300" />
            
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-foreground shadow-2xl cursor-pointer">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="w-6 h-6 text-background" />
              </motion.div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}