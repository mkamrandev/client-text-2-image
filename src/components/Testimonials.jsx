import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <div className='py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.04)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        
        {/* Header Section */}
        <motion.div 
          className='text-center mb-20'
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
        >
          
          {/* Status Badge */}
          <motion.div 
            className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 text-sm text-purple-200 mb-6'
            initial={{opacity:0, y:-20}} 
            whileInView={{opacity:1, y:0}} 
            viewport={{once:true}}
            transition={{delay:0.2, duration:0.6}}
          >
            <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
            <span className='font-medium'>Trusted by Creators • 5-Star Reviews</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h2
            className='text-5xl lg:text-6xl font-bold mb-6'
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.3, duration:0.8}}
          >
            <span className='block text-white mb-2'>What Our</span>
            <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
              Users Say
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            className='text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.5, duration:0.8}}
          >
            Join thousands of satisfied creators using 
            <span className='text-purple-300 font-semibold'> Imagify</span>
          </motion.p>
          
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              className='group relative'
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.2 * index, duration:0.6}}
              whileHover={{y:-10}}
            >
              
              {/* Card Glow Effect */}
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300'></div>
              
              {/* Main Card */}
              <div className='relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 h-full'>
                
                {/* Quote Icon */}
                <div className='absolute top-4 right-4 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center'>
                  <div className='text-purple-300 text-xl font-bold'>"</div>
                </div>
                
                {/* User Info */}
                <div className='flex items-center gap-4 mb-6'>
                  <motion.div
                    className='relative'
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.3}}
                  >
                    <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40'></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='relative w-14 h-14 rounded-full object-cover border-2 border-purple-400/50'
                    />
                  </motion.div>
                  <div>
                    <h3 className='font-semibold text-white text-lg group-hover:text-purple-300 transition-colors duration-300'>
                      {testimonial.name}
                    </h3>
                    <p className='text-gray-400 text-sm'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                {/* Star Rating */}
                <div className='flex items-center gap-1 mb-6'>
                  {Array(testimonial.stars).fill().map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{opacity: 0, scale: 0}}
                      whileInView={{opacity: 1, scale: 1}}
                      transition={{duration: 0.2, delay: 0.8 + (i * 0.1)}}
                      className='w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center'
                    >
                      <div className='text-white text-xs'>★</div>
                    </motion.div>
                  ))}
                  <span className='text-sm text-gray-400 ml-2'>
                    {testimonial.stars}.0
                  </span>
                </div>
                
                {/* Testimonial Text */}
                <p className='text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300'>
                  "{testimonial.text}"
                </p>
                
                {/* Decorative Bottom Border */}
                <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
              </div>
              
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <motion.div
          className='text-center'
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:1, duration:0.8}}
        >
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20'>
            <div className='max-w-2xl mx-auto'>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Ready to join our community?
              </h3>
              <p className='text-gray-400 mb-6'>
                Start creating amazing AI images and become part of our growing family
              </p>
              <motion.button
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Testimonials