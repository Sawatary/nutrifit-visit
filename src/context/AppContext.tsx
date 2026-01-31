import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react'
import {
  type LocaleCode,
  type Translations,
  LOCALES,
  LOCALE_OPTIONS,
  getStoredLocale,
  setStoredLocale,
  getFlagSrc,
} from '../locales'

const THEME_STORAGE_KEY = 'nutrifit-theme'

export type ThemeMode = 'dark' | 'light' | 'system'

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
  if (stored === 'dark' || stored === 'light' || stored === 'system') return stored
  return 'system'
}

function getEffectiveTheme(mode: ThemeMode): 'dark' | 'light' {
  if (mode === 'system' && typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return mode === 'system' ? 'dark' : mode
}

type AppContextValue = {
  locale: LocaleCode
  setLocale: (code: LocaleCode) => void
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  effectiveTheme: 'dark' | 'light'
  t: Translations
  langOpen: boolean
  setLangOpen: (open: boolean) => void
  langRef: React.RefObject<HTMLDivElement | null>
  currentLang: { code: LocaleCode; name: string; countryCode: string }
  LOCALE_OPTIONS: typeof LOCALE_OPTIONS
  getFlagSrc: typeof getFlagSrc
  lightboxImage: string | null
  setLightboxImage: (src: string | null) => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme)
  const [effectiveTheme, setEffectiveTheme] = useState<'dark' | 'light'>(() => getEffectiveTheme(getInitialTheme()))
  const [locale, setLocaleState] = useState<LocaleCode>(getStoredLocale)
  const [langOpen, setLangOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const langRef = useRef<HTMLDivElement>(null)

  const t = LOCALES[locale]
  const currentLang = LOCALE_OPTIONS.find((o) => o.code === locale) ?? LOCALE_OPTIONS[0]

  useEffect(() => {
    if (lightboxImage) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxImage])

  useEffect(() => {
    const next = getEffectiveTheme(theme)
    setEffectiveTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      setEffectiveTheme(mq.matches ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', mq.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
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

  const setTheme = (value: ThemeMode) => setThemeState(value)

  const setLocale = (code: LocaleCode) => {
    setLocaleState(code)
    setLangOpen(false)
  }

  const value: AppContextValue = {
    locale,
    setLocale,
    theme,
    setTheme,
    effectiveTheme,
    t,
    langOpen,
    setLangOpen,
    langRef,
    currentLang,
    LOCALE_OPTIONS,
    getFlagSrc,
    lightboxImage,
    setLightboxImage,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
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
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
