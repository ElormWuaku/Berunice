import { useState } from 'react';
import { motion } from 'framer-motion';
import { bamboo, bamboo2, bamboo3, bamboo4, farmers, tunnel } from '../assets';

// Note: You'll need to replace these with actual product images from Berunice Farms
const galleryItems = [
  {
    id: 1,
    title: "Bamboo Irrigation Reservoir",
    description: "Vertical bamboo reservoirs for efficient water storage and distribution",
    image: bamboo,
    category: "Irrigation System"
  },
  {
    id: 2,
    title: "Horizontal Water Conveyance",
    description: "Precision bamboo piping for targeted crop irrigation",
    image: bamboo2,
    category: "Irrigation Components"
  },
  {
    id: 3,
    title: "Farm Consultation Setup",
    description: "On-site assessment of farm irrigation needs",
    image: farmers,
    category: "Services"
  },
  {
    id: 4,
    title: "Sustainable Crop Management",
    description: "Innovative farming techniques in action",
    image: tunnel,
    category: "Farm Management"
  },
  {
    id: 5,
    title: "Bamboo Processing Station",
    description: "Preparing bamboo components for irrigation systems",
    image: bamboo3,
    category: "Production"
  },
  {
    id: 6,
    title: "Community Training Workshop",
    description: "Empowering local farmers with sustainable techniques",
    image: bamboo4,
    category: "Community"
  }
];

const ProductGallery = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Our Products and Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative agricultural technologies transforming farming practices
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <div 
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredItem === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-4"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
                <span className="mt-2 px-3 py-1 bg-green-700 text-white text-xs rounded-full">
                  {item.category}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;