import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import Magnet from '../components/Magnet'

const navLinks = ['About', 'Skills', 'Projects', 'Tech Stack', 'Experience', 'Certificates', 'Contact']

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: 'clip' }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm lg:text-[1.1rem] hover:opacity-70 transition-opacity duration-200"
            style={{ color: '#D7E2EA' }}
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 relative z-20 pointer-events-none">
        <h1
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] px-2"
        >
          Hi, i&apos;m Avnish
        </h1>
      </FadeIn>

      {/* Spacer to push bottom bar down */}
      <div className="flex-1" />

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
            }}
          >
            full-stack developer & cloud engineer building innovative digital solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait - Centered */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Avnish Bhosale - Developer Portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] pointer-events-none select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
