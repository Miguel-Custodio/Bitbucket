import { useState } from 'react'
import { Calendar, Users, MapPin, ArrowRight, Star, Ruler, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ComfyPlay = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Inflatables' },
    { id: 'small', name: 'Small (3-6 years)' },
    { id: 'medium', name: 'Medium (3-10 years)' },
    { id: 'large', name: 'Large (6+ kids)' }
  ]

  const inflatables = [
    {
      id: 1,
      name: 'Royal Castle',
      category: 'small',
      dimensions: '12.5 ft (L) x 10.5 ft (W) x 8.2 ft (H)',
      features: ['Slide', 'Climbing wall', 'Basketball hoop', 'Ball pit', 'Obstacle area'],
      age: '3–6 years',
      capacity: '4 children (up to 175 lbs total)',
      pricing: {
        wholeDay: 100,
        threeHours: 50,
        additionalHour: 10
      },
      setup: {
        indoor: 20,
        outdoor: 30,
        selfSetup: 25
      },
      rating: 4.9,
      waterPlay: true
    },
    {
      id: 2,
      name: 'Adventure Fortress',
      category: 'medium',
      dimensions: '13.5 ft (L) x 11.2 ft (W) x 7.2 ft (H)',
      features: ['Slide', 'Climbing wall', 'Obstacles', 'Trampoline', 'Ball pit pool'],
      age: '3–10 years',
      capacity: '4 children (up to 220 lbs total)',
      pricing: {
        wholeDay: 120,
        threeHours: 65,
        additionalHour: 10
      },
      setup: {
        indoor: 20,
        outdoor: 30,
        selfSetup: 25
      },
      rating: 4.8,
      waterPlay: true
    },
    {
      id: 3,
      name: 'Magic Kingdom',
      category: 'medium',
      dimensions: '13.1 ft (L) x 10.5 ft (W) x 7.2 ft (H)',
      features: ['9-in-1 design', 'Slide', 'Climbing wall', 'Basketball hoop', 'Ball pit', 'Obstacle area'],
      age: '3–10 years',
      capacity: '5 children (up to 265 lbs total)',
      pricing: {
        wholeDay: 120,
        threeHours: 65,
        additionalHour: 10
      },
      setup: {
        indoor: 20,
        outdoor: 30,
        selfSetup: 25
      },
      rating: 4.7,
      waterPlay: true
    },
    {
      id: 4,
      name: 'Tropical Oasis',
      category: 'medium',
      dimensions: '13.1 ft (L) x 10.5 ft (W) x 7.2 ft (H)',
      features: ['Slide', 'Climbing wall', 'Basketball hoop', 'Splash pool', 'Water gun'],
      age: '3–10 years',
      capacity: '5 children (up to 265 lbs total)',
      pricing: {
        wholeDay: 120,
        threeHours: 65,
        additionalHour: 10
      },
      setup: {
        indoor: 20,
        outdoor: 30,
        water: 50,
        selfSetup: 25
      },
      rating: 4.8,
      waterPlay: true
    },
    {
      id: 5,
      name: 'Island of Adventure',
      category: 'large',
      dimensions: '14.1 ft (L) x 11.8 ft (W) x 7.2 ft (H)',
      features: ['10-in-1 design', 'Slide', 'Splash pool', 'Climbing wall', 'Water gun', 'Toy market stand', 'Ball dart game'],
      age: '3–10 years',
      capacity: '6 children (up to 320 lbs total)',
      pricing: {
        wholeDay: 130,
        threeHours: 75,
        additionalHour: 10
      },
      setup: {
        indoor: 25,
        outdoor: 35,
        water: 60,
        selfSetup: 25
      },
      rating: 5.0,
      waterPlay: true
    }
  ]

  const filteredInflatables = selectedCategory === 'all' 
    ? inflatables 
    : inflatables.filter(item => item.category === selectedCategory)

  const handleRequestQuote = (inflatable) => {
    const subject = `Quote Request for ${inflatable.name}`
    const body = `Hi! I would like to request a quote for the ${inflatable.name} inflatable rental.

Details:
- Product: ${inflatable.name}
- Dimensions: ${inflatable.dimensions}
- Capacity: ${inflatable.capacity}
- Age Range: ${inflatable.age}

Please provide pricing and availability information.

Thank you!`
    
    window.location.href = `mailto:play@comfygroup.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="play" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/comfyplay_logo.webp" alt="ComfyPlay Logo" className="h-12 w-auto" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              ComfyPlay
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Inflatable Party Rentals
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Make your events unforgettable with our premium inflatable rentals. 
            From birthday parties to family gatherings, we have everything you need.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredInflatables.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🎉</span>
                </div>
                {item.waterPlay && (
                  <Badge className="absolute top-2 right-2 bg-blue-500">
                    Water Play
                  </Badge>
                )}
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {item.age} • {item.capacity}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Dimensions */}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Ruler className="h-4 w-4" />
                  <span>{item.dimensions}</span>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {item.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{item.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Whole Day</span>
                    <span className="text-lg font-bold text-purple-600">${item.pricing.wholeDay}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">3 Hours</span>
                    <span className="text-sm font-semibold">${item.pricing.threeHours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Each additional hour</span>
                    <span className="text-xs">${item.pricing.additionalHour}</span>
                  </div>
                </div>

                {/* Setup Options */}
                <div className="text-xs text-gray-500">
                  <p>Setup: Indoor ${item.setup.indoor} • Outdoor ${item.setup.outdoor}</p>
                  {item.setup.water && <p>Water setup: ${item.setup.water}</p>}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>

                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleRequestQuote(item)}
                >
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Important Information</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Delivery Area</h4>
              <p className="text-gray-600">Calculated from 15738 85th Ave, Surrey</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Setup Time</h4>
              <p className="text-gray-600">Professional setup included</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Safety First</h4>
              <p className="text-gray-600">Weight limits strictly enforced</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Transparent Pricing</h4>
              <p className="text-gray-600">No hidden fees</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-purple-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to make your party unforgettable?</h3>
          <p className="text-lg mb-6">Contact us today to book your inflatable!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => window.location.href = 'tel:+16045186863'}
            >
              📞 604-518-6863
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => window.location.href = 'mailto:play@comfygroup.ca'}
            >
              ✉️ play@comfygroup.ca
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComfyPlay

