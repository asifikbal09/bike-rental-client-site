
import { Search } from 'lucide-react'



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = () => {
  const brands = ['Benelli', 'Cannondale', 'Daimler', 'Ford Motor', 'Honda', 'Norton', 'Raleigh', 'Toyota', 'Volkswagen']
  const bikeTypes = ['Motorcycle', 'Bicycle', 'Scooter', 'Scooter Bike', 'Electric Bike', 'Electric Scooter', 'Quad Bike']

  return (
    <div className=" bg-white p-4 rounded-lg shadow-sm space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pr-10 border rounded-lg focus:outline-none focus:border-[#F23A3A]"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
      </div>

      {/* Location Selector */}
      <div>
        <select className="w-full p-2 border rounded-lg focus:outline-none focus:border-[#F23A3A]">
          <option value="">Select Location</option>
          <option value="london">London, UK</option>
          <option value="newyork">New York, USA</option>
          {/* Add more locations */}
        </select>
      </div>

      {/* Brand Filter */}
      <div>
        <div className="bg-[#F23A3A] text-white p-3 rounded-t-lg">All Brand</div>
        <div className="border rounded-b-lg p-4 space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-[#F23A3A]" />
              <span className="text-gray-600">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type of Bike */}
      <div>
        <div className="bg-[#F23A3A] text-white p-3 rounded-t-lg">Type of Bike</div>
        <div className="border rounded-b-lg p-4 space-y-2">
          {bikeTypes.map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-[#F23A3A]" />
              <span className="text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="bg-[#F23A3A] text-white p-3 rounded-t-lg">Select Price</div>
        <div className="border rounded-b-lg p-4">
          <input
            type="range"
            min="0"
            max="100000"
            className="w-full accent-[#F23A3A]"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$100000</span>
          </div>
        </div>
      </div>

      {/* Mileage Limit */}
      <div>
        <div className="bg-[#F23A3A] text-white p-3 rounded-t-lg">Mileage Limit</div>
        <div className="border rounded-b-lg p-4">
          <input
            type="range"
            min="0"
            max="1000"
            className="w-full accent-[#F23A3A]"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>0</span>
            <span>1000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

