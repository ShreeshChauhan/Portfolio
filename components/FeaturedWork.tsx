"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  tagline: string;
  highlights: string[];
  tags: string[];
  span: string; // grid span classes
};

const PROJECTS: Project[] = [
  {
    title: "Fraud Investigation Copilot",
    tagline:
      "AI-powered financial fraud detection combining Graph Neural Networks with LLM-generated compliance reporting.",
    highlights: [
      "6-layer GraphSAGE GNN — 95% accuracy, 100% fraud recall",
      "Gemini API SAR narrative generation, <60s dossier build",
      "FastAPI backend + Streamlit network visualizer",
    ],
    tags: ["PyTorch Geometric", "GraphSAGE", "FastAPI", "Gemini API"],
    span: "md:col-span-4 md:row-span-2",
  },
  {
    title: "CourtPrice",
    tagline:
      "Full-stack tennis analytics correlating live ATP performance with real-time signed-memorabilia valuations.",
    highlights: [
      "High-throughput Node.js & Express REST API",
      "eBay Browse API with OAuth2 integration",
      "Sub-second search across ATP match records",
    ],
    tags: ["React", "Node.js", "Express", "eBay Browse API"],
    span: "md:col-span-2 md:row-span-1",
  },
  {
    title: "SOL QUEST",
    tagline:
      "Play-to-earn top-down web game with server-authoritative state validation and live Solana payouts.",
    highlights: [
      "Built solo in 16 hours",
      "Django backend validates game state & payout logic",
      "Solana wallet integration, real-time reward distribution",
    ],
    tags: ["Django", "Solana", "React", "Phaser"],
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function FeaturedWork() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright">
          Featured Work
        </p>
        <h2 className="mt-3 font-display text-4xl text-bone md:text-5xl">
          Selected projects.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[220px]">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ scale: 1.012 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-void-border bg-void-panel p-7 transition-colors hover:border-crimson-bright/60 ${project.span}`}
          >
            {/* top-right arrow, revealed on hover */}
            <motion.span
              initial={{ opacity: 0, x: -6, y: 6 }}
              whileHover={{ opacity: 1, x: 0, y: 0 }}
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-void-border text-bone opacity-0 transition-all duration-300 group-hover:border-crimson-bright group-hover:text-crimson-bright group-hover:opacity-100"
            >
              ↗
            </motion.span>

            {/* ambient glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-crimson/0 blur-3xl transition-colors duration-500 group-hover:bg-crimson/25" />

            <div className="relative pr-10">
              <h3 className="font-display text-2xl text-bone">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-muted">
                {project.tagline}
              </p>
            </div>

            <div className="relative mt-6">
              {/* highlights reveal on hover */}
              <ul className="max-h-0 space-y-1.5 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:opacity-100">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="font-mono text-[11px] leading-relaxed text-muted before:mr-2 before:text-crimson-bright before:content-['—']"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-void-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted transition-colors group-hover:border-crimson-bright/50 group-hover:text-crimson-bright"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}

        {/* center badge between grids, per reference design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center rounded-2xl border border-void-border bg-void-panel p-7 md:col-span-2 md:row-span-1"
        >
          <div className="text-center">
            <span className="font-mono text-3xl text-crimson-bright">
              {"</>"}
            </span>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted">
              github.com/shreeshchauhan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}