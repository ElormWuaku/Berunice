
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Phone, ChevronDown } from 'lucide-react';
import { hero } from '../assets';

const Hero = () => {
  const contactNumber = "+233500353555";

  const scrollIndicatorVariants = {
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative h-screen">
      <img
        src={hero}
        alt="Innovative Farming"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-green-800 bg-opacity-10" />
      
      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Empowering Farmers,<br /> Transforming Agriculture
          </h1>
          <div className="mt-8 flex justify-center space-x-4">
            {/* Call Button */}
            <motion.a
              href={`tel:${contactNumber}`}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2" />
              Call Us Now
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at Bottom Center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          variants={scrollIndicatorVariants}
          animate="bounce"
          className="cursor-pointer"
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="bg-white/30 backdrop-blur-sm text-white px-4 py-3 rounded-full flex items-center hover:bg-white/40 transition-all"
          >
            <ChevronDown size={32} className="animate-bounce" />
          </ScrollLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;