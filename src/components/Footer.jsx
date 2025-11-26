import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Evantr Website',
      url: 'https://www.evantr.com',
      icon: <Globe size={20} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mayyur21/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Email',
      url: 'mailto:patel.mayur2113@gmail.com',
      icon: <Mail size={20} />,
    },
    {
      name: 'Phone',
      url: 'tel:+919370462587',
      icon: <Phone size={20} />,
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Mayur Patel</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Founder & CEO at Evantr Pvt Ltd • Full-Stack Developer
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>📧 patel.mayur2113@gmail.com</li>
              <li>📱 +91 9370462587</li>
              <li>📍 Pune, Maharashtra</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Mayur Patel. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
              Designed & Built by <span className="ml-1 font-semibold gradient-text">Mayur Patel</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
