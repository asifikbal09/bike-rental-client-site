import { Clock, Users, Shield, Headphones, ClockIcon as Clock24 } from 'lucide-react'
import PageBanner from '../../components/shared/bannar';

const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About' }
  ]


    
      
const About = () => {
  return (
    <div className="min-h-screen">
        <PageBanner 
        title="ABOUT" 
        breadcrumbs={breadcrumbs}
      />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Our Goals, Our Mission.</h1>
            <p className="text-gray-600">
              We provide best Rental Service, Motorcycle Service for You. Lorem
              ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-bold text-2xl">2,109</div>
                  <div className="text-sm text-gray-600">This Month</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-bold text-2xl">10954</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={`https://i.ibb.co.com/H2Y3qwx/mission-01.jpg`}
              alt="Motorcycle rider on bridge"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Clients Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <h3 className="card-title">Unique Sound</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="card-title">Safe & Secure</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="card-title">Online Support</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock24 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="card-title">24/7 Services</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
