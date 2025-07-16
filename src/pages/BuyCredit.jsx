import React, { useContext } from 'react'
import {assets, plans} from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'

const BuyCredit = () => {
  const {user} = useContext(AppContext)

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <motion.div
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='min-h-screen pt-14 pb-10 relative z-10'
      >
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          
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
              className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 text-sm text-purple-200 mb-8'
              initial={{opacity:0, y:-20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2, duration:0.6}}
            >
              <div className='w-2 h-2 bg-yellow-400 rounded-full animate-pulse'></div>
              <span className='font-medium'>Our Plans Coming Soon</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1
              className='text-5xl lg:text-6xl font-bold mb-6'
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.3, duration:0.8}}
            >
              <span className='block text-white mb-2'>We're Crafting</span>
              <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
                Magic
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              className='text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8'
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.5, duration:0.8}}
            >
              Choose the perfect plan for your creative journey. More features and better pricing coming soon!
            </motion.p>
            
            {/* Coming Soon Indicator */}
            <motion.div
              className='inline-flex items-center gap-3 text-lg font-semibold text-white'
              initial={{opacity:0, scale:0.8}}
              whileInView={{opacity:1, scale:1}}
              viewport={{once:true}}
              transition={{delay:0.7, duration:0.8}}
            >
              <div className='flex gap-1'>
                <motion.div 
                  className='w-2 h-2 bg-purple-400 rounded-full'
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0
                  }}
                />
                <motion.div 
                  className='w-2 h-2 bg-pink-400 rounded-full'
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                <motion.div 
                  className='w-2 h-2 bg-purple-400 rounded-full'
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
              </div>
              <span>Stay Tuned!</span>
            </motion.div>
          </motion.div>
          
          {/* Plans Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {plans.map((item, index) => (
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
                  
                  {/* Logo */}
                  <motion.div
                    className='w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'
                    whileHover={{rotate: 360}}
                    transition={{duration: 0.6}}
                  >
                    <img 
                      width={24} 
                      src={assets.logo_icon} 
                      alt="" 
                      className="filter brightness-0 invert" 
                    />
                  </motion.div>
                  
                  {/* Plan Details */}
                  <div className='mb-8'>
                    <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300'>
                      {item.id}
                    </h3>
                    <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300'>
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Pricing */}
                  <div className='mb-8'>
                    <div className='flex items-baseline gap-2'>
                      <span className='text-4xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                        ${item.price}
                      </span>
                      <span className='text-gray-400 text-lg'>
                        / {item.credits} Credits
                      </span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className='relative group/button'>
                    <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover/button:opacity-60 transition duration-300'></div>
                    
                    <motion.button
                      className='relative w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold text-sm shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-not-allowed opacity-75'
                      whileHover={{scale:1.02}}
                      whileTap={{scale:0.98}}
                      disabled
                    >
                      {user ? 'Coming Soon' : 'Coming Soon'}
                    </motion.button>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className='absolute top-4 right-4 w-8 h-8 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300'></div>
                  
                  {/* Popular Badge for middle plan */}
                  {index === 1 && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                      <div className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                        Most Popular
                      </div>
                    </div>
                  )}
                </div>
                
              </motion.div>
            ))}
          </div>
          
          {/* Bottom Info */}
          <motion.div
            className='text-center mt-16'
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.8, duration:0.8}}
          >
            <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 max-w-2xl mx-auto'>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Something Special is Coming
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                We're working on revolutionary pricing plans that will give you incredible value. 
                More features, better prices, and amazing creative possibilities await!
              </p>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  )
}

export default BuyCredit