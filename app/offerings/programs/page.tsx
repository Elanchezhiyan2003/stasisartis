import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building, Users, Clock, CheckCircle, Star, GraduationCap, BookOpen } from "lucide-react"
import Footer from "@/components/footer"

export default function ProgramsPage() {
  const programs = [
    {
      // title: "🎨 ArtEarn 101",
      title: "ArtEarn 101",
      // duration: "Full Academic Year",
      // duration: "💼 Guided Creation",
      duration: "Guided Creation",
      type: "Institution",
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop",
      features: [" Learn", "Make", " Earn through guided creation"],
      comingSoon: true,
    },
    {
      // title: "🧩 VAC Course Sets",
      title: "VAC Course Sets",
      // duration: "16 weeks",
      // duration: "🔧 Multi-Modal Pathways",
      duration: "Multi-Modal Pathways",
      type: "Accelerated",
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop",
      features: [" Visual", " Analog", "Code creator pathways"],
      comingSoon: true,
    },
    {
      // title: "🏫 School/College Outreach",
      title: "School/College Outreach",
      // duration: "Flexible",
      // duration: "📚 STEM + Creativity",
      duration: "STEM + Creativity",
      type: "Enterprise",
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
      features: [" Creativity-based STEM programs"],
      comingSoon: true,
    },
    // {
    //   // title: "🚀 Campus Creator Program",
    //   title: "Campus Creator Program",
    //   // duration: "Flexible",
    //   // duration: "🎓 Student Leadership",
    //   duration: "Student Leadership",
    //   type: "Enterprise",
    //   price: "Coming Soon",
    //   image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    //   features: [" Train students", " Lead the movement"],
    //   comingSoon: true,
    // },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image src="/stasis-logo.png" alt="Stasis Artis Logo" width={60} height={60} className="rounded-lg" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Stasis Artis</h1>
                <p className="text-sm text-gray-600">Createch Company</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand-teal-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 animate-float">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-display">Programs</h1>
              <h2 className="text-2xl font-semibold text-red-600 mb-4 font-display">Schools & Bootcamps</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform education with our comprehensive programs designed for schools, institutions, and intensive
                bootcamps. We provide structured learning paths that prepare students for the modern digital landscape.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span>Structured Curriculum</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BookOpen className="h-5 w-5 mr-2" />
                  <span>Comprehensive Materials</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Program Info
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/duoa4uzr3/image/upload/v1752790035/1686663582907_cg2ntd.jpg"
                alt="Students learning in modern classroom with laptops"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Available Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational solutions tailored for different learning environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border"
              >
                <div className="relative h-48">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-red-600">
                    {program.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{program.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 flex items-center">
                      {/* <Clock className="h-4 w-4 mr-1" /> */}
                      {program.duration}
                    </span>
                    <span className="text-lg font-bold text-red-600">{program.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-center block"
                  >
                    {/* Learn More */}
                    Enquiry
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Success Stories</h2>
            <p className="text-lg text-gray-600">See how our programs have transformed educational experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                institution: "Tech High School",
                result: "95% student engagement increase",
                description: "Integrated our curriculum into their computer science program",
              },
              {
                institution: "Innovation Bootcamp",
                result: "85% job placement rate",
                description: "Intensive 16-week program with industry partnerships",
              },
              {
                institution: "Creative College",
                result: "200+ students trained",
                description: "Comprehensive design and development program",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">{story.institution}</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">{story.result}</p>
                <p className="text-gray-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
