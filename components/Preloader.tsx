"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CORNERS = [
  { label: "Graph Neural Networks", pos: "top-8 left-6 md:top-10 md:left-12 text-left" },
  { label: "Distributed Pipelines", pos: "top-8 right-6 md:top-10 md:right-12 text-right" },
  { label: "Agentic AI Systems", pos: "bottom-8 left-6 md:bottom-10 md:left-12 text-left" },
  { label: "Web3 Architecture", pos: "bottom-8 right-6 md:bottom-10 md:right-12 text-right" },
];

/** Shared content used identically in both curtain panels so the clip-path
 *  reconstruction reads as one continuous headline before it splits. */
function CurtainContent() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
      {CORNERS.map((c) => (
        <span
          key={c.label}
          className={`absolute ${c.pos} font-mono text-[10px] uppercase tracking-[0.25em] text-muted md:text-xs`}
        >
          {c.label}
        </span>
      ))}

      <h1 className="font-display text-[15vw] font-semibold leading-[0.88] tracking-tight text-bone sm:text-[13vw] md:text-[10vw]">
        SHREESH
        <br />
        <br />
        CHAUHAN
      </h1>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-crimson-bright md:text-sm">
        AI/ML &amp; Backend Software Engineer
      </p>
    </div>
  );
}

export default function Preloader() {
  const [open, setOpen] = useState(false); // true once the curtain starts splitting
  const [mounted, setMounted] = useState(true); // stays true until fully off-screen
  const triggeredRef = useRef(false);

  const trigger = () => {
    if (triggeredRef.current) return;
    triggeredRef.current = true;
    setOpen(true);
    window.setTimeout(() => setMounted(false), 1000);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onWheel = () => trigger();
    const onTouch = () => trigger();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") trigger();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (!mounted) {
      document.body.style.overflow = "";
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      <div
        role="button"
        tabIndex={0}
        aria-label="Enter site"
        onClick={trigger}
        className="fixed inset-0 z-[100] cursor-pointer bg-void"
      >
        {/* top half */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: open ? "-100%" : 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 overflow-hidden bg-void"
          style={{ clipPath: "inset(0 0 50% 0)" }}
        >
          <CurtainContent />
        </motion.div>

        {/* bottom half */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: open ? "100%" : 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 overflow-hidden bg-void"
          style={{ clipPath: "inset(50% 0 0 0)" }}
        >
          <CurtainContent />
        </motion.div>

        {/* hairline seam + hint */}
        <motion.div
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center"
        >
          <div className="h-px w-24 bg-void-border" />
          <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            Click or scroll to enter
          </span>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}