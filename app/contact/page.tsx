"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft, Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const interests = [
    "Code Courses",
    "Craft Workshops",
    "Code-n-Craft Fusion",
    "Internship Program",
    "School Programs",
    "Bulk Orders",
    "Partnership Opportunities",
    "General Inquiry",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const data = {
      ...formData,
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          interest: "",
          message: "",
          newsletter: false,
        });
      } else {
        console.error("Error from Web3Forms:", result);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "9025486901" // Replace with your WhatsApp number
    const message = "Hi! I'm interested in learning more about Stasis Artis programs."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
      <div className="absolute top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-brand-teal-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-brand-cyan-200 rounded-full opacity-20 animate-bounce-gentle"></div>
      <div className="absolute bottom-40 left-4 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 bg-brand-emerald-200 rounded-full opacity-20 animate-scale-pulse"></div>

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
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-display font-bold text-gray-900 group-hover:text-brand-teal-600 transition-colors duration-300">
                  Stasis Artis
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">Createch Company</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8 lg:space-x-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-teal-600 font-medium transition-all duration-300 relative group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-teal-600 to-brand-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/contact" className="text-brand-teal-600 font-medium relative py-2">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-teal-600 to-brand-cyan-600"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center text-brand-teal-600 hover:text-brand-teal-700 font-medium transition-all duration-300 group hover:translate-x-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey with us? We'd love to hear from you and discuss how we can help you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 animate-fade-in-left hover-glow">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6 sm:mb-8">
                Send us a message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-50 border border-green-200 rounded-xl animate-fade-in-up flex items-start">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800 font-medium text-sm sm:text-base">
                    Thank you! Your message has been sent successfully. We'll get back to you soon!
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-red-50 border border-red-200 rounded-xl animate-fade-in-up flex items-start">
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-red-800 font-medium text-sm sm:text-base">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Area of Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 text-sm sm:text-base"
                  >
                    <option value="">Select your interest</option>
                    {interests.map((interest, index) => (
                      <option key={index} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-teal-500 focus:border-transparent transition-all duration-300 resize-none hover:border-gray-400 text-sm sm:text-base"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-brand-teal-600 focus:ring-brand-teal-500 border-gray-300 rounded mt-0.5"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                    Subscribe to our newsletter for updates and exclusive content
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-gradient text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center hover-glow text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-3 h-4 w-4 sm:h-5 sm:w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 sm:space-y-10 animate-fade-in-right">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 hover-glow">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6 sm:mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="bg-brand-teal-100 p-3 sm:p-4 rounded-xl group-hover:bg-brand-teal-200 group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-brand-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Email</h4>
                                            {/* <p className="text-gray-600 text-base sm:text-lg">hello@stasisartis.com</p> */}
                      <p className="text-gray-600 text-base sm:text-lg">order.stasisartis@gmail.com</p>
                      <p className="text-gray-500 text-xs sm:text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="bg-brand-emerald-100 p-3 sm:p-4 rounded-xl group-hover:bg-brand-emerald-200 group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-brand-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Phone</h4>
                      <p className="text-gray-600 text-base sm:text-lg">+91 9025486901</p>
                      <p className="text-gray-500 text-xs sm:text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 sm:space-x-6 group">
                    <div className="bg-brand-cyan-100 p-3 sm:p-4 rounded-xl group-hover:bg-brand-cyan-200 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-brand-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">Location</h4>
                      <p className="text-gray-600 text-base sm:text-lg">Coimbatore, Tamil Nadu, India</p>
                      <p className="text-gray-500 text-xs sm:text-sm">Available worldwide</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Contact Button */}
                <div className="mt-6 sm:mt-8">
                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base"
                  >
                    <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              <div className="bg-brand-gradient rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-white hover-glow animate-float">
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Why Choose Stasis Artis?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 flex-shrink-0" />
                    Expert-led programs and workshops
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 flex-shrink-0" />
                    Hands-on learning experiences
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 flex-shrink-0" />
                    Flexible scheduling options
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 flex-shrink-0" />
                    Comprehensive support system
                  </li>
                  <li className="flex items-center text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 flex-shrink-0" />
                    Industry-recognized certifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
