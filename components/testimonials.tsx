"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Emmanuel is a highly skilled developer who consistently delivers high-quality code. His ability to lead the DIC Nigeria project while managing multiple contributors was impressive.",
    author: "Project Lead",
    company: "AIQ",
  },
  {
    quote: "Building the electronic voting platform was a massive undertaking, and Emmanuel's contribution to both the React frontend and NestJs backend was pivotal to our success.",
    author: "Core Team",
    company: "Electpoll",
  },
  {
    quote: "The state-wide ticketing system required a robust backend and a very clean API structure. Emmanuel delivered exactly that with NestJs and Prisma.",
    author: "Contract Manager",
    company: "LASEPA",
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          Industry{" "}
          <span className="font-serif italic font-normal lowercase tracking-tight">
            Recognition
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Feedback from collaborators and clients on professional projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-8 rounded-3xl bg-background border border-border flex flex-col justify-between group hover:border-foreground transition-all duration-500"
          >
            <div>
              <Quote className="w-10 h-10 text-foreground/10 mb-6 group-hover:text-foreground/20 transition-colors" />
              <p className="text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors mb-8">
                "{t.quote}"
              </p>
            </div>
            <div>
              <div className="font-bold text-lg">{t.author}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{t.company}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
