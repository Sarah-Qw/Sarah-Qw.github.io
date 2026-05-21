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
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="relative pt-24 md:pt-32 pb-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          num="05"
          tag="Contact"
          title="Run A Query. Get A Response."
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
            <h3 className="font-display text-2xl md:text-3xl">Let's Connect</h3>
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

          {/* SQL-style contact form — same fiber as the Toolkit cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-gold/30 bg-card/60 backdrop-blur-xl overflow-hidden shadow-luxury metallic-border">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60 bg-background/40">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-[10px] font-mono tracking-wider text-muted-foreground">
                  contact_query.sql
                </span>
                <span className="ml-auto text-[9px] tracking-[0.25em] uppercase text-gold/80">
                  Editor
                </span>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 3500);
                }}
                className="p-5 md:p-6 font-mono text-[13px] leading-relaxed"
              >
                {/* Gutter + lines layout */}
                <div className="grid grid-cols-[2rem_1fr] gap-x-3 gap-y-1">
                  <Ln n={1}>
                    <span className="text-muted-foreground">{"-- Fill in the parameters to initiate contact"}</span>
                  </Ln>
                  <Ln n={2}> </Ln>

                  <Ln n={3}>
                    <span className="text-gold">INSERT INTO</span>{" "}
                    <span className="text-foreground">messages</span>{" "}
                    (<span className="text-cherry-soft dark:text-cherry">sender_name</span>)
                  </Ln>
                  <Ln n={4}>
                    <SqlInput value={form.name} onChange={set("name")} placeholder="'Your Name'" />
                  </Ln>

                  <Ln n={5}>
                    <span className="text-gold">VALUES</span>{" "}
                    (<span className="text-cherry-soft dark:text-cherry">email_address</span>)
                  </Ln>
                  <Ln n={6}>
                    <SqlInput value={form.email} type="email" onChange={set("email")} placeholder="'your@email.com'" />
                  </Ln>

                  <Ln n={7}>
                    <span className="text-gold">SET</span>{" "}
                    <span className="text-cherry-soft dark:text-cherry">subject</span> =
                  </Ln>
                  <Ln n={8}>
                    <SqlInput value={form.subject} onChange={set("subject")} placeholder="'Subject of your message'" />
                  </Ln>

                  <Ln n={9}>
                    <span className="text-gold">WHERE</span>{" "}
                    <span className="text-cherry-soft dark:text-cherry">message</span> =
                  </Ln>
                  <Ln n={10}>
                    <SqlTextarea value={form.message} onChange={set("message")} placeholder="'Write your message here...'" />
                  </Ln>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="btn-press group relative overflow-hidden rounded-full px-6 py-3 bg-cherry text-primary-foreground text-xs tracking-[0.2em] uppercase shadow-luxury inline-flex items-center gap-2"
                  >
                    <span className="relative z-10">
                      {sent ? "Query Executed ✓" : "Run Query →"}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span className="text-center">© 2026 Sarah Abdulmaleek Quwaidi · Data Analyst</span>
          <div className="flex gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                aria-label={l.label}
              >
                <l.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ln({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <>
      <span className="text-right text-muted-foreground/50 select-none pr-2 border-r border-border/40 text-[11px] leading-7">
        {n}
      </span>
      <div className="min-h-[1.75rem] flex items-center flex-wrap gap-x-1">{children}</div>
    </>
  );
}

function SqlInput({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      required
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="ml-4 flex-1 min-w-[200px] bg-transparent border-b border-dashed border-border focus:border-gold outline-none px-1 py-0.5 text-foreground placeholder:text-muted-foreground/60 transition-colors"
    />
  );
}

function SqlTextarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}) {
  return (
    <textarea
      required
      rows={3}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="ml-4 flex-1 min-w-[200px] bg-transparent border-b border-dashed border-border focus:border-gold outline-none px-1 py-0.5 text-foreground placeholder:text-muted-foreground/60 resize-none transition-colors"
    />
  );
}
