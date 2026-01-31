import { useApp } from '../context/AppContext'
import { IMAGES } from '../images'

export function Features() {
  const { t, setLightboxImage } = useApp()

  return (
    <section className="section">
      <h2 className="section-title">{t.features.title}</h2>
      <p className="section-desc section-desc--center">{t.features.desc}</p>
      <div className="features-zigzag">
        {t.features.items.map((item: { title: string; desc: string }, i: number) => (
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
  )
}
