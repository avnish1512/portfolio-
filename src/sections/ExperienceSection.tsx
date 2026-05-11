import FadeIn from '../components/FadeIn'

const experiences = [
  {
    number: '01',
    role: 'Intern — AI & Machine Learning',
    company: 'Securenest Cybersecurity Institution',
    period: 'Jan 2026 — Apr 2026',
    description:
      'Completed a 4-month internship covering AI/ML fundamentals within a cybersecurity context. Worked on AI-based security use-cases including threat detection and anomaly identification. Awarded Certificate of Appreciation by CEO & Founder.',
  },
  {
    number: '02',
    role: 'Intern — Cloud Services',
    company: 'Domain IT Services, Kolhapur',
    period: 'Jul 2022 — Aug 2022',
    description:
      'Completed industrial training focused on Amazon Web Services (AWS) and Microsoft Azure cloud platforms. Gained hands-on experience in cloud infrastructure, compute services, storage, and deployment concepts.',
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{
        background: '#0C0C0C',
        borderTopLeftRadius: 'clamp(40px, 6vw, 60px)',
        borderTopRightRadius: 'clamp(40px, 6vw, 60px)',
      }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(215, 226, 234, 0.12)',
                ...(i === 0 ? { borderTop: '1px solid rgba(215, 226, 234, 0.12)' } : {}),
              }}
            >
              <span
                className="hero-heading font-black shrink-0 leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {exp.number}
              </span>

              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {exp.role}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <span
                    className="font-light"
                    style={{ color: '#D7E2EA', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
                  >
                    {exp.company}
                  </span>
                  <span
                    className="font-light uppercase tracking-wider text-xs"
                    style={{ color: '#D7E2EA', opacity: 0.35 }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p
                  className="font-light leading-relaxed max-w-2xl mt-1"
                  style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
