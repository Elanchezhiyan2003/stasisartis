import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Palette, Sparkles, Users, Clock, CheckCircle } from "lucide-react"
import Footer from "@/components/footer"

export default function CraftPage() {
  const workshops = [
    {
      // title: "🖌️ Signature Resin Products",
      title: "Signature Resin Products",
      // duration: "4 weeks",
      // duration: "🎁 Available Now",
      duration: "Available Now",
      level: "Beginner",
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop",
      features: ["Decor", "Preservation", " Keepsakes & accessories"],
      comingSoon: true,
    },
    {
      // title: "🏢 Corporate Customization",
      title: "Corporate Customization",
      // duration: "6 weeks",
      // duration: "🎯 On Request",
      duration: "On Request",
      level: "Intermediate",
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=300&h=200&fit=crop",
      features: [" Branding", " Awards", " Souvenirs with soul"],
      comingSoon: true,
    },
    {
      // title: "🧩 Art Installations",
      title: " Art Installations",
      // duration: "8 weeks",
      // duration: "🖼️ By Commission",
      duration: " By Commission",
      level: "All Levels",
      price: "Coming Soon",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=200&fit=crop",
      features: [" Spatial storytelling", "Resin & design"],
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
        <Link
          href="/"
          className="inline-flex items-center text-brand-orange-600 hover:text-brand-orange-700 font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-brand-orange-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 animate-float">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold font-display text-gray-900 mb-6">Craft</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the mesmerizing world of resin art and crafting. Our hands-on workshops will teach you
                everything from basic techniques to advanced product creation, helping you turn your creativity into
                beautiful, functional art pieces.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Sparkles className="h-5 w-5 mr-2" />
                  <span>3 Skill Levels</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Hands-on Learning</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Flexible Workshops</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-brand-gradient-reverse text-white font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-gentle"
              >
                Join Workshop
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop"
                alt="Resin art materials and colorful creations"
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Available Workshops</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From beginner-friendly introductions to advanced masterclasses, find the perfect workshop for your skill
              level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
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
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-purple-600">
                    {workshop.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{workshop.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 flex items-center">
                      {/* <Clock className="h-4 w-4 mr-1" /> */}
                      {workshop.duration}
                    </span>
                    <span className="text-2xl font-bold text-purple-600">{workshop.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {workshop.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {workshop.comingSoon ? (
                    <div className="w-full bg-gray-400 text-white py-3 px-4 rounded-lg font-semibold text-center cursor-not-allowed">
                      Coming Soon
                    </div>
                  ) : (
                    <Link
                      href="/contact"
                      className="w-full bg-brand-orange-600 text-white py-3 px-4 rounded-lg hover:bg-brand-orange-700 transition-colors font-semibold text-center block"
                    >
                      Join Workshop
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display text-gray-900 mb-4">Student Creations</h2>
            <p className="text-lg text-gray-600">See what our students have created in our workshops</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop",
            ].map((imageUrl, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={`Student resin artwork ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
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
