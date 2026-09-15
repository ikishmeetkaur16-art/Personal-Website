import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { featuredProjects } from '@/data/projects';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-page min-h-[100dvh] bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="flex h-8 w-8 items-center justify-center border border-foreground text-sm font-semibold transition-colors group-hover:bg-foreground group-hover:text-background">IK</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Ishmeet Kaur</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary transition-transform hover:translate-x-1 sm:flex">
            Let&apos;s talk <ArrowUpRight size={14} strokeWidth={1.7} />
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-border bg-background px-6 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="flex items-center justify-between text-sm font-medium" onClick={closeMenu}>
                  {item.label}
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="mx-auto max-w-[1440px] px-6 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48 lg:px-14">
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
            <div>
              <div className="reveal mb-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-10 bg-primary" />
                Engineering portfolio
              </div>
              <h1 className="reveal reveal-delay-1 max-w-[900px] font-display text-[clamp(4rem,10vw,9.8rem)] leading-[.82] tracking-[-0.045em]">
                Hi, I&apos;m<br />
                <span className="italic text-primary">Ishmeet.</span>
              </h1>
            </div>
            <div className="reveal reveal-delay-2 max-w-[430px] lg:pb-3">
              <p className="mb-8 text-xl leading-[1.35] tracking-[-0.02em] md:text-2xl">
                I build data systems, applied ML tools, and analytics products.
              </p>
              <a href="#selected-work" className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary">
                See selected work
                <ArrowDownRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
          <div className="mt-24 grid gap-8 border-t border-border pt-5 sm:grid-cols-2 md:mt-36">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">MSc Computing Science · Big Data · SFU</p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">TD co-op · Previously IBM</p>
          </div>
        </section>

        <section id="selected-work" className="bg-[#e8e1d3] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end">
              <div>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">02 / Selected work</p>
                <h2 className="font-display text-5xl leading-none tracking-[-0.035em] md:text-7xl">
                  Selected<br /><span className="italic">projects.</span>
                </h2>
              </div>
              <p className="max-w-[300px] text-sm leading-relaxed text-muted-foreground">
                Six projects that best show how I work across data engineering, ML, backend systems, and analytics.
              </p>
            </div>

            <div className="border-t border-foreground/20">
              {featuredProjects.map((project) => (
                <article key={project.name} className="grid gap-6 border-b border-foreground/20 py-9 md:grid-cols-[90px_1.15fr_.9fr] md:gap-10 md:py-11">
                  <div className="font-mono-custom text-[11px] text-muted-foreground">{project.index}</div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">{project.name}</h3>
                    <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="font-mono-custom text-[10px] uppercase tracking-[0.08em] text-foreground/70">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:text-primary">
                        GitHub <ArrowUpRight size={14} strokeWidth={1.5} />
                      </a>
                    )}
                  </div>

                  <ul className="space-y-3 text-sm leading-relaxed text-foreground/80">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-[9px] h-px w-5 shrink-0 bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">03 / Experience</p>
              <h2 className="max-w-[380px] font-display text-5xl leading-[.92] tracking-[-0.035em] md:text-7xl">Experience<br /><span className="italic">that shaped me.</span></h2>
            </div>

            <div className="border-t border-border">
              <div className="grid gap-6 border-b border-border py-8 md:grid-cols-[1fr_1.8fr_auto] md:gap-10">
                <p className="font-mono-custom text-[11px] text-muted-foreground">CURRENT</p>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">TD</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Business Management Analyst Co-op · Global Technology &amp; Solutions</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right">2026</p>
              </div>

              <div className="grid gap-6 border-b border-border py-8 md:grid-cols-[1fr_1.8fr_auto] md:gap-10">
                <p className="font-mono-custom text-[11px] text-muted-foreground">PREVIOUS</p>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">IBM</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Production support, data validation, incident investigation, and quality engineering.</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right">2023 — 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-[#2f3432] px-6 py-24 text-[#f1ebdf] md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
              <div>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#d2876f]">04 / Skills</p>
                <h2 className="font-display text-5xl leading-[.92] tracking-[-0.035em] md:text-7xl">What I<br /><span className="italic text-[#d2876f]">work with.</span></h2>
              </div>

              <div className="grid border-t border-[#f1ebdf]/25 sm:grid-cols-2">
                {[
                  ['Data engineering', 'Python · SQL · PySpark · dbt · ADF · BigQuery'],
                  ['Applied ML', 'pandas · scikit-learn · XGBoost · forecasting · SHAP'],
                  ['AI / backend', 'LangChain · Pydantic · APIs · SQLite · pytest'],
                  ['Analytics', 'Power BI · Looker Studio · Excel · data quality'],
                ].map(([title, detail], index) => (
                  <div key={title} className={`border-b border-[#f1ebdf]/25 py-7 ${index % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'}`}>
                    <h3 className="text-xl tracking-[-0.02em]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#b6b8ae]">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36 lg:px-14">
          <div className="grid gap-14 md:grid-cols-[.7fr_1.3fr] md:gap-20 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">05 / About</p>
              <h2 className="font-display text-5xl leading-[.92] tracking-[-0.035em] md:text-7xl">How I<br /><span className="italic">got here.</span></h2>
            </div>

            <div className="max-w-[680px]">
              <p className="text-2xl leading-[1.2] tracking-[-0.03em] md:text-4xl">
                Production support taught me to trace messy problems. Graduate school pushed me to build the systems behind the answers.
              </p>
              <p className="mt-8 max-w-[580px] text-sm leading-relaxed text-muted-foreground">
                I&apos;m pursuing an MSc in Computing Science (Big Data) at Simon Fraser University and currently completing a TD co-op in Toronto.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-[#d8c6aa] px-6 py-24 md:px-10 md:py-36 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_.7fr]">
              <div>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">06 / Contact</p>
                <h2 className="max-w-[850px] font-display text-6xl leading-[.86] tracking-[-0.045em] md:text-8xl">Let&apos;s<br /><span className="italic">connect.</span></h2>
              </div>
              <div className="max-w-[360px] lg:pb-2">
                <div className="flex flex-col items-start gap-4">
                  <a href="mailto:kaurishmeet861@gmail.com" className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:text-primary">
                    kaurishmeet861@gmail.com <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.linkedin.com/in/ishmeetkaur-ika47" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:text-primary">
                    LinkedIn <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                  <a href="https://github.com/ishmeet2001" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:text-primary">
                    GitHub <ArrowUpRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-24 flex flex-col justify-between gap-6 border-t border-foreground/25 pt-5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
              <span>© Ishmeet Kaur</span>
              <span>Data · ML · Engineering</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortfolioPage;
