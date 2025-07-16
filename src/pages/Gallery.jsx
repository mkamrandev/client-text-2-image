import React, { useState, useEffect, useContext } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Gallery = () => {
  const { backendUrl, token } = useContext(AppContext)
  const [generations, setGenerations] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')

  // Fetch all user generations
  const fetchGenerations = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${backendUrl}/api/image/all-user-generations`, {
        headers: { 
              token,
              'Content-Type': 'application/json'
            }
      })
      
      if (response.data.success) {
        setGenerations(response.data.generations)
      } else {
        toast.error('Failed to fetch gallery images')
      }
    } catch (error) {
      console.error('Error fetching generations:', error)
      toast.error('Error loading gallery')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGenerations()
  }, [])

  // Filter generations based on selected filter
  const filteredGenerations = generations.filter(gen => {
    if (filter === 'all') return true
    if (filter === 'recent') {
      const today = new Date()
      const genDate = new Date(gen.createdAt)
      return today - genDate < 7 * 24 * 60 * 60 * 1000 // Last 7 days
    }
    return true
  })

  // Image Modal Component
  const ImageModal = ({ image, onClose }) => {
    if (!image) return null

    return (
      <motion.div 
        className='fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className='relative max-w-4xl max-h-[90vh] bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-purple-500/30 overflow-hidden'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='relative'>
            <img 
              src={image.imageUrl} 
              alt={image.prompt}
              className='w-full h-auto max-h-[70vh] object-contain'
            />
            <button
              onClick={onClose}
              className='absolute top-4 right-4 w-10 h-10 bg-slate-700/50 backdrop-blur-sm border border-purple-400/30 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-400/60 transition-all duration-200'
            >
              <img src={assets.cross_icon} alt="" className='w-4 h-4' />
            </button>
          </div>
          
          <div className='p-6 space-y-4'>
            <h3 className='text-xl font-semibold text-white'>{image.prompt}</h3>
            <div className='flex items-center justify-between text-sm text-gray-300'>
              <span>Created by: <span className='text-purple-300 font-semibold'>{image.user.name}</span></span>
              <span>{new Date(image.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  // Loading Component
  const LoadingGrid = () => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
      {[...Array(8)].map((_, index) => (
        <div key={index} className='bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-4 animate-pulse'>
          <div className='bg-slate-700/50 h-48 rounded-xl mb-4'></div>
          <div className='space-y-2'>
            <div className='h-4 bg-slate-700/50 rounded w-3/4'></div>
            <div className='h-3 bg-slate-700/50 rounded w-1/2'></div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className='absolute top-20 right-20 w-16 h-16 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-400/30'
        animate={{y: [0, -15, 0], rotate: [0, 360]}}
        transition={{duration: 8, repeat: Infinity}}
      />
      <motion.div 
        className='absolute bottom-20 left-20 w-12 h-12 bg-pink-500/20 rounded-full backdrop-blur-sm border border-pink-400/30'
        animate={{y: [0, 15, 0], rotate: [360, 0]}}
        transition={{duration: 6, repeat: Infinity, delay: 2}}
      />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20'>
        
        {/* Header Section */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl lg:text-6xl font-bold mb-4'>
            <span className='text-white'>AI </span>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
              Gallery
            </span>
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Discover amazing AI-generated artwork created by our community
          </p>
          
          {/* Stats */}
          <div className='flex justify-center gap-8 mt-8'>
            <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl px-6 py-3 border border-purple-500/20'>
              <div className='text-2xl font-bold text-white'>{generations.length}</div>
              <div className='text-sm text-gray-400'>Total Images</div>
            </div>
            <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl px-6 py-3 border border-purple-500/20'>
              <div className='text-2xl font-bold text-white'>{new Set(generations.map(g => g.user._id)).size}</div>
              <div className='text-sm text-gray-400'>Artists</div>
            </div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className='flex justify-center gap-4 mb-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                : 'bg-slate-800/30 backdrop-blur-sm border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400/60'
            }`}
          >
            All Images
          </button>
          <button
            onClick={() => setFilter('recent')}
            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              filter === 'recent' 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                : 'bg-slate-800/30 backdrop-blur-sm border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400/60'
            }`}
          >
            Recent
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {loading ? (
            <LoadingGrid />
          ) : filteredGenerations.length === 0 ? (
            <div className='text-center py-20'>
              <div className='bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20 max-w-md mx-auto'>
                <div className='text-6xl mb-4'>🎨</div>
                <h3 className='text-2xl font-bold text-white mb-4'>No Images Found</h3>
                <p className='text-gray-400'>Be the first to create amazing AI artwork!</p>
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {filteredGenerations.map((generation, index) => (
                <motion.div
                  key={generation._id}
                  className='group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 overflow-hidden cursor-pointer'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedImage(generation)}
                >
                  
                  {/* Glow Effect */}
                  <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
                  
                  <div className='relative p-4'>
                    {/* Image Container */}
                    <div className='relative overflow-hidden rounded-xl mb-4'>
                      <img
                        src={generation.imageUrl}
                        alt={generation.prompt}
                        className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      
                      {/* Hover Overlay */}
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='bg-white/20 backdrop-blur-sm rounded-full p-3'>
                          <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className='space-y-2'>
                      <h3 className='text-white font-semibold text-sm line-clamp-2 group-hover:text-purple-300 transition-colors duration-300'>
                        {generation.prompt}
                      </h3>
                      <div className='flex items-center justify-between text-xs text-gray-400'>
                        <span className='flex items-center gap-1'>
                          <div className='w-3 h-3 bg-purple-500 rounded-full'></div>
                          {generation.user.name}
                        </span>
                        <span>{new Date(generation.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Load More Button */}
        {!loading && filteredGenerations.length > 0 && (
          <motion.div 
            className='text-center mt-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300'>
              Load More Images
            </button>
          </motion.div>
        )}

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

    </div>
  )
}

export default Gallery