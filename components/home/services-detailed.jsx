"use client"

export default function ServicesDetailed() {
  
  const services = [
    {
      id: 1,
      title: "Accounting",
      description: "We provide a full range of accounting services to ensure your financial records are accurate, compliant, and up to date. From daily bookkeeping to comprehensive financial reporting.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      includes: [
        "Transactional Accounting: Recording daily business transactions like sales, purchases, receipts, and payments",
        "Month-End Closing: Reconciling accounts, accruals, month end adjustments, depreciation, generating financial statements",
        "Financial Reporting: Preparation of comprehensive management and statutory financial reports"
      ]
    },
    {
      id: 2,
      title: "Audit",
      description: "Our audit services help assess the accuracy & integrity of your financial information and the strength of your internal controls to ensure transparency and compliance.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      includes: [
        "Internal Audit: Reviewing internal processes to improve efficiency and detect risks or weaknesses",
        "External Audit: Independent examination of financial statements to ensure they represent true and fair financial information",
        "Compliance Audit: Ensuring your business adheres to applicable statutory reporting frameworks and regulations"
      ]
    },
    {
      id: 3,
      title: "Tax Consultancy",
      description: "Our tax consultancy services are designed to ensure full compliance with tax regulations while strategically minimizing tax liabilities through effective planning and execution.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      includes: [
        "VAT (Value Added Tax): Registration, filing, return preparation, and comprehensive advisory services",
        "WHT (Withholding Tax): Advisory on applicable deductions and reporting requirements",
        "CIT (Corporate Income Tax): Impact assessment, categorization & structuring of information, calculation, return filing & compliance"
      ]
    },
    {
      id: 4,
      title: "Company Formation",
      description: "We help you establish your company efficiently with all necessary legal and regulatory support, guiding you through every step of the business setup process.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
        </svg>
      ),
      includes: [
        "Mainland Formation: Setting up businesses licensed by the Department of Economic Development (DED), with full access to local markets",
        "Free Zone Formation: Establishing entities in UAE free zones, offering benefits like 100% ownership, tax exemptions",
        "Licensing & Permits: Complete assistance with obtaining necessary business licenses and operational permits"
      ]
    },
    {
      id: 5,
      title: "Accounting Software Solutions",
      description: "We assist with selection, setup, integration, and training for industry-leading accounting software, enabling efficient financial management and automation.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      includes: [
        "QuickBooks: Ideal for small to mid-sized businesses with comprehensive accounting features",
        "Zoho Books: Cloud-based, scalable, and user-friendly accounting solution",
        "Odoo: A full ERP suite with strong accounting capabilities and business management tools"
      ]
    },
    {
      id: 6,
      title: "Compliance (ESR/AML)",
      description: "We ensure that your business complies with UAE regulatory requirements to avoid penalties and maintain good standing with regulatory authorities.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      includes: [
        "ESR (Economic Substance Regulations): Assistance with assessment, notifications, and annual reports",
        "AML (Anti-Money Laundering): Development of AML policies, staff training, risk assessments, and ongoing monitoring",
        "Regulatory Compliance: Ensuring adherence to all UAE regulatory and compliance requirements"
      ]
    },
    {
      id: 7,
      title: "Advisory Services",
      description: "We offer strategic business advisory to support growth and transformation, helping you make informed decisions for sustainable business success.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      includes: [
        "Business Restructuring: Strategic restructuring to improve efficiency and profitability",
        "Financial Planning: Comprehensive financial planning and forecasting services",
        "Risk Management: Identification and mitigation of business risks",
        "Operational Improvements: Process optimization and operational excellence initiatives"
      ]
    },
    {
      id: 8,
      title: "HR Services",
      description: "Human Resource (HR) services include managing employee records, payroll, compliance, and recruitment — allowing companies to focus on core operations.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      includes: [
        "Payroll Processing: Payroll processing and salary WPS compliance",
        "Employee Onboarding: Employee onboarding and record keeping",
        "HR Policies: HR policies and documentation",
        "Labor Law Compliance: Labor law compliance and HR audits",
        "Recruitment Advisory: Recruitment and employee relations advisory"
      ]
    }
  ]

  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">OUR SERVICES</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-foreground">Comprehensive Business Solutions</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Professional consulting services tailored to drive growth and ensure compliance for your business in the UAE
          </p>
        </div>

        {/* Services grid - 2 columns on tablet, 3 on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-accent/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center bg-accent/10 text-accent p-4 rounded-lg">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Included services - bullet points */}
              <div className="space-y-3">
                {service.includes.map((item, index) => {
                  const [boldPart, ...rest] = item.split(':')
                  const normalPart = rest.join(':')
                  
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-bold text-foreground">{boldPart}:</span>{normalPart}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-20 text-center p-12 bg-gradient-to-r from-primary to-accent/20 rounded-lg">
          <h3 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today and take the first step toward smarter, more secure business decisions
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold text-lg shadow-lg"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
