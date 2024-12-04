import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle } from 'lucide-react';
import { seedlings } from '../assets'; 

const Contact=() =>{
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const result = await emailjs.send(
        'service_vjh0nsr', // service ID
        'template_qxbztws', // template ID
        formData,
        'TKi5tH-L-cktAPqfX' // public key
      );

      console.log('Email successfully sent:', result);
      setStatusMessage('Message sent successfully! Thank you for reaching out.');
      
      // Reset form after successful submission
      setFormData({
        from_name: '',
        from_email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section 
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: `url(${seedlings})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <motion.div 
            className="bg-white/90 p-8 rounded-lg self-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-green-700 mb-6">Get In Touch</h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              Have questions or want to learn more? We&apos;d love to hear from you. Fill out the form and our team will get back to you soon.
            </p>
            
            <div className="text-center mt-8">
              <p className="text-gray-700 italic text-xl">
                &quot;Your connection is our priority.&quot;
              </p>
            </div>
          </motion.div>
          
          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white/90 shadow-md rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={24} />
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-3 py-3 border-2 border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
                />
              </div>
              
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size={24} />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-3 py-3 border-2 border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
                />
              </div>
              
              <div className="relative">
                <MessageCircle className="absolute left-3 top-4 text-green-600" size={24} />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full pl-12 pr-3 py-3 border-2 border-green-600/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-800"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {statusMessage && (
              <p className={`mt-4 text-sm text-center ${
                statusMessage.includes('successfully') 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {statusMessage}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;