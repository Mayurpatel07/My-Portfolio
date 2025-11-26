import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
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
            My <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and leadership roles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500 hidden md:block" />

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 hidden md:block">
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75" />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card p-8 md:ml-20"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      {exp.website ? (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-blue-600 dark:text-cyan-500 font-semibold hover:underline"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-xl text-blue-600 dark:text-cyan-500 font-semibold">
                          {exp.company}
                        </p>
                      )}
                    </div>
                    {exp.current && (
                      <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={18} className="mr-2" />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle
                            size={20}
                            className="mr-3 mt-0.5 text-green-500 flex-shrink-0"
                          />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 card p-8 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Looking for Opportunities</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I'm always interested in hearing about new opportunities, 
            collaborations, and exciting projects. Feel free to reach out!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
