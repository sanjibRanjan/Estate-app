import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Clock,
  Phone,
  ChevronDown,
  ChevronUp,
  Building2,
  Youtube,
  Instagram,
  ExternalLink,
  Mail,
  FileText,
  Briefcase,
  Store,
  Truck,
  Database,
  TrendingUp,
  Wrench,
  Users,
  HardHat,
  BarChart3,
} from 'lucide-react'

const Office = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      id: 1,
      q: 'What types of commercial properties are available in Bangalore North?',
      a: 'Bangalore North offers a diverse range of commercial properties, including office spaces, retail spaces, residential, industrial & logistics, and land for development. Locations like Manyata Tech Park, Hebbal, Yelahanka, and Devanahalli are particularly in demand.',
    },
    {
      id: 2,
      q: 'Can you help with property valuation?',
      a: 'Absolutely. Our valuation & advisory service includes comprehensive valuation capabilities to help you understand the true value of your investments.',
    },
    {
      id: 3,
      q: 'How can Bangalore North Real Estate help me with office leasing or tenant representation?',
      a: 'Our tenant representation services for office space are designed to help businesses secure ideal spaces with favorable lease terms. We take care of everything from location scouting to final negotiations, ensuring you make the best decision.',
    },
    {
      id: 4,
      q: 'What factors should I consider before investing in commercial property in Bangalore North?',
      a: "It's crucial to consider location, market demand, type of property, and long-term growth prospects. We provide market intelligence and valuation & advisory services to help you make informed investment decisions.",
    },
    {
      id: 5,
      q: 'Can Bangalore North Real Estate assist with property management?',
      a: 'Our asset services include comprehensive property management, ensuring smooth day-to-day operations, tenant satisfaction, and maximized property value.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-800/70">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-gold">Bangalore North</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=1080&fit=crop)',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/90 via-charcoal/80 to-charcoal" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-800 mb-6 leading-tight">
              Commercial Real Estate Agency in Bangalore North
            </h1>
            <p className="text-lg md:text-xl text-slate-800/90 leading-relaxed mb-4">
              Bangalore North is one of India&apos;s key tech and growth corridors, home to IT parks, multinational companies, and a thriving ecosystem. With Manyata Tech Park, Hebbal, Yelahanka, and the airport corridor, there is a strong need for office, retail, and residential spaces.
            </p>
            <p className="text-slate-800/80 leading-relaxed mb-4">
              Bangalore North Real Estate brings local expertise and market insights across key submarkets to cater to Bangalore North&apos;s unique commercial real estate landscape. Specializing in office, residential, retail, and industrial asset classes, we offer a wide range of property solutions. We are committed to aligning our services with your needs, and our team of experienced consultants ensures your portfolio strategy is designed for success.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                to="/properties"
                className="btn-gold px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
              >
                Explore Properties
              </Link>
              <Link
                to="/contact"
                className="btn-outline-gold px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for Commercial Property */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
            Looking for Commercial Property in Bangalore North?
          </h2>
          <p className="text-slate-800/70 text-lg mb-12 max-w-3xl">
            We offer end-to-end services for occupiers and investors across office, retail, and industrial segments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Tenant Representation', desc: 'Strategic occupancy solutions tailored to your office leasing needs. We deliver customized assets and space-optimized inputs to align with your business and people objectives.' },
              { icon: Briefcase, title: 'Commercial Agency Leasing', desc: 'We help landlords attract high-quality tenants while optimizing rental returns for retail, office, or industrial spaces across Bangalore North.' },
              { icon: Store, title: 'Retail Markets', desc: 'From high streets to malls and mixed-use destinations, we guide you at every stage with expertise in retail commercial real estate.' },
              { icon: Truck, title: 'Industrial & Logistics', desc: 'Whether you are an owner seeking to maximise returns or an occupier looking for site selection, we put your industrial & logistics needs first.' },
              { icon: Database, title: 'Data Centre Solutions', desc: 'Robust, scalable, and cost-effective data management strategy. We help you develop, build, buy, sell, or manage data centre projects.' },
              { icon: TrendingUp, title: 'Capital Markets', desc: 'End-to-end advisory, brokerage, valuation, and management. Whether buying, selling, or investing, we help you maximise the value of your real estate.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-charcoal rounded-xl p-6 border border-slate-200 hover:border-gold/30 transition-colors"
              >
                <item.icon className="h-8 w-8 text-gold mb-4" />
                <h3 className="text-xl font-heading font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-800/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Support Managing Your Property */}
      <section className="py-16 md:py-20 bg-charcoal border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
            Need Support Managing Your Commercial Property?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Wrench, title: 'Facilities Services', desc: 'Comprehensive solutions for maintenance, energy management, and workplace optimization for safe, productive environments.' },
              { icon: Users, title: 'Tenant Representation', desc: 'We ensure you find the perfect space and negotiate favorable lease terms, from co-working hubs to large corporate offices.' },
              { icon: HardHat, title: 'Project & Development Services', desc: 'From planning and design to execution and compliance, we ensure projects deliver on cost, quality, safety and on time.' },
              { icon: BarChart3, title: 'Strategic Consulting', desc: 'Market analysis, portfolio optimization, and long-term investment strategies with actionable insights for sustained success.' },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-gold/30 transition-colors"
              >
                <item.icon className="h-8 w-8 text-gold mb-4" />
                <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-800/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">
            Why Choose Us for Your Bangalore North Commercial Real Estate Needs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-heading font-semibold text-gold mb-2">Local Expertise, Trusted Reach</h3>
              <p className="text-slate-800/70">
                Our Bangalore North team combines deep local market knowledge with best practices to deliver tailored, effective real estate solutions.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-heading font-semibold text-gold mb-2">Client-Centric Approach</h3>
              <p className="text-slate-800/70">
                We believe in partnerships. By prioritizing your needs, we build long-term relationships built on trust, transparency, and success.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-heading font-semibold text-gold mb-2">Proven Success</h3>
              <p className="text-slate-800/70">
                With a demonstrated ability to deliver value for occupiers and owners, we are the trusted partner for the Bangalore North commercial property market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info + CTA Card */}
      <section className="py-16 md:py-20 bg-charcoal border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Office & Contact Card */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-heading font-bold text-slate-800 mb-6">
                    Bangalore North
                  </h2>
                  <p className="text-slate-800/80 mb-6">Are you looking for a property in Bangalore North?</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Link
                      to="/properties"
                      className="btn-gold px-5 py-2.5 rounded-lg font-medium text-sm inline-flex items-center gap-2"
                    >
                      Properties for sale
                    </Link>
                    <Link
                      to="/properties"
                      className="btn-outline-gold px-5 py-2.5 rounded-lg font-medium text-sm inline-flex items-center gap-2"
                    >
                      Properties for lease
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Office Location</p>
                        <a
                          href="https://maps.app.goo.gl/1tTJhp23tUdCVhuQ7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold hover:text-gold-light flex items-center gap-1"
                        >
                          View on Google Maps
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gold shrink-0" />
                      <div>
                        <p className="font-medium text-slate-800">Office Hours</p>
                        <p className="text-slate-800/70 text-sm">Monday – Friday: 09:00–18:00</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-gold shrink-0" />
                      <a href="tel:+919113203639" className="text-slate-800/80 hover:text-gold transition-colors">
                        +91 91132 03639
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-gold shrink-0" />
                      <a
                        href="mailto:BangaloreNorthRealestates@gmail.com"
                        className="text-slate-800/80 hover:text-gold transition-colors"
                      >
                        BangaloreNorthRealestates@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                    <a
                      href="https://youtube.com/@bangalorenorthrealestate?si=RfoxprZD5p7KGWN1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-800/80 hover:text-gold transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                      <span>YouTube</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a
                      href="https://instagram.com/bangalorenorthrealestate?igshid=NGVhN2U2NjQ0Yg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-800/80 hover:text-gold transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span>Instagram</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Map embed / placeholder */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden h-full min-h-[300px]">
                <a
                  href="https://maps.app.goo.gl/1tTJhp23tUdCVhuQ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full min-h-[300px] relative group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop"
                    alt="Office location"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/50 group-hover:bg-charcoal/30 transition-colors">
                    <span className="btn-gold px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Open in Google Maps
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-charcoal rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left text-slate-800 font-medium hover:bg-white/5 transition-colors"
                >
                  {faq.q}
                  {openFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gold shrink-0" />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-4 text-slate-800/70 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find a Local Professional / CTA */}
      <section className="py-16 md:py-20 bg-charcoal border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="h-12 w-12 text-gold mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-2">
            Find a Local Professional
          </h2>
          <p className="text-slate-800/70 max-w-2xl mx-auto mb-8">
            At Bangalore North Real Estate, our experts are dedicated to putting the client at the center of what&apos;s next.
          </p>
          <Link
            to="/contact"
            className="btn-gold px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Insights / Resources placeholder */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-slate-800 mb-8">
            Insights &amp; Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                to="/properties"
                className="bg-charcoal rounded-xl border border-slate-200 p-6 hover:border-gold/30 transition-colors group block"
              >
                <FileText className="h-8 w-8 text-gold mb-3" />
                <h3 className="text-lg font-heading font-semibold text-slate-800 mb-2 group-hover:text-gold transition-colors">
                  Market insights &amp; property guides
                </h3>
                <p className="text-slate-800/60 text-sm">
                  Stay updated with Bangalore North market trends and investment opportunities.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Can't find what you're looking for */}
      <section className="py-16 bg-charcoal border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-slate-800 mb-2">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-slate-800/70 mb-6">
            We&apos;re on hand to help. Get in touch and we can help with any additional information you need.
          </p>
          <Link
            to="/contact"
            className="btn-gold px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Office
