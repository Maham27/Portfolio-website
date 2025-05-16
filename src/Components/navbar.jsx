import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-transparent font-outfit text-white px-6 py-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl italic font-semibold">Digital Artist</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          <li className="hover:text-white/70 cursor-pointer">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-white/80 cursor-pointer">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="hover:text-white/80 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-4 items-center md:hidden bg-[#0a0f2c] bg-opacity-90 py-4 rounded-lg">
          <a href="#about" className="hover:text-blue-400" onClick={toggleMenu}>About Me</a>
          <a href="#portfolio" className="hover:text-blue-400" onClick={toggleMenu}>Portfolio</a>
          <a href="#contact" className="hover:text-blue-400" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
