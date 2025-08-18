import { useState } from 'react'
import { Home, Building, Calendar, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const ComfyClean = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    area: '',
    frequency: '',
    address: '',
    notes: ''
  })

  const services = [
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Complete home cleaning services for houses and apartments',
      features: ['Deep cleaning', 'Regular maintenance', 'Move-in/out cleaning', 'Post-construction cleanup']
    },
    {
      icon: Building,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning services for offices and businesses',
      features: ['Office cleaning', 'Retail spaces', 'Medical facilities', 'Industrial cleaning']
    },
    {
      icon: CheckCircle,
      title: 'Specialized Services',
      description: 'Specialized cleaning for unique requirements',
      features: ['Carpet cleaning', 'Window cleaning', 'Pressure washing', 'Event cleanup']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Exceptional service! My office has never looked better.'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      comment: 'Reliable and thorough. Highly recommend ComfyClean!'
    },
    {
      name: 'Lisa Rodriguez',
      rating: 5,
      comment: 'Professional team and great attention to detail.'
    }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = 'Cleaning Service Quote Request'
    const body = `Hi! I would like to request a quote for cleaning services.

Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Property Type: ${formData.propertyType}
- Area: ${formData.area} sq ft
- Frequency: ${formData.frequency}
- Address: ${formData.address}
- Special Requirements: ${formData.notes}

Please provide pricing and availability information.

Thank you!`
    
    window.location.href = `mailto:clean@comfygroup.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="clean" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/comfyclean_logo.webp" alt="ComfyClean Logo" className="h-12 w-auto" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              ComfyClean
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Professional Cleaning Services
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Transform your space with our professional cleaning services. 
            We provide reliable, thorough, and eco-friendly cleaning solutions.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Form */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Get Your Free Quote
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Fill out the form below and we'll provide you with a customized quote 
              within 24 hours. No obligation, completely free.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Free consultation and estimate</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Eco-friendly cleaning products</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Insured and bonded team</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Satisfaction guarantee</span>
              </div>
            </div>
          </div>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Request Your Quote</CardTitle>
              <CardDescription>
                Tell us about your cleaning needs and we'll get back to you quickly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="propertyType">Property Type *</Label>
                    <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="area">Approximate Area (sq ft)</Label>
                    <Input
                      id="area"
                      value={formData.area}
                      onChange={(e) => handleInputChange('area', e.target.value)}
                      placeholder="e.g., 1500"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="frequency">Cleaning Frequency</Label>
                  <Select onValueChange={(value) => handleInputChange('frequency', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="City, Province"
                  />
                </div>

                <div>
                  <Label htmlFor="notes">Special Requirements</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Any specific cleaning needs or requirements..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 group">
                  Get My Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComfyClean

