import { useState } from 'react'
import { Menu, X, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold">ComfyGroup</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#play" className="hover:text-gray-300 transition-colors">ComfyPlay</a>
            <a href="#clean" className="hover:text-gray-300 transition-colors">ComfyClean</a>
            <a href="#fragrances" className="hover:text-gray-300 transition-colors">CS Fragrances</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
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
              <a href="#home" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#play" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>ComfyPlay</a>
              <a href="#clean" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>ComfyClean</a>
              <a href="#fragrances" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>CS Fragrances</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

