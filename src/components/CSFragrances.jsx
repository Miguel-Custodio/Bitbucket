import { Store, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const CSFragrances = () => {
  const benefits = [
    {
      icon: Store,
      title: 'Retail Enhancement',
      description: 'Create memorable shopping experiences that increase customer dwell time and sales'
    },
    {
      icon: Users,
      title: 'Brand Recognition',
      description: 'Develop a unique scent signature that customers will associate with your brand'
    },
    {
      icon: TrendingUp,
      title: 'Increased Sales',
      description: 'Studies show scent marketing can increase sales by up to 40%'
    }
  ]

  const applications = [
    'Retail Stores',
    'Hotels & Hospitality',
    'Restaurants & Cafes',
    'Offices & Workspaces',
    'Spas & Wellness Centers',
    'Real Estate Showings'
  ]

  return (
    <section id="fragrances" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="/csfragrances_logo.webp" alt="CS Fragrances Logo" className="h-12 w-auto" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              CS Fragrances
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Olfactory Marketing Solutions
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Transform your business environment with the power of scent. Our olfactory marketing 
            solutions create memorable experiences that enhance your brand and drive customer engagement.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <benefit.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              How Scent Marketing Works
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consultation & Analysis</h4>
                  <p className="text-gray-700">We analyze your space, brand, and target audience to create the perfect scent strategy.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Custom Scent Development</h4>
                  <p className="text-gray-700">Our experts develop a unique fragrance that aligns with your brand identity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Installation & Maintenance</h4>
                  <p className="text-gray-700">We install professional diffusion systems and provide ongoing maintenance and refills.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h4>
            <div className="grid grid-cols-2 gap-4">
              {applications.map((application, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-pink-600 text-sm">🌸</span>
                  <span className="text-gray-700">{application}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg">
              <h5 className="font-semibold text-gray-900 mb-2">Did You Know?</h5>
              <p className="text-gray-700 text-sm">
                Scent marketing can increase customer satisfaction by 20% and improve 
                brand recall by up to 65%. The sense of smell is directly connected 
                to the emotional center of the brain.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us help you create a signature scent that enhances your brand and 
            creates lasting impressions on your customers.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 group">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CSFragrances

