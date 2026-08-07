"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-void-border">
      <div className="relative z-10 px-6 py-24 md:px-12 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright"
        >
          Open to internship roles
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-bone sm:text-5xl md:text-6xl"
        >
          Let&apos;s build something remarkable together.
        </motion.h2>

        <motion.a
          href="mailto:shreeshchauhan.01@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group mt-10 inline-block font-display text-2xl text-bone transition-colors hover:text-crimson-bright sm:text-4xl md:text-5xl"
        >
          shreeshchauhan.01@gmail.com
          <span className="block h-px w-0 bg-crimson-bright transition-all duration-500 group-hover:w-full" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="mailto:shreeshchauhan.01@gmail.com"
            className="rounded-full bg-crimson px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-crimson-bright"
          >
            Let&apos;s Collaborate ↗
          </a>

          <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-muted">
            <a
              href="https://github.com/shreeshchauhan"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-void-border px-4 py-2 transition-colors hover:border-crimson-bright hover:text-crimson-bright"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/shreesh-chauhan"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-void-border px-4 py-2 transition-colors hover:border-crimson-bright hover:text-crimson-bright"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-void-border pt-8 text-center font-mono text-[11px] uppercase tracking-widest text-muted md:flex-row md:text-left">
          <span>NY / Open to Relocation</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-crimson-bright">About</a>
            <a href="#projects" className="hover:text-crimson-bright">Projects</a>
            <a href="#experience" className="hover:text-crimson-bright">Experience</a>
          </div>
          <span>© {new Date().getFullYear()} Shreesh Chauhan</span>
        </div>
      </div>

      {/* huge low-opacity watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden leading-none"
      >
        <span className="block translate-y-[18%] text-center font-display font-semibold text-[16vw] text-bone/5 whitespace-nowrap">
          SHREESH CHAUHAN
        </span>
      </div>
    </footer>
  );
}