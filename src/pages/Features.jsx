import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const HowItWorks = () => {
  
  const steps = [
    {
      number: "01",
      title: "Enter Your Prompt",
      description: "Type your creative vision in simple words. Describe what you want to see - from realistic portraits to fantasy landscapes.",
      icon: "✍️",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "02", 
      title: "AI Processing",
      description: "Our advanced AI analyzes your prompt and begins creating your unique artwork using cutting-edge machine learning.",
      icon: "🧠",
      color: "from-pink-500 to-pink-600"
    },
    {
      number: "03",
      title: "Generate & Download",
      description: "Watch as your imagination comes to life! Download your high-quality image and share it with the world.",
      icon: "⬇️",
      color: "from-blue-500 to-blue-600"
    }
  ];

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
        className='min-h-screen flex items-center justify-center pt-20 pb-20 relative z-10'
      >
        <div className='max-w-6xl mx-auto px-6 lg:px-8'>
          
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
              className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 text-sm text-purple-200 mb-8'
              initial={{opacity:0, y:-20}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}}
              transition={{delay:0.2, duration:0.6}}
            >
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              <span className='font-medium'>Simple • Fast • Powerful</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.3, duration:0.8}}
            >
              <span className='block text-white mb-2'>How It</span>
              <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
                Works
              </span>
            </motion.h1>
            
            <motion.p
              className='text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto'
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{delay:0.5, duration:0.8}}
            >
              Transform your ideas into stunning artwork in just three simple steps. 
              <span className='text-purple-300 font-semibold'> No technical skills required.</span>
            </motion.p>
          </motion.div>

          {/* Steps Section */}
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-12'>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className='relative group'
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:0.2 + (index * 0.2), duration:0.8}}
              >
                {/* Connection Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform -translate-y-1/2 z-0'></div>
                )}

                {/* Step Card */}
                <div className='bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 relative overflow-hidden group-hover:border-purple-400/40 transition-all duration-300'>
                  
                  {/* Glow Effect */}
                  <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-300'></div>
                  
                  {/* Content */}
                  <div className='relative'>
                    {/* Step Number */}
                    <motion.div 
                      className='flex items-center gap-4 mb-6'
                      whileHover={{scale:1.05}}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {step.number}
                      </div>
                      <div className='text-4xl'>{step.icon}</div>
                    </motion.div>

                    {/* Step Title */}
                    <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300'>
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className='text-gray-300 leading-relaxed'>
                      {step.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className='absolute top-6 right-6 w-8 h-8 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Action Section */}
          <motion.div
            className='text-center mt-20'
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{delay:0.8, duration:0.8}}
          >
            <div className='bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20 relative group max-w-4xl mx-auto'>
              {/* Glow Effect */}
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-300'></div>
              
              <div className='relative'>
                <h3 className='text-3xl font-bold text-white mb-4'>
                  Ready to Create?
                </h3>
                <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                  Join thousands of creators who are already using our AI to bring their imagination to life. 
                  Start your creative journey today!
                </p>
                
                <motion.button 
                  className='group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden'
                  whileHover={{scale:1.05, y:-2}} 
                  whileTap={{scale:0.95}}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='relative flex items-center justify-center gap-3'>
                    <span>Start Creating Now</span>
                    <motion.div
                      animate={{x: [0, 5, 0]}}
                      transition={{duration: 1.5, repeat: Infinity}}
                    >
                      <img className='h-5 w-5' src={assets.star_group} alt="" />
                    </motion.div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className='text-center mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{delay:1, duration:0.8}}
          >
            <div className='bg-slate-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/10'>
              <div className='text-2xl font-bold text-white mb-2'>⚡</div>
              <div className='text-sm text-gray-400'>Lightning Fast</div>
              <div className='text-xs text-gray-500 mt-1'>Generate in seconds</div>
            </div>
            <div className='bg-slate-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/10'>
              <div className='text-2xl font-bold text-white mb-2'>🎨</div>
              <div className='text-sm text-gray-400'>High Quality</div>
              <div className='text-xs text-gray-500 mt-1'>Professional results</div>
            </div>
            <div className='bg-slate-800/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/10'>
              <div className='text-2xl font-bold text-white mb-2'>♾️</div>
              <div className='text-sm text-gray-400'>Unlimited Ideas</div>
              <div className='text-xs text-gray-500 mt-1'>No creative limits</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default HowItWorks;