"use client";

import { motion } from "framer-motion";

const METRICS = [
  { value: "95%", label: "GNN Model Accuracy *" },
  { value: "<60s", label: "Fraud Investigation Time" },
  { value: "100%", label: "Fraud Recall Rate" },
  { value: "16hrs", label: "Hackathon Win Build Time" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-bone sm:text-5xl md:text-6xl"
      >
        Building high-performance backend platforms, distributed pipelines,
        and intelligent{" "}
        <span className="text-crimson-bright">agentic AI systems</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.25 }}
        className="mt-6 max-w-xl font-body text-base text-muted md:text-lg"
      >
        From graph neural networks catching financial fraud to real-time
        Web3 infrastructure on Solana — I engineer systems end to end.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mt-9 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-crimson px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:bg-crimson-bright"
        >
          View Projects
        </a>
        <a
          href="/Shreesh_Chauhan_Resume.pdf"
          className="rounded-full border border-void-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:border-crimson-bright hover:text-crimson-bright"
        >
          Download Resume
        </a>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.55 }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-void-border bg-void-border md:grid-cols-4"
      >
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="group bg-void-panel px-6 py-7 transition-colors hover:bg-void"
          >
            <span className="font-display text-3xl text-bone md:text-4xl">
              {m.value}
            </span>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted group-hover:text-crimson-bright">
              {m.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}