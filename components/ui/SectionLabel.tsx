export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-cyan-400 uppercase mb-4">
      <span className="w-4 h-px bg-cyan-400 inline-block" />
      {children}
    </span>
  );
}
