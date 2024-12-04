import  { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Bamboo Irrigation System",
      description: "Our revolutionary irrigation solution transforms agricultural water management. Using locally sourced bamboo, we've created an innovative, automated system that optimizes water efficiency and reduces costs.",
      features: [
        "Vertical bamboo reservoirs for water storage",
        "Horizontal bamboo pipes for precise water distribution",
        "Zero operational costs",
        "Minimal maintenance required",
        "Adaptable to various crop sizes and types"
      ],
      benefits: [
        "Up to 50% water conservation",
        "Improved crop yield and health",
        "Environmentally sustainable",
        "Affordable for small and medium-scale farmers"
      ],
      technicalDetails: {
        waterEfficiency: "High",
        maintenanceLevel: "Low",
        installationCost: "Affordable",
        scalability: "Customizable"
      }
    },
    {
      title: "Farm Management Consultancy",
      description: "Comprehensive support for farmers looking to implement sustainable agricultural practices and innovative irrigation solutions.",
      features: [
        "On-site farm assessments",
        "Customized irrigation system design",
        "Training on system installation and maintenance",
        "Ongoing agricultural support"
      ],
      benefits: [
        "Expert guidance from agricultural specialists",
        "Improved farm productivity",
        "Knowledge transfer to local farming communities"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Our Innovative Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforming agriculture through sustainable technology and locally-sourced innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Service Navigation */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService === index 
                  ? 'bg-green-100 shadow-lg' 
                  : 'bg-white hover:bg-green-50 shadow-md'
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-green-800">
                    {service.title}
                  </h3>
                  <ChevronRightIcon 
                    className={`w-6 h-6 transition-transform ${
                      activeService === index ? 'rotate-90 text-green-800' : 'text-gray-400'
                    }`} 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Details */}
          <motion.div 
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-xl p-8"
          >
            <h4 className="text-3xl font-bold text-green-800 mb-6">
              {services[activeService].title}
            </h4>
            <p className="text-gray-600 text-lg mb-6">
              {services[activeService].description}
            </p>

            {/* Features Section */}
            <div className="mb-6">
              <h5 className="text-xl font-semibold text-green-800 mb-4">Key Features</h5>
              <ul className="space-y-2 text-gray-700">
                {services[activeService].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-green-700">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div>
              <h5 className="text-xl font-semibold text-green-800 mb-4">Benefits</h5>
              <ul className="space-y-2 text-gray-700">
                {services[activeService].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-green-700">★</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Details for Irrigation System */}
            {services[activeService].technicalDetails && (
              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h5 className="text-xl font-semibold text-green-800 mb-4">Technical Overview</h5>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(services[activeService].technicalDetails).map(([key, value]) => (
                    <div key={key} className="border-b pb-2">
                      <span className="text-green-700 font-medium capitalize">{key}:</span>{' '}
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;