import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function Description() {
  return (
    <div className='py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute top-32 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
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
            <span className='font-medium'>Advanced Technology • Unlimited Creativity</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            className='text-5xl lg:text-6xl font-bold mb-6'
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.3, duration:0.8}}
          >
            <span className='block text-white mb-2'>Create</span>
            <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
              AI Images
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
            Turn your imagination into 
            <span className='text-purple-300 font-semibold'> stunning visuals</span>
          </motion.p>
          
        </motion.div>
        
        {/* Main Content Section */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          
          {/* Left Side - Image */}
          <motion.div
            className='relative group'
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{delay:0.6, duration:0.8}}
          >
            
            {/* Glow Effect */}
            <motion.div 
              className='absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500'
              animate={{scale: [1, 1.05, 1]}}
              transition={{duration: 3, repeat: Infinity}}
            ></motion.div>
            
            {/* Image Container */}
            <div className='relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30'>
              <motion.img
                src={assets.bannerimg1}
                alt="AI Generated Image"
                className='w-full h-auto rounded-2xl shadow-2xl'
                whileHover={{scale: 1.02}}
                transition={{duration: 0.3}}
              />
              
              {/* Floating Info Card */}
              <motion.div 
                className='absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30 shadow-2xl'
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:1, duration:0.6}}
              >
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                  <span className='text-sm text-white font-medium'>AI Generated</span>
                </div>
                <p className='text-xs text-gray-400 mt-1'>Created in 2.3 seconds</p>
              </motion.div>
            </div>
            
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div
            className='space-y-8'
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            transition={{delay:0.8, duration:0.8}}
          >
            
            {/* Main Heading */}
            <motion.h2
              className='text-4xl lg:text-5xl font-bold text-white leading-tight'
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.9, duration:0.6}}
            >
              Introducing the 
              <span className='block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2'>
                AI-Powered Generator
              </span>
            </motion.h2>
            
            {/* Feature Cards */}
            <div className='space-y-6'>
              
              {/* Feature 1 */}
              <motion.div
                className='group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'
                initial={{opacity:0, x:20}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{delay:1, duration:0.6}}
                whileHover={{scale: 1.02}}
              >
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300'>
                    <div className='w-6 h-6 bg-purple-400 rounded-full'></div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300'>
                      Instant Creation
                    </h3>
                    <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                      Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div
                className='group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'
                initial={{opacity:0, x:20}}
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                transition={{delay:1.2, duration:0.6}}
                whileHover={{scale: 1.02}}
              >
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300'>
                    <div className='w-6 h-6 bg-pink-400 rounded-full'></div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300'>
                      Limitless Possibilities
                    </h3>
                    <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                      Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly.
                    </p>
                  </div>
                </div>
              </motion.div>
              
            </div>
            
            {/* CTA Button */}
            <motion.div
              className='pt-6'
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:1.4, duration:0.6}}
            >
              <motion.button
                className='group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
                whileHover={{scale: 1.05, y: -2}}
                whileTap={{scale: 0.95}}
              >
                <div className='flex items-center gap-3'>
                  <span>Try It Now</span>
                  <div className='w-5 h-5 bg-white/20 rounded-full group-hover:rotate-180 transition-transform duration-300'></div>
                </div>
              </motion.button>
            </motion.div>
            
          </motion.div>
          
        </div>
        
        {/* Bottom Stats Section */}
        <motion.div
          className='mt-20 grid grid-cols-1 md:grid-cols-4 gap-6'
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:1.6, duration:0.8}}
        >
          
          {[
            { number: '1M+', label: 'Images Created', color: 'purple' },
            { number: '50K+', label: 'Happy Users', color: 'pink' },
            { number: '99%', label: 'Satisfaction', color: 'purple' },
            { number: '24/7', label: 'Available', color: 'pink' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className='text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300'
              whileHover={{scale: 1.05}}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:1.8 + (index * 0.1), duration:0.6}}
            >
              <div className={`text-3xl font-bold mb-2 ${stat.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`}>
                {stat.number}
              </div>
              <div className='text-gray-400 text-sm'>
                {stat.label}
              </div>
            </motion.div>
          ))}
          
        </motion.div>
        
      </div>
    </div>
  )
}

export default Description