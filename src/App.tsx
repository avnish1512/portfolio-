import HeroSection from './sections/HeroSection'
import MarqueeSection from './sections/MarqueeSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import ProjectsSection from './sections/ProjectsSection'
import TechStackSection from './sections/TechStackSection'
import ExperienceSection from './sections/ExperienceSection'
import CertificatesSection from './sections/CertificatesSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  )
}
