import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { user, token, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    credits: 0,
    imagesGenerated: 0,
    favoriteStyles: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!token) {
        setError('Authentication required. Please login.');
        setIsLoading(false);
        navigate('/');
        return;
      }

      try {
        const [creditsResponse, generationsResponse] = await Promise.all([
          axios.get(`${backendUrl}/api/user/credits`, {
            headers: { 
              token,
              'Content-Type': 'application/json'
            }
          }),
          axios.get(`${backendUrl}/api/image/user-generations`, {
            headers: { 
              token,
              'Content-Type': 'application/json'
            }
          })
        ]);

        if (creditsResponse.data.success && generationsResponse.data.success) {
          setStats({
            credits: creditsResponse.data.credits || 0,
            imagesGenerated: generationsResponse.data.totalGenerations || 0,
            favoriteStyles: generationsResponse.data.uniqueStyles || 0
          });
          setError(null);
        } else {
          const errorMessage = creditsResponse.data.message || generationsResponse.data.message || 'Failed to fetch dashboard data';
          setError(errorMessage);
          if (errorMessage.includes('Authentication') || errorMessage.includes('login')) {
            navigate('/');
          }
          toast.error(errorMessage);
        }
      } catch (error) {
        const errorMessage = error.response?.data?.message || 'Failed to load dashboard data';
        setError(errorMessage);
        if (error.response?.status === 401 || errorMessage.includes('Authentication') || errorMessage.includes('login')) {
          navigate('/');
        }
        toast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, [token, backendUrl, navigate]);

  const handleGenerateClick = () => {
    navigate('/result');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div 
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-16 h-16 border-4 border-purple-500/30 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div 
          className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-400 text-2xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-red-400 mb-4">Dashboard Error</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
          >
            Retry Loading
          </button>
        </motion.div>
      </div>
    );
  }

  const actionItems = [
    { 
      icon: '🎨', 
      title: 'Create Magic', 
      description: 'Generate stunning AI artwork',
      color: 'from-purple-600 to-pink-600',
      action: handleGenerateClick
    },
    { 
      icon: '🖼️', 
      title: 'Art Gallery', 
      description: 'Browse your masterpieces',
      color: 'from-blue-600 to-cyan-600',
      link: '/gallery'
    },
    { 
      icon: '⭐', 
      title: 'Power Up', 
      description: 'Get more credits',
      color: 'from-orange-600 to-yellow-600',
      link: '/buy'
    },
    { 
      icon: '✨', 
      title: 'Discover', 
      description: 'Explore new features',
      color: 'from-green-600 to-teal-600',
      link: '/features'
    }
  ];

  const inspirationCards = [
    {
      title: 'Prompt Mastery',
      description: 'Craft detailed prompts with lighting, mood, and style specifics',
      icon: '🎯',
      tip: 'Be specific about colors, atmosphere, and artistic techniques'
    },
    {
      title: 'Style Fusion',
      description: 'Blend different art movements for unique creations',
      icon: '🌈',
      tip: 'Try mixing "Renaissance portrait with neon cyberpunk elements"'
    },
    {
      title: 'Creative Flow',
      description: 'Reference famous artists and historical periods',
      icon: '⚡',
      tip: 'Use phrases like "in the style of..." for artistic inspiration'
    }
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.04)_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-12'>
        
        {/* Hero Welcome Section */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 text-sm text-purple-200 mb-8'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
            <span className='font-medium'>Creator Dashboard • AI Powered</span>
          </motion.div>
          
          <motion.h1
            className='text-5xl lg:text-7xl font-bold mb-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className='block text-white mb-2'>Welcome back,</span>
            <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
              {user?.name}
            </span>
          </motion.h1>
          
          <motion.p
            className='text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Your creative universe awaits. Transform ideas into 
            <span className='text-purple-300 font-semibold'> visual masterpieces</span>
          </motion.p>
        </motion.div>

        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {[
            { label: 'Available Credits', value: stats.credits, icon: '💎', color: 'from-purple-600 to-pink-600' },
            { label: 'Images Created', value: stats.imagesGenerated, icon: '🎨', color: 'from-blue-600 to-cyan-600' },
            { label: 'Styles Mastered', value: stats.favoriteStyles, icon: '🌟', color: 'from-orange-600 to-yellow-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className='group relative'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.2) }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300'></div>
              <div className='relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center'>
                <div className='text-4xl mb-4'>{stat.icon}</div>
                <div className='text-4xl font-bold text-white mb-2'>{stat.value}</div>
                <div className='text-gray-400 font-medium'>{stat.label}</div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {actionItems.map((item, index) => (
            <motion.div
              key={index}
              className='group relative'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + (index * 0.1) }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300`}></div>
              
              {item.link ? (
                <Link 
                  to={item.link}
                  className='relative block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 h-full'
                >
                  <div className='text-3xl mb-4'>{item.icon}</div>
                  <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors'>
                    {item.description}
                  </p>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </Link>
              ) : (
                <button 
                  onClick={item.action}
                  className='relative w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 h-full text-left'
                >
                  <div className='text-3xl mb-4'>{item.icon}</div>
                  <h3 className='text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors'>
                    {item.description}
                  </p>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Inspiration Section */}
        <motion.div
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Creative <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>Inspiration</span>
            </h2>
            <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
              Master the art of AI generation with these pro techniques
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {inspirationCards.map((card, index) => (
              <motion.div
                key={index}
                className='group relative'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + (index * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300'></div>
                <div className='relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30'>
                  <div className='text-3xl mb-4'>{card.icon}</div>
                  <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors'>
                    {card.title}
                  </h3>
                  <p className='text-gray-400 mb-4 group-hover:text-gray-300 transition-colors'>
                    {card.description}
                  </p>
                  <div className='bg-purple-500/10 rounded-lg p-3 border border-purple-500/20'>
                    <p className='text-purple-200 text-sm font-medium'>💡 {card.tip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10'></div>
            <div className='relative max-w-2xl mx-auto'>
              <h3 className='text-3xl font-bold text-white mb-6'>
                Ready to Create Something 
                <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'> Amazing?</span>
              </h3>
              <p className='text-gray-300 text-lg mb-8'>
                Your next masterpiece is just a click away. Let's bring your imagination to life.
              </p>
              <motion.button
                onClick={handleGenerateClick}
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Creating Now ✨
              </motion.button>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Dashboard;