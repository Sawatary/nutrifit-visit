import { useState } from 'react'
import { useApp } from '../context/AppContext'

export function Spravka() {
  const { t } = useApp()
  const [openHelpIndex, setOpenHelpIndex] = useState<number | null>(null)

  return (
    <section className="section section--two-cols">
      <div className="two-cols-block two-cols-block--single">
        <h2 className="section-title">{t.help.title}</h2>
        <div className="help-list" role="list">
          {t.help.items.map((item: { title: string; desc: string }, index: number) => (
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
  )
}
