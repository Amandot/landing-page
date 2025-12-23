'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Video, Globe, ArrowRight } from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Code,
      title: 'Custom CRM & ERP Solutions',
      description: 'Streamline your business with scalable, efficient, and fully customized CRM and ERP systems designed to match your exact needs.',
      features: ['Customer Relationship Management', 'Enterprise Resource Planning', 'Business Process Automation', 'Real-time Analytics'],
      color: 'from-cyber-blue to-cyber-blue-light'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build powerful digital experiences with expert web development. Fast, secure, and user-friendly websites and applications.',
      features: ['Responsive Web Design', 'E-commerce Solutions', 'SEO Optimization', 'Web Applications'],
      color: 'from-cyber-purple to-cyber-purple-light'
    },
    {
      icon: Video,
      title: 'Professional Video Editing',
      description: 'Elevate your content with professional video editing services. Seamless transitions, dynamic effects, and polished storytelling.',
      features: ['YouTube Video Editing', 'Social Media Content', 'Corporate Presentations', 'Cinematic Editing'],
      color: 'from-cyber-blue-light to-cyber-purple'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-cyber-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyber-glow mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The services we offer are specifically designed to meet your needs. 
            From custom business solutions to creative content production.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              // className="bg-royal-blue/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-cyber-blue/20 transition-all duration-300 border border-cyber-blue/20 group electric-border"
              // className="bg-slate-950/40 backdrop-blur-md rounded-2xl p-8 shadow-lg ... border border-white/5 group transition-all duration-300"
              className="bg-royal-blue/50 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-cyber-blue/10 transition-all duration-500 border border-cyber-blue/10 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-cyber-glow mb-4 group-hover:text-cyber-blue transition-colors duration-300 holographic">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-cyber-blue font-semibold group-hover:text-cyber-blue-light transition-colors duration-300"
              >
                Learn More
                <ArrowRight size={16} className="ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyber-blue hover:bg-cyber-blue/90 text-royal-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg electric-border"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services