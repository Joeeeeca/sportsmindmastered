import { Helmet } from "react-helmet-async"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileNav } from "@/components/mobile-nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContentShowcase } from "@/components/content-showcase"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Sports Mind Mastered | Sports Psychology Coaching by Simon Capon</title>
        <meta
          name="description"
          content="Unlock your athletic potential with Simon Capon’s expert sports psychology coaching. Master your mindset and perform at your best when it matters most."
        />
        <meta
          name="keywords"
          content="sports psychology, mindset coaching, performance coach, athlete mindset, sports confidence, Simon Capon"
        />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sports Mind Mastered",
            "url": "https://joeeeeca.github.io/sportsmindmastered/",
            "description": "Sports psychology coaching and mindset training for athletes who want to perform under pressure.",
            "publisher": {
              "@type": "Person",
              "name": "Simon Capon"
            }
          }
        `}</script>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sports Mind Mastered | Sports Psychology Coaching" />
        <meta
          property="og:description"
          content="Learn to master your mindset, stay composed, and perform your best under pressure."
        />
        <meta property="og:image" content="https://joeeeeca.github.io/sportsmindmastered/og-image.jpg" />
        <meta property="og:url" content="https://joeeeeca.github.io/sportsmindmastered/" />
        <meta property="og:site_name" content="Sports Mind Mastered" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sports Mind Mastered | Sports Psychology Coaching" />
        <meta
          name="twitter:description"
          content="Unlock your mental edge with Simon Capon’s sports psychology training for athletes."
        />
        <meta name="twitter:image" content="https://joeeeeca.github.io/sportsmindmastered/og-image.jpg" />
      </Helmet>

      {/* ✅ Global header */}
      <Header />

      {/* ✅ Page content */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ContentShowcase />
      </main>

      {/* ✅ Global footer and mobile nav */}
      <Footer />
      <MobileNav />
    </div>
  )
}
