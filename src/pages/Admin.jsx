import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Lock, Eye, EyeOff, Plus, Edit, Trash2, Building2, Users, MessageSquare, LogOut } from 'lucide-react'
import { useProperties } from '../context/PropertyContext'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    type: 'Apartment',
    bedrooms: '',
    bathrooms: '',
    area: '',
    description: '',
    images: '',
    amenities: '',
    whatsappNumber: ''
  })

  const { properties, inquiries, addProperty, updateProperty, deleteProperty } = useProperties()

  useEffect(() => {
    // Check if already authenticated
    const adminAuth = localStorage.getItem('admin_authenticated')
    if (adminAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'admin123') {
      setIsAuthenticated(true)
      localStorage.setItem('admin_authenticated', 'true')
      setError('')
    } else {
      setError('Invalid password')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_authenticated')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    if (editingProperty) {
      updateProperty(editingProperty.id, formData)
    } else {
      addProperty(formData)
    }

    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: '',
      location: '',
      price: '',
      type: 'Apartment',
      bedrooms: '',
      bathrooms: '',
      area: '',
      description: '',
      images: '',
      amenities: '',
      whatsappNumber: ''
    })
    setEditingProperty(null)
    setShowForm(false)
  }

  const handleEdit = (property) => {
    setFormData({
      ...property,
      images: property.images.join(', '),
      amenities: property.amenities.join(', ')
    })
    setEditingProperty(property)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      deleteProperty(id)
    }
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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl p-8 shadow-luxury border border-slate-200">
            <div className="text-center mb-8">
              <Building2 className="h-16 w-16 text-gold mx-auto mb-4" />
              <h1 className="text-3xl font-heading font-bold text-slate-800 mb-2">
                Admin Panel
              </h1>
              <p className="text-slate-800/70">
                Enter password to access the admin dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gold" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="Enter admin password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gold hover:text-gold-light"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-gold py-3 px-6 rounded-lg font-medium"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/" className="text-gold hover:text-gold-light transition-colors text-sm">
                ← Back to Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-slate-800 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-slate-800/70">
              Manage properties and view inquiries
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="btn-outline-gold px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <Building2 className="h-8 w-8 text-gold" />
              </div>
              <div>
                <p className="text-slate-800/60 text-sm">Total Properties</p>
                <p className="text-2xl font-bold text-slate-800">{properties.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <div>
                <p className="text-slate-800/60 text-sm">Total Inquiries</p>
                <p className="text-2xl font-bold text-slate-800">{inquiries.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="bg-gold/10 p-3 rounded-lg">
                <MessageSquare className="h-8 w-8 text-gold" />
              </div>
              <div>
                <p className="text-slate-800/60 text-sm">Active Properties</p>
                <p className="text-2xl font-bold text-slate-800">{properties.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Property Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading font-semibold text-slate-800">
            Properties Management
          </h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-gold px-6 py-2 rounded-lg flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Property</span>
          </button>
        </div>

        {/* Property Form */}
        {showForm && (
          <div className="bg-white rounded-2xl p-6 mb-8 border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-heading font-semibold text-slate-800">
                {editingProperty ? 'Edit Property' : 'Add New Property'}
              </h3>
              <button
                onClick={resetForm}
                className="text-slate-800/60 hover:text-slate-800"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                >
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Office">Office</option>
                  <option value="Plot">Plot</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Bedrooms
                </label>
                <input
                  type="number"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData(prev => ({ ...prev, bedrooms: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Bathrooms *
                </label>
                <input
                  type="number"
                  required
                  value={formData.bathrooms}
                  onChange={(e) => setFormData(prev => ({ ...prev, bathrooms: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Area (sq ft) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.area}
                  onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="text"
                  required
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="+919113203639"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Image URLs (comma-separated) *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.images}
                  onChange={(e) => setFormData(prev => ({ ...prev, images: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-slate-800/80 text-sm font-medium mb-2">
                  Amenities (comma-separated) *
                </label>
                <textarea
                  required
                  rows={2}
                  value={formData.amenities}
                  onChange={(e) => setFormData(prev => ({ ...prev, amenities: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg text-slate-800 placeholder-off-white/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  placeholder="Swimming Pool, Gym, Parking, Security"
                />
              </div>

              <div className="md:col-span-2 flex space-x-4">
                <button
                  type="submit"
                  className="btn-gold px-6 py-3 rounded-lg font-medium flex-1"
                >
                  {editingProperty ? 'Update Property' : 'Add Property'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-outline-gold px-6 py-3 rounded-lg font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Properties Table */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-charcoal">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-800/60 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-800/60 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-800/60 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-800/60 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-slate-800/60 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                {properties.map((property) => (
                  <tr key={property.id} className="hover:bg-charcoal/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="h-12 w-12 rounded-lg object-cover mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-slate-800 line-clamp-1">
                            {property.title}
                          </div>
                          <div className="text-sm text-slate-800/60">
                            {property.bedrooms} bed • {property.area} sq ft
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-800/80">
                      {property.location}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gold">
                      {formatPrice(property.price)}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-gold/10 text-gold rounded-full">
                        {property.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(property)}
                          className="text-gold hover:text-gold-light transition-colors"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(property.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {properties.length === 0 && (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-slate-800/20 mx-auto mb-4" />
              <p className="text-slate-800/60">No properties added yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin