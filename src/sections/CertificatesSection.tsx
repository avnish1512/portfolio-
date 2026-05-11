import FadeIn from '../components/FadeIn'

const certifications = [
  { number: '01', name: 'AI for Everyone', issuer: 'DeepLearning.AI (Andrew Ng)', date: 'May 2026' },
  { number: '02', name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services', date: 'May 2026' },
  { number: '03', name: 'AI Tools & ChatGPT Workshop', issuer: 'be10x', date: 'May 2026' },
  { number: '04', name: '30 Days Python Micro Course', issuer: 'SkillCourse (ISO 9001:2015)', date: 'Feb 2026' },
  { number: '05', name: '30 Days Power BI Micro Course', issuer: 'SkillCourse (ISO 9001:2015)', date: 'Feb 2026' },
  { number: '06', name: 'Amazon & Microsoft Cloud Services', issuer: 'Domain Computer Education', date: 'Aug 2022' },
]

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{
        background: '#FFFFFF',
        borderTopLeftRadius: 'clamp(40px, 6vw, 60px)',
        borderTopRightRadius: 'clamp(40px, 6vw, 60px)',
      }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{
            color: '#0C0C0C',
            fontSize: 'clamp(3rem, 12vw, 160px)',
          }}
        >
          Certificates
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <FadeIn key={cert.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : {}),
              }}
            >
              {/* Number */}
              <span
                className="font-black shrink-0 leading-none"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(3rem, 10vw, 140px)',
                }}
              >
                {cert.number}
              </span>

              {/* Name + Issuer + Date */}
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                  }}
                >
                  {cert.name}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{
                      color: '#0C0C0C',
                      opacity: 0.6,
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                    }}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    className="font-light uppercase tracking-wider text-xs"
                    style={{ color: '#0C0C0C', opacity: 0.35 }}
                  >
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
