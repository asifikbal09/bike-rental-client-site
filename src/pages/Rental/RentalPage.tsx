import { useState } from "react";
import BikeCard, { Bike } from "./BikeCard";
import { ChevronLeft, ChevronRight, Grid, List } from "lucide-react";
import PageBanner from "../../components/shared/bannar";
import Sidebar from "./Sidebar";

const RentalPage =()=>{
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Rental' }
  ]

  // Sample data - replace with API data
  const bikes: Bike[] = [
      // Add more bikes...
      {
        id: 1,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: '	https://thecodude.com/demo/tf/ridexo/images/destination/destination_02.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 2,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: '	https://thecodude.com/demo/tf/ridexo/images/destination/destination_05.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 3,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: '	https://thecodude.com/demo/tf/ridexo/images/post/bike-listing-08.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 4,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: 'https://thecodude.com/demo/tf/ridexo/images/post/bike-listing-07.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 5,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: '	https://thecodude.com/demo/tf/ridexo/images/destination/destination_03.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 6,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: '	https://thecodude.com/demo/tf/ridexo/images/destination/destination_03.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 7,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: '	https://thecodude.com/demo/tf/ridexo/images/destination/destination_04.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 8,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: 'https://thecodude.com/demo/tf/ridexo/images/destination/destination_02.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 9,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: 'https://thecodude.com/demo/tf/ridexo/images/destination/destination_01.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      },
      {
        id: 1,
        name: 'GTC Origine Bike',
        location: { city: 'London', country: 'UK' },
        price: 100,
        rating: 4.9,
        reviews: 1555,
        imageUrl: '	https://thecodude.com/demo/tf/ridexo/images/destination/destination_02.jpg',
        type: 'Bicycle',
        brand: 'GTC'
      }
  ]
return(
<div className="min-h-screen bg-gray-50">
      <PageBanner 
        title="RENTAL" 
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
        
            <Sidebar />
         

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="text-gray-600">
                50 Results Found
                <button className="ml-4 text-[#F23A3A] hover:underline">
                  Clear All Filters
                </button>
              </div>
              
              <div className="flex items-center gap-4">
                <select className="border rounded-md p-2">
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
                
                <div className="flex gap-2">
                  <button 
                    className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-[#F23A3A] text-white' : 'bg-gray-100'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-5 h-5" />
                  </button>
                  <button 
                    className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-[#F23A3A] text-white' : 'bg-gray-100'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bikes Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {bikes.map((bike) => (
                <BikeCard key={bike.id} bike={bike} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <button className="p-2 rounded-md hover:bg-gray-100">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#F23A3A] text-white">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
                50
              </button>
              <button className="p-2 rounded-md hover:bg-gray-100">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
)
};
export default RentalPage;