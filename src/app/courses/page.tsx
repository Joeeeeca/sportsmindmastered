import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Tag } from "lucide-react"
import { Link } from "react-router-dom"

export default function CoursesPage() {
  const courses = [
    {
      slug: "face-to-face",
      title: "Face to Face",
      points: ["In-person Coaching", "Immediate Feedback", "Deeper Connection"],
      price: "£70",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      slug: "virtual-training",
      title: "Virtual Training",
      points: ["Global Accessibility", "High Quality Video Sessions", "All Messenger Platforms"],
      price: "£70",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      slug: "training-incognito",
      title: "Training Incognito",
      points: ["Anonymous Coaching Option", "Text & Email-Based Sessions", "No Direct Interaction"],
      price: "£70",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      slug: "bulletproof",
      title: "Bulletproof",
      points: ["Groups from 1–3 People", "Consists of 4 Modules", "Develop a Bulletproof Mindset"],
      price: "POA",
      gradient: "from-blue-600 to-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Transform Your Mental Game
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Explore evidence-based courses designed to help athletes perform their best — mentally and physically.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="pt-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90 pointer-events-none`} />

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col h-full text-white text-center lg:text-left">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">{course.title}</h3>

                      <ul className="text-white/90 mb-6 space-y-2 inline-block text-left">
                        {course.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-white/70">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-lg font-semibold mb-6">
                      <Tag className="w-5 h-5 text-white/90" />
                      <span>{course.price}</span>
                    </div>

                    {/* CTA Button */}
                    <Link to={`/courses/${course.slug}`} className="w-full">
                      <Button
                        variant="light"
                        className="w-full group-hover:gap-3 transition-all cursor-pointer"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Elevate Your Performance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Join thousands of athletes who have transformed their mental game
            </p>
            <Button size="lg" className="text-lg px-8 cursor-pointer">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
