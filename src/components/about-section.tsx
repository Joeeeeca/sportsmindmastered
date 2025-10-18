import { Button } from "./ui/button"

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-muted/30 pt-12 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Image */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg shadow-xl">
              <img
                src="/sportsmindmastered/self-portrait.png"
                alt="Sports Psychology Professional"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    About
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                    Expert in Mental Performance
                  </h2>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Simon Capon is a Trainer and master practitioner of a psychology called
                    Neuro-linguistic programming (NLP). Over the last twenty years he has brought
                    together a collection of psychological skills and techniques to produce a
                    program that is dedicated to the development of sports individuals and teams.
                  </p>
                  <p>
                    No matter if you're a keen amateur or a world-class competitor, one of your
                    biggest challenges will be the battle in your head. Simon helps clients
                    overcome these barriers and perform under pressure with clarity, courage, and
                    certainty. This is possible by adopting some remarkably simple yet highly
                    effective skills through a face-to-face meeting, video conference call or the
                    revolutionary training incognito.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  <a href="/contact">
                    <Button size="lg" className="cursor-pointer">
                      Work With Me
                    </Button>
                  </a>

                  <a href="/about">
                    <Button size="lg" variant="outline" className="cursor-pointer">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
