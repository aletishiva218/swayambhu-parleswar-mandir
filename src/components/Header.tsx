
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
     'navbar-glass shadow-md py-2'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-temple-maroon flex items-center justify-center">
              {/* <span className="om-symbol text-white font-bold text-2xl">ॐ</span> */}
              <img src={logo} alt="" className='rounded-full' />
            </div>
            <div className="ml-2">
              <h1 className={`font-devnagari font-bold text-2xl text-temple-maroon`}>
                स्वयंभू पालेश्वर महादेव मंदिर देवस्थान
              </h1>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Events', path: '/events' },
                { name: 'Online Puja', path: '/puja' },
                { name: 'Videos', path: '/videos' },
                { name: 'Donations', path: '/donations' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`font-medium transition-all hover:text-temple-saffron ${
                       'text-temple-dark' 
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded ${isScrolled ? 'text-temple-dark' : 'text-white'}`} 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="py-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Events', path: '/events' },
              { name: 'Online Puja', path: '/puja' },
              { name: 'Videos', path: '/videos' },
              { name: 'Donations', path: '/donations' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <li key={link.path} className="border-b border-gray-100 last:border-0">
                <Link 
                  to={link.path} 
                  className="block px-6 py-2 text-temple-dark hover:bg-temple-gold transition-all"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
