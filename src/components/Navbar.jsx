import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Building2, Phone, MessageCircle } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/properties', label: 'Properties' },
    { path: '/office', label: 'Our Office' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphism py-3' : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          {/* Logo - Left aligned */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <Building2 className="h-8 w-8 text-gold shrink-0" />
            <span className="text-xl lg:text-2xl font-heading font-bold text-slate-800 whitespace-nowrap">
              Bangalore North Real Estate
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors duration-200 whitespace-nowrap ${
                    isActive(link.path)
                      ? 'text-gold'
                      : 'text-slate-700 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Right aligned */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="tel:+919113203639"
              className="flex items-center gap-2 text-slate-700 hover:text-gold transition-colors text-sm font-medium"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>+91 91132 03639</span>
            </a>
            <Link
              to="/contact"
              className="btn-gold px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 text-sm shrink-0"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-700 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-lg transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-gold font-medium'
                      : 'text-slate-700 hover:text-gold'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
                <a
                  href="tel:+919113203639"
                  className="flex items-center space-x-2 text-slate-700 hover:text-gold transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+91 91132 03639</span>
                </a>
                <Link
                  to="/contact"
                  className="btn-gold px-6 py-2 rounded-lg font-medium text-center flex items-center justify-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Book Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar