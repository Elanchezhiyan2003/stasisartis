import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Building, Star, Target, CheckCircle } from "lucide-react"
// import Footer from "@/components/footer"

export default function ProgramsPage() {
  const programs = [
    {
      // title: "🎨 ArtEarn 101",
      title: "Prompt. Prototype. Publish",
      // duration: "Full Academic Year",
      // duration: "💼 Guided Creation",
      duration: "Code Beyond The Syntax",
      // type: "Institution",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752815872/prom_liuk3f.jpg",
      features: ["Master AI prompts", " Build fast, iterate faster", "Launch your ideas out loud"],
      comingSoon: true,
    },
    {
      // title: "🧩 VAC Course Sets",
      title: "Think. Design. Deliver",
      // duration: "16 weeks",
      // duration: "🔧 Multi-Modal Pathways",
      duration: "Sketch To Screen",
      // type: "Accelerated",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752815826/uiux_obxndh.jpg",
      features: [" Conceptualize smart", "Design with intent", "Ship what matters"],
      comingSoon: true,
    },
    {
      // title: "🏫 School/College Outreach",
      title: "Bits.Boards.Beyond",
      // duration: "Flexible",
      // duration: "📚 STEM + Creativity",
      duration: "From Breadboard to Breakthrough",
      // type: "Enterprise",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752815774/em-3_h6p8yu.jpg",
      features: [" Code the core","Wire the world","Create responsive things "],
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
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-8 gradient-text">Programs that Transform Partnerships that Matter
              </h1>
              {/* <h2 className="text-2xl font-semibold text-red-600 mb-4 font-display">Schools & Bootcamps</h2> */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
               We collaborate with schools and colleges to deliver immersive, future-forward programs in code, craft, and creative tech. From foundational skills to real-world expression, students don’t just learn — they build, personalize, and lead. We empower the next generation of Createch thinkers and doers.
              </p>
              {/* <div className="flex flex-wrap gap-4 mb-8">
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
              </div> */}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Programs With Purpose</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering learners to think, build, and lead—one real-world project at a time.
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
                  {/* <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-red-600">
                    {program.type}
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{program.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 flex items-center">
                      {/* <Clock className="h-4 w-4 mr-1" /> */}
                      {program.duration}
                    </span>
                    {/* <span className="text-lg font-bold text-red-600">{program.price}</span> */}
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
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white  rounded-lg hover:from-red-700 hover:to-pink-700  py-3 px-4  hover:bg-pink-700 transition-colors font-semibold text-center block"
                  >
                    {/* Learn More */}
                   For Enquiry
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Why Choose Us ?</h2>
            <p className="text-lg text-gray-600">See how our programs have transformed educational experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center shadow-md">
                    <Target className="h-8 w-8 text-teal-600" />
                  </div>
                ),
                result: (
                  <p className="text-2xl text-teal-600 font-semibold leading-relaxed">
                    Hands-On Upskilling <br></br> <span className="text-teal-600 font-semibold"> That Lasts</span>
                  </p>
                ),
              },
              {
                icon: <Building className="h-8 w-8 text-teal-600" />, 
                result: " Industry-Relevant Learning, Seamlessly Integrated" ,
              },
              {
                icon: <Star className="h-8 w-8 text-teal-600" />, 
                result: "Future-Ready Talent, Built On Your Campus",
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {story.icon}
                </div>
                <p className="text-2xl  font-bold text-teal-600 mb-2">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-[70rem] mx-auto bg-gradient-to-br from-teal-500 to-[#061018] px-4 py-12 mb-24 mt-14 rounded-full">
  <div className="max-w-5xl mx-auto text-center">
    <p className="text-2xl sm:text-3xl md:text-3xl font-serif italic text-white leading-relaxed" style={{ lineHeight: "1.50" }}>
      "In a world of automation, we choose sensation. In a world of code, we
      choose craft. But most importantly, we choose both."
    </p>
    <p className="mt-6 text-teal-100 text-base sm:text-lg font-medium tracking-wide">
      — <span className="hover:underline cursor-pointer">The Stasis Artis Philosophy</span>
    </p>
  </div>
</section>


      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
