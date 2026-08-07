"use client";

import { motion } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
      className="sticky top-0 z-30 flex items-center justify-between border-b border-void-border/60 bg-void/80 px-6 py-5 backdrop-blur md:px-12"
    >
      <a href="#" className="font-display text-sm tracking-[0.15em] text-bone">
        Shreesh Chauhan
      </a>

      <nav className="hidden items-center gap-9 md:flex">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-crimson-bright"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="md:hidden font-mono text-xs uppercase tracking-widest text-crimson-bright"
      >
        Contact
      </a>
    </motion.header>
  );
}