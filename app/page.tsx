"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import {
  ArrowRight,
  Code,
  Palette,
  Users,
  GraduationCap,
  Building,
  Package,
  Menu,
  Target,
  Eye,
  Heart,
  X,
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const offerings = [
    {
      title: "Code",
      description: "Courses, DesignOps, Art+Earn 101",
      icon: Code,
      color: "bg-brand-teal-500",
      slug: "code",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    },
    {
      title: "Craft",
      description: "Resin, Products, Resin 101",
      icon: Palette,
      color: "bg-brand-cyan-500",
      slug: "craft",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    },
    {
      title: "Code-n-Craft",
      description: "Fusion Workshops",
      icon: Users,
      color: "bg-brand-teal-600",
      slug: "code-n-craft",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
    },
    {
      title: "Internships",
      description: "Createch Capsule",
      icon: GraduationCap,
      color: "bg-brand-emerald-600",
      slug: "internships",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    },
    {
      title: "Programs",
      description: "Schools, Bootcamps",
      icon: Building,
      color: "bg-brand-teal-700",
      slug: "programs",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
    },
    {
      title: "Bulk Orders",
      description: "MIY Kits, Decor, Branding",
      icon: Package,
      color: "bg-brand-cyan-700",
      slug: "bulk-orders",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    },
  ]

  const companyValues = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To bridge the gap between technology and creativity, empowering individuals to become innovative creators in the digital age.",
      gradient: "from-brand-teal-500 to-brand-cyan-500",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A world where every creator has the tools and knowledge to transform their ideas into reality through the perfect fusion of code and craft.",
      gradient: "from-brand-cyan-500 to-brand-emerald-500",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Innovation, creativity, inclusivity, and hands-on learning. We believe in nurturing talent and fostering a community of passionate creators.",
      gradient: "from-brand-emerald-500 to-brand-teal-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
      <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-brand-teal-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-brand-cyan-200 rounded-full opacity-20 animate-bounce-gentle"></div>
      <div className="absolute bottom-40 left-4 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 bg-brand-emerald-200 rounded-full opacity-20 animate-scale-pulse"></div>
      <div className="absolute bottom-20 right-4 sm:right-10 w-20 h-20 sm:w-28 sm:h-28 bg-brand-teal-300 rounded-full opacity-20 animate-particle-float"></div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 sm:py-5">
            <Link
              href="/"
              className="flex items-center space-x-3 sm:space-x-4 hover:opacity-80 transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src="/stasis-logo.png"
                  alt="Stasis Artis Logo"
                  width={45}
                  height={45}
                  className="sm:w-[55px] sm:h-[55px] rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal-600/20 to-brand-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-display font-bold text-gray-900 group-hover:text-brand-teal-600 transition-colors duration-300">
                  Stasis Artis
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  Createch Company
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-teal-600 font-medium transition-all duration-300 relative group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal-600 to-brand-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <div className="relative group">
                <button className="text-gray-700 hover:text-brand-teal-600 font-medium transition-all duration-300 py-2 flex items-center space-x-1">
                  <span>Offerings</span>
                  <ArrowRight className="h-4 w-4 rotate-90 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-3">
                    {offerings.map((offering) => (
                      <Link
                        key={offering.slug}
                        href={`/offerings/${offering.slug}`}
                        className="flex items-center px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-teal-600 transition-all duration-200 group/item"
                      >
                        <div
                          className={`${offering.color} w-8 h-8 rounded-lg flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200`}
                        >
                          <offering.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium">{offering.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-brand-teal-600 font-medium transition-all duration-300 relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal-600 to-brand-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 sm:py-4 border-t border-gray-100 animate-fade-in-up">
              <div className="space-y-3 sm:space-y-4">
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-brand-teal-600 font-medium transition-colors duration-300 py-2 px-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-gray-500 font-medium text-sm px-1">Offerings</p>
                  {offerings.map((offering) => (
                    <Link
                      key={offering.slug}
                      href={`/offerings/${offering.slug}`}
                      className="block text-gray-600 hover:text-brand-teal-600 transition-colors duration-300 py-1 pl-4 text-sm sm:text-base"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {offering.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-brand-teal-600 font-medium transition-colors duration-300 py-2 px-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 xl:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-pattern-dots opacity-30"></div>
        <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-brand-teal-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-brand-cyan-200 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-brand-emerald-200 rounded-full opacity-20 animate-scale-pulse"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Left */}
            <div className="animate-fade-in-left">
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-brand-teal-100 text-brand-teal-700 rounded-full text-sm font-medium mb-6 animate-bounce-gentle">
                  <span className="w-2 h-2 bg-brand-teal-500 rounded-full mr-2 animate-pulse"></span>
                  Welcome to the Future of Learning
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                <span className="gradient-text animate-gradient-shift">Where Code</span>
                <br />
                <span className="text-gray-900">Meets Craft</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed font-light">
                Bridging the gap between technology and creativity through innovative programs, workshops, and hands-on
                learning experiences that shape the future of digital craftsmanship.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-700">Expert-Led Programs</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-700">Hands-On Learning</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-700">Industry Ready</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-brand-gradient text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover-glow text-base sm:text-lg"
                >
                  Get Started Today
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="#offerings"
                  className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 text-base sm:text-lg"
                >
                  Explore Programs
                  <ArrowRight className="ml-3 h-5 w-5 rotate-90 group-hover:rotate-180 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative animate-fade-in-right">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-teal-200 rounded-2xl opacity-60 animate-float"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-cyan-200 rounded-2xl opacity-40 animate-bounce-gentle"></div>

                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60"
                    alt="Students collaborating on creative technology projects"
                    width={600}
                    height={500}
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating stats card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-slide-in-bottom border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">50+</p>
                      <p className="text-sm text-gray-600">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section - Adjacent Text Layout */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              About Stasis Artis
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Discover what drives us and shapes our vision for the future of creative technology education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${value.gradient} rounded-2xl p-6 lg:p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-6 -translate-x-6"></div>

                  <div className="relative z-10">
                    <div className="bg-white/20 w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 backdrop-blur-sm">
                      <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <h4 className="text-xl lg:text-2xl font-display font-bold mb-3 lg:mb-4">{value.title}</h4>
                    <p className="text-sm lg:text-base leading-relaxed opacity-95">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section
        id="offerings"
        className="py-12 sm:py-16 lg:py-20 xl:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative"
      >
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
              Our Offerings
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              Discover our comprehensive range of programs designed to nurture creativity and technical skills
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon
              return (
                <Link
                  key={index}
                  href={`/offerings/${offering.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 hover:border-gray-200 animate-fade-in-up hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div
                      className={`absolute top-4 sm:top-6 left-4 sm:left-6 ${offering.color} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-brand-teal-600 transition-colors duration-300">
                      {offering.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">{offering.description}</p>
                    <div className="flex items-center text-brand-teal-600 font-semibold group-hover:text-brand-cyan-600 transition-colors duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-28 px-4 sm:px-6 lg:px-8 bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-20"></div>
        <div className="absolute top-6 left-2 sm:top-10 sm:left-4 lg:left-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-6 right-2 sm:bottom-10 sm:right-4 lg:right-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-white/10 rounded-full animate-bounce-gentle"></div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="animate-fade-in-up px-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              Ready to Start Your Journey?
            </h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 lg:mb-12 leading-relaxed">
              Join us in exploring the intersection of technology and creativity
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 bg-white text-brand-teal-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-sm sm:text-base lg:text-lg"
            >
              Contact Us Today
              <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
