export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-3xl md:text-4xl text-gold/80">{num}</span>
      <span className="h-px w-12 bg-gold/60" />
      <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function SectionHeader({
  num,
  tag,
  title,
  desc,
}: {
  num: string;
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mb-14 max-w-3xl">
      <SectionLabel num={num} label={tag} />
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance">
        {title}
      </h2>
      <div className="mt-5 h-px w-20 bg-gradient-to-r from-gold to-transparent" />
      <p className="mt-5 text-foreground/70 leading-relaxed">{desc}</p>
    </div>
  );
}
