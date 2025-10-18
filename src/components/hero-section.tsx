export function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24">
      <div className="mx-auto max-w-3xl px-4 flex flex-col items-center text-center">
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
        <div className="mt-12 sm:mt-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Feeling the Pressure of Competitive Sport?
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Learn to master your mindset, stay composed, and perform at your best when it matters most.
          </p>
        </div>
      </div>
    </section>
  )
}
