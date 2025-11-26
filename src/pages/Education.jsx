import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { education, certifications } from '../data/education';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={32} /> : <Icons.GraduationCap size={32} />;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Academic Background
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto space-y-8"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white">
                    {getIcon(edu.icon)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-xl text-blue-600 dark:text-cyan-500 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold gradient-text">
                          {edu.grade}
                        </div>
                        <div className="text-gray-600 dark:text-gray-400">
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Icons.MapPin size={18} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Professional Certifications
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 ${cert.color}`}>
                    {getIcon(cert.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Issued by <span className="font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card p-8 text-center"
          >
            <div className="text-4xl font-bold gradient-text mb-2">
              {education.length}
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Academic Qualifications
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card p-8 text-center"
          >
            <div className="text-4xl font-bold gradient-text mb-2">
              {certifications.length}+
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Professional Certifications
            </p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="card p-8 text-center"
          >
            <div className="text-4xl font-bold gradient-text mb-2">
              2023-2027
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Current Study Period
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
