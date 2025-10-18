import { useParams, Link } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Clock, Users, Award, CheckCircle } from "lucide-react"

const coursesData: Record<string, any> = {
  "face-to-face": {
    title: "Face to Face",
    description:
      "If you’re based on the Isle of Wight, we can meet in person to discuss your goals, current challenges, and the outcomes you want to achieve. I’ll design a tailored program that blends quick-impact techniques with longer-term mental skills training. Each session is focused, practical, and packed with valuable insights. After every meeting, you’ll receive an audio summary to help you review and apply what we covered",
    price: "£70",
    duration: "Approx. 60 minutes per session",
    students: "Individual coaching",
    level: "All Levels",
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "In-person coaching sessions",
      "Immediate feedback and strategy adjustments",
      "Customized performance plan",
      "Tools to manage pre-competition anxiety",
      "Personalized exercises to strengthen focus",
    ],
  },
  "virtual-training": {
    title: "Virtual Training",
    description:
      "Video calls have become a trusted and effective alternative to face-to-face coaching. I use Zoom, WhatsApp, or Messenger — whichever works best for you — so we can connect from anywhere in the world. These sessions deliver the same depth, focus, and quality as in-person meetings, with techniques you can apply immediately. After each call, you’ll receive an audio summary to reinforce your progress and keep you on track.",
    price: "£70",
    duration: "Approx. 60 minutes per session",
    students: "Online sessions",
    level: "All Levels",
    gradient: "from-indigo-500 to-blue-500",
    features: [
      "Flexible scheduling via video call",
      "Accessible from anywhere",
      "Tailored psychological strategies",
      "Progress tracking tools",
      "Post-session notes and resources",
    ],
  },
  "training-incognito": {
    title: "Training Incognito",
    description:
      "For some, face-to-face or video interaction can feel uncomfortable — even when the motivation to improve is strong. Training Incognito offers the same high-quality support as other programs, but entirely through text or email. You’ll share your challenges privately, and I’ll create a personalized video session designed around your needs. We’ll stay in touch through ongoing written communication to ensure you’re progressing confidently at your own pace.",
    price: "£70",
    duration: "Approx. 45 minutes per session",
    students: "Confidential support",
    level: "All Levels",
    gradient: "from-cyan-500 to-teal-500",
    features: [
      "Anonymous communication",
      "Written feedback and exercises",
      "Flexible message-based format",
      "Tailored coaching plans",
      "Privacy-focused system",
    ],
  },
  bulletproof: {
    title: "Bulletproof",
    description:
      "A focused 4-module program designed for groups of 1–3 people to develop an unshakable competitive mindset.",
    price: "POA",
    duration: "4 modules",
    students: "Small groups (1–3 people)",
    level: "Intermediate–Advanced",
    gradient: "from-blue-600 to-indigo-600",
    features: [
      "Four in-depth mindset modules",
      "Group-based learning",
      "Collaborative exercises",
      "Goal tracking system",
      "Post-program support",
    ],
  },
}

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>()
  const course = coursesData[slug || ""]

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The course you’re looking for doesn’t exist or has been removed.
            </p>
            <Link to="/courses">
              <Button>Back to Courses</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Back Link */}
        <div className="container mx-auto max-w-6xl px-4 pt-8">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[#6EE7B7] hover:text-[#8ef7c7] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>
        </div>

        {/* Hero Section with Gradient */}
        <section className="relative pt-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="relative overflow-hidden border-0 shadow-xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90`} />
              <div className="relative p-8 md:p-12 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{course.title}</h1>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-lg">{course.students}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span className="text-lg">{course.level}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold">{course.price}</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Description & Features */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{course.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold my-4">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#6EE7B7] flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Enrollment Form */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Enroll Now</h3>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+44 (0) 7753 286 234" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea id="message" placeholder="Tell us about your goals and experience..." rows={4} />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Submit Enrollment
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
