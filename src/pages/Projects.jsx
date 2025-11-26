import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Rocket, Briefcase } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Featured Startup Section */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Briefcase className="text-blue-600 dark:text-cyan-500" size={32} />
              <h2 className="text-3xl font-bold">My Startup</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card overflow-hidden"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg w-fit">
                      <Rocket size={12} />
                      Featured Startup
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg w-fit">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                      Live
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gradient-text">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                    {featuredProject.description}
                  </p>
                  
                  <motion.a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary inline-flex items-center justify-center gap-2 w-full text-sm sm:text-base"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card overflow-hidden"
              >
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">My Role</h3>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p>Founder, CEO & CMO leading the vision and direction of Evantr</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p>Driving product development and user experience</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p>Managing marketing, branding and growth</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p>Building vendor partnerships and expanding the network</p>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <p>Guiding the team and overseeing daily operations</p>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">About This Startup</h3>
                    <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                        <p>Evantr is an event marketplace where users can find and connect with trusted vendors.</p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                        <p>The platform covers photography, DJs, venues, décor and more.</p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                        <p>Users can compare options, check prices and contact vendors directly.</p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                        <p>Our Booking Assistant helps users with personalised vendor suggestions.</p>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mt-1 sm:mt-1.5 flex-shrink-0"></div>
                        <p>Vendors get affordable yearly plans and better visibility to grow their business.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Other Projects
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {project.demo !== "#" && (
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      Visit Site
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 card p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Let's build something amazing together!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block btn-primary"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
