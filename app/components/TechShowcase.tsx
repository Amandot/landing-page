'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Globe, Shield, Cpu } from 'lucide-react'

const TechShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const techFeatures = [
    {
      icon: Cpu,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence integrated into every solution'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Seamless integration across worldwide networks and platforms'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with enhanced blockchain-level protection.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with seamless real-time data processing.'
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background with the futuristic image */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/kkk.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-royal-blue/80"></div>
      </div> */}

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/20 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Future-Ready <span className="gradient-text">Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of digital solutions powered by advanced technology 
            and innovative thinking.
          </p>
        </motion.div>

        {/* Tech Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-teal/50 transition-all duration-300 group-hover:bg-white/20">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-teal to-teal-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-light transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal to-teal-light hover:from-teal-light hover:to-teal text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-teal/30"
          >
            Explore Our Technology
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-teal rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-teal-light rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-blue-400 rounded-full animate-pulse opacity-30 animation-delay-3000"></div>
    </section>
  )
}

export default TechShowcase