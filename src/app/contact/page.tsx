import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Facebook, CheckCircle2, XCircle } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")

    const formData = new FormData(e.currentTarget)

    // 🧠 Honeypot trap — real users won’t fill this
    if (formData.get("website") !== "") {
      setStatus("success")
      return
    }

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  // ⏱️ Automatically clear the banner after 5s
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Helmet>
        <title>Contact | Sports Psychology Coaching | Book a Session</title>
        <meta
          name="description"
          content="Get in touch with Simon Capon for professional sports psychology coaching. Schedule a consultation or learn more about mindset training."
        />
        <meta
          name="keywords"
          content="contact sports coach, sports psychology consultation, book coaching, mental performance training, Simon Capon contact"
        />
      </Helmet>

      <Header />

      {/* ✅ Floating Banner */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <CheckCircle2 className="w-5 h-5" />
            Message sent successfully!
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <XCircle className="w-5 h-5" />
            Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ready to take your mental game to the next level? Reach out and let's start your journey to peak
              performance.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {/* Email Card */}
              <a
                href="mailto:info@simoncapon.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-3">Send us a message anytime</p>
                info@simoncapon.co.uk
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/447753286234"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">Chat with us directly</p>
                Message on WhatsApp
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/groups/436463539726916"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Facebook</h3>
                <p className="text-sm text-muted-foreground mb-3">Connect on social media</p>
                Visit our Page
              </a>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot */}
                  <input type="text" name="website" className="hidden" autoComplete="off" tabIndex={-1} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first_name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input name="first_name" id="first_name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last_name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input name="last_name" id="last_name" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input name="email" id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input name="phone" id="phone" type="tel" placeholder="07753 286 234" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      id="message"
                      placeholder="Tell us about your goals and how we can help..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
