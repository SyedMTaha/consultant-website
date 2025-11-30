"use client"

export default function WhyChooseUs() {
  const features = [
    { icon: "✓", title: "Expert Team", description: "Over 15+ years of industry experience" },
    { icon: "✓", title: "Proven Results", description: "Delivered 500+ successful projects" },
    { icon: "✓", title: "Dedicated Support", description: "24/7 client support and consultation" },
    { icon: "✓", title: "Cost Effective", description: "Transparent pricing with no hidden fees" },
  ]

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-medium">Why Choose Us</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Why Businesses Trust Us</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We combine strategic thinking with practical execution to deliver measurable results for our clients.
              </p>
              <p className="text-lg text-muted-foreground">
                Our approach is tailored to your unique business needs, ensuring maximum impact and sustainable growth.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 text-primary text-xl font-bold">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image card with improved UI */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-white">
              <img
                src="/assets/home/image-3.svg"
                alt="Team working together"
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute top-6 right-6 w-16 h-16 border-2 border-accent rounded-full opacity-50" />
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-accent/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
