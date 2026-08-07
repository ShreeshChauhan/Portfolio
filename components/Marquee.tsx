const SKILLS = [
  "GRAPH NEURAL NETWORKS",
  "FASTAPI",
  "PYTORCH",
  "GEMINI API",
  "NODE.JS",
  "SOLANA WEB3",
  "DISTRIBUTED PIPELINES",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {SKILLS.map((skill) => (
        <span key={skill} className="flex items-center">
          <span className="px-6 font-mono text-sm uppercase tracking-widest text-bone md:text-base">
            {skill}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-crimson-bright" />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-void-border bg-void-panel py-5">
      <div className="flex w-max animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}