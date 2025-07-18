import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Package, Users, CheckCircle, Star, Truck, Shield } from "lucide-react"
// import Footer from "@/components/footer"

export default function BulkOrdersPage() {
  const products = [
    {
      title: "MIY (Make It Yourself) Kits",
      category: " For Creative Workshops & DIY Enthusiasts",
      minOrder: "Minimum Order: 7 units",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752816720/bulk_aqcll3.jpg",
      features: [" All Essential Materials Included",  "Step-by-Step Printed Instructions", " Custom Themes Available", "On-Demand Support from Our Team"],
      comingSoon: true,
    },
    {
      title: "Custom Decor Items ",
      category: " Ideal for Homes, Offices & Gifting",
      minOrder: "Minimum Order: 25 units",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752816811/cus_rviuj4.jpg",
      features: ["Custom Designs", "Brand Integration", " Premium Quality Materials", " Bulk Discounts Available"],
      comingSoon: true,
    },
    {
      title: "Corporate Gifting & Team Essentials",
      category: " Perfect for Teams, Clients & Onboarding Kits",
      minOrder: "Minimum Order: 50 units",
      // price: "Coming Soon",
      image: "https://res.cloudinary.com/duoa4uzr3/image/upload/v1752816575/corp_mzxer3.jpg",
      features: ["Custom Welcome Kits", "Team Badges & Personalized Desk Tags", "Event Giveaways & Thank-You Gifts", "Premium Finish with Your Brand’s Identity"],
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
        <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600  hover:from-indigo-700 hover:to-purple-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6 animate-pulse">
          <Package className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-display tracking-wide">
          Bulk Orders
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-indigo-600 mb-4 font-display">
          MIY Kits, Decor & Branding
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
          Looking to scale your project or event with ease? <br />
          At Stasis Artis, we offer flexible bulk order solutions.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
          <div className="flex items-center text-gray-600">
            <Package className="h-5 w-5 mr-2" />
            <span>Custom Products</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Truck className="h-5 w-5 mr-2" />
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Shield className="h-5 w-5 mr-2" />
            <span>Quality Guarantee</span>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Request Quote
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative">
        <Image
          src="https://res.cloudinary.com/duoa4uzr3/image/upload/v1752790253/360_F_649024170_ERgaoJ3pxE18gG3bPGQkVnoa2gEiGRIH_zmindu.jpg"
          alt="Bulk packaging and shipping boxes"
          width={600}
          height={500}
          className="rounded-xl shadow-2xl object-cover w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>


      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Bulk Product Categories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of bulk products designed for businesses, educators, and event organizers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border"
              >
                <div className="relative h-48">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-indigo-600">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600 flex items-center">
                      <Package className="h-4 w-4 mr-1" />
                      {product.minOrder}
                    </span>
                    {/* <span className="text-lg font-bold text-indigo-600">{product.price}</span> */}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="w-full  bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700  py-3 px-4  hover:bg-indigo-700 transition-colors  text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Our Bulk Order Process</h2>
            <p className="text-lg text-gray-600">Simple steps to get your custom bulk order</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Discuss your requirements and get a custom quote" },
              { step: "02", title: "Design", description: "Approve designs and specifications for your order" },
              { step: "03", title: "Production", description: "We manufacture your products with quality control" },
              { step: "04", title: "Delivery", description: "Fast and secure delivery to your location" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-display tracking-wider 
  text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-900
  hover:from-teal-500 hover:to-teal-600 hover:bg-clip-text hover:text-transparent 
  transition-all duration-300">
  Book a Consultation Call Now!
</h2>


          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "Premium Quality", description: "High-quality materials and craftsmanship" },
              { icon: Users, title: "Custom Solutions", description: "Tailored products for your specific needs" },
              { icon: Truck, title: "Fast Delivery", description: "Reliable shipping and on-time delivery" },
              { icon: Shield, title: "Quality Guarantee", description: "100% satisfaction guarantee on all orders" },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div> */}
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  )
}
