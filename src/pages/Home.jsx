import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <Toaster />
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-lg md:text-xl font-semibold text-blue-600 dark:text-cyan-500">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mt-2">
                Mayur Patel
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-4">
                Founder & CEO at <span className="gradient-text font-semibold">Evantr Pvt Ltd</span>
              </p>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Full-Stack Developer
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            >
              Building <a href="https://www.evantr.com" target="_blank" rel="noopener noreferrer" className="gradient-text font-semibold hover:underline">Evantr</a> - a platform that helps people find the right vendors for their events. 
              Focused on marketing, strategy, and creating products that solve real problems. Currently 
              expanding across major cities in India.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Get In Touch <ArrowRight className="inline ml-2" size={20} />
              </Link>
              <Link to="/projects" className="btn-outline">
                View Projects
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex space-x-4 pt-4"
            >
              <motion.a
                href="https://linkedin.com/in/mayyur21/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Linkedin size={24} className="text-blue-600" />
              </motion.a>
              <motion.button
                onClick={() => {
                  // Try to open email client
                  window.location.href = 'mailto:patel.mayur2113@gmail.com';
                  
                  // Also copy to clipboard as backup
                  navigator.clipboard.writeText('patel.mayur2113@gmail.com');
                  toast.success('Opening email & copied to clipboard!', {
                    duration: 3000,
                    position: 'top-center',
                  });
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Mail size={24} className="text-red-600" />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Animated Avatar/Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full p-1">
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl font-bold gradient-text mb-4">MP</div>
                    <p className="text-xl font-semibold">Founder & CEO</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Evantr Pvt Ltd</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-cyan-500 rounded-full opacity-20"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: '10+', label: 'Technologies' },
            { number: '5+', label: 'Projects' },
            { number: '2+', label: 'Years Experience' },
            { number: '4+', label: 'Certifications' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
