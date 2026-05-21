import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeader } from "./SectionLabel";

const links = [
  { icon: Mail, label: "sarah.quwaidi1@gmail.com", href: "mailto:sarah.quwaidi1@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/sarah-quwaidi", href: "https://www.linkedin.com/in/sarah-quwaidi" },
  { icon: Github, label: "github.com/Sarah-Qw", href: "https://github.com/Sarah-Qw" },
  { icon: Twitter, label: "@xmisrx on Twitter", href: "https://x.com/xmisrx" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          num="05"
          tag="Contact"
          title="Run a query. Get a response."
          desc="Have a dataset that needs clarity? An opportunity to share? Or just want to connect? I'm open to opportunities and conversations."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl">Let's connect</h3>
            <p className="text-foreground/75 leading-relaxed">
              I'm open to freelance projects, full-time opportunities, and collaborative data challenges. If your data has a question, I want to help answer it.
            </p>
            <div className="space-y-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card/40 px-4 py-3 hover:border-gold/60 hover:bg-card/60 transition-all"
                >
                  <span className="h-9 w-9 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-cherry transition-colors shrink-0">
                    <l.icon size={15} />
                  </span>
                  <span className="text-sm truncate">{l.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-gold/30 bg-card/60 backdrop-blur-xl overflow-hidden shadow-luxury">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60 bg-background/40">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-[10px] font-mono tracking-wider text-muted-foreground">
                  contact_query.sql
                </span>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 3500);
                }}
                className="p-6 md:p-7 space-y-5"
              >
                <Field label="What's your name?" name="name" placeholder="Your full name" />
                <Field label="Your email address" name="email" type="email" placeholder="your@email.com" />
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
                    Leave a message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What would you like to say?"
                    className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative overflow-hidden rounded-full px-6 py-3 bg-cherry text-primary-foreground text-xs tracking-[0.2em] uppercase shadow-luxury inline-flex items-center gap-2"
                >
                  <span className="relative z-10">
                    {sent ? "Query Executed ✓" : "Run Query →"}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>© 2026 Sarah Abdulmaleek Quwaidi · Data Analyst</span>
          <div className="flex gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label={l.label}
              >
                <l.icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground block mb-2">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
