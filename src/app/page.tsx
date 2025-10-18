import { HeroSection } from '../components/hero-section'
import { AboutSection } from '../components/about-section'
import { ContentShowcase } from '../components/content-showcase'
import { Footer } from '../components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutSection />
        <ContentShowcase />
      </main>
      <Footer />
    </div>
  )
}
