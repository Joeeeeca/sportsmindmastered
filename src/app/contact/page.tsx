import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Facebook } from "lucide-react"
import { Helmet } from "react-helmet-async"


export default function ContactPage() {
  return (

    <div className="min-h-screen flex flex-col">
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
  <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Sports Mind Mastered",
      "description": "Book your consultation with Simon Capon for personalized sports psychology coaching.",
      "url": "https://joeeeeca.github.io/sportsmindmastered/contact",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+447753286234",
        "email": "info@simoncapon.co.uk",
        "contactType": "Customer Service"
      }
    }
  `}</script>
</Helmet>
      <Header />
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
            <a href="mailto:info@simoncapon.co.uk"
             target="_blank"
  rel="noopener noreferrer"
            className="block bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <Mail className="w-6 h-6 text-primary" />
  </div>
  <h3 className="font-semibold mb-2">Email</h3>
  <p className="text-sm text-muted-foreground mb-3">Send us a message anytime</p>
    info@simoncapon.co.uk
  </a>
              {/* WhatsApp Card */}
              <a href="https://wa.me/1234567890"
                           target="_blank"
  rel="noopener noreferrer"
               className="block bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
  <MessageCircle className="w-6 h-6 text-primary" />
</div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">Chat with us directly</p>
                  Message on WhatsApp
                </a>

              {/* Facebook Card */}
              <a href="https://www.facebook.com/groups/436463539726916"
               target="_blank"
  rel="noopener noreferrer"
              className="block bg-card border border-border rounded-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
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
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals and how we can help..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
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
