import { Star, MapPin } from 'lucide-react'

export interface Bike {
  id: number
  name: string
  location: {
    city: string
    country: string
  }
  price: number
  rating: number
  reviews: number
  imageUrl: string
  type: string
  brand: string
}

interface BikeCardProps {
  bike: Bike
}

const BikeCard: React.FC<BikeCardProps> = ({ bike }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={bike.imageUrl} 
        alt={bike.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{bike.name}</h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-[#F23A3A]">${bike.price}</span>
            <span className="text-sm text-gray-500">/DAY</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{bike.location.city}, {bike.location.country}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(bike.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">({bike.reviews} Reviews)</span>
          </div>
          <button className="bg-[#F23A3A] text-white px-4 py-1 rounded-md hover:bg-[#d62323] transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default BikeCard

