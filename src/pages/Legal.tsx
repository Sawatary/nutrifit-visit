import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

const LEGAL_BASE = 'https://nutrifit.info'

const docs = [
  { key: 'privacyPolicy' as const, path: '/privacy-policy', icon: 'shield', internal: true },
  { key: 'userAgreement' as const, path: '/user-agreement', icon: 'document', internal: true },
  { key: 'publicOffer' as const, path: '/public-offer', icon: 'file', internal: true },
] as const

function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconDocument() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function IconFile() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
      <path d="M12 18v-6" />
      <path d="M9 15h6" />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function Legal() {
  const { t } = useApp()

  return (
    <section className="section section--two-cols section--legal">
      <div className="two-cols-block two-cols-block--single legal-wrap">
        <h2 className="section-title legal-title">{t.legal.title}</h2>
        <div className="legal-cards">
          {docs.map(({ key, path, icon, internal }) => {
            const IconEl = icon === 'shield' ? IconShield : icon === 'document' ? IconDocument : IconFile
            return (
              <div key={key} className="legal-card-wrap">
                {internal ? (
                  <Link to={path} className="legal-card" aria-label={t.legal.openDoc}>
                    <span className={`legal-card__icon legal-card__icon--${icon}`}>
                      <IconEl />
                    </span>
                    <span className="legal-card__label">{t.legal[key]}</span>
                    <span className="legal-card__arrow" aria-hidden>→</span>
                  </Link>
                ) : (
                  <a
                    href={`${LEGAL_BASE}${path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="legal-card"
                    title={t.legal.openDoc}
                  >
                    <span className={`legal-card__icon legal-card__icon--${icon}`}>
                      <IconEl />
                    </span>
                    <span className="legal-card__label">{t.legal[key]}</span>
                    <span className="legal-card__arrow">
                      <IconExternal />
                    </span>
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
