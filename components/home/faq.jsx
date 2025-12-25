"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We have extensive experience across multiple sectors including finance, technology, manufacturing, retail, and healthcare. Our diverse expertise allows us to bring best practices from various industries to your business.",
    },
    {
      question: "How long does a typical consulting engagement take?",
      answer:
        "Engagement duration varies based on project scope and complexity. Small strategy sessions may take 4-8 weeks, while comprehensive transformations can take 3-6 months or longer. We customize timelines to your needs.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing models including project-based, hourly, and retainer arrangements. We provide transparent quotes upfront with no hidden fees. Contact us for a personalized proposal.",
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer:
        "Yes, we offer post-implementation support and monitoring. We can provide ongoing advisory, team training, and course corrections to ensure sustained success and ROI.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We establish clear KPIs and metrics at the outset. Success is measured through improved efficiency, revenue growth, cost savings, market share gains, or other metrics aligned with your business objectives.",
    },
    {
      question: "Can you work with companies of all sizes?",
      answer:
        "Absolutely. We work with startups, SMEs, and large enterprises. We scale our approach and team composition based on your organization size and needs.",
    },
  ]

  return (
    <section id="faq" className="w-full py-20 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-accent font-medium">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Common Questions</h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors text-left"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-card border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


