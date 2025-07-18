import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Code, BookOpen, Users, Clock, CheckCircle, Star } from "lucide-react"
// import Footer from "@/components/footer"

export default function CodePage() {
  const courses = [
    {
      // title: "🔧 Embedded 101",
      title: "Embedded 101",
      duration: " 8 weeks",
      level: "Beginner",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752814102/4a3e763a5ad00c6429bac51cf6caa24e_bvdqbs.jpg",
      features: ["Microcontrollers (Arduino, ESP32 basics)", " Sensor integration & real-world interfacing", " C/C++ for embedded applications", "Build your first smart hardware project"],
      comingSoon: true,
    },
    {
      // title: "🎨 DesignOps",
      title: "DesignOps",
      duration: " 4 weeks",
      level: "Intermediate",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752814292/flat-design-ui-ux-background_23-2149093995_m2fsxo.avif",
      features: [" UI/UX for physical interfaces", " System thinking for hybrid products", " Prototyping with Figma & hardware", " Collaborative design & iteration workflows"],
      comingSoon: false,
    },
    {
      // title: "🤖 Prompt & Prototype",
      title: "Prompt & Prototype",
      duration: "4 weeks",
      level: "Beginner",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752814483/WhatsApp_Image_2025-07-18_at_10.14.31_b93dffab_n7fnta.jpg",
      features: ["AI prompt engineering (text/image)" , " No-code to low-code prototyping tools", "Generative workflows with ChatGPT, Midjourney", " Build & test AI-enhanced interactive concepts"],
      comingSoon: true,
    },
    // {
    //   // title: "🧩 FlowBox Modules",
    //   title: "FlowBox Modules",
    //   duration: " 6 weeks",
    //   level: "Beginner",
    //   // price: "Coming Soon",
    //   image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752763276/technology-integrated-everyday-life_vn11n5.jpg",
    //   features: ["Intro to sensors & creative coding", " Interactive installation design", "Light, motion & sound-based triggers", " Final project: Build your own art-tech module"],
    //   comingSoon: true,
    // },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-all duration-300 group">
              <div className="relative">
                <Image
                  src="/stasis-logo.png"
                  alt="Stasis Artis Logo"
                  width={55}
                  height={55}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Stasis Artis
                </h1>
                <p className="text-sm text-gray-600 font-serif tracking-tight">Code ∩ Craft</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-10">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group hover:translate-x-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-brand-teal-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover-glow animate-float">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-6xl font-display font-bold text-gray-900 mb-8 gradient-text">Code your curiosity Build your edge</h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              
Explore Embedded 101, AI Prompting, Prototyping & more — all designed to fuel your future.
Every line you write moves you closer to innovation, internships, and industry-ready skills.
              </p>
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  <span>3 Comprehensive Courses</span>
                </div>
                <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Small Class Sizes</span>
                </div>
                <div className="flex items-center text-gray-600 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Flexible Scheduling</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-brand-gradient text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover-glow animate-bounce-gentle"
              >
                Enroll Now
              </Link>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <Image
                src="https://res.cloudinary.com/duoa4uzr3/image/upload/v1752786301/WhatsApp_Image_2025-07-18_at_02.33.28_1bc8218a_dnnko6.jpg"
                alt="Coding workspace with multiple monitors"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Available Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully crafted curriculum designed to take you from beginner to professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 group animate-fade-in-up hover-glow transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-brand-teal-600 shadow-lg animate-wiggle">
                    {course.level}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-600 flex items-center bg-gray-50 px-3 py-1 rounded-lg">
                      <Clock className="h-4 w-4 mr-1 text-blue-600" />
                      {course.duration}
                    </span>
                    {/* <span className="text-3xl font-bold text-blue-600">{course.price}</span> */}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {course.comingSoon ? (
                    <div className="w-full bg-gray-400 text-white py-4 px-6 rounded-xl font-semibold text-center cursor-not-allowed">
                      Coming Soon
                    </div>
                  ) : (
                    <Link
                      href="/contact"
                      className="w-full bg-brand-gradient text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center block transform hover:scale-105 shadow-lg"
                    >
                      Enroll Now
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Why Choose Our Code Programs?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Star,
                title: "Industry Experts",
                description: "Learn from professionals with real-world experience",
              },
              { icon: BookOpen, title: "Practical Projects", description: "Build a portfolio with hands-on projects" },
              { icon: Users, title: "Community Support", description: "Join a network of fellow developers" },
              { icon: CheckCircle, title: "Job Ready Skills", description: "Graduate with market-ready capabilities" },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div
                  key={index}
                  className="text-center group animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
