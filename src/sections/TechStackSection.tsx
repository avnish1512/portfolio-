import FadeIn from '../components/FadeIn'
import { motion } from 'framer-motion'

const techCategories = [
  {
    number: '01',
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'C', 'C++', 'HTML', 'CSS', 'SQL'],
  },
  {
    number: '02',
    title: 'Frameworks & Tools',
    items: ['React.js', 'Android Studio', 'Supabase', 'Git', 'GitHub', 'Figma', 'VS Code', 'Jenkins'],
  },
  {
    number: '03',
    title: 'Cloud & Data',
    items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'PostgreSQL', 'Oracle', 'Power BI'],
  },
  {
    number: '04',
    title: 'Specializations',
    items: ['Artificial Intelligence', 'Machine Learning', 'Data Analytics', 'Cybersecurity', 'IoT Systems'],
  },
]

export default function TechStackSection() {
  return (
    <section
      id="tech-stack"
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
          Tech Stack
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {techCategories.map((cat, i) => (
          <FadeIn key={cat.title} delay={i * 0.1} y={30}>
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
                {cat.number}
              </span>

              {/* Category + Pills */}
              <div className="flex flex-col gap-4 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="font-medium uppercase"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                  }}
                >
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {cat.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.05 + j * 0.03,
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-light text-sm sm:text-base cursor-default transition-all duration-200"
                      style={{
                        color: '#0C0C0C',
                        border: '1px solid rgba(12, 12, 12, 0.15)',
                        background: 'rgba(12, 12, 12, 0.04)',
                      }}
                      whileHover={{
                        background: 'rgba(12, 12, 12, 0.1)',
                        borderColor: 'rgba(12, 12, 12, 0.4)',
                        scale: 1.05,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
