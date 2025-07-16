import React from 'react'
import {stepsData} from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <div className='py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        
        {/* Header Section */}
        <motion.div 
          className='text-center mb-16'
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
            <span className='font-medium'>Simple Process • Instant Results</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            className='text-5xl lg:text-6xl font-bold mb-6'
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.3, duration:0.8}}
          >
            <span className='block text-white mb-2'>How it</span>
            <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
              Works
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            className='text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.5, duration:0.8}}
          >
            Transform your words into stunning visuals with our 
            <span className='text-purple-300 font-semibold'> intuitive 3-step process</span>
          </motion.p>
          
        </motion.div>
        
        {/* Steps Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {stepsData.map((item, index) => (
            <motion.div
              key={index}
              className='group relative'
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.2 * index, duration:0.8}}
              whileHover={{y:-10}}
            >
              
              {/* Card Background with Glow Effect */}
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300'></div>
              
              {/* Main Card */}
              <div className='relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 h-full'>
                
                {/* Step Number */}
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                    {index + 1}
                  </div>
                  <div className='h-px bg-gradient-to-r from-purple-500/50 to-transparent flex-1'></div>
                </div>
                
                {/* Icon */}
                <motion.div 
                  className='w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'
                  whileHover={{rotate: 360}}
                  transition={{duration: 0.6}}
                >
                  <img src={item.icon} alt="" className="w-8 h-8 filter brightness-0 invert" />
                </motion.div>
                
                {/* Content */}
                <div className='space-y-4'>
                  <h3 className='text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                    {item.title}
                  </h3>
                  <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                    {item.description}
                  </p>
                </div>
                
                {/* Decorative Element */}
                <div className='absolute top-4 right-4 w-8 h-8 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300'></div>
                
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
          transition={{delay:0.8, duration:0.8}}
        >
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
              
              <div className='text-left'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Ready to get started?
                </h3>
                <p className='text-gray-400'>
                  Join thousands of creators making amazing art with AI
                </p>
              </div>
              
              <motion.button
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
              >
                Start Creating
              </motion.button>
              
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Steps