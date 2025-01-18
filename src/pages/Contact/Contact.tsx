import { Phone, MapPin, Globe } from 'lucide-react'
import PageBanner from '../../components/shared/bannar'



const Contact = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contact' }
  ]

  return (
    <div className="min-h-screen">
      <PageBanner 
        title="CONTACT" 
        breadcrumbs={breadcrumbs}
        backgroundImage="https://i.ibb.co.com/4JbwJ5Z/bike-3.jpg"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
          <p className="text-gray-600">
            Contact us any time. We typically respond within one business day. For help upgrading, changing or cancelling your mbrace account, please call the Rideox mbrace Response Center toll free at +1-866-990-9007.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Details */}
          <div className="space-y-6">
            {/* Phone Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex gap-6 items-center border p-9 rounded-md">
                <div className="w-16 h-16 bg-[#F23A3A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Phone</h3>
                  <p className="text-gray-600">(+0987)-9876-543-2100</p>
                  <p className="text-gray-600">(+0123)-1234-567-89</p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex gap-6 items-center border p-9 rounded-md">
                <div className="w-16 h-16 bg-[#F23A3A] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">3500 Deer Creek Road in Palo Alto,</p>
                  <p className="text-gray-600">CA 94304, United States</p>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex gap-6 items-center border p-9 rounded-md">
                <div className="w-16 h-16 bg-[#F23A3A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Email</h3>
                  <p className="text-gray-600">info@thecadudethemes.com</p>
                  <p className="text-gray-600">info@rideoxthemes.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Write a Message</h3>
            <p className="text-gray-600 mb-6">
              You have any questions or need additional information? Register.
            </p>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F23A3A]"
              />
              
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F23A3A]"
              />
              
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F23A3A]"
              />
              
              <textarea
                placeholder="Write Your Message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F23A3A]"
              ></textarea>
              
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#F23A3A] text-white px-8 py-3 rounded-lg hover:bg-[#d62323] transition-colors"
                >
                  SEND MESSAGE
                </button>
                <span className="text-gray-500 text-sm">
                  All queries are replied usually within 24hrs.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

