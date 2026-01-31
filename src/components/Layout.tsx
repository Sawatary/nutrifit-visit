import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import type { LocaleCode } from '../locales'
import { useApp, type ThemeMode } from '../context/AppContext'
import '../App.css'

const THEME_CYCLE: ThemeMode[] = ['dark', 'system', 'light']

function getNextTheme(current: ThemeMode): ThemeMode {
  const i = THEME_CYCLE.indexOf(current)
  return THEME_CYCLE[(i + 1) % THEME_CYCLE.length]
}

function getThemeLabelKey(theme: ThemeMode): 'darkLabel' | 'systemLabel' | 'lightLabel' {
  return theme === 'dark' ? 'darkLabel' : theme === 'system' ? 'systemLabel' : 'lightLabel'
}

const NAV_LINKS = [
  { to: '/features', key: 'features' as const },
  { to: '/team', key: 'team' as const },
  { to: '/pricing', key: 'pricing' as const },
  { to: '/spravka', key: 'help' as const },
  { to: '/faq', key: 'faq' as const },
  { to: '/legal', key: 'legal' as const },
] as const

export function Layout() {
  const { t, theme, setTheme, locale, setLocale, langOpen, setLangOpen, langRef, currentLang, LOCALE_OPTIONS, getFlagSrc } = useApp()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onEscape = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileMenuOpen(false) }
    document.addEventListener('keydown', onEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const navLabel = (key: typeof NAV_LINKS[number]['key']) =>
    key === 'legal' ? t.footer.links.legal : t.nav[key]

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="NUTRIFIT" onClick={() => setMobileMenuOpen(false)}>
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
          </Link>
          <nav className="nav">
            {NAV_LINKS.map(({ to, key }) => (
              <Link key={key} to={to}>{navLabel(key)}</Link>
            ))}
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
                  {LOCALE_OPTIONS.map((opt: { code: LocaleCode; name: string; countryCode: string }) => (
                    <li key={opt.code} role="option" aria-selected={locale === opt.code}>
                      <button
                        type="button"
                        className={`lang-switch__option ${locale === opt.code ? 'lang-switch__option--active' : ''}`}
                        onClick={() => setLocale(opt.code)}
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
              className="theme-switcher__btn"
              onClick={() => setTheme(getNextTheme(theme))}
              aria-label={t.theme[getThemeLabelKey(theme)]}
              title={t.theme[getThemeLabelKey(theme)]}
            >
              <span className="theme-switcher__icon" aria-hidden>
                {theme === 'dark' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                )}
                {theme === 'system' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                )}
                {theme === 'light' && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                )}
              </span>
            </button>
            <button
              type="button"
              className={`nav-burger ${mobileMenuOpen ? 'nav-burger--open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-controls="mobile-menu"
            >
              <span className="nav-burger__line" />
              <span className="nav-burger__line" />
              <span className="nav-burger__line" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`nav-overlay ${mobileMenuOpen ? 'nav-overlay--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
      >
        <nav className="nav-drawer" onClick={(e: { stopPropagation(): void }) => e.stopPropagation()}>
          <button
            type="button"
            className="nav-drawer__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label={t.nav.closeMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div className="nav-drawer__links">
            {NAV_LINKS.map(({ to, key }) => (
              <Link key={key} to={to} className="nav-drawer__link" onClick={() => setMobileMenuOpen(false)}>
                {navLabel(key)}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-company">
            <div className="footer-company__name">{t.footer.companyName}</div>
            <div className="footer-company__jurisdiction">{t.footer.jurisdiction}</div>
            <a href="mailto:office@nutrifit.info" className="footer-company__email">{t.footer.email}</a>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} NUTRIFIT. {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  )
}
