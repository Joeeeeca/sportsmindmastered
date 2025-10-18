export function ContentShowcase() {
  return (
    <section id="content" className="w-full py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Featured Content</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-balance">Insights & Techniques</h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
              Explore practical strategies and mental performance techniques that you can start applying today.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Video 1 */}
            <div className="group space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg transition-shadow group-hover:shadow-xl">
                <video className="h-full w-full object-cover" controls poster="/sportsmindmastered/Simon-thumbnail-one.png">
                  <source src="/sportsmindmastered/home-video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Getting Back on Track After Setbacks</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Even the best athletes fall off track — what separates the great from the good is how fast they get back up.
Learn how to reset your mindset, refocus, and bounce back stronger after mistakes.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="group space-y-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-lg transition-shadow group-hover:shadow-xl">
                <video className="h-full w-full object-cover" controls poster="/sportsmindmastered/Simon-thumbnail-two.png">
                  <source src="/sportsmindmastered/home-video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">The Power of Team Identity</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                 Championship teams, no matter the sport, are built on unity, trust, and shared vision.
Discover how shifting focus from me to we unlocks peak team performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
