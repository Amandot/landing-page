'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SocialProof = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Real project examples from Sammunat
  const companies = [
    { name: 'Enterprise CRM', logo: 'EC' },
    { name: 'Manufacturing ERP', logo: 'ME' },
    { name: 'Healthcare Mgmt', logo: 'HM' },
    { name: 'Restaurant POS', logo: 'RP' },
    { name: 'E-commerce', logo: 'EC' },
    { name: 'Logistics System', logo: 'LS' },
    { name: 'Digital Banking', logo: 'DB' },
    { name: 'Learning LMS', logo: 'LL' }
  ]

  const testimonials = [
    {
      quote: "Sammunat delivered an exceptional CRM solution that streamlined our operations across 10k+ users. Their expertise in enterprise systems is unmatched.",
      author: "Sarah Johnson",
      position: "Operations Director",
      company: "Global Retail Chain"
    },
    {
      quote: "The manufacturing ERP system they built for our 5 facilities has revolutionized our inventory management and production planning.",
      author: "Michael Chen",
      position: "Plant Manager",
      company: "Manufacturing Company"
    },
    {
      quote: "Their healthcare management system handles 50k+ patients seamlessly. The appointment scheduling and billing integration is perfect.",
      author: "Dr. Emily Rodriguez",
      position: "Hospital Administrator",
      company: "Healthcare Network"
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
            Our Recent <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our successfully implemented systems across various industries worldwide.
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
          
          {/* Company Names */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <div className="bg-white rounded-xl shadow-md px-4 py-3 border border-gray-100 hover:border-teal/20 hover:shadow-lg transition-all duration-300 group w-full text-center">
                  <span className="text-royal-blue font-semibold text-sm md:text-base group-hover:text-teal transition-colors duration-300">
                    {company.name}
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
              { number: '300+', label: 'Completed Projects', suffix: '' },
              { number: '900+', label: 'Happy Customers', suffix: '' },
              { number: '100+', label: 'Expert Employees', suffix: '' },
              { number: '4', label: 'Average Rating', suffix: '+' }
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