import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'

const projects = [
  {
    number: '01',
    category: 'Academic',
    name: 'Placement Drive App',
    tech: 'Android / Java',
    description: 'Full-featured mobile app to manage college placement drives, student registrations, company schedules with real-time notifications and admin dashboard.',
    col1Image1: '/projects/placement_detail1.png',
    col1Image2: '/projects/placement_detail2.png',
    col2Image: '/projects/placement_main.png',
    link: 'https://github.com/avnish1512',
  },
  {
    number: '02',
    category: 'Client',
    name: 'Tank Tracker System',
    tech: 'React.js / PostgreSQL',
    description: 'Responsive web dashboard for real-time tank inventory monitoring, logistics tracking, and sales reporting with REST API integration.',
    col1Image1: '/projects/tank_detail2.png',
    col1Image2: '/projects/tank_main.png',
    col2Image: '/projects/tank_detail1.png',
    link: 'https://github.com/avnish1512',
  },
  {
    number: '03',
    category: 'Client',
    name: 'Mahalaxmi Industries',
    tech: 'HTML / CSS / JavaScript',
    description: 'Professional corporate website for an industrial company, featuring responsive UI with Figma-to-code workflow and product showcase.',
    col1Image1: '/projects/mahalaxmi_detail1.png',
    col1Image2: '/projects/mahalaxmi_detail2.png',
    col2Image: '/projects/mahalaxmi_main.png',
    link: 'https://github.com/avnish1512',
  },
]

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0]
  index: number
  totalCards: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={cardRef} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${24 + index * 28}px` }}>
      <motion.div
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col"
        style={{
          background: '#0C0C0C',
          scale,
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8 flex-wrap gap-4">
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 pt-2 sm:pt-4">
              <span
                className="font-light uppercase tracking-widest text-xs sm:text-sm"
                style={{ color: '#D7E2EA', opacity: 0.6 }}
              >
                {project.category} · {project.tech}
              </span>
              <h3
                className="font-medium uppercase"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)',
                }}
              >
                {project.name}
              </h3>
              <p
                className="font-light max-w-xl hidden sm:block"
                style={{
                  color: '#D7E2EA',
                  opacity: 0.5,
                  fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
          <div className="self-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <LiveProjectButton />
            </a>
          </div>
        </div>

        {/* Image Grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 flex-1 min-h-0">
          {/* Left column - 40% */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          {/* Right column - 60% */}
          <div className="w-[60%]">
            <img
              src={project.col2Image}
              alt={`${project.name} main`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
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
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  )
}
