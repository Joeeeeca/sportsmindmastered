export function HeroSection() {
  return (
    <section className="w-full pt-16 md:pt-24">
      <div className="mx-auto max-w-3xl px-4">
        {/* Video */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-2xl">
          <video
            className="h-full w-full object-cover"
            controls
            poster="/sportsmindmastered/intro-video-thumb.jpg"
          >
            <source src="/sportsmindmastered/Intro-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text content */}
        <div className="mt-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            Feeling the Pressure of Competitive Sport?
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance md:text-xl max-w-3xl mx-auto leading-relaxed">
            Learn to master your mindset, stay composed, and perform at your best when it matters most.
          </p>
        </div>
      </div>
    </section>
  )
}
