import React, { useContext, useEffect, useState, useRef } from 'react'
import {assets} from '../assets/assets'
import {motion} from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { loadImage } from "canvas";

const ChevronIcon = ({ open }) => (
  <svg
    className={`h-5 transition-transform ${open ? "rotate-180" : ""}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

//Custom Dropdown 
const CustomDropdown = ({format = '',setFormat = () =>{},formats = []}) => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 text-white px-6 py-3 rounded-xl hover:bg-slate-700/50 transition-all duration-300 min-w-[140px]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className='flex justify-between items-center'>
          <span className="font-medium">{format}</span>
          <ChevronIcon open={open} />
        </div>
      </motion.button>

      {open && (
        <motion.div 
          ref={dropdownRef} 
          className="absolute top-full mt-2 w-full bg-slate-800/90 backdrop-blur-sm border border-purple-500/30 rounded-xl shadow-2xl z-50 overflow-hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {formats.map((fmt, index) => (
            <motion.div
              key={fmt}
              role="menuitem"
              tabIndex={0}
              onClick={() => {
                setFormat(fmt);
                setOpen(false);
              }}
              className="text-white px-6 py-3 hover:bg-purple-600/30 cursor-pointer font-medium transition-colors"
              whileHover={{ backgroundColor: 'rgba(147, 51, 234, 0.3)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {fmt}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

const Result = () => {

  const [image, setImage] = useState(assets.bannerimg1)
  const[isImageLoaded, setIsImageLoaded] = useState(false)
  const[loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [format,setFormat] = useState('PNG')
  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async(e) =>{
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  //Convert Image into different formats [JPEG, PNG, SVG, WebP]
  const convertImage = async (input, format) => {
    const image = await loadImage(input)
    const extension = format.toLowerCase()
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0)
    

    //Trigger image download
    const downloadImage = (blob) => {
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `image.${extension}`
      link.click()
      URL.revokeObjectURL(url)
    };

    if (extension === "svg") {
      const dataUrl = canvas.toDataURL("image/png")
      console.log(dataUrl)
      const svgContent = `
        <svg xmlns='http://www.w3.org/2000/svg' width='${image.width}' height='${image.height}'>
          <image href='${dataUrl}' width='${image.width}' height='${image.height}'/>
        </svg>`
      const blob = new Blob([svgContent], { type: "image/svg+xml" })
      downloadImage(blob)
    }else{
      canvas.toBlob((blob) => {
        if (blob) downloadImage(blob, extension)
        else console.error("Failed to convert canvas to blob.")
        }, `image/${extension}`)
    }
  };
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden'>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.04)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className='max-w-6xl mx-auto px-6 lg:px-8 py-12'>
        
        {/* Header Section */}
        <motion.div 
          className='text-center mb-12'
          initial={{opacity:0, y:50}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8}}
        >
          <motion.div 
            className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 text-sm text-purple-200 mb-6'
            initial={{opacity:0, scale:0.8}} 
            animate={{opacity:1, scale:1}} 
            transition={{delay:0.2, duration:0.6}}
          >
            <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
            <span className='font-medium'>AI Image Generator • Powered by Innovation</span>
          </motion.div>
          
          <motion.h1
            className='text-4xl lg:text-6xl font-bold mb-6'
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.3, duration:0.8}}
          >
            <span className='block text-white mb-2'>Create Your</span>
            <span className='block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent'>
              Masterpiece
            </span>
          </motion.h1>
          
          <motion.p
            className='text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed'
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:0.5, duration:0.8}}
          >
            Transform your imagination into stunning visuals with our advanced AI technology
          </motion.p>
        </motion.div>

        {/* Main Content Area */}
        <motion.form
          onSubmit={onSubmitHandler}
          className='space-y-8'
          initial={{opacity:0.2, y:100}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
        >
          
          {/* Image Display Section */}
          <div className='flex justify-center'>
            <motion.div 
              className='relative group'
              whileHover={{scale:1.02}}
              transition={{duration:0.3}}
            >
              {/* Glow Effect */}
              <div className='absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300'></div>
              
              {/* Image Container */}
              <div className='relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 max-w-lg'>
                <div className='relative overflow-hidden rounded-xl'>
                  <img 
                    src={image} 
                    alt="Generated artwork" 
                    className='w-full h-auto max-w-md rounded-xl shadow-2xl' 
                  />
                  
                  {/* Loading Progress Bar */}
                  {loading && (
                    <div className='absolute bottom-0 left-0 right-0 h-2 bg-black/30 rounded-b-xl overflow-hidden'>
                      <motion.div 
                        className='h-full bg-gradient-to-r from-purple-500 to-pink-500'
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 10, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
                
                {/* Loading Text */}
                {loading && (
                  <motion.div 
                    className='mt-4 text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className='flex items-center justify-center gap-2 text-purple-300'>
                      <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce'></div>
                      <div className='w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100'></div>
                      <div className='w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200'></div>
                      <span className='ml-2 font-medium'>Creating your masterpiece...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Input Section */}
          {!isImageLoaded && (
            <motion.div 
              className='max-w-4xl mx-auto'
              initial={{opacity:0, y:30}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.7, duration:0.8}}
            >
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5'></div>
                <div className='relative'>
                  <h3 className='text-2xl font-bold text-white mb-4 text-center'>
                    Describe Your Vision
                  </h3>
                  <p className='text-gray-300 text-center mb-6'>
                    Be as detailed as possible to get the best results
                  </p>
                  
                  <div className='flex flex-col sm:flex-row gap-4 bg-slate-900/50 rounded-xl p-4 border border-purple-500/20'>
                    <input 
                      onChange={e => setInput(e.target.value)} 
                      value={input}
                      type="text" 
                      placeholder='e.g., A majestic dragon flying over a mystical forest at sunset...' 
                      className='flex-1 bg-transparent outline-none text-white placeholder-gray-400 px-4 py-3 text-lg'
                    />
                    <motion.button 
                      type='submit' 
                      className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 whitespace-nowrap'
                      whileHover={{scale:1.05}}
                      whileTap={{scale:0.95}}
                      disabled={loading}
                    >
                      {loading ? 'Generating...' : 'Generate ✨'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Buttons Section */}
          {isImageLoaded && (
            <motion.div 
              className='max-w-2xl mx-auto'
              initial={{opacity:0, y:30}}
              animate={{opacity:1, y:0}}
              transition={{delay:0.3, duration:0.8}}
            >
              <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5'></div>
                <div className='relative space-y-6'>
                  
                  <div className='text-center'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      Your Masterpiece is Ready!
                    </h3>
                    <p className='text-gray-300'>
                      Choose your next action below
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                    <motion.button
                      onClick={() => setIsImageLoaded(false)}
                      className='bg-transparent border-2 border-purple-500/50 text-purple-300 px-8 py-3 rounded-xl font-semibold hover:bg-purple-500/20 transition-all duration-300'
                      whileHover={{scale:1.05}}
                      whileTap={{scale:0.95}}
                    >
                      🎨 Generate Another
                    </motion.button>
                    
                    <CustomDropdown 
                      format={format} 
                      setFormat={setFormat} 
                      formats={["JPEG", "PNG", "WebP", "SVG"]}
                    />
                  </div>
                  
                  {/* Download Button */}
                  <div className='text-center pt-4'>
                    <motion.button
                      onClick={async (e) => {
                        e.preventDefault();
                        await convertImage(image, format);
                      }}
                      className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
                      whileHover={{scale:1.05}}
                      whileTap={{scale:0.95}}
                    >
                      📥 Download as {format}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.form>

        {/* Tips Section */}
        <motion.div 
          className='mt-16 text-center'
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{delay:1, duration:0.8}}
        >
          <div className='bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 max-w-4xl mx-auto'>
            <h3 className='text-xl font-bold text-white mb-6'>
              💡 Pro Tips for Better Results
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-left'>
              <div className='bg-purple-500/10 rounded-lg p-4 border border-purple-500/20'>
                <div className='text-purple-300 font-semibold mb-2'>🎯 Be Specific</div>
                <p className='text-gray-300 text-sm'>Include details about style, colors, lighting, and mood</p>
              </div>
              <div className='bg-pink-500/10 rounded-lg p-4 border border-pink-500/20'>
                <div className='text-pink-300 font-semibold mb-2'>🌟 Add Context</div>
                <p className='text-gray-300 text-sm'>Mention the setting, time of day, and atmosphere</p>
              </div>
              <div className='bg-blue-500/10 rounded-lg p-4 border border-blue-500/20'>
                <div className='text-blue-300 font-semibold mb-2'>🎨 Reference Styles</div>
                <p className='text-gray-300 text-sm'>Try "in the style of..." or mention art movements</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default Result