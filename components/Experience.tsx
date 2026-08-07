"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Role = {
  org: string;
  title: string;
  dates: string;
  description: string;
};

const ROLES: Role[] = [
  {
    org: "CRIZM — VIP Research, Stony Brook University",
    title: "Junior CRIZMeer, ML Backend & Data Pipeline Teams",
    dates: "Jan 2026 — Present",
    description:
      "Engineered scalable ML backends, database storage architectures, and automated evidence ingestion pipelines for an AI-assisted grading platform. Extended Joern static analysis tooling to parse C++ and Python codebases for automated multi-language code analysis.",
  },
  {
    org: "Auxiliary Services Association, Stony Brook University",
    title: "Marketing Student Assistant, Web Operations & Digital Standards",
    dates: "Jan 2026 — Present",
    description:
      "Audited and optimized 15+ high-traffic university pages for full WCAG 2.1 Level AA accessibility compliance and improved load speed. Managed end-to-end site migrations on Modern Campus (OmniCMS) and implemented data-driven SEO refactoring.",
  },
  {
    org: "Stony Brook University — Department of Linguistics",
    title: "Undergraduate Research Teaching Assistant, LIN 200",
    dates: "Jan 2026 — May 2026",
    description:
      "Mentored 150+ students in coursework and technical platform usage. Conducted weekly QA audits across digital LMS learning modules to ensure link integrity, system reliability, and pedagogical alignment.",
  },
];

const FACTS = [
  { label: "Degree", value: "B.S. Computer Information Systems, Stony Brook University" },
  { label: "Focus Areas", value: "Graph ML, LLM Orchestration, Backend APIs, Web3" },
  { label: "Honors", value: "Global Excellence Scholarship, Dean's List, Hopper Hacks 2026 Winner" },
  { label: "Location", value: "New York, NY / Stony Brook, NY — open to relocation" },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="about" className="scroll-mt-24 border-y border-void-border px-6 py-24 md:px-12 md:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        {/* narrative + facts + leadership card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl text-bone md:text-4xl">
            Computer Information Systems, with a systems engineer&apos;s bias
            for building.
          </h2>
          <p className="mt-6 font-body text-sm leading-relaxed text-muted md:text-base">
            I&apos;m a Computer Information Systems student at Stony Brook
            University and a Global Excellence Scholarship recipient,
            specializing in machine learning, backend engineering, and
            distributed systems. My work spans the full stack — from graph
            neural networks and fine-tuned LLM pipelines to low-latency REST
            APIs and smart-contract integrations.
          </p>

          <dl className="mt-8 space-y-4 border-t border-void-border pt-6">
            {FACTS.map((f) => (
              <div key={f.label} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <dt className="w-32 shrink-0 font-mono text-[11px] uppercase tracking-widest text-muted">
                  {f.label}
                </dt>
                <dd className="font-body text-sm text-bone">{f.value}</dd>
              </div>
            ))}
          </dl>

          {/* Leadership & Performance Focus */}
          <div className="mt-10 rounded-2xl border border-crimson-dim bg-crimson/10 p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-crimson-bright">
              Leadership &amp; Performance Focus
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-bone">
              Former nationally-ranked junior tennis player — top 150 singles,
              40+ national tournaments, selected to represent my home state
              at the National Team Championships. That same grit and performance-driven
              discipline carries directly into how I build software.
            </p>
          </div>
        </motion.div>

        {/* work experience accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <p
            id="experience"
            className="scroll-mt-24 font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright"
          >
            Work &amp; Research Experience
          </p>

          <div className="mt-6 divide-y divide-void-border border-t border-void-border">
            {ROLES.map((role, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={role.org}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-4 py-6 text-left"
                  >
                    <div>
                      <p className="font-display text-lg text-bone">
                        {role.org}
                      </p>
                      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">
                        {role.title}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="hidden font-mono text-[11px] uppercase tracking-widest text-muted sm:block">
                        {role.dates}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-void-border text-bone"
                      >
                        +
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 font-body text-sm leading-relaxed text-muted sm:hidden">
                          {role.dates}
                        </p>
                        <p className="pb-6 font-body text-sm leading-relaxed text-muted">
                          {role.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}