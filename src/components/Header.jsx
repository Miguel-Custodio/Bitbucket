import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            {/* Canadian Maple Leaf SVG */}
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L10.5 8.5L7 6L8.5 10L4 9.5L7.5 12L4 14.5L8.5 14L7 18L10.5 15.5L12 22L13.5 15.5L17 18L15.5 14L20 14.5L16.5 12L20 9.5L15.5 10L17 6L13.5 8.5L12 2Z"/>
            </svg>
            <span className="text-2xl font-bold">ComfyGroup</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-gray-300 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors">About</button>
            <button onClick={() => scrollToSection('play')} className="hover:text-gray-300 transition-colors">ComfyPlay</button>
            <button onClick={() => scrollToSection('clean')} className="hover:text-gray-300 transition-colors">ComfyClean</button>
            <button onClick={() => scrollToSection('fragrances')} className="hover:text-gray-300 transition-colors">CS Fragrances</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors">Contact</button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-gray-800"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-gray-300 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-gray-300 transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('play')} className="hover:text-gray-300 transition-colors text-left">ComfyPlay</button>
              <button onClick={() => scrollToSection('clean')} className="hover:text-gray-300 transition-colors text-left">ComfyClean</button>
              <button onClick={() => scrollToSection('fragrances')} className="hover:text-gray-300 transition-colors text-left">CS Fragrances</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300 transition-colors text-left">Contact</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

