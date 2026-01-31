import { useState, useEffect, useRef } from 'react'
import './App.css'
import {
  type LocaleCode,
  type Translations,
  LOCALES,
  LOCALE_OPTIONS,
  getStoredLocale,
  setStoredLocale,
  getFlagSrc,
} from './locales'
import { IMAGES } from './images'

const THEME_STORAGE_KEY = 'nutrifit-theme'

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as 'dark' | 'light' | null
  if (stored === 'dark' || stored === 'light') return stored
  return 'dark'
}

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [openHelpIndex, setOpenHelpIndex] = useState<number | null>(null)
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)
  const [locale, setLocale] = useState<LocaleCode>(getStoredLocale)
  const [langOpen, setLangOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const langRef = useRef<HTMLDivElement>(null)

  const t: Translations = LOCALES[locale]

  useEffect(() => {
    if (lightboxImage) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxImage])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    setStoredLocale(locale)
  }, [locale])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleTheme = () => setTheme((prev: 'dark' | 'light') => (prev === 'dark' ? 'light' : 'dark'))

  const currentLang = LOCALE_OPTIONS.find((o) => o.code === locale) ?? LOCALE_OPTIONS[0]

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <a href="#" className="logo" aria-label="NUTRIFIT">
            <svg className="logo-svg" viewBox="0 0 140 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.43,11.43V20H.29V0H7.43l2.86,8.57V0h7.14V20H10.29Z" transform="translate(-0.29)"></path>
              <path d="M36,0V14.29Q36,20,30.29,20H24.57q-5.71,0-5.71-5.71V0H26V14.29h2.86V0Z" transform="translate(-0.29)"></path>
              <path d="M48.86,5.71V20H41.71V5.71H37.43V0H53.14V5.71Z" transform="translate(-0.29)"></path>
              <path d="M69,13.71,71.71,20H64.57l-2.28-5.71h-.58V20H54.57V0H66q5.72,0,5.71,5.71V8.57C71.71,11.17,70.82,12.89,69,13.71ZM64.57,8.57V5.71H61.71V8.57Z" transform="translate(-0.29)"></path>
              <path d="M80.29,0V20H73.14V0Z" transform="translate(-0.29)"></path>
              <path d="M81.71,0H96V5.71H88.86V7.14H96v5.72H88.86V20H81.71Z" transform="translate(-0.29)"></path>
              <path d="M104.57,0V20H97.43V0Z" transform="translate(-0.29)"></path>
              <path d="M117.43,5.71V20h-7.14V5.71H106V0h15.71V5.71Z" transform="translate(-0.29)"></path>
            </svg>
          </a>
          <nav className="nav">
            <a href="#features">{t.nav.features}</a>
            <a href="#team">{t.nav.team}</a>
            <a href="#spravka">{t.nav.help}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>
          <div className="header-controls">
            <div className="lang-switch" ref={langRef}>
              <button
                type="button"
                className="lang-switch__trigger"
                onClick={() => setLangOpen(!langOpen)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-label={currentLang.name}
                title={currentLang.name}
              >
                <span className="lang-switch__flag-circle" aria-hidden>
                  <img src={getFlagSrc(currentLang.countryCode)} alt="" width={26} height={26} loading="lazy" />
                </span>
              </button>
              {langOpen && (
                <ul
                  className="lang-switch__dropdown"
                  role="listbox"
                  aria-label={t.langSelectLabel}
                >
                  {LOCALE_OPTIONS.map((opt) => (
                    <li key={opt.code} role="option" aria-selected={locale === opt.code}>
                      <button
                        type="button"
                        className={`lang-switch__option ${locale === opt.code ? 'lang-switch__option--active' : ''}`}
                        onClick={() => {
                          setLocale(opt.code)
                          setLangOpen(false)
                        }}
                      >
                        <span className="lang-switch__flag-circle" aria-hidden>
                          <img src={getFlagSrc(opt.countryCode, 'w40')} alt="" width={22} height={22} loading="lazy" />
                        </span>
                        <span className="lang-switch__option-text">{opt.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.theme.lightLabel : t.theme.darkLabel}
              title={theme === 'dark' ? t.theme.light : t.theme.dark}
            >
              <span className="theme-toggle-icon" aria-hidden>
                {theme === 'dark' ? '☀' : '☽'}
              </span>
            </button>
          </div>
        </div>
      </header>

      <section className={`hero ${IMAGES.hero ? 'hero--with-image' : 'hero--centered'}`}>
        <div className="hero-inner">
          <div className="hero-content">
            <h1>{t.hero.title}</h1>
            <p className="hero-desc">{t.hero.desc}</p>
            <div className="hero-buttons">
              <a href="https://nutrifit.info/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn--large">
                {t.hero.cta}
              </a>
            </div>
          </div>
          {IMAGES.hero && (
            <div className="hero-media">
              <img src={IMAGES.hero} alt={t.hero.imageAlt} width={560} height={360} loading="eager" decoding="async" />
            </div>
          )}
        </div>
        <div className="hero-strip">
          {t.hero.strip.map((item, i) => (
            <span key={i} className="hero-strip-item">{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="features">
        <h2 className="section-title">{t.features.title}</h2>
        <p className="section-desc section-desc--center">{t.features.desc}</p>
        <div className="features-zigzag">
          {t.features.items.map((item, i) => (
            <div
              key={i}
              className={`feature-row ${i % 2 === 1 ? 'feature-row--reverse' : ''}`}
            >
              <div className="feature-row-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              {IMAGES.features[i] && (
                <div className="feature-row-media">
                  <button
                    type="button"
                    className="feature-row-media__link"
                    onClick={() => setLightboxImage(IMAGES.features[i])}
                    aria-label="Открыть изображение"
                  >
                    <img src={IMAGES.features[i]} alt="" width={400} height={260} loading="lazy" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt" id="team">
        <h2 className="section-title">{t.team.title}</h2>
        <p className="section-desc section-desc--center">{t.team.desc}</p>
        <div className="team-grid">
          {t.team.members.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-avatar">
                {IMAGES.team[i] ? (
                  <button
                    type="button"
                    className="team-avatar__link"
                    onClick={() => setLightboxImage(IMAGES.team[i])}
                    aria-label="Открыть фото"
                  >
                    <img src={IMAGES.team[i]} alt="" width={120} height={120} loading="lazy" />
                  </button>
                ) : (
                  member.initials
                )}
              </div>
              <h3>{member.name}</h3>
              <div className="role">{member.role}</div>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--two-cols" id="spravka">
        <div className="two-cols-block" id="faq">
          <h2 className="section-title">{t.faq.title}</h2>
          <div className="faq-list" role="list">
            {t.faq.items.map((item, index) => (
              <div
                key={index}
                className={`faq-item ${openFaqIndex === index ? 'faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-item-trigger"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-item-question">{item.q}</span>
                  <span className="faq-item-icon" aria-hidden>▼</span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="faq-item-answer"
                  hidden={openFaqIndex !== index}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="two-cols-block">
          <h2 className="section-title">{t.help.title}</h2>
          <div className="help-list" role="list">
            {t.help.items.map((item, index) => (
              <div
                key={index}
                className={`help-item ${openHelpIndex === index ? 'help-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="help-item-trigger"
                  onClick={() => setOpenHelpIndex(openHelpIndex === index ? null : index)}
                  aria-expanded={openHelpIndex === index}
                  aria-controls={`help-answer-${index}`}
                  id={`help-question-${index}`}
                >
                  <span className="help-item-title">{item.title}</span>
                  <span className="help-item-icon" aria-hidden>▼</span>
                </button>
                <div
                  id={`help-answer-${index}`}
                  role="region"
                  aria-labelledby={`help-question-${index}`}
                  className="help-item-answer"
                  hidden={openHelpIndex !== index}
                >
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bottom-cta">
        <div className="bottom-cta">
          <h2 className="bottom-cta__title">{t.bottomCta.title}</h2>
          <p className="bottom-cta__desc">{t.bottomCta.desc}</p>
          <ul className="bottom-cta__features" role="list">
            {t.bottomCta.features.map((text, i) => (
              <li key={i} className="bottom-cta__feature">
                <span className="bottom-cta__icon" aria-hidden>
                  {i === 0 ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  ) : i === 1 ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  )}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <div className="bottom-cta__buttons">
            <a href="https://nutrifit.info/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t.bottomCta.primaryBtn}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-bottom">
            © {new Date().getFullYear()} NUTRIFIT. {t.footer.copyright}
          </div>
          <div className="footer-links">
            <a href="#features">{t.footer.links.features}</a>
            <a href="#team">{t.footer.links.team}</a>
            <a href="#spravka">{t.footer.links.help}</a>
            <a href="#faq">{t.footer.links.faq}</a>
          </div>
        </div>
      </footer>

      {lightboxImage && (
        <div
          className="lightbox"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр изображения"
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setLightboxImage(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <div className="lightbox__inner" onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}>
            <img src={lightboxImage} alt="" />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
