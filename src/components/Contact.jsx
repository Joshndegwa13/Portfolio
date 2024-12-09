import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

// Contact info items with their respective icons and links
const contactItems = [
  {
    id: 'email',
    icon: <FaEnvelope className="text-4xl text-primary" />,
    title: 'Email',
    value: 'ndegwajosh7@gmail.com',
    href: 'mailto:ndegwajosh7@gmail.com',
  },
  {
    id: 'phone',
    icon: <FaPhone className="text-4xl text-primary" />,
    title: 'Phone',
    value: '+254 727 435 353',
    href: 'tel:+254727435353',
  },
  {
    id: 'linkedin',
    icon: <FaLinkedin className="text-4xl text-primary" />,
    title: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/joshua-ndegwa',
  },
  {
    id: 'github',
    icon: <FaGithub className="text-4xl text-primary" />,
    title: 'GitHub',
    value: 'View GitHub Profile',
    href: 'https://github.com/Joshndegwa13',
  },
];

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen pt-20">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        {/* Section header with fade-in animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-primary">
            Contact
          </p>
        </motion.div>

        {/* Contact items grid with staggered animations */}
        <div className="flex flex-col gap-8 mt-10">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-4"
            >
              {item.icon}
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <a 
                  href={item.href}
                  target={item.id === 'linkedin' || item.id === 'github' ? '_blank' : undefined}
                  rel={item.id === 'linkedin' || item.id === 'github' ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;