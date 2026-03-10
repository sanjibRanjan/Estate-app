import { Link } from 'react-router-dom'
import { MapPin, ArrowDown } from 'lucide-react'
import { useProperties } from '../context/PropertyContext'

const Home = () => {
  const { properties } = useProperties()

  return (
    <div className="min-h-screen bg-white">
      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
              Why Choose LuxeEstate
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Trusted by buyers and investors across India for transparent deals and premium service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">Happy Clients</h3>
              <p className="text-slate-600 text-sm">Families and investors who found their perfect property with us.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">5+</div>
              <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">Cities</h3>
              <p className="text-slate-600 text-sm">Mumbai, Delhi, Bangalore, Hyderabad, and Pune coverage.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">24/7</div>
              <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">Support</h3>
              <p className="text-slate-600 text-sm">Dedicated consultants for inquiries and site visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties across India's finest locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {properties.slice(0, 3).map((property, index) => (
              <Link
                key={property.id}
                to={`/properties/${property.id}`}
                className="property-card bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-gold/50 transition-colors animate-fade-in h-full flex flex-col shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-52 overflow-hidden shrink-0">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="property-image w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-slate-800 mb-2 line-clamp-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-slate-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1 shrink-0" />
                    <span className="text-sm truncate">{property.location}</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gold mb-3">
                    ₹{(property.price / 10000000).toFixed(1)} Cr
                  </div>
                  <div className="flex justify-between text-sm text-slate-500 mt-auto">
                    <span>{property.bedrooms} Bed</span>
                    <span>{property.bathrooms} Bath</span>
                    <span>{property.area} sq ft</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/properties"
              className="btn-outline-gold px-8 py-3 rounded-lg font-medium inline-flex items-center space-x-2 hover:scale-105 transition-transform"
            >
              <span>View All Properties</span>
              <ArrowDown className="h-4 w-4 -rotate-90" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home