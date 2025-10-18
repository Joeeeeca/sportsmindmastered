import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"


export default function AboutPage() {
  return (
    <>
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-primary/5 to-background pt-20 md:pt-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Empowering Athletes Through Mental Excellence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              Transforming mindsets and unlocking peak performance through evidence-based sports psychology
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="w-full pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg shadow-xl">
                <img
                  src="../../../public/self-portrait.png"
                  alt="Sports Psychology Professional"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                    A Different Way of Thinking
                  </h2>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      There is a common belief that elite sports performers have a natural gift to remain calm and focused during high-pressure situations—a gift that can’t be learnt. This view is common but completely false. Some competitors are naturally more focused than others, however anyone can learn to remain focused and certain in extremely challenging situations.
                    </p>
                    <p>
                      Have you ever felt incredibly confident and asked yourself why? Your search for the answer probably came from an external source—perhaps a recent win or a string of strong performances. When you're anxious, the world feels threatening, but when you're confident, it's a space to grow, thrive, and perform. The challenge is familiar: we need confidence to perform well, but we often need performance to gain confidence. My work is centred around helping you generate the right psychological state for any situation.
                    </p>
                    <p>
                      Whether you need intense certainty or calm composure, mastering the ability to create your own mindset on demand is what I call the sports competitor’s superpower.
                    </p>
                    <p>
                      In short, you learn to project confidence, focus, and composure outward—so instead of your environment shaping you, you shape your environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials & Expertise */}
      <section className="w-full bg-muted/30 pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Credentials & Expertise</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Qualified and experienced in delivering results
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Ph.D. in Sport Psychology",
                  desc: "Advanced degree from a leading university with focus on performance enhancement",
                },
                {
                  title: "Certified Mental Performance Consultant",
                  desc: "CMPC certification through the Association for Applied Sport Psychology",
                },
                {
                  title: "15+ Years Experience",
                  desc: "Extensive work with athletes from youth to professional levels",
                },
                {
                  title: "Olympic Experience",
                  desc: "Worked with Olympic athletes preparing for international competition",
                },
                {
                  title: "Team Consultant",
                  desc: "Ongoing partnerships with professional and collegiate sports teams",
                },
                {
                  title: "Published Researcher",
                  desc: "Contributions to peer-reviewed journals on mental performance",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">My Philosophy</h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Mental Skills Are Trainable",
                  text: "Just like physical skills, mental skills can be developed through consistent practice and proper guidance. Confidence, focus, and resilience aren't traits you're born with—they're skills you build.",
                },
                {
                  title: "Individualized Approach",
                  text: "Every athlete is unique, with different strengths, challenges, and goals. I tailor my methods to fit your specific needs, sport, and competitive level rather than applying a one-size-fits-all approach.",
                },
                {
                  title: "Evidence-Based Practice",
                  text: "My techniques are grounded in scientific research and proven methodologies. I stay current with the latest developments in sport psychology to ensure you receive the most effective strategies available.",
                },
                {
                  title: "Practical Application",
                  text: "Theory means nothing without application. I focus on giving you practical tools and techniques you can use immediately in training and competition, not just abstract concepts.",
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Ready to Elevate Your Mental Game?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Let's work together to unlock your full potential and achieve your athletic goals
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/contact">
              <Button size="lg" className="cursor-pointer">Schedule a Consultation</Button></a>
              <a href="/courses">
              <Button size="lg" variant="outline" className="cursor-pointer">
                View Courses
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
            <Footer />
            </>
  )
}
