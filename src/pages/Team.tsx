import { useApp } from '../context/AppContext'
import { IMAGES } from '../images'

export function Team() {
  const { t, setLightboxImage } = useApp()

  return (
    <section className="section section--alt" id="team">
      <h2 className="section-title">{t.team.title}</h2>
      <p className="section-desc section-desc--center">{t.team.desc}</p>
      <div className="team-grid">
        {t.team.members.map((member: { initials: string; name: string; role: string; bio: string }, i: number) => (
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
  )
}
