import { useState } from 'react'
import { useApp } from '../context/AppContext'

export function Faq() {
  const { t } = useApp()
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <section className="section section--two-cols">
      <div className="two-cols-block two-cols-block--single">
        <h2 className="section-title">{t.faq.title}</h2>
        <div className="faq-list" role="list">
          {t.faq.items.map((item: { q: string; a: string }, index: number) => (
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
    </section>
  )
}
