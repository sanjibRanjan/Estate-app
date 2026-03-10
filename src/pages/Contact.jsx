import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, User, MessageSquare, Send, CheckCircle } from 'lucide-react'
import { useProperties } from '../context/PropertyContext'

const Contact = () => {
  const { addInquiry } = useProperties()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const inquiry = {
      propertyId: null, // General inquiry
      propertyTitle: 'General Inquiry',
      ...formData
    }

    addInquiry(inquiry)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        '123 Luxury Avenue,',
        'Bandra West, Mumbai - 400050',
        'Maharashtra, India'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 91132 03639 (Main)',
        '+91 91132 03639 (Sales)',
        '+91 91132 03639 (Support)'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'BangaloreNorthRealestates@gmail.com',
        'BangaloreNorthRealestates@gmail.com',
        'BangaloreNorthRealestates@gmail.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 8:00 PM',
        'Saturday: 10:00 AM - 6:00 PM',
        'Sunday: By Appointment Only'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Get in touch with our luxury real estate consultants. We're here to help you find your dream property.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold text-black mb-6">
                Get In Touch
              </h2>
              <p className="text-black mb-8 leading-relaxed">
                Whether you're looking to buy, sell, or invest in premium real estate, our experienced team is ready to assist you. Reach out to us through any of the channels below or fill out the contact form.
              </p>
            </div>

            {/* Office Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {officeInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:border-gold/50 transition-colors shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gold/10 p-3 rounded-lg shrink-0">
                      <info.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-black mb-3">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-black text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className="text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-xl font-heading font-semibold text-black mb-2">
                  Visit Our Office
                </h3>
                <p className="text-black mb-4">
                  Located in the heart of Mumbai's premium business district, our office offers a sophisticated environment for all your real estate consultations.
                </p>
                <a
                href="https://www.google.com/maps/search/?api=1&query=123+Luxury+Avenue+Bandra+West+Mumbai+400050"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-6 py-2 rounded-lg inline-block"
              >
                Get Directions
              </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-heading font-semibold text-black mb-6">
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">
                  Thank you for contacting us!
                </h3>
                <p className="text-black">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-black placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-black text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-black placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                </div>

                <div>
<label htmlFor="contact-email" className="block text-black text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-black placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="your@email.com"
                        aria-required="true"
                      />
                  </div>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-black placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="What can we help you with?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg text-black placeholder-slate-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Tell us about your requirements, preferred locations, budget, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-lg p-8 md:p-12 text-center border border-slate-200 shadow-sm">
          <h2 className="text-3xl font-heading font-bold text-black mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
            Our expert consultants are standing by to help you navigate the luxury real estate market and find the perfect property for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919113203639"
              className="btn-gold px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919113203639?text=Message%20BANGALORENORTHREALESTATE%20on%20WhatsApp."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Message BANGALORENORTHREALESTATE on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact