"use client"

export default function AboutUs() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Excellence",
      description: "We strive for the highest standards in every service we deliver",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      title: "Innovation",
      description: "We continuously evolve to provide cutting-edge consulting solutions",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Collaboration",
      description: "We work closely with clients as trusted partners in their success",
    },
  ]

  const expertise = [
    { label: "Years of Experience", value: "15+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Expert Consultants", value: "50+" },
    { label: "Services Offered", value: "30+" },
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Consulting Officer",
      specialization: "Business Strategy",
      image: "👔",
    },
    {
      name: "Michael Chen",
      role: "Lead Tax Advisor",
      specialization: "Tax Planning & Compliance",
      image: "💼",
    },
    {
      name: "Emma Williams",
      role: "Financial Advisory Head",
      specialization: "Financial Management",
      image: "📊",
    },
    {
      name: "David Martinez",
      role: "Operations Director",
      specialization: "Process Optimization",
      image: "⚙️",
    },
  ]

  return (
    <section className="w-full bg-background">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">About Us</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 text-foreground">
              Your Trusted Consulting Partner
            </h1>
            <p className="text-xl text-muted-foreground mt-6">
              With over 15 years of industry expertise, we help businesses transform, grow, and succeed through strategic
              consulting and advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 text-lg">
                Founded in 2009, we started with a simple mission: to provide world-class consulting services that drive
                real business results.
              </p>
              <p className="text-muted-foreground mb-4 text-lg">
                What began as a small team of passionate consultants has evolved into a thriving firm serving hundreds of
                clients across various industries. Our growth is a testament to our commitment to excellence and client
                success.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Today, we combine deep industry knowledge with cutting-edge methodologies to deliver innovative solutions
                that address our clients' most complex business challenges.
              </p>
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold inline-flex items-center gap-2">
                Learn Our Timeline
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg p-8 border border-accent/20">
              <div className="space-y-6">
                {expertise.map((item, index) => (
                  <div key={index} className="border-b border-border pb-6 last:border-b-0">
                    <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">{item.label}</p>
                    <p className="text-4xl font-bold text-accent">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">What We Stand For</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our values form the foundation of everything we do and guide our decisions every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300 text-center group"
              >
                <div className="inline-block bg-accent text-accent-foreground p-4 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Areas of Focus</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Our Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Strategy & Advisory",
                description: "Strategic planning, market analysis, and competitive positioning for sustainable growth",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Tax & Compliance",
                description: "Comprehensive tax planning, compliance, and risk management across all jurisdictions",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Accounting & Financial Reporting",
                description: "Professional bookkeeping, accounting, and financial statements preparation",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
              },
              {
                title: "HR & Payroll Management",
                description: "Complete payroll processing, HR consulting, and employee management solutions",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Audit & Assurance",
                description: "Internal audits, financial audits, and assurance services for compliance and transparency",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Technology & Digital Solutions",
                description: "ERP implementation, cloud accounting, and IT services for digital transformation",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 3v2m6-2v2M9 5h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2"
                    />
                  </svg>
                ),
              },
            ].map((area, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300">
                <div className="text-accent mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="w-full py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Meet Our Leaders</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Our Experienced Team</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our team consists of industry experts with decades of combined experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-primary to-primary/70 h-24 flex items-center justify-center text-5xl">
                  {member.image}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-accent text-sm font-semibold mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Why Partner With Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proven Track Record",
                description:
                  "500+ satisfied clients and a 95% client retention rate speak to our commitment to excellence",
              },
              {
                title: "Expert Team",
                description: "50+ experienced consultants with diverse industry backgrounds and specialized expertise",
              },
              {
                title: "Customized Solutions",
                description:
                  "We tailor our services to meet the unique needs of each client for maximum impact",
              },
              {
                title: "Technology-Driven",
                description:
                  "We leverage cutting-edge tools and platforms to deliver efficient and scalable solutions",
              },
              {
                title: "Industry Knowledge",
                description: "Deep expertise across multiple sectors including finance, manufacturing, retail, and more",
              },
              {
                title: "Ongoing Support",
                description: "Continuous support and follow-up to ensure your business achieves its goals",
              },
            ].map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-accent/20 text-accent">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground mt-1">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our team of expert consultants help you achieve your business goals and unlock new opportunities for
            growth.
          </p>
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold inline-flex items-center gap-2">
            Schedule Your Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>
    </section>
  )
}
