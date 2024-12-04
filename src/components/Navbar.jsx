import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { beru } from '../assets';

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Sustainability', to: 'sustainability' },
    { name: 'Services', to: 'services' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact', isButton: true }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Modern Typography */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              className="flex items-center cursor-pointer"
            >
              <img 
                src={beru} 
                alt="Berunice Farms" 
                className="h-12 w-12 mr-3 rounded-full object-cover" 
              />
              <span className="text-2xl font-bold text-green-800 tracking-tight">
                Berunice
                <span className="text-green-600 ml-1">Farms</span>
              </span>
            </ScrollLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.isButton ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer px-4 py-2 bg-green-600 text-white 
                      rounded-full font-medium hover:bg-green-700 
                      transition-colors duration-300 ease-in-out 
                      shadow-md hover:shadow-lg"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-700 font-medium transition-colors 
                      relative after:absolute after:bottom-[-4px] after:left-0 
                      after:w-0 after:h-[2px] after:bg-green-600 
                      after:transition-all after:duration-300 
                      group-hover:after:w-full cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-green-600 cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.isButton ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-white 
                      bg-green-600 hover:bg-green-700 
                      rounded-md transition-colors 
                      duration-200 text-center cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2 text-gray-700 
                      hover:bg-green-50 rounded-md 
                      transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}