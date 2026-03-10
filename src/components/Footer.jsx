import { Link } from 'react-router-dom'
import { Building2, MapPin, Phone, Mail, MessageCircle, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/office', label: 'Our Office' },
    { path: '/contact', label: 'Contact Us' }
  ]

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-gold" />
              <span className="text-2xl font-heading font-bold text-slate-800">
                Bangalore North Real Estate
              </span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Your trusted partner in Bangalore North. We help you find, buy, and invest in premium properties across office, retail, and residential segments.
            </p>
            <a
              href="tel:+919113203639"
              className="text-gold hover:text-gold-light font-medium text-sm transition-colors"
            >
              +91 91132 03639
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-slate-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-slate-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <a href="https://maps.app.goo.gl/1tTJhp23tUdCVhuQ7" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">View office on Google Maps</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <a href="tel:+919113203639" className="hover:text-gold transition-colors">
                  +91 91132 03639
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a
                  href="mailto:BangaloreNorthRealestates@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  BangaloreNorthRealestates@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-slate-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Ready to find your dream property? Our consultants are here to help.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="btn-gold px-5 py-2.5 rounded-lg font-medium text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Book Consultation
              </Link>
              <a
                href="https://wa.me/919113203639?text=Message%20BANGALORENORTHREALESTATE%20on%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm text-center inline-flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://youtube.com/@bangalorenorthrealestate?si=RfoxprZD5p7KGWN1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-gold px-3 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/bangalorenorthrealestate?igshid=NGVhN2U2NjQ0Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-gold px-3 py-2 rounded-lg inline-flex items-center gap-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-sm">
            © {currentYear} Bangalore North Real Estate. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs">
            Commercial Real Estate • Bangalore North, India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
