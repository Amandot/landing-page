'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import ParallaxText from './ParallaxText'
import MagneticButton from './MagneticButton'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-royal-blue/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30 cyber-grid">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4ff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue-light text-sm font-medium mb-8 electric-border"
          >
            <span className="w-2 h-2 bg-cyber-blue rounded-full mr-2 animate-pulse"></span>
            US-Based IT Services & Digital Growth Consultancy
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-cyber-glow mb-6 leading-tight"
          >
            Crafting{' '}
            <span className="gradient-text">Project Specific Solutions</span>{' '}
            with Expertise
          </motion.h1>

          {/* Subtext */}
          <ParallaxText speed={0.3}>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We're a creative company that focuses on establishing long-term partnerships with customers. 
              From custom CRM & ERP solutions to professional web development and video editing services.
            </motion.p>
          </ParallaxText>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton className="bg-cyber-blue hover:bg-cyber-blue/90 text-royal-blue px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-cyber-blue/30 hover:shadow-2xl electric-border">
              Explore Now
              <ArrowRight size={20} />
            </MagneticButton>

            <MagneticButton className="border-2 border-cyber-blue/30 hover:border-cyber-blue/60 text-cyber-glow px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all duration-300 backdrop-blur-sm electric-border">
              <Play size={20} />
              Contact Us
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-cyber-blue/20"
          >
            {[
              { number: '300+', label: 'Completed Projects' },
              { number: '900+', label: 'Happy Customers' },
              { number: '100+', label: 'Expert Employees' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyber-blue mb-2 holographic">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyber-blue/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero