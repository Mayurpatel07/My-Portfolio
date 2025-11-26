import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Briefcase, Heart } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: <User size={32} />,
      title: 'Who I Am',
      description: 'Founder & CEO of Evantr, building solutions that connect people with the right event vendors.',
    },
    {
      icon: <Target size={32} />,
      title: 'My Goal',
      description: 'To grow Evantr across major cities and help thousands of people organize better events.',
    },
    {
      icon: <Briefcase size={32} />,
      title: 'What I Do',
      description: 'Handle marketing, strategy, brand building, and product development at Evantr.',
    },
    {
      icon: <Heart size={32} />,
      title: 'My Passion',
      description: 'Building products that solve real problems and focusing on what actually matters for users.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what I'm passionate about
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">My Journey</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Hi, I'm <span className="font-semibold text-gray-900 dark:text-white">Mayur Patel</span>. 
                  I'm the Founder and CEO of <a href="https://www.evantr.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-cyan-500 hover:underline">Evantr</a>, a platform that helps people find the right vendors 
                  for their events without confusion. I handle marketing, strategy and brand building.
                </p>
                <p>
                  I enjoy building products that solve real problems, keeping things simple, and focusing 
                  on what actually matters for users. I'm currently working on growing Evantr in Pune and 
                  expanding it across major cities.
                </p>
                <p>
                  When I'm not working, I try to learn more about marketing, user behaviour and how digital 
                  products scale. I like experimenting, improving small things and staying consistent with my goals.
                </p>
                <p>
                  I'm also serving as the <span className="font-semibold text-gray-900 dark:text-white">Finance & 
                  Sponsorship Head</span> for Anamtam Culture Fest, where I coordinate sponsorships and manage 
                  financial planning for large-scale cultural events.
                </p>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Personal Details</h2>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span className="font-semibold">Name:</span>
                  <span>Mayur Patel</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Role:</span>
                  <span>Founder & CEO</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Company:</span>
                  <a href="https://www.evantr.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-500 hover:underline">www.evantr.com</a>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Mobile:</span>
                  <span>+91 9370462587</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Email:</span>
                  <span className="text-sm">patel.mayur2113@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Location:</span>
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">What I Bring</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  With a strong foundation in entrepreneurship and technology, I bring a unique 
                  perspective to building digital products. My experience spans:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Business Strategy & Growth Planning</li>
                  <li>Marketing & Brand Building</li>
                  <li>Product Development & Management</li>
                  <li>Team Leadership and Management</li>
                  <li>Client Relationship Management</li>
                  <li>Event Planning and Coordination</li>
                </ul>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Beyond Work</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  When I'm not working on Evantr, I enjoy:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Learning about marketing and user behaviour</li>
                  <li>Understanding how digital products scale</li>
                  <li>Experimenting with new ideas and strategies</li>
                  <li>Networking with fellow entrepreneurs and founders</li>
                  <li>Reading about business growth and innovation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
