"use client";

import { motion } from "framer-motion";

const GROUPS = [
  {
    label: "Machine Learning & AI",
    items: ["PyTorch", "PyTorch Geometric", "GraphSAGE GNN", "Gemini API", "Scikit-Learn", "Pandas", "NumPy", "NetworkX"],
  },
  {
    label: "Backend & API Engineering",
    items: ["Python", "Node.js", "Express", "FastAPI", "Django", "REST APIs", "GraphQL", "SQL / MySQL"],
  },
  {
    label: "Frontend & Web Engineering",
    items: ["React.js", "JavaScript (ES6+)", "Vite", "HTML5 / CSS3", "Tailwind CSS", "Streamlit", "Phaser.js"],
  },
  {
    label: "Tools & Infrastructure",
    items: ["Git / GitHub", "Joern Static Analysis", "Modern Campus (OmniCMS)", "Solana Web3", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright"
      >
        Skills Architecture
      </motion.p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <h3 className="font-display text-base text-bone">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-void-border px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}