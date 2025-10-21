import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Helmet } from "react-helmet-async"

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
      <title>Reviews | Athlete Success Stories | Sports Mind Mastered</title>
<meta name="description" content="Read success stories from athletes who’ve transformed their performance and mindset through Simon Capon’s sports psychology coaching." />
<meta name="keywords" content="sports psychology reviews, athlete testimonials, sports coach feedback, mindset success stories, performance improvement"/>

  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Athlete Success Stories",
      "description": "Testimonials from athletes coached by Simon Capon through Sports Mind Mastered.",
      "hasPart": [
        {
          "@type": "Review",
          "reviewBody": "Working with Simon completely changed how I approach competition.",
          "author": { "@type": "Person", "name": "Athlete" }
        }
      ]
    }
  `}
</script>
</Helmet>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-muted/30 to-background pt-16 md:pt-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
                Client Testimonials
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                Hear from athletes who have transformed their mental game and achieved peak performance through our
                sports psychology programs.
              </p>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                <div className="aspect-video w-full bg-muted">
                  <video
                    controls
                    className="h-full w-full object-cover"
                    poster="/sportsmindmastered/chris-thumbnail.png" >
                  
                    <source src="/sportsmindmastered/testimonial1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Chris Patrick</h3>
                  <p className="text-sm text-muted-foreground">Professional Pool Player</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                <div className="aspect-video w-full bg-muted">
                  <video
                    controls
                    className="h-full w-full object-cover"
                    poster="/sportsmindmastered/Kurt-thumbnail.png"
                  >
                    <source src="/sportsmindmastered/testimonial2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">Kurt</h3>
                  <p className="text-sm text-muted-foreground">Wheelchair Snooker & Pool Player</p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
                <div className="aspect-video w-full bg-muted">
                  <video
                    controls
                    className="h-full w-full object-cover"
                    poster="/sportsmindmastered/james-thumbnail.png"
                  >
                    <source src="/sportsmindmastered/testimonial3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">James</h3>
                  <p className="text-sm text-muted-foreground">Sprint Hurdler</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
