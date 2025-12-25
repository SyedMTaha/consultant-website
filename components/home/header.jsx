"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const serviceLinks = [
    { label: "Business Consulting", href: "#services" },
    { label: "Tax Advisory", href: "#services" },
    { label: "Audit & Assurance", href: "#services" },
  ]

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full">
          <Image
            src="/assets/logo/logo-1.svg"
            alt="MY Consultant & Advisors"
            width={220}
            height={60}
            className="h-22 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/about-us" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>

          <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>

          <Link href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Blogs
          </Link>

          <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact Us
          </Link>

          <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>

          {/* Keep Get Consultation button */}
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center gap-2">
            Get Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg border border-border" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-card p-4 space-y-2">
          <Link href="/about-us" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            About Us
          </Link>

          <Link href="/services" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            Services
          </Link>

          <Link href="#blog" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            Blogs
          </Link>

          <Link href="#contact" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            Contact Us
          </Link>

          <Link href="#faq" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition-colors">
            FAQ
          </Link>

          {/* Keep Get Consultation button */}
          <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium mt-4 flex items-center justify-center gap-2">
            Get Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </nav>
      )}
    </header>
  )
}
