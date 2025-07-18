import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Users, Zap, Clock, CheckCircle, Code, Palette } from "lucide-react"
// import Footer from "@/components/footer"

export default function CodeNCraftPage() {
  const workshops = [
    // {
    //   // title: "🖼 MoodSync Frames",
    //   title: "MoodSync Frames",
    //   // duration: "6 weeks",
    //   // duration: "🧠 Inner Reflection",
    //   duration: "Inner Reflection",
    //   level: "Intermediate",
    //   // price: "Coming Soon",
    //   image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=300&h=200&fit=crop",
    //   features: ["Resin frames", " Reflect your inner state"],
    //   comingSoon: true,
    // },
    // {
    //   // title: "✨ AuraCast Sculptures" ,
    //   title: "AuraCast Sculptures" ,
    //   // duration: "8 weeks",
    //   // duration: "🌟 Light + Resin",
    //   duration: "Light + Resin",
    //   level: "Advanced",
    //   // price: "Coming Soon",
    //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
    //   features: ["Your energy"," Cast in light and resin"],
    //   comingSoon: true,
    // },
    // {
    //   // title: "🌀 TouchReactive Tokens",
    //   title: "TouchReactive Tokens",
    //   // duration: "4 weeks",
    //   // duration: "💫 Interactive Keepsakes",
    //   duration: "Interactive Keepsakes",
    //   level: "Beginner",
    //   // price: "Coming Soon",
    //   image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=300&h=200&fit=crop",
    //   features: [" Tiny resin keepsakes"," Respond to your touch"],
    //   comingSoon: true,
    // },
    // {
    //   // title: "🧠 Embedded Installations",
    //   title: "Embedded Installations",
    //   // duration: "4 weeks",
    //   // duration: "🔌 Tech Meets Art",
    //   duration: " Tech Meets Art",
    //   level: "Beginner",
    //   // price: "Coming Soon",
    //   image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=300&h=200&fit=crop",
    //   features: ["Large-scale resin artworks"," Integrated with microcontrollers and sensors"],
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
        <Link href="/" className="inline-flex items-center text-brand-teal-600 hover:text-brand-teal-700 font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 animate-scale-pulse">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-6xl font-display font-bold text-gray-900 mb-8 gradient-text">Fusion-Built Function-Driven</h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Where every product is coded to feel, light, or move. From LEDs to microcontrollers, each piece is a tactile dialogue between hardware and human emotion — hand-poured in resin and wired with purpose. This is Createch, preserved in design and alive with intelligence.
              </p>
              {/* <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Code className="h-5 w-5 mr-2" />
                  <span>Programming Skills</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Palette className="h-5 w-5 mr-2" />
                  <span>Artistic Creation</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Zap className="h-5 w-5 mr-2" />
                  <span>Innovation Focus</span>
                </div>
              </div> */}
              <Link
                href=""
                className="inline-flex items-center px-8 py-4 bg-brand-gradient text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-gentle"
              >
                Comming Soon
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/duoa4uzr3/image/upload/v1752789734/1670203317786_fxbbyf.jpg"
                alt="Digital art creation with technology tools"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white"> */}
        {/* <div className="max-w-7xl mx-auto"> */}
          {/* <div className="text-center mb-16"> */}
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Fusion Workshops</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our innovative workshops that combine the best of both worlds
            </p> */}
            {/* <h2 className="text-6xl font-bold text-red-400 mb-4 font-display m-20">Comming Soon</h2> */}
            {/* <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-red-400 font-display text-center">
    Coming Soon
  </h2> */}
          {/* </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            {/* {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border"
              >
                <div className="relative h-48">
                  <Image
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                    {workshop.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{workshop.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 flex items-center"> */}
                      {/* <Clock className="h-4 w-4 mr-1" /> */}
                      {/* {workshop.duration}
                    </span> */}
                    {/* <span className="text-2xl font-bold text-green-600">{workshop.price}</span> */}
                  {/* </div>
                  <ul className="space-y-2 mb-6">
                    {workshop.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center block"
                  > */}
                    {/* Join Workshop */}
                    {/* Comming Soon
                  </Link>
                </div>
              </div>
            ))} */}
           
          {/* </div> */}
        {/* </div> */}
      {/* </section> */}

      {/* Process Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Our Fusion Process</h2>
            <p className="text-lg text-gray-600">How we blend code and craft seamlessly</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Concept",
                description: "Brainstorm innovative ideas that merge digital and physical",
              },
              { step: "02", title: "Code", description: "Develop the technical foundation and interactive elements" },
              { step: "03", title: "Craft", description: "Create the physical components with hands-on techniques" },
              { step: "04", title: "Integrate", description: "Combine both elements into a cohesive final project" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
