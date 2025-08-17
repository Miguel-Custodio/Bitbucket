import { useState } from 'react'
import { PartyPopper, Calendar, Users, MapPin, ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const ComfyPlay = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'kids', name: 'Kids Parties' },
    { id: 'corporate', name: 'Corporate Events' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'themed', name: 'Themed Events' }
  ]

  const inflatables = [
    {
      id: 1,
      name: 'Castle Bouncer',
      category: 'kids',
      image: '/api/placeholder/300/200',
      description: 'Perfect for birthday parties and kids events',
      capacity: '8-10 kids',
      size: '15x15 ft',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Obstacle Course',
      category: 'corporate',
      image: '/api/placeholder/300/200',
      description: 'Great for team building and corporate events',
      capacity: '15-20 people',
      size: '40x12 ft',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Wedding Arch',
      category: 'weddings',
      image: '/api/placeholder/300/200',
      description: 'Elegant inflatable arch for ceremonies',
      capacity: 'Decoration',
      size: '20x15 ft',
      rating: 5.0
    },
    {
      id: 4,
      name: 'Superhero Slide',
      category: 'themed',
      image: '/api/placeholder/300/200',
      description: 'Themed slide for superhero parties',
      capacity: '12-15 kids',
      size: '18x25 ft',
      rating: 4.7
    }
  ]

  const filteredInflatables = selectedCategory === 'all' 
    ? inflatables 
    : inflatables.filter(item => item.category === selectedCategory)

  return (
    <section id="play" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <PartyPopper className="h-12 w-12 text-purple-600" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              ComfyPlay
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Inflatable Party Rentals
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Make your events unforgettable with our premium inflatable rentals. 
            From birthday parties to corporate events, we have everything you need.
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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredInflatables.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <PartyPopper className="h-16 w-16 text-purple-600" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{item.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{item.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">Simple online booking system with instant availability</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">All Ages</h3>
            <p className="text-gray-600">Inflatables suitable for kids and adults alike</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Delivery & Setup</h3>
            <p className="text-gray-600">Full delivery, setup, and pickup service included</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
            Get Your Quote Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ComfyPlay

