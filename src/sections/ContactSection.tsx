import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'
import { Mail, MapPin, ExternalLink, Code2 } from 'lucide-react'

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/avnish1512',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/avnish-bhosale',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:avnishpc00@gmail.com',
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14"
      style={{
        background: '#0C0C0C',
        borderTopLeftRadius: 'clamp(40px, 6vw, 60px)',
        borderTopRightRadius: 'clamp(40px, 6vw, 60px)',
      }}
    >
      {/* Centered content wrapper */}
      <div className="w-full flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full flex justify-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight mb-6 sm:mb-8 text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s Talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20} className="flex justify-center">
          <p
            className="font-light leading-relaxed max-w-lg mb-10 sm:mb-14 text-center"
            style={{
              color: '#D7E2EA',
              opacity: 0.7,
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            }}
          >
            Have a project in mind, want to collaborate, or just want to say hello?
            I&apos;m always open to new opportunities and interesting conversations.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="flex justify-center">
          <a href="mailto:avnishbhosale@gmail.com">
            <ContactButton />
          </a>
        </FadeIn>

        {/* Resume Download */}
        <FadeIn delay={0.35} y={20} className="flex justify-center">
          <a
            href="/Avnish_Bhosale_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-8 font-light uppercase tracking-widest text-xs sm:text-sm hover:opacity-70 transition-opacity duration-200"
            style={{ color: '#D7E2EA', opacity: 0.6 }}
          >
            <ExternalLink size={14} />
            Download Resume
          </a>
        </FadeIn>

        {/* Location */}
        <FadeIn delay={0.4} y={20} className="flex justify-center">
          <div className="flex items-center gap-2 mt-10 sm:mt-12">
            <MapPin size={16} style={{ color: '#D7E2EA', opacity: 0.4 }} />
            <span
              className="font-light uppercase tracking-wider text-xs sm:text-sm"
              style={{ color: '#D7E2EA', opacity: 0.4 }}
            >
              Kolhapur, Maharashtra, India
            </span>
          </div>
        </FadeIn>

        {/* Social Links */}
        <FadeIn delay={0.5} y={20} className="flex justify-center">
          <div className="flex items-center gap-8 mt-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200"
                style={{ color: '#D7E2EA' }}
                aria-label={social.label}
              >
                <social.icon />
                <span className="font-light text-sm hidden sm:inline">{social.label}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Education Quick Info */}
        <FadeIn delay={0.55} y={20} className="flex justify-center">
          <div className="flex items-center gap-2 mt-10">
            <Code2 size={14} style={{ color: '#D7E2EA', opacity: 0.3 }} />
            <span
              className="font-light text-xs text-center"
              style={{ color: '#D7E2EA', opacity: 0.3 }}
            >
              B.Tech CSE · Sanjay Ghodawat University · Diploma from DYPCET Kolhapur
            </span>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <div
        className="max-w-5xl mx-auto mt-20 sm:mt-28 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        style={{ borderTop: '1px solid rgba(215, 226, 234, 0.1)' }}
      >
        <span
          className="font-light text-xs sm:text-sm"
          style={{ color: '#D7E2EA', opacity: 0.3 }}
        >
          © {new Date().getFullYear()} Avnish Bhosale. All rights reserved.
        </span>
        <span
          className="font-light text-xs sm:text-sm"
          style={{ color: '#D7E2EA', opacity: 0.3 }}
        >
          Built with React, TypeScript & Framer Motion
        </span>
      </div>
    </section>
  )
}
