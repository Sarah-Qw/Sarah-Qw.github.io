/**
 * SectionLabel & SectionHeader
 *
 * Section numbers (01, 02 …) use:
 *  - font-numeric   → Space Grotesk (consistent with stat numbers throughout the site)
 *  - text-cherry    → Burgundy in LIGHT mode (high-contrast on ivory)
 *  - dark:text-cherry-soft → Vibrant coral-burgundy in DARK mode (readable on dark bg)
 */
export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-numeric text-3xl md:text-4xl font-semibold text-cherry dark:text-cherry-soft">
        {num}
      </span>
      <span className="h-px w-12 bg-cherry/40 dark:bg-cherry-soft/40" />
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
