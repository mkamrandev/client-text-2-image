import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()
  const images = [
    assets.bannerimg1,
    assets.bannerimg2,
    assets.bannerimg3,
    assets.bannerimg4
  ]

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <div className='pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      <div className='max-w-6xl mx-auto px-6 lg:px-8'>

        {/* Main Hero Section - Side by Side Layout */}
        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]'>

          {/* Left Side - Content */}
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Status Badge */}
            <motion.div
              className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 text-sm text-purple-200'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              <span className='font-medium'>AI-Powered • Real-time Generation</span>
            </motion.div>

            {/* Main Heading - Different Structure */}
            <motion.div
              className='space-y-4'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className='text-6xl lg:text-7xl font-bold leading-tight'>
                <span className='block text-white'>Create</span>
                <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
                  Stunning Art
                </span>
                <span className='block text-gray-300 text-4xl lg:text-5xl font-normal'>
                  from simple text
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className='text-xl text-gray-300 leading-relaxed max-w-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transform your words into breathtaking visuals with our advanced AI technology.
              <span className='text-purple-300 font-semibold'> No design skills required.</span>
            </motion.p>

            {/* Action Buttons - Horizontal Layout */}
            <motion.div
              className='flex flex-col sm:flex-row gap-4 pt-4'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                onClick={onClickHandler}
                className='group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden'
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative flex items-center justify-center gap-3'>
                  <span>Generate Now</span>
                  <img className='h-5 w-5' src={assets.star_group} alt="" />
                </div>
              </motion.button>

              <motion.div
                className='flex items-center gap-4 px-6 py-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-purple-500/30'
                whileHover={{ scale: 1.02 }}
              >
                <div className='flex -space-x-2'>
                  <div className='w-8 h-8 bg-purple-500 rounded-full border-2 border-white/20'></div>
                  <div className='w-8 h-8 bg-pink-500 rounded-full border-2 border-white/20'></div>
                  <div className='w-8 h-8 bg-blue-500 rounded-full border-2 border-white/20'></div>
                </div>
                <div className='text-sm text-gray-300'>
                  <span className='font-semibold text-white'>5000+</span> creators
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Side - Visual Gallery */}
          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >

            {/* Central Featured Image */}
            <div className='relative'>
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30'
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>

              <div className='relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/30'>
                <div className='grid grid-cols-2 gap-4'>
                  {images.map((imgSrc, index) => (
                    <motion.div
                      key={index} 
                      className='relative group cursor-pointer'
                      whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + (index * 0.1) }}
                    >
                      <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300'></div>
                      <div className='relative overflow-hidden rounded-xl'>
                        <img
                          className='w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110'
                          src={imgSrc}
                          alt={`Gallery ${index + 1}`}
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className='absolute -top-8 -right-8 w-20 h-20 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30 flex items-center justify-center'
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src={assets.star_icon} alt="" className='w-8 h-8' />
            </motion.div>

            <motion.div
              className='absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-full backdrop-blur-sm border border-pink-400/30'
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
            </motion.div>

          </motion.div>

        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20'>
            <div className='text-3xl font-bold text-white mb-2'>50K+</div>
            <div className='text-gray-400'>Images Generated</div>
          </div>
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20'>
            <div className='text-3xl font-bold text-white mb-2'>99.9%</div>
            <div className='text-gray-400'>Success Rate</div>
          </div>
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20'>
            <div className='text-3xl font-bold text-white mb-2'>2.5s</div>
            <div className='text-gray-400'>Average Time</div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Header