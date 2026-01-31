import { useApp } from '../context/AppContext'

const NUTRIFIT_URL = 'https://nutrifit.info'

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function Pricing() {
  const { t } = useApp()
  const plans = [
    { key: 'lite' as const, highlighted: false },
    { key: 'pro' as const, highlighted: true },
    { key: 'expert' as const, highlighted: false },
  ]

  return (
    <section className="section section--pricing">
      <div className="pricing-wrap">
        <h2 className="section-title pricing-title">{t.pricing.title}</h2>
        <p className="pricing-subtitle">{t.pricing.subtitle}</p>
        <div className="pricing-cards">
          {plans.map(({ key, highlighted }) => {
            const plan = t.pricing[key]
            return (
              <div
                key={key}
                className={`pricing-card ${highlighted ? 'pricing-card--highlighted' : ''}`}
              >
                <h3 className="pricing-card__name">{plan.name}</h3>
                <div className="pricing-card__price-row">
                  <span className="pricing-card__price">{plan.price}</span>
                  {plan.pricePeriod && (
                    <span className="pricing-card__price-period">{plan.pricePeriod}</span>
                  )}
                </div>
                <ul className="pricing-card__features" role="list">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="pricing-card__feature">
                      <span className="pricing-card__check" aria-hidden>
                        <CheckIcon />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pricing-card__cta">
                  <a
                    href={NUTRIFIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
