import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import { featuredProjects, type Project } from '@/data/projects';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Selected Work', href: '#selected-work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const toneClasses: Record<Project['tone'], string> = {
  clay: 'bg-[#c56f54]',
  sage: 'bg-[#a5b09b]',
  sand: 'bg-[#d5b882]',
  ink: 'bg-[#3e4544]',
  rose: 'bg-[#bc8b85]',
  ochre: 'bg-[#c7a252]',
};

function ProjectVisual({ project }: { project: Project }) {
  if (project.imageSource) {
    return (
      <img
        className="project-art project-art--image"
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`project-art ${toneClasses[project.tone]}`}
      aria-label={project.imageAlt}
      data-placeholder-image={project.image}
      role="img"
    >
      <div className="project-art__grid" />
      <div className="project-art__orb" />
      <span className="project-art__mark">{project.index}</span>
    </div>
  );
}

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-page min-h-[100dvh] bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
          <a
            href="#home"
            className="group flex items-center gap-3"
            data-testid="link-brand-home"
            onClick={closeMenu}
          >
            <span className="flex h-8 w-8 items-center justify-center border border-foreground text-sm font-semibold transition-colors group-hover:bg-foreground group-hover:text-background">
              IK
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Ishmeet Kaur</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary transition-transform hover:translate-x-1 sm:flex"
            data-testid="link-header-contact"
          >
            Let&apos;s talk <ArrowUpRight size={14} strokeWidth={1.7} />
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            data-testid="button-toggle-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-6 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between text-sm font-medium"
                  data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={closeMenu}
                >
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
            <div className="reveal reveal-delay-2 max-w-[420px] lg:pb-3">
              <p className="mb-8 text-xl leading-[1.35] tracking-[-0.02em] md:text-2xl">
                I build thoughtful data systems and applied ML tools for messy, meaningful problems.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#selected-work"
                  className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:border-primary hover:text-primary"
                  data-testid="link-hero-work"
                >
                  See selected work
                  <ArrowDownRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                <span className="font-mono-custom text-[10px] text-muted-foreground">01 / 06</span>
              </div>
            </div>
          </div>
          <div className="mt-24 grid gap-8 border-t border-border pt-5 sm:grid-cols-2 md:mt-36">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Data systems · Applied ML</p>
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:text-right">Currently at TD / co-op</p>
          </div>
        </section>

        <section id="selected-work" className="bg-[#e8e1d3] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14 flex flex-col justify-between gap-5 md:mb-20 md:flex-row md:items-end">
              <div>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">02 / Selected work</p>
                <h2 className="font-display text-5xl leading-none tracking-[-0.035em] md:text-7xl">A few things<br /><span className="italic">I&apos;ve worked on.</span></h2>
              </div>
              <p className="max-w-[260px] text-sm leading-relaxed text-muted-foreground">A visual index of projects across data, backend engineering, analytics, and machine learning.</p>
            </div>
            <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-12">
              {featuredProjects.map((project, index) => (
                <article
                  key={project.name}
                  className={`group ${index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'} ${index % 3 === 1 ? 'lg:translate-y-16' : ''}`}
                  data-testid={`card-project-${project.index}`}
                >
                  <div className="mb-5 overflow-hidden border border-foreground/10">
                    <ProjectVisual project={project} />
                  </div>
                  <div className="flex items-start justify-between gap-4 border-t border-foreground/25 pt-4">
                    <div>
                      <p className="mb-2 font-mono-custom text-[10px] text-muted-foreground">{project.index} / PROJECT</p>
                      <h3 className="max-w-[340px] text-xl font-medium tracking-[-0.025em] transition-colors group-hover:text-primary md:text-2xl">{project.name}</h3>
                      <p className="mt-3 max-w-[480px] text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    </div>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-foreground/30 transition-colors group-hover:border-primary group-hover:text-primary">
                      <ArrowUpRight size={15} strokeWidth={1.4} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
            <div>
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">03 / Experience</p>
              <h2 className="max-w-[380px] font-display text-5xl leading-[.92] tracking-[-0.035em] md:text-7xl">Learning by<br /><span className="italic">building.</span></h2>
            </div>
            <div className="border-t border-border">
              <div className="grid gap-6 border-b border-border py-8 md:grid-cols-[1fr_1.8fr_auto] md:gap-10">
                <p className="font-mono-custom text-[11px] text-muted-foreground">CURRENT</p>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">TD</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Current co-op</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right">Current role</p>
              </div>
              <div className="grid gap-6 border-b border-border py-8 md:grid-cols-[1fr_1.8fr_auto] md:gap-10">
                <p className="font-mono-custom text-[11px] text-muted-foreground">PREVIOUS</p>
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">IBM</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Previous production-support experience</p>
                </div>
                <p className="text-sm text-muted-foreground md:text-right">Previous experience</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="bg-[#2f3432] px-6 py-24 text-[#f1ebdf] md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
              <div>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#d2876f]">04 / Skills</p>
                <h2 className="font-display text-5xl leading-[.92] tracking-[-0.035em] md:text-7xl">The tools<br /><span className="italic text-[#d2876f]">I reach for.</span></h2>
              </div>
              <div className="grid border-t border-[#f1ebdf]/25 sm:grid-cols-2">
                {[
                  ['01', 'Data systems', 'Pipelines · analytics · data modeling'],
                  ['02', 'Applied ML', 'Forecasting · document processing · analysis'],
                  ['03', 'Python + backend', 'Services · automation · production support'],
                  ['04', 'Communication', 'Clear thinking · careful documentation'],
                ].map(([index, title, detail], skillIndex) => (
                  <div key={index} className={`border-b border-[#f1ebdf]/25 py-7 ${skillIndex % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'}`}>
                    <p className="mb-7 font-mono-custom text-[10px] text-[#b6b8ae]">{index}</p>
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
              <h2 className="font-display text-5xl leading-[.92] tracking-[-0.035em] md:text-7xl">Curious by<br /><span className="italic">default.</span></h2>
            </div>
            <div className="max-w-[680px]">
              <p className="text-2xl leading-[1.2] tracking-[-0.03em] md:text-4xl">I like working where careful engineering meets questions that do not have obvious answers.</p>
              <div className="mt-12 grid gap-8 border-t border-border pt-7 sm:grid-cols-2">
                <p className="text-sm leading-relaxed text-muted-foreground">I&apos;m pursuing an MSc in Computing Science (Big Data) at Simon Fraser University, learning how to make complex information more useful, trustworthy, and human.</p>
                <p className="text-sm leading-relaxed text-muted-foreground">Outside the code, I&apos;m usually looking for the small detail that changes how a system feels to use — the quiet part of good engineering.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border bg-[#d8c6aa] px-6 py-24 md:px-10 md:py-36 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_.7fr]">
              <div>
                <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">06 / Contact</p>
                <h2 className="max-w-[850px] font-display text-6xl leading-[.86] tracking-[-0.045em] md:text-8xl">Have a good<br /><span className="italic">question?</span></h2>
              </div>
              <div className="max-w-[300px] lg:pb-2">
                <p className="mb-7 text-base leading-relaxed">I&apos;m always interested in thoughtful problems, useful systems, and people who care about the details.</p>
                <a
                  href="#home"
                  className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:border-primary hover:text-primary"
                  data-testid="link-contact-top"
                >
                  Back to top
                  <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="mt-24 flex flex-col justify-between gap-6 border-t border-foreground/25 pt-5 text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
              <span>© Ishmeet Kaur</span>
              <span>Made with care</span>
              <span>Engineering / Data / ML</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortfolioPage;
