"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  blurb: string;
  decimals?: number;
};

const STATS: Stat[] = [
  {
    value: 95,
    suffix: "%",
    label: "GNN Model Accuracy",
    blurb: "6-layer GraphSAGE model trained on transaction networks in PyTorch Geometric.",
  },
  {
    value: 60,
    suffix: "s",
    label: "Fraud Investigation Time",
    blurb: "Down from 3+ hours of manual review to a full dossier in under a minute.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Fraud Recall Rate",
    blurb: "Zero missed cases on complex structuring and smurfing patterns.",
  },
  {
    value: 16,
    suffix: "hr",
    label: "Hackathon Build",
    blurb: "SOL QUEST, built solo — Best Beginner Hack at Hopper Hacks 2026.",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl text-bone md:text-6xl">
      {suffix === "s" || suffix === "hr" ? "<" : ""}
      {display}
      <span className="text-signal">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="border-y border-ink-border bg-ink px-6 py-24 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-sage">
          About
        </p>
        <p className="mt-5 font-display text-2xl leading-snug text-bone md:text-3xl">
          Junior at Stony Brook University building scalable backend systems
          and machine learning platforms — from{" "}
          <span className="text-signal">graph neural networks</span> that
          catch financial fraud to{" "}
          <span className="text-sage">agentic pipelines</span> and real-time
          Web3 infrastructure.
        </p>
      </motion.div>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-bone">
              {stat.label}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted">
              {stat.blurb}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}