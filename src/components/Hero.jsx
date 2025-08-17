import { Leaf, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <Leaf className="h-12 w-12 text-white" />
              <h1 className="text-5xl lg:text-7xl font-bold">
                ComfyGroup
                <sup className="text-2xl">®</sup>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              Expertise. Commitment. Value.
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              ComfyGroup, founded by Miguel Custodio, has transformed into a vibrant enterprise that embodies 
              enthusiasm for innovative lifestyle brands, leveraging over 15 years of experience to launch 
              successful ventures like ComfyPlay and ComfyClean.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 transition-colors group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-black transition-colors"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Laptop mockup */}
                <div className="bg-gray-700 rounded-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-black rounded h-32 flex items-center justify-center">
                    <span className="text-white text-sm">Professional Services</span>
                  </div>
                </div>
                
                {/* Phone mockup */}
                <div className="bg-gray-600 rounded-lg p-3 w-24 h-40 ml-auto transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-black rounded h-full flex items-center justify-center">
                    <span className="text-white text-xs">Mobile Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

