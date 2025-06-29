import { AboutSection } from './_components/about-section'
import { ContactSection } from './_components/contact-section'
import { HomeSection } from './_components/home-section'
import { ProjectsSection } from './_components/projects-section'

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
