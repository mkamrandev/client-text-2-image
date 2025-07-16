import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [state, setState] = useState('Login')
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {

      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setShowLogin(false)
          navigate('/dashboard')
        } else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

        if (data.success) {
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
          navigate('/dashboard')
        } else {
          toast.error(data.message)
        }

      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const navbar = document.getElementById('nav-bar')
    navbar.style.opacity = 0.05
    return () => {
      document.body.style.overflow = 'unset';
      navbar.style.opacity = 1
    }
  }, [])

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-[9999] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex justify-center items-center'>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className='absolute top-20 left-20 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30'
        animate={{y: [0, -10, 0], rotate: [0, 360]}}
        transition={{duration: 6, repeat: Infinity}}
      />
      <motion.div 
        className='absolute bottom-20 right-20 w-12 h-12 bg-pink-500/20 rounded-full backdrop-blur-sm border border-pink-400/30'
        animate={{y: [0, 10, 0], rotate: [360, 0]}}
        transition={{duration: 4, repeat: Infinity, delay: 1}}
      />
      <motion.div 
        className='absolute top-1/2 left-10 w-8 h-8 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30'
        animate={{x: [0, 15, 0], rotate: [0, 180, 360]}}
        transition={{duration: 5, repeat: Infinity, delay: 2}}
      />

      <motion.form onSubmit={onSubmitHandler}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className='relative bg-slate-800/30 backdrop-blur-xl p-10 rounded-3xl border border-purple-500/30 shadow-2xl max-w-md w-full mx-4'
      >
        
        {/* Glow Effect */}
        <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20'></div>
        
        <div className='relative'>
          {/* Header */}
          <motion.div 
            className='text-center mb-8'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className='text-3xl font-bold text-white mb-2'>{state}</h1>
            <p className='text-gray-300 text-sm'>
              {state === 'Login' ? 'Welcome back! Please sign in to continue' : 'Create your account to get started'}
            </p>
          </motion.div>

          {/* Form Fields */}
          <div className='space-y-6'>
            
            {state !== 'Login' &&
              <motion.div 
                className='relative'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-sm'></div>
                <div className='relative bg-slate-700/50 backdrop-blur-sm border border-purple-400/30 px-6 py-4 flex items-center gap-4 rounded-2xl focus-within:border-purple-400/60 transition-all duration-300'>
                  <img src={assets.user_icon} alt="" className='w-5 h-5 opacity-70' />
                  <input 
                    onChange={e => setName(e.target.value)} 
                    value={name} 
                    type="text" 
                    className='flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm' 
                    placeholder='Full Name' 
                    required 
                  />
                </div>
              </motion.div>
            }

            <motion.div 
              className='relative'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: state === 'Login' ? 0.3 : 0.4 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-sm'></div>
              <div className='relative bg-slate-700/50 backdrop-blur-sm border border-purple-400/30 px-6 py-4 flex items-center gap-4 rounded-2xl focus-within:border-purple-400/60 transition-all duration-300'>
                <img src={assets.email_icon} alt="" className='w-5 h-5 opacity-70' />
                <input 
                  onChange={e => setEmail(e.target.value)} 
                  value={email} 
                  type="email" 
                  className='flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm' 
                  placeholder='Email address' 
                  required 
                />
              </div>
            </motion.div>

            <motion.div 
              className='relative'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: state === 'Login' ? 0.4 : 0.5 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-sm'></div>
              <div className='relative bg-slate-700/50 backdrop-blur-sm border border-purple-400/30 px-6 py-4 flex items-center gap-4 rounded-2xl focus-within:border-purple-400/60 transition-all duration-300'>
                <img src={assets.lock_icon} alt="" className='w-5 h-5 opacity-70' />
                <input 
                  onChange={e => setPassword(e.target.value)} 
                  value={password} 
                  type="password" 
                  className='flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-sm' 
                  placeholder='Password' 
                  required 
                />
              </div>
            </motion.div>

          </div>

          {/* Forgot Password */}
          <motion.p 
            className='text-sm text-purple-300 hover:text-purple-200 my-6 cursor-pointer transition-colors duration-200'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Forgot password?
          </motion.p>

          {/* Submit Button */}
          <motion.button 
            type='submit'
            className='group relative w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative flex items-center justify-center gap-2'>
              <span>{state === 'Login' ? 'Sign In' : 'Create Account'}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <img className='h-5 w-5' src={assets.star_group} alt="" />
              </motion.div>
            </div>
          </motion.button>

          {/* Toggle Login/Signup */}
          <motion.div 
            className='text-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {state === 'Login' ? 
              <p className='text-gray-300 text-sm'>
                Don't have an account? 
                <span 
                  className='text-purple-300 hover:text-purple-200 cursor-pointer font-semibold ml-1 transition-colors duration-200' 
                  onClick={() => setState('Sign Up')}
                >
                  Sign Up
                </span>
              </p>
              :
              <p className='text-gray-300 text-sm'>
                Already have an account? 
                <span 
                  className='text-purple-300 hover:text-purple-200 cursor-pointer font-semibold ml-1 transition-colors duration-200' 
                  onClick={() => setState('Login')}
                >
                  Sign In
                </span>
              </p>
            }
          </motion.div>

        </div>

        {/* Close Button */}
        <motion.button
          onClick={() => setShowLogin(false)}
          className='absolute top-6 right-6 w-10 h-10 bg-slate-700/50 backdrop-blur-sm border border-purple-400/30 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400/60 transition-all duration-200'
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={assets.cross_icon} alt="" className='w-4 h-4' />
        </motion.button>

      </motion.form>

    </div>
  )
}

export default Login