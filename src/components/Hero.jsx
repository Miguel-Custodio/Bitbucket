import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating maple leaf */}
        <div className="absolute top-20 left-10 animate-bounce">
          <svg className="w-8 h-8 text-white opacity-30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L9 9H2l5.5 4L5 22l7-5 7 5-2.5-9L22 9h-7l-3-7z"/>
          </svg>
        </div>
        
        {/* Floating devices */}
        <div className="absolute top-32 right-20 animate-pulse">
          <div className="w-16 h-10 bg-gray-700 rounded opacity-20 transform rotate-12"></div>
        </div>
        
        <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
          <div className="w-6 h-10 bg-gray-600 rounded opacity-20 transform -rotate-12"></div>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-600 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>  {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
            <img src="/comfygroup_logo_black.webp" alt="ComfyGroup" className="h-16 w-auto" />
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
                className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Professional Services mockup */}
                <div className="bg-gray-700 rounded-lg p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-black rounded h-32 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/professional_services.png" 
                      alt="Professional Services" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-white text-sm font-medium">Professional Services</span>
                  </div>
                </div>
                
                {/* Mobile Ready mockup */}
                <div className="bg-gray-600 rounded-lg p-3 w-32 h-48 ml-auto transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-black rounded h-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/mobile_ready.png" 
                      alt="Mobile Ready" 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="text-center mt-1">
                    <span className="text-white text-xs font-medium">Mobile Ready</span>
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

