"use client"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-24 flex items-center justify-center bg-background overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-accent font-medium">Strategic Business Solutions</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance">
                Grow Your Business With Expert{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Consulting
                </span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl text-balance leading-relaxed">
              We provide strategic advisory services to help your business navigate complex challenges and unlock new
              opportunities for sustainable growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2">
                Get Free Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border overflow-hidden">
              <img
                src="/assets/home/image-1.svg"
                alt="Business consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl border border-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
