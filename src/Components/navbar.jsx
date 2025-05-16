import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Lucide icons for hamburger and close

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full bg-transparent font-outfit text-white px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-italic font-outfit font-semibold">Digital Artist</div>

      {/* Desktop Menu */}
     <ul className="hidden md:flex gap-6 text-lg font-semibold">
  <li className="hover:text-white/70 cursor-pointer">
    <a href="#home">About Me</a>
  </li>
  <li className="hover:text-white/80 cursor-pointer">
    <a href="#about">Portfolio</a>
  </li>
  <li className="hover:text-white/80 cursor-pointer">
    <a href="#contact">Contact</a>
  </li>
</ul>


      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#home" className="hover:text-blue-800">AboutMe</a>
          <a href="#about" className="hover:text-blue-800">Portfolio</a>
          <a href="#contact" className="hover:text-blue-800">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
