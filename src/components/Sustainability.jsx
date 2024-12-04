// 
import { useState } from 'react';
import { motion } from 'framer-motion';
import { drop } from '../assets';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const Sustainability = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sustainabilityDetails = [
    {
      title: "Innovative Irrigation",
      content: "Our revolutionary bamboo-based irrigation system transforms agricultural practices. Using larger bamboo as vertical reservoirs and smaller bamboos for water conveyance, we've created an automated, low-maintenance solution that's efficient and affordable. This unique system optimizes water use, reduces waste, and improves crop health with zero operational costs.",
      icon: "💧"
    },
    {
      title: "Eco-Friendly Approach",
      content: "Sustainability is the cornerstone of our mission. We focus on water conservation, responsible resource management, and eco-friendly farming techniques. By integrating advanced technologies with natural resources, we minimize environmental impact while maximizing productivity, creating a harmonious balance between agricultural needs and ecological preservation.",
      icon: "🌱"
    },
    {
      title: "Community Empowerment",
      content: "Berunice Farms is more than an agricultural enterprise – we're a catalyst for change. We empower local farmers through comprehensive training, innovative tools, and sustainable solutions. Our goal is to improve farmers' livelihoods by providing hands-on consultancy, modern farming techniques, and customizable irrigation systems tailored to different crop sizes and farm needs.",
      icon: "🤝"
    }
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <section 
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${drop})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Branding and Introduction */}
          <div className="bg-white/90 p-8 rounded-lg self-center">
            <h2 className="text-4xl font-bold text-green-900 mb-6">Sustainable Innovation</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              At <span className="font-semibold text-green-700">Berunice Farms</span>, we&apos;re pioneering a future where technology and nature work in harmony to transform agriculture.
            </p>
            
            <div className="text-center mt-8">
              <p className="text-gray-700 italic text-xl">
              &quot;Empowering farmers, preserving nature, advancing agriculture.&quot;
              </p>
            </div>
          </div>
          
          {/* Right Column - Expandable Sections */}
          <div className="space-y-6">
            {sustainabilityDetails.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white/90 shadow-md rounded-lg p-6 cursor-pointer"
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{section.icon}</span>
                    <h3 className="text-2xl font-semibold text-green-800">{section.title}</h3>
                  </div>
                  {expandedSection === index ? (
                    <ChevronUpIcon className="w-6 h-6 text-green-600" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6 text-green-600" />
                  )}
                </div>
                {expandedSection === index && (
                  <p className="text-gray-700 mt-4 text-base leading-relaxed">
                    {section.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;