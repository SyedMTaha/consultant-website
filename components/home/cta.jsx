"use client"

export default function CTA({ variant = "primary" }) {
  const isPrimary = variant === "primary"

  return (
    <section
      className={`w-full py-20 ${isPrimary ? "bg-accent/10 border-y border-border" : "bg-accent/10 border-y border-border"}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            {isPrimary ? "Ready to Transform Your Business?" : "Need Expert Consulting Services?"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            {isPrimary
              ? "Schedule a free consultation with our experts today and discover how we can help your business achieve its goals."
              : "Contact our team to discuss your business challenges and discover tailored solutions that drive real results."}
          </p>
        </div>

        {isPrimary ? (
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium inline-block">
            Schedule Consultation
          </button>
        ) : (
          <button className="px-8 py-3 border border-border bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colorsfont-medium inline-block">
            Call us now: +1 (555) 123-4567
          </button>
        )}
      </div>
    </section>
  )
}
