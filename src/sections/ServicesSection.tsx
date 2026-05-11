import FadeIn from '../components/FadeIn'

const services = [
  {
    number: '01',
    name: 'Full-Stack Web Development',
    description:
      'Building responsive, high-performance web applications using React.js, JavaScript, HTML/CSS with PostgreSQL and Supabase backends — from concept to deployment.',
  },
  {
    number: '02',
    name: 'Cloud Engineering',
    description:
      'Architecting and deploying scalable cloud solutions on AWS, Microsoft Azure, and Google Cloud Platform — certified in cloud infrastructure and compute services.',
  },
  {
    number: '03',
    name: 'Mobile App Development',
    description:
      'Designing and developing native Android applications with Java and Android Studio — featuring real-time data, push notifications, and intuitive user experiences.',
  },
  {
    number: '04',
    name: 'AI & Machine Learning',
    description:
      'Implementing intelligent solutions using AI/ML models — from NLP-powered chatbots to threat detection systems and data-driven analytics dashboards.',
  },
  {
    number: '05',
    name: 'IoT & Data Analytics',
    description:
      'Building connected IoT systems with cloud dashboards, real-time sensor monitoring, and Power BI analytics for data visualization and automated alerting.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="skills"
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
          What I Do
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
                ...(i === 0
                  ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' }
                  : {}),
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
                {service.number}
              </span>

              {/* Name + Description */}
              <div className="flex flex-col gap-2 sm:gap-3 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
