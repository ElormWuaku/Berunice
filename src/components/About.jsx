import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { about } from '../assets';

const About = () => {
  const [expandVision, setExpandVision] = useState(false);
  const [expandMission, setExpandMission] = useState(false);
  const [expandValues, setExpandValues] = useState(false);

  return (
    <section className="py-16 bg-white text-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold">About Berunice Farms</h2>
          <p className="mt-4">
            Located in New Edubiase, Ghana, Berunice Farms is dedicated to
            sustainable farming, using advanced technologies to improve
            productivity while conserving resources.
          </p>
          <div className="mt-8">
            <motion.div
              className="cursor-pointer flex items-center justify-between border-b pb-4"
              onClick={() => setExpandVision(!expandVision)}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">Our Vision</h3>
              {expandVision ? (
                <ChevronUpIcon className="w-6 h-6 text-green-600" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-green-600" />
              )}
            </motion.div>
            {expandVision && (
              <p className="mt-4">
                To lead sustainable and innovative farming in Ghana, setting
                new standards for environmental responsibility and community
                impact.
              </p>
            )}
            <motion.div
              className="cursor-pointer flex items-center justify-between border-b pb-4 mt-4"
              onClick={() => setExpandMission(!expandMission)}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">Our Mission</h3>
              {expandMission ? (
                <ChevronUpIcon className="w-6 h-6 text-green-600" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-green-600" />
              )}
            </motion.div>
            {expandMission && (
              <p className="mt-4">
                Enhance farming practices through water-efficient systems and
                sustainable techniques that benefit communities and the
                environment, while improving crop productivity and quality.
              </p>
            )}
            <motion.div
              className="cursor-pointer flex items-center justify-between border-b pb-4 mt-4"
              onClick={() => setExpandValues(!expandValues)}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold">Our Core Values</h3>
              {expandValues ? (
                <ChevronUpIcon className="w-6 h-6 text-green-600" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-green-600" />
              )}
            </motion.div>
            {expandValues && (
              <ul className="list-disc pl-5 mt-4">
                <li>Sustainability</li>
                <li>Innovation</li>
                <li>Efficiency</li>
                <li>Community</li>
                <li>Quality</li>
              </ul>
            )}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={about}
            alt="Berunice Farms"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;