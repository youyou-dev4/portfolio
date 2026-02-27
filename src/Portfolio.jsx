import { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Phone, Download,
  ExternalLink, ChevronRight, Code2, Server,
  Smartphone, Database, Wrench, Globe, Sun, Moon,
} from 'lucide-react';
import './portfolio.css';
import fr from './fr';
import en from './en';

/* ─── Icon map for skill groups ────────────────────────────── */
const GROUP_ICONS = [
  <Server size={15} />,
  <Code2 size={15} />,
  <Smartphone size={15} />,
  <Database size={15} />,
  <Wrench size={15} />,
  <Globe size={15} />,
];

/* ─── Component ─────────────────────────────────────────────── */
export default function Portfolio() {
  const [dark, setDark]     = useState(true);
  const [lang, setLang]     = useState('fr');    // 'fr' | 'en'
  const [scrolled, setScrolled] = useState(false);

  const t = lang === 'fr' ? fr : en;

  /* scroll listener */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* apply theme class to <html> */
  useEffect(() => {
    document.documentElement.className = dark ? 'theme-dark' : 'theme-light';
  }, [dark]);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#about" className="nav__logo">YM<span style={{ color: 'var(--muted)' }}>.</span></a>

        <div className="nav__links">
          {['about', 'skills', 'projects', 'contact'].map(s => (
            <a key={s} href={`#${s}`} className="nav__link">{t.nav[s]}</a>
          ))}
        </div>

        <div className="nav__actions">
          {/* Lang toggle */}
          <button className="lang-toggle" onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          {/* Theme toggle */}
          <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CV download */}
          <a href="/cv.pdf" download="CV_Younes_MATOUB.pdf" className="btn-cv">
            <Download size={13} /> {t.nav.cv}
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="about" className="hero grid-bg">
        <div className="hero__glow" />

        <div className="hero__grid fade-up">
          {/* Left content */}
          <div>
            <span className="hero__badge">
              // {t.hero.status}
            </span>

            <h1 className="hero__name">
              {t.hero.title1}<br />
              <span>{t.hero.title2}</span>
            </h1>

            <p className="hero__subtitle mono">{t.hero.subtitle}</p>

            <p className="hero__description">{t.hero.description}</p>

            <div className="hero__ctas">
              <a href="#contact" className="btn-primary">
                {t.hero.cta_contact} <ChevronRight size={16} />
              </a>
              <a href="#projects" className="btn-secondary">
                {t.hero.cta_projects}
              </a>
            </div>

            <div className="hero__socials">
              {[
                { href: 'https://linkedin.com/in/younes-matoub', icon: <Linkedin size={20} /> },
                { href: 'https://github.com/youyou-dev4',        icon: <Github size={20} /> },
                { href: 'mailto:matoub.youness@gmail.com',       icon: <Mail size={20} /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer" className="hero__social-link">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — status card */}
          <div className="status-card">
            {/* Top accent line */}
            {/* Avatar */}
            <div className="status-card__avatar">
              <img
                src="/photo-profil.jpg"
                alt="Younes Matoub"
                onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/72'; }}
              />
            </div>

            {/* Status dot */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
              <div className="status-dot" />
              <span style={{ fontSize: 13 }}>{t.hero.card.status_value}</span>
            </div>

            {/* Info rows */}
            {t.hero.card.fields.map(({ label, value }) => (
              <div key={label} className="status-card__row">
                <p className="status-card__row-label mono">{label}</p>
                <p className="status-card__row-value">{value}</p>
              </div>
            ))}

            {/* Languages */}
            <div className="status-card__row" style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
              <p className="status-card__row-label mono" style={{ marginBottom: 10 }}>
                {t.hero.card.languages_label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['FR C1', 'EN B2', 'KAB', 'AR'].map(l => (
                  <span key={l} className="tag" style={{ fontSize: 10 }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────── */}
      <section id="skills" className="skills-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">{t.skills.section_label}</span>
          <h2 className="section-title">{t.skills.title}</h2>

          <div className="skills-grid">
            {t.skills.groups.map((group, i) => (
              <div key={group.label} className="skill-group">
                <div className="skill-group__header">
                  <span className="skill-group__icon">{GROUP_ICONS[i]}</span>
                  <span className="skill-group__label mono">{group.label}</span>
                </div>
                <div className="skill-group__list">
                  {group.skills.map(skill => (
                    <div key={skill} className="skill-chip">
                      <div className="skill-dot" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Languages panel */}
          <div className="languages-panel">
            {t.skills.languages.map(({ lang: l, level, color }) => (
              <div key={l} className="lang-badge">
                <div className="lang-badge__dot" style={{ background: color }} />
                <div>
                  <p className="lang-badge__name">{l}</p>
                  <p className="lang-badge__level mono">{level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────── */}
      <section id="projects" className="projects-section grid-bg">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="projects-header">
            <div>
              <span className="section-label">{t.projects.section_label}</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>{t.projects.title}</h2>
            </div>
            <a href="https://github.com/youyou-dev4" target="_blank" rel="noreferrer" className="btn-secondary">
              <Github size={15} /> {t.projects.github_cta}
            </a>
          </div>

          <div className="projects-grid">
            {t.projects.items.map(project => (
              <ProjectCard key={project.id} project={project} seeCode={t.projects.see_code} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────────── */}
      <section className="education-section">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="section-label">{t.education.section_label}</span>
          <h2 className="section-title">{t.education.title}</h2>

          <div className="education-list">
            {t.education.items.map(edu => (
              <div key={edu.year} className="edu-card">
                <div className="edu-card__left">
                  <span className="edu-card__year mono">{edu.year}</span>
                  <div>
                    <p className="edu-card__title">{edu.title}</p>
                    <p className="edu-card__school">{edu.school}</p>
                  </div>
                </div>
                <span className="edu-card__badge">{edu.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="contact-section grid-bg">
        <span className="section-label">{t.contact.section_label}</span>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="contact-subtitle">{t.contact.subtitle}</p>

        <div className="contact-grid">
          {[
            { href: 'mailto:matoub.youness@gmail.com', icon: <Mail size={18} />, label: 'matoub.youness@gmail.com' },
            { href: 'tel:+33780863466',                icon: <Phone size={18} />, label: '(+33) 7 80 86 34 66' },
            { href: 'https://linkedin.com/in/younes-matoub', icon: <Linkedin size={18} />, label: 'linkedin.com/in/younes-matoub', external: true },
            { href: 'https://github.com/youyou-dev4',        icon: <Github size={18} />,   label: 'github.com/youyou-dev4',         external: true },
          ].map(({ href, icon, label, external }) => (
            <a
              key={href}
              href={href}
              className="contact-link"
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="contact-icon">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>

        <a href="/cv.pdf" download="CV_Younes_MATOUB.pdf" className="btn-primary" style={{ margin: '0 auto' }}>
          <Download size={15} /> {t.contact.download_cv}
        </a>

        <p className="contact-footer">{t.contact.footer}</p>
      </section>

    </div>
  );
}

/* ─── ProjectCard sub-component ─────────────────────────────── */
function ProjectCard({ project, seeCode }) {
  const { title, category, period, image, stack, description, highlights, github, color, icon } = project;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="project-card">
      {/* Colored top bar on hover */}
      <div
        className="project-card__top-bar"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      {/* Image */}
      <div className="project-card__image">
        {!imgError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
          />
        ) : null}
        {imgError && (
          <div
            className="project-card__image-placeholder"
            style={{ background: `linear-gradient(135deg, ${color}22, var(--surface))` }}
          >
            <span>{icon}</span>
            <span>{title}</span>
          </div>
        )}
        <div className="project-card__image-overlay">
          <a href={github} target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 22px', background: '#fff', color: '#000',
              borderRadius: 20, fontFamily: 'Space Mono, monospace',
              fontSize: 13, fontWeight: 700, textDecoration: 'none',
              transform: 'translateY(4px)', transition: 'transform 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(0)'}
            onMouseOut={e => e.currentTarget.style.transform = 'translateY(4px)'}
          >
            <Github size={16} /> View on GitHub
          </a>
        </div>
      </div>

      {/* Header */}
      <div className="project-card__header">
        <div className="project-card__meta">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span
              className="project-card__category mono"
              style={{
                border: `1px solid ${color}40`,
                color: color,
                background: `${color}12`,
              }}
            >
              {category}
            </span>
            <span className="project-card__period mono">{period}</span>
          </div>
          <a href={github} target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', transition: 'color 0.2s', marginTop: 2 }}
            onMouseOver={e => e.currentTarget.style.color = color}
            onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <Github size={17} />
          </a>
        </div>

        <h3 className="project-card__title">
          <span>{icon}</span> {title}
        </h3>
        <p className="project-card__description">{description}</p>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <ul className="project-card__highlights">
          {highlights.map(h => (
            <li key={h} className="project-card__highlight">
              <span className="project-card__highlight-arrow" style={{ color }}>›</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="project-card__tags">
          {stack.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
          style={{ color }}
        >
          {seeCode} <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}