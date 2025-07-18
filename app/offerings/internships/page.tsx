import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Users, Clock, CheckCircle, Star, Award, Briefcase } from "lucide-react"
// import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function InternshipsPage() {
  const programs = [
    {
      title: "Frontend Development Internship",
      duration: "12 weeks",
      type: "Full-time",
      stipend: "Coming Soon",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
      features: ["React & Next.js", "Real Projects", "Mentorship", "Certificate"],
      comingSoon: true,
    },
    {
      title: "Creative Design Internship",
      duration: "10 weeks",
      type: "Part-time",
      stipend: "Coming Soon",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop",
      features: ["UI/UX Design", "Brand Development", "Portfolio Building", "Industry Exposure"],
      comingSoon: true,
    },
    {
      title: "Full-Stack Development",
      duration: "16 weeks",
      type: "Full-time",
      stipend: "Coming Soon",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop",
      features: ["Complete Stack", "Database Design", "API Development", "Deployment"],
      comingSoon: true,
    },
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
                <p className="text-sm text-gray-600 font-serif tracking-tight">Code ∩ Craft</p>
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
        <Link
          href="/"
          className="inline-flex items-center text-brand-orange-600 hover:text-brand-orange-700 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      {/* <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 animate-wiggle">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold font-display text-gray-900 mb-6">Internship</h1>
              <h2 className="text-2xl font-semibold text-orange-600 mb-4">Createch Capsule Program</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch your career with our comprehensive internship program. Gain real-world experience, work on live
                projects, and receive mentorship from industry professionals in our innovative Createch Capsule
                environment.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-5 w-5 mr-2" />
                  <span>Real Projects</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Expert Mentorship</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Certification</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply Now
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/duoa4uzr3/image/upload/v1752789960/people_on_laptops_rcmav2.jpg"
                alt="Young professionals collaborating in modern workspace"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* LEFT TEXT BLOCK */}
    <div>
      <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 animate-wiggle">
        <GraduationCap className="h-8 w-8 text-white" />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-4">
        Internship
      </h1>
      <h2 className="text-2xl font-semibold text-orange-600 mb-6">
        Createch Capsule Program
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Launch your career with our comprehensive internship program. Gain real-world experience, work on live projects, and receive mentorship from industry professionals in our innovative Createch Capsule environment.
      </p>

      {/* Feature Points */}
      {/* <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8">
        <div className="flex items-center text-gray-600">
          <Briefcase className="h-5 w-5 mr-2" />
          <span>Real Projects</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-2" />
          <span>Expert Mentorship</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Award className="h-5 w-5 mr-2" />
          <span>Certification</span>
        </div>
      </div> */}

      {/* CTA BUTTON */}
      <Link
        href="/contact"
        className="inline-flex items-center px-8 py-4 text-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Apply Now
      </Link>
    </div>

    {/* IMAGE BLOCK */}
    <div className="relative">
      <Image
        src="https://res.cloudinary.com/duoa4uzr3/image/upload/v1752789960/people_on_laptops_rcmav2.jpg"
        alt="Young professionals collaborating in modern workspace"
        width={600}
        height={500}
        className="rounded-xl shadow-2xl object-cover w-full h-auto"
      />
    </div>
  </div>
</section>


      {/* Programs Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Available Internship Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our specialized internship tracks designed to accelerate your career growth
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
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
                    {program.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </span>
                    <span className="text-lg font-bold text-orange-600">{program.stipend}</span>
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
                    className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-center block"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-gray-900 mb-8">Why Choose Our Internship Program?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Portfolio Ready Projects", description: "Work on real projects with actual clients" },
              { icon: Users, title: "Expert Mentorship", description: "One-on-one guidance from senior professionals" },
              { icon: Award, title: "Certification", description: "Receive industry-recognized certificates" },
              { icon: Briefcase, title: "Startup-Led Experience", description: "Step into a founder-run environment where your ideas count" },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center max-w-3xl mx-auto" >
      <h2 className="text-4xl sm:text-5xl font-bold font-display text-gray-900 mb-8">
        Ready to Step In ?
      </h2>

      <p className="text-xl sm:text-2xl text-gray-700 mb-6">
        Interviews here aren’t to judge — they’re to discover who you are.
      </p>

      <p className="text-lg sm:text-xl text-gray-600 mb-8">
         Just tell us what you love building — we’ll take it from there.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-10 py-5 bg-brand-gradient text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-bounce-gentle"
      >
        Apply Now
      </Link>
      {/* <Button className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-3 rounded-lg shadow-md transition">
        Apply Now
      </Button> */}
    </div>
  </div>
</section>


      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
