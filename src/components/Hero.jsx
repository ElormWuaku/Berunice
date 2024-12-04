// 

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { hero } from '../assets';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src={hero}
        alt="Innovative Farming"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-green-800 bg-opacity-10" />
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Empowering Farmers,<br /> Transforming Agriculture
          </h1>
          {/* <p className="mt-6 text-lg text-white lg:text-xl">
            BERUNICE Farms combines innovation and sustainability to improve crop
            productivity and reduce environmental impact.
          </p> */}
          <div className="mt-8 flex justify-center space-x-4">
            <motion.button
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-500 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Services
              </ScrollLink>
            </motion.button>
            <motion.button
              className="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-200 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink
                to="sustainability"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Explore More
              </ScrollLink>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;