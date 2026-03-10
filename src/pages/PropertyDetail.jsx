import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, Bed, Bath, Square, ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, Phone, Mail, User, Send, CheckCircle } from 'lucide-react'
import { useProperties } from '../context/PropertyContext'

const PropertyDetail = () => {
  const { id } = useParams()
  const { properties, addInquiry } = useProperties()
  const [property, setProperty] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const foundProperty = properties.find(p => p.id === parseInt(id))
    setProperty(foundProperty)
  }, [id, properties])

  if (!property) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h2 className="text-2xl font-heading font-semibold text-slate-800 mb-2">
            Property Not Found
          </h2>
          <Link to="/properties" className="btn-outline-gold px-6 py-2 rounded-lg">
            Back to Properties
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()

    const inquiry = {
      propertyId: property.id,
      propertyTitle: property.title,
      ...inquiryForm
    }

    addInquiry(inquiry)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setInquiryForm({ name: '', phone: '', email: '', message: '' })
    }, 3000)
  }

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
        {/* Back Button */}
        <Link
          to="/properties"
          className="inline-flex items-center space-x-2 text-gold hover:text-gold-light transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Properties</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-luxury">
              <div className="aspect-16/10 relative">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-charcoal/80 backdrop-blur-sm text-gold p-2 rounded-full hover:bg-charcoal transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-charcoal/80 backdrop-blur-sm text-gold p-2 rounded-full hover:bg-charcoal transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-charcoal/80 backdrop-blur-sm text-gold px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              {property.images.length > 1 && (
                <div className="flex space-x-2 p-4 bg-white">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-gold' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-200">
              <div className="flex flex-wrap items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-slate-800/70 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                    {formatPrice(property.price)}
                  </div>
                  <div className="text-slate-800/60">
                    {property.type}
                  </div>
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-charcoal rounded-xl">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Bed className="h-6 w-6 text-gold mr-2" />
                    <span className="text-2xl font-bold text-slate-800">{property.bedrooms}</span>
                  </div>
                  <div className="text-slate-800/60 text-sm">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Bath className="h-6 w-6 text-gold mr-2" />
                    <span className="text-2xl font-bold text-slate-800">{property.bathrooms}</span>
                  </div>
                  <div className="text-slate-800/60 text-sm">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Square className="h-6 w-6 text-gold mr-2" />
                    <span className="text-2xl font-bold text-slate-800">{property.area}</span>
                  </div>
                  <div className="text-slate-800/60 text-sm">Sq Ft</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-slate-800 mb-4">
                  Description
                </h2>
                <p className="text-slate-800/80 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-semibold text-slate-800 mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-slate-800/80"
                    >
                      <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-heading font-semibold text-slate-800 mb-2">
                  Location Map
                </h3>
                <p className="text-slate-800/60">
                  Interactive map would be displayed here showing the property location.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-200 sticky top-24">
              <h2 className="text-2xl font-heading font-semibold text-slate-800 mb-6">
                Book Consultation
              </h2>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-slate-800/70">
                    Your inquiry has been submitted. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-slate-800/80 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-800/80 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-800/80 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        type="email"
                        required
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-800/80 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}

              {/* WhatsApp CTA */}
              <div className="mt-6 pt-6 border-t border-gold/20">
                <a
                  href={`https://wa.me/${property.whatsappNumber.replace(/\+/g, '')}?text=Hi, I'm interested in ${property.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail