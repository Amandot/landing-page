'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SocialProof = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Placeholder company logos - in a real implementation, these would be actual client logos
  const companies = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'GlobalSoft', logo: 'GS' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudTech', logo: 'CT' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'SmartSys', logo: 'SS' },
    { name: 'FutureTech', logo: 'FT' }
  ]

  const testimonials = [
    {
      quote: "Sammunat transformed our legacy systems into a modern, scalable architecture. Their expertise in cloud migration saved us 40% in operational costs.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "The AI-powered analytics solution they built for us has revolutionized our decision-making process. ROI was evident within the first quarter.",
      author: "Michael Chen",
      position: "VP of Operations, GlobalSoft",
      company: "Leading Software Solutions Provider"
    },
    {
      quote: "Their agile approach and 24/7 support ensured our critical systems never missed a beat during our digital transformation journey.",
      author: "Emily Rodriguez",
      position: "Head of IT, InnovateLab",
      company: "Innovation Research Institute"
    }
  ]

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-blue mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the growing list of enterprises that have accelerated their digital transformation with Sammunat.
          </p>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-center text-gray-500 mb-8 font-medium">
            Trusted by Industry Leaders
          </p>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-all duration-300 group">
                  <span className="text-royal-blue font-bold text-lg group-hover:text-teal transition-colors duration-300">
                    {company.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-teal/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal to-teal-light rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-blue group-hover:text-teal transition-colors duration-300">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-royal-blue to-slate-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed', suffix: '' },
              { number: '98', label: 'Client Satisfaction', suffix: '%' },
              { number: '50+', label: 'Enterprise Clients', suffix: '' },
              { number: '5', label: 'Years of Excellence', suffix: '+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-light mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof