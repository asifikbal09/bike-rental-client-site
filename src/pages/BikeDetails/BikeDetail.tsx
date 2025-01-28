import type React from "react"
import { useParams } from "react-router-dom"
import { Star, MapPin, Calendar, Clock, Shield, ArrowLeft, ArrowRight } from "lucide-react"
import PageBanner from "../../components/shared/bannar"


// This is a mock function. In a real app, you'd fetch this data from your API
const getBikeDetails = (id: string) => ({
  id,
  name: "GTC Origine Bike",
  type: "Mountain Bike",
  brand: "GTC",
  location: { city: "London", country: "UK" },
  price: 100,
  rating: 4.9,
  reviews: 1555,
  imageUrl:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(2).jpg-soYF76t8LJCcCfC1zSh4vOHqYti6Vb.jpeg",
  description:
    "Experience the thrill of mountain biking with our GTC Origine Bike. Perfect for both beginners and experienced riders, this bike offers superior performance and comfort on various terrains.",
  features: [
    "21-speed Shimano gears",
    "Hydraulic disc brakes",
    "Front suspension fork",
    "Lightweight aluminum frame",
    "Wide, knobby tires for excellent traction",
  ],
})

const BikeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const bike = getBikeDetails(id || "")

  const breadcrumbs = [{ label: "Home", path: "/" }, { label: "Rental", path: "/rental" }, { label: bike.name }]

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title={bike.name} breadcrumbs={breadcrumbs} />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left column - Image */}
            <div className="md:w-1/2">
              <img src={bike.imageUrl || "/placeholder.svg"} alt={bike.name} className="w-full h-full object-cover" />
            </div>

            {/* Right column - Bike details */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-3xl font-bold mb-4">{bike.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(bike.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({bike.reviews} Reviews)</span>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span>
                  {bike.location.city}, {bike.location.country}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{bike.description}</p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Features:</h2>
                <ul className="list-disc list-inside text-gray-700">
                  {bike.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-3xl font-bold text-[#F23A3A]">${bike.price}</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <button className="bg-[#F23A3A] text-white px-6 py-2 rounded-md hover:bg-[#d62323] transition-colors">
                  Book Now
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-[#F23A3A]" />
                  <span className="block text-gray-700">Available 24/7</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-[#F23A3A]" />
                  <span className="block text-gray-700">Instant Booking</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-[#F23A3A]" />
                  <span className="block text-gray-700">Secure Payments</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-[#F23A3A]" />
                  <span className="block text-gray-700">Multiple Locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Bikes Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Bikes</h2>
          <div className="relative">
            <div className="flex space-x-6 overflow-x-auto pb-4">
              {/* Add related bike cards here */}
              {/* This is just a placeholder, you should map through actual related bikes */}
              <div className="w-64 flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/placeholder.svg" alt="Related Bike" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Related Bike 1</h3>
                  <p className="text-[#F23A3A] font-bold">$90/day</p>
                </div>
              </div>
              {/* Repeat for more related bikes */}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ArrowLeft className="w-6 h-6 text-[#F23A3A]" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ArrowRight className="w-6 h-6 text-[#F23A3A]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeDetail

