import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { IMAGES } from '../images'

const HERO_STRIP_LINKS = ['/legal', '/features', '/team'] as const

export function Home() {
  const { t } = useApp()

  return (
    <>
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
        <div className="hero-strip" role="list">
          {t.hero.strip.map((item: string, i: number) => (
            <Link key={i} to={HERO_STRIP_LINKS[i]} className="hero-strip-item">
              {item}
            </Link>
          ))}
        </div>
      </section>

      {/* <section className="section section--bottom-cta">
        <div className="bottom-cta">
          <h2 className="bottom-cta__title">{t.bottomCta.title}</h2>
          <p className="bottom-cta__desc">{t.bottomCta.desc}</p>
          <ul className="bottom-cta__features" role="list">
            {t.bottomCta.features.map((text: string, i: number) => (
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
      </section> */}
    </>
  )
}
