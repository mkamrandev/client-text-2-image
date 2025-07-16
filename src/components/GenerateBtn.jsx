import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {
  const [isHovered, setIsHovered] = useState(false)
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () =>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }

  const textVariants = {
    initial: { 
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      }
    }
  }

  const letterVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  }

  return (
    <div className='py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <motion.div 
        initial={{opacity:0.2, y:100}} 
        transition={{duration:1}} 
        whileInView={{opacity:1, y:0}} 
        viewport={{once:true}} 
        className='pb-16 text-center relative z-10'
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
          <span className='font-medium'>AI Powered • Instant Generation</span>
        </motion.div>

        <motion.h1 
          className='text-3xl md:text-4xl lg:text-5xl mt-4 font-bold py-6 md:py-16 relative'
          variants={textVariants}
          initial="initial"
          animate="animate"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.span 
            variants={letterVariants}
            className='text-white'
          >
            See the{' '}
          </motion.span>
          <motion.span
            className='inline-block relative cursor-pointer'
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }}
          >
            <motion.span
              className='absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-lg opacity-50'
              animate={{
                backgroundPosition: isHovered ? ["0%", "100%"] : "0%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
            <motion.span
              className='relative bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'
              animate={{
                backgroundPosition: isHovered ? ["0%", "200%"] : "0%",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              whileHover={{
                rotate: [0, -3, 3, -3, 0],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              magic
            </motion.span>
          </motion.span>
          <motion.span 
            variants={letterVariants}
            className='text-white'
          >
            . Try now
          </motion.span>
        </motion.h1>

        {/* CTA Section with matching design */}
        <motion.div
          className='max-w-2xl mx-auto'
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{delay:0.4, duration:0.8}}
        >
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-8'>
            <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
              Transform your words into stunning visuals with our 
              <span className='text-purple-300 font-semibold'> AI-powered generator</span>
            </p>
            
            {/* Glow Effect Container */}
            <div className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300'></div>
              
              <motion.button 
                onClick={onClickHandler} 
                className='relative inline-flex items-center gap-3 px-12 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 cursor-pointer'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }}
              >
                <span>Generate Images</span>
                <motion.img 
                  src={assets.star_group} 
                  alt="" 
                  className='h-6 filter brightness-0 invert' 
                  whileHover={{
                    rotate: 360,
                    scale: 1.2
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                />
              </motion.button>
            </div>
          </div>
          
          {/* Additional Info */}
          <motion.p
            className='text-gray-400 text-sm'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{delay:0.6, duration:0.8}}
          >
            No credit card required • Free to start • Generate unlimited images
          </motion.p>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default GenerateBtn