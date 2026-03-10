import { createContext, useContext, useState, useEffect } from 'react'

// Sample properties data
const initialProperties = [
  {
    id: 1,
    title: "Luxury Penthouse Downtown",
    location: "Mumbai, Maharashtra",
    price: 25000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: 2500,
    description: "Stunning penthouse with panoramic city views, featuring premium finishes, smart home technology, and world-class amenities.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
    ],
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Smart Home", "Concierge"],
    whatsappNumber: "+919113203639"
  },
  {
    id: 2,
    title: "Modern Villa with Garden",
    location: "Bangalore, Karnataka",
    price: 45000000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    description: "Beautiful contemporary villa with lush gardens, perfect for families seeking luxury and tranquility in the heart of the city.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
    ],
    amenities: ["Garden", "Swimming Pool", "Home Theater", "Modern Kitchen", "Parking"],
    whatsappNumber: "+919113203639"
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "Delhi, NCR",
    price: 15000000,
    type: "Office",
    bedrooms: 0,
    bathrooms: 2,
    area: 2000,
    description: "Prime commercial space in the business district, fully furnished with high-speed internet and modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop"
    ],
    amenities: ["High-Speed Internet", "Meeting Rooms", "Parking", "Reception", "Security"],
    whatsappNumber: "+919113203639"
  }
]

const PropertyContext = createContext()

export const useProperties = () => {
  const context = useContext(PropertyContext)
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider')
  }
  return context
}

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([])
  const [inquiries, setInquiries] = useState([])

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProperties = localStorage.getItem('re_properties')
    const savedInquiries = localStorage.getItem('re_inquiries')

    if (savedProperties) {
      setProperties(JSON.parse(savedProperties))
    } else {
      // Load initial data if no saved data exists
      setProperties(initialProperties)
      localStorage.setItem('re_properties', JSON.stringify(initialProperties))
    }

    if (savedInquiries) {
      setInquiries(JSON.parse(savedInquiries))
    }
  }, [])

  // Save properties to localStorage whenever they change
  useEffect(() => {
    if (properties.length > 0) {
      localStorage.setItem('re_properties', JSON.stringify(properties))
    }
  }, [properties])

  // Save inquiries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('re_inquiries', JSON.stringify(inquiries))
  }, [inquiries])

  const addProperty = (property) => {
    const newProperty = {
      ...property,
      id: Date.now(), // Simple ID generation
      images: property.images.split(',').map(url => url.trim())
    }
    setProperties(prev => [...prev, newProperty])
  }

  const updateProperty = (id, updatedProperty) => {
    setProperties(prev =>
      prev.map(property =>
        property.id === id
          ? { ...updatedProperty, id, images: updatedProperty.images.split(',').map(url => url.trim()) }
          : property
      )
    )
  }

  const deleteProperty = (id) => {
    setProperties(prev => prev.filter(property => property.id !== id))
  }

  const addInquiry = (inquiry) => {
    const newInquiry = {
      ...inquiry,
      id: Date.now(),
      timestamp: new Date().toISOString()
    }
    setInquiries(prev => [...prev, newInquiry])
  }

  const value = {
    properties,
    inquiries,
    addProperty,
    updateProperty,
    deleteProperty,
    addInquiry
  }

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  )
}