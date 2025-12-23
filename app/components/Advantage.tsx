'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, Zap, Shield, Users, Award } from 'lucide-react'

const Advantage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const advantages = [
    {
      icon: MapPin,
      title: 'US-Based Expertise',
      description: 'Local presence with deep understanding of American business culture and regulatory requirements.',
      stats: '100% US-Based Team'
    },
    {
      icon: Clock,
      title: '24/7 Global Support',
      description: 'Round-the-clock technical support and monitoring to ensure your systems run smoothly worldwide.',
      stats: '99.9% Uptime SLA'
    },
    {
      icon: Zap,
      title: 'Agile Methodology',
      description: 'Rapid development cycles with continuous delivery to accelerate your time-to-market.',
      stats: '50% Faster Delivery'
    }
  ]

  const additionalBenefits = [
    { icon: Shield, title: 'Enterprise Security', value: 'SOC 2 Compliant' },
    { icon: Users, title: 'Expert Team', value: '50+ Specialists' },
    { icon: Award, title: 'Industry Recognition', value: 'Top 1% Rated' }
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-6">
            The <span className="gradient-text">Sammunat</span> Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why leading enterprises choose us as their trusted technology partner 
            for digital transformation and growth.
          </p>
        </motion.div>

        {/* Main Advantages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-teal/20 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <advantage.icon size={128} className="text-teal" />
              </div>

              {/* Icon */}
              <div className="relative w-16 h-16 bg-teal/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal/20 transition-colors duration-300">
                <advantage.icon className="w-8 h-8 text-teal" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-royal-blue mb-4 group-hover:text-teal transition-colors duration-300">
                {advantage.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {advantage.description}
              </p>

              {/* Stats */}
              <div className="bg-teal/5 rounded-lg p-4 border border-teal/10">
                <div className="text-2xl font-bold text-teal mb-1">
                  {advantage.stats}
                </div>
                <div className="text-sm text-gray-500">
                  Guaranteed Performance
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-r from-royal-blue to-slate-800 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Industry Leaders Trust Us
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence and innovation has earned us recognition 
              as a premier technology partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-teal/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/30 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-teal-light" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <div className="text-teal-light font-bold text-lg">
                  {benefit.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-royal-blue mb-4">
            Ready to Experience the Sammunat Advantage?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our expertise.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Advantage