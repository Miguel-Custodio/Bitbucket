import { MapPin, Phone, Mail, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Clock, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Services Offered", value: "3" }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About ComfyGroup
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A vibrant enterprise that embodies enthusiasm for innovative lifestyle brands
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              ComfyGroup, founded by Miguel Custodio, has transformed into a vibrant enterprise that 
              embodies their enthusiasm for innovative lifestyle brands, leveraging over 15 years of 
              experience to launch successful ventures like ComfyPlay and ComfyClean, which serve 
              party rentals and business cleaning services, respectively.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The introduction of CS Fragrances further diversifies their brand portfolio, enhancing 
              olfactory marketing. Originating from Vancouver and São Paulo, ComfyGroup has firmly 
              established itself as a prominent player in the lifestyle market.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">hello@comfygroup.ca</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">+1 604-518-7289</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">Surrey, BC - Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-8 shadow-lg">
              <stat.icon className="h-12 w-12 text-black mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

