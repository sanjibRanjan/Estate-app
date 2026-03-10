import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { MapPin, Home, Building, Briefcase, Filter, Search, Bed, Bath, Square } from 'lucide-react'
import { useProperties } from '../context/PropertyContext'

const Properties = () => {
  const { properties } = useProperties()
  const [searchParams, setSearchParams] = useSearchParams()
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || '',
    type: searchParams.get('type') || '',
    priceRange: searchParams.get('price') || '',
    searchQuery: ''
  })

  useEffect(() => {
    let filtered = [...properties]

    // City filter
    if (filters.city) {
      filtered = filtered.filter(property =>
        property.location.toLowerCase().includes(filters.city.toLowerCase())
      )
    }

    // Type filter
    if (filters.type) {
      filtered = filtered.filter(property => property.type === filters.type)
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(val => {
        if (val.includes('+')) return Infinity
        return parseInt(val) || 0
      })
      filtered = filtered.filter(property =>
        property.price >= min && (max === Infinity || property.price <= max)
      )
    }

    // Search query filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query)
      )
    }

    setFilteredProperties(filtered)
  }, [properties, filters])

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)

    // Update URL params
    const params = new URLSearchParams()
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v && k !== 'searchQuery') params.set(k, v)
    })
    setSearchParams(params)
  }

  const propertyTypes = [
    { value: '', label: 'All Types', icon: Home },
    { value: 'Apartment', label: 'Apartments', icon: Building },
    { value: 'Villa', label: 'Villas', icon: Home },
    { value: 'Office', label: 'Offices', icon: Briefcase },
    { value: 'Plot', label: 'Plots', icon: MapPin }
  ]

  const priceRanges = [
    { value: '', label: 'Any Price' },
    { value: '0-5000000', label: 'Under ₹50L' },
    { value: '5000000-10000000', label: '₹50L - ₹1Cr' },
    { value: '10000000-25000000', label: '₹1Cr - ₹2.5Cr' },
    { value: '25000000+', label: 'Above ₹2.5Cr' }
  ]

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`
    } else {
      return `₹${price.toLocaleString()}`
    }
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-800 mb-4">
            Discover Properties
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our curated collection of premium real estate across India's most desirable locations.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
              <input
                type="text"
                placeholder="Search properties..."
                value={filters.searchQuery}
                onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>

            {/* City */}
            <div className="relative">
              <input
                type="text"
                placeholder="City"
                value={filters.city}
                onChange={(e) => handleFilterChange('city', e.target.value)}
                className="w-full pl-4 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
              />
            </div>

            {/* Type */}
            <div className="relative">
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full pl-4 pr-8 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
              >
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value} className="bg-white text-slate-800">
                    {type.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Price Range */}
            <div className="relative">
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="w-full pl-4 pr-8 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value} className="bg-white text-slate-800">
                    {range.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-slate-600">
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-heading font-semibold text-slate-800 mb-2">
              No properties found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={() => setFilters({ city: '', type: '', priceRange: '', searchQuery: '' })}
              className="btn-outline-gold px-6 py-2 rounded-lg"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProperties.map((property, index) => (
              <Link
                key={property.id}
                to={`/properties/${property.id}`}
                className="property-card bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:border-gold/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="property-image w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gold px-3 py-1 rounded-lg font-bold text-lg">
                    {formatPrice(property.price)}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-slate-800 mb-2 line-clamp-2">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1 shrink-0" />
                    <span className="text-sm truncate">{property.location}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {property.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-3">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center space-x-1">
                          <Bed className="h-4 w-4" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Bath className="h-4 w-4" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Square className="h-4 w-4" />
                        <span>{property.area}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-gold/10 text-gold text-xs px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="bg-gold/10 text-gold text-xs px-2 py-1 rounded-full">
                        +{property.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Properties