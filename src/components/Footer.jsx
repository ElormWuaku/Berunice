import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { beru } from '../assets';

export default function Footer() {
  const socialLinks = [
    { 
      icon: <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700" />, 
      href: "https://facebook.com/berunicefarms" 
    },
    { 
      icon: <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />, 
      href: "https://twitter.com/berunicefarms" 
    },
    { 
      icon: <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-700" />, 
      href: "https://instagram.com/berunicefarms" 
    },
    { 
      icon: <Linkedin className="w-6 h-6 text-blue-800 hover:text-blue-900" />, 
      href: "https://linkedin.com/company/berunicefarms" 
    }
  ];

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' }
  ];

  const contactInfo = [
    { 
      icon: <Mail className="w-5 h-5 text-green-600" />, 
      text: "info@berunicefarms.com" 
    },
    { 
      icon: <Phone className="w-5 h-5 text-green-600" />, 
      text: "+254 123 456 789" 
    },
    { 
      icon: <MapPin className="w-5 h-5 text-green-600" />, 
      text: "Nairobi, Kenya" 
    }
  ];

  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={beru} 
                alt="Berunice Farms" 
                className="h-16 mb-4" 
              />
            </motion.div>
            <p className="text-gray-600 text-sm">
              Empowering farmers through innovative, sustainable agricultural solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-600 hover:text-green-600 cursor-pointer text-sm"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-3"
                >
                  {contact.icon}
                  <span className="text-gray-600 text-sm">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold text-green-600 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Berunice Farms. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}