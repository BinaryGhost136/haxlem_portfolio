import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Download,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Menu,
  X,
  Pause,
  Play,
  ChartNoAxesCombined,
  Cpu,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  content,
  experiences,
  qualifications,
  skillGroups,
  text,
  type Language,
  type LocalText,
} from "@/lib/portfolio-content";
import portrait from "@/assets/moise.jpeg";
import officePortrait from "@/assets/mo.jpeg";
import writingPortrait from "@/assets/MMo.jpeg";
import cv from "@/assets/cv.pdf";

const photos = [portrait, officePortrait, writingPortrait];
const links = ["about", "experience", "projects", "contact"];
const linkedin = "https://www.linkedin.com/in/ymlh";
const whatsapp = "https://wa.me/33759161212";

function SectionHeading({
  number,
  label,
  title,
  accent,
}: {
  number: string;
  label: string;
  title: string;
  accent?: string;
}) {
  return (
    <div>
      <div className="eyebrow">
        {number} / {label}
      </div>
      <h2 className="section-title">
        {title}
        {accent && (
          <>
            <br />
            <em>{accent}</em>
          </>
        )}
      </h2>
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function PortraitCarousel({ language }: { language: Language }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % photos.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);
  return (
    <div className="portrait-wrap">
      <div className="portrait-carousel">
        {photos.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            alt={index === active ? "Yémangnissè Moïse Louis HOUNKPE" : ""}
            aria-hidden={index !== active}
            className={index === active ? "active" : ""}
            width={190}
            height={190}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="portrait-controls text-muted-foreground"
        onClick={() => setPaused((value) => !value)}
        aria-label={(paused ? content.resume : content.pause)[language]}
        title={(paused ? content.resume : content.pause)[language]}
      >
        {paused ? <Play /> : <Pause />}
      </Button>
    </div>
  );
}

function ContactForm({ language }: { language: Language }) {
  const t = (value: LocalText) => value[language];
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      t(text("Bonjour Moïse,", "Hello Moïse,", "Hola Moïse,")),
      `${t(content.firstName)} : ${String(data.get("firstName") ?? "").trim()}`,
      `${t(content.surname)} : ${String(data.get("surname") ?? "").trim()}`,
      `${t(content.contactType)} : ${data.get("type") === "professional" ? t(content.business) : t(content.personal)}`,
      `${t(content.channel)} : ${data.get("channel") === "other" ? t(content.other) : data.get("channel")}`,
      "",
      String(data.get("message") ?? "").trim(),
    ].join("\n");
    const opened = window.open(
      `${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    if (opened) opened.opener = null;
    setSubmitted(true);
  }
  return (
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-field">
        <label htmlFor="surname">{t(content.surname)} *</label>
        <input id="surname" name="surname" autoComplete="family-name" required maxLength={80} />
      </div>
      <div className="form-field">
        <label htmlFor="firstName">{t(content.firstName)} *</label>
        <input id="firstName" name="firstName" autoComplete="given-name" required maxLength={80} />
      </div>
      <div className="form-field">
        <label htmlFor="type">{t(content.contactType)}</label>
        <select id="type" name="type" defaultValue="professional">
          <option value="professional">{t(content.business)}</option>
          <option value="personal">{t(content.personal)}</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="channel">{t(content.channel)}</label>
        <select id="channel" name="channel" defaultValue="WhatsApp">
          <option>WhatsApp</option>
          <option>LinkedIn</option>
          <option>Instagram</option>
          <option value="other">{t(content.other)}</option>
        </select>
      </div>
      <div className="form-field form-full">
        <label htmlFor="message">{t(content.message)} *</label>
        <textarea
          id="message"
          name="message"
          placeholder={t(content.placeholder)}
          required
          maxLength={3000}
        />
      </div>
      <div className="form-full">
        <Button variant="gold" type="submit" className="w-full justify-between">
          {t(content.send)}
          <ArrowUpRight />
        </Button>
        {submitted && (
          <p className="form-status" role="status">
            {t(content.sent)}
          </p>
        )}
      </div>
    </form>
  );
}

export function Portfolio() {
  const [language, setLanguage] = useState<Language>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = (value: LocalText) => value[language];
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#home" className="logo" aria-label="HAXELM — Accueil">
            <span className="logo-symbol">h.</span>
            <span>
              HAXELM<small>FINANCIAL INTELLIGENCE HUB</small>
            </span>
          </a>
          <nav
            aria-label={t(text("Navigation principale", "Main navigation", "Navegación principal"))}
            className="header-nav"
          >
            {content.nav.map((item, index) => (
              <a key={links[index]} href={`#${links[index]}`}>
                {t(item)}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <div className="language-control" aria-label={t(content.languages)}>
              {(["fr", "en", "es"] as Language[]).map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className={`language-button ${language === item ? "selected" : ""}`}
                  aria-pressed={language === item}
                  onClick={() => setLanguage(item)}
                  aria-label={{ fr: "Français", en: "English", es: "Español" }[item]}
                >
                  {item.toUpperCase()}
                </Button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-menu-button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Menu">
            {content.nav.map((item, index) => (
              <a key={links[index]} href={`#${links[index]}`} onClick={() => setMenuOpen(false)}>
                {t(item)}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero">
          <div className="shell relative">
            <p className="eyebrow welcome">{t(content.welcome)}</p>
            <PortraitCarousel language={language} />
            <h1 className="hero-name">HOUNKPE</h1>
            <p className="given-name">Yémangnissè Moïse Louis</p>
            <p className="hero-role">
              {t(content.role)}
              <br />
              <span>{t(content.founder)}</span>
            </p>
            <p className="hero-slogan">« Discipline aujourd'hui, empire demain »</p>
            <div className="hero-actions">
              <Button asChild variant="gold">
                <a href="#contact">
                  {t(content.contact)}
                  <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="editorial">
                <a
                  href={cv}
                  download="CV-HOUNKPE-Moise-Louis.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download />
                  {t(content.cv)}
                </a>
              </Button>
            </div>
            <p className="location-line">
              <MapPin size={12} />
              Joué-lès-Tours, France <span className="mx-2">·</span> Finance & Fintech
            </p>
            <div className="hero-bottom">
              <span>HAXELM / PORTFOLIO</span>
              <a
                href="#about"
                aria-label={t(content.scroll)}
                className="flex flex-col items-center gap-2"
              >
                <span>{t(content.scroll)}</span>
                <ArrowDown size={15} />
              </a>
              <span>FRANCE · BÉNIN</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="shell">
            <div className="about-grid">
              <div>
                <SectionHeading
                  number="01"
                  label={t(content.identity)}
                  title={t(content.about)}
                  accent={t(content.aboutAccent)}
                />
                <p className="section-copy mt-6">{t(content.intro)}</p>
                <p className="section-copy mt-4">{t(content.bio)}</p>
                <p className="section-copy mt-4">{t(content.values)}</p>
              </div>
              <div className="flex flex-col justify-center gap-8">
                <div className="stat-grid">
                  <div className="stat">
                    <strong>06</strong>
                    <span>{t(content.institutions)}</span>
                  </div>
                  <div className="stat">
                    <strong>02</strong>
                    <span>{t(content.projects)}</span>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="eyebrow">
                    {t(
                      text("À propos · Engagement", "About · Leadership", "Sobre mí · Compromiso"),
                    )}
                  </p>
                  <p className="section-copy mt-4">
                    {t(
                      text(
                        "Coordinateur Programmation et Animation de l’Amicale des Anciens Élèves d’Adjarra depuis août 2025. Responsable étudiants à l’ENEAM en première et troisième année.",
                        "Programming and Activities Coordinator for the Adjarra Alumni Association since August 2025. Student representative at ENEAM in the first and third years.",
                        "Coordinador de Programación y Actividades de la Asociación de Antiguos Alumnos de Adjarra desde agosto de 2025. Representante estudiantil en ENEAM en primero y tercero.",
                      ),
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div id="profile" className="profile-band">
              <div>
                <small>{t(content.location)}</small>
                <span>Joué-lès-Tours, France</span>
              </div>
              <div>
                <small>{t(content.education)}</small>
                <span>L3 · IAE de Tours</span>
              </div>
              <div>
                <small>{t(content.languages)}</small>
                <span>{t(content.languageDetail)}</span>
              </div>
              <div>
                <small>{t(content.format)}</small>
                <span>{t(content.formatDetail)}</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="shell">
            <div className="section-head">
              <SectionHeading
                number="02"
                label={t(content.expertise)}
                title={t(content.skills)}
                accent={t(content.skillsAccent)}
              />
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = [ChartNoAxesCombined, Cpu, Users][index];
                return (
                  <div key={group.title.fr} className="skill-column">
                    {Icon && <Icon size={23} className="text-primary" strokeWidth={1.3} />}
                    <h3>{t(group.title)}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.fr}>{t(item)}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div id="technology" className="mt-10 border-t border-border pt-6">
              <p className="eyebrow">{t(content.technology)}</p>
              <p className="section-copy mt-3 max-w-3xl">
                {t(
                  text(
                    "Conception de systèmes de gestion Excel de 8 à 12 feuilles interconnectées, avec formules et tableaux de bord métier. Fondations en data et machine learning en cours d’apprentissage ; marchés actions et forex en exploration.",
                    "Design of Excel management systems with 8 to 12 interconnected sheets, formulas and business dashboards. Currently learning data and machine learning foundations, and exploring equity and forex markets.",
                    "Diseño de sistemas de gestión Excel con 8 a 12 hojas interconectadas, fórmulas y cuadros de mando. Aprendizaje de fundamentos de datos y machine learning, y exploración de mercados de acciones y divisas.",
                  ),
                )}
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="shell">
            <div className="section-head">
              <SectionHeading
                number="03"
                label={t(content.professional)}
                title={t(content.experience)}
                accent={t(content.experienceAccent)}
              />
            </div>
            <div>
              {experiences.map((entry) => (
                <article key={entry.company} className="timeline-row">
                  <p className="timeline-date">{t(entry.date)}</p>
                  <div>
                    <h3 className="timeline-role">{t(entry.role)}</h3>
                    <p className="timeline-company">{entry.company}</p>
                  </div>
                  <p className="timeline-description">{t(entry.description)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="shell">
            <div className="section-head">
              <SectionHeading
                number="04"
                label={t(content.works)}
                title={t(content.projectsTitle)}
                accent={t(content.projectsAccent)}
              />
              <span className="hidden text-xs text-muted-foreground sm:block">
                HAXELM Financial Intelligence Hub
              </span>
            </div>
            <div className="project-grid">
              <article className="project">
                <div className="project-art axesave-art" aria-hidden="true">
                  Axe<span>Save</span>
                </div>
                <div className="project-content">
                  <span className="project-tag">{t(content.inProgress)}</span>
                  <h3 className="project-title">AxeSave</h3>
                  <p className="section-copy">{t(content.axeDescription)}</p>
                  <div className="project-footer">
                    <span>
                      FINTECH ·{" "}
                      {t(text("ÉPARGNE COLLECTIVE", "COLLECTIVE SAVINGS", "AHORRO COLECTIVO"))}
                    </span>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="#contact"
                        aria-label={t(
                          text("Échanger sur AxeSave", "Discuss AxeSave", "Hablar de AxeSave"),
                        )}
                        title="AxeSave"
                      >
                        <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
              <article className="project">
                <div className="project-art book-art" aria-hidden="true">
                  <div className="book-cover">
                    Projet.
                    <br />
                    Profil.
                    <br />
                    <span className="text-primary">Profit.</span>
                    <small>MOÏSE LOUIS HOUNKPE</small>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-tag">{t(content.writing)}</span>
                  <h3 className="project-title">Projet & Profil & Profit</h3>
                  <p className="section-copy">{t(content.bookDescription)}</p>
                  <div className="project-footer">
                    <span>
                      {t(
                        text(
                          "OUVRAGE · ENTREPRENEURIAT",
                          "BOOK · ENTREPRENEURSHIP",
                          "OBRA · EMPRENDIMIENTO",
                        ),
                      )}
                    </span>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href="#contact"
                        aria-label={t(
                          text("Échanger sur l’ouvrage", "Discuss the book", "Hablar del libro"),
                        )}
                        title="Projet & Profil & Profit"
                      >
                        <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="shell">
            <div className="section-head">
              <SectionHeading
                number="05"
                label={t(content.academic)}
                title={t(content.foundations)}
              />
            </div>
            <div className="education-grid">
              {qualifications.map((entry) => (
                <article key={entry.title.fr} className="education-item">
                  <p className="eyebrow">{t(entry.date)}</p>
                  <h3>{t(entry.title)}</h3>
                  <p>{entry.institution}</p>
                  {entry.additional && <p className="mt-3">{t(entry.additional)}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cv" className="section">
          <div className="shell cv-band">
            <div>
              <p className="eyebrow">06 / {t(content.curriculum)}</p>
              <h2 className="section-title">
                {t(
                  text(
                    "Mon parcours, en détail.",
                    "My journey, in detail.",
                    "Mi trayectoria, en detalle.",
                  ),
                )}
              </h2>
              <p className="section-copy mt-4">{t(content.cvDescription)}</p>
            </div>
            <Button asChild variant="editorial">
              <a
                href={cv}
                download="CV-HOUNKPE-Moise-Louis.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download />
                {t(content.cv)}
                <span className="text-muted-foreground text-[9px]">PDF</span>
              </a>
            </Button>
          </div>
        </section>

        <section id="news" className="section">
          <div className="shell">
            <p className="eyebrow">07 / {t(content.news)}</p>
            <div className="news-row">
              <div>
                <h2 className="section-title">{t(content.newsTitle)}</h2>
                <p className="section-copy mt-4">{t(content.newsCopy)}</p>
              </div>
              <Button asChild variant="editorial">
                <ExternalLink href={linkedin}>
                  <Linkedin />
                  {t(content.linkedin)}
                  <ArrowUpRight />
                </ExternalLink>
              </Button>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="shell contact-grid">
            <div>
              <p className="eyebrow">08 / {t(content.contact)}</p>
              <h2 className="contact-title">
                {t(content.contactTitle)}
                <br />
                <em>{t(content.contactAccent)}</em>
              </h2>
              <p className="section-copy">{t(content.contactCopy)}</p>
              <div className="contact-details">
                <a href="mailto:moisehounkpe3@gmail.com">
                  <Mail size={16} className="text-primary" />
                  moisehounkpe3@gmail.com
                </a>
                <a href="tel:+33759161212">
                  <Phone size={16} className="text-primary" />
                  +33 7 59 16 12 12
                </a>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={16} />
                  Joué-lès-Tours, France
                </span>
              </div>
            </div>
            <ContactForm language={language} />
          </div>
        </section>
      </main>

      <footer className="site-footer" id="platforms">
        <div className="shell footer-inner">
          <div>
            <a href="#home" className="logo">
              <span className="logo-symbol">h.</span>HAXELM
            </a>
            <p className="footer-meta mt-2">© 2026 HOUNKPE Moïse Louis · {t(content.footer)}</p>
          </div>
          <div className="social-links">
            <ExternalLink href={linkedin} className="footer-link flex items-center gap-2">
              <Linkedin size={14} />
              LinkedIn
              <ArrowUpRight size={12} />
            </ExternalLink>
            <ExternalLink href={whatsapp} className="footer-link flex items-center gap-2">
              <MessageCircle size={14} />
              WhatsApp
              <ArrowUpRight size={12} />
            </ExternalLink>
            <a
              href="#home"
              aria-label={t(text("Retour en haut", "Back to top", "Volver arriba"))}
              title={t(text("Retour en haut", "Back to top", "Volver arriba"))}
            >
              <ArrowRight className="-rotate-90" size={17} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
