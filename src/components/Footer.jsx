import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    
                    {/* Brand Section */}
                    <motion.div 
                        className="lg:col-span-5"
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        
                        transition={{duration:0.6}}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <img src={assets.logo_icon} alt="" className="w-6 h-6 filter brightness-0 invert" />
                            </div>
                            <span className="text-2xl font-bold text-white">iNKiMAGE</span>
                        </div>
                        
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                            Turn your imagination into visual art in seconds with our AI-powered platform. 
                            <span className="text-purple-300 font-semibold"> Create, innovate, inspire.</span>
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-4 mb-8">
                            <motion.a 
                                href="https://github.com/mkamrandev" 
                                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center hover:border-purple-500/50 transition-all duration-300"
                                whileHover={{scale: 1.1, y: -2}}
                                whileTap={{scale: 0.95}}
                            >
                                <img src={assets.github_icon} alt="github" className="w-5 h-5 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" />
                            </motion.a>
                            <motion.a 
                                href="https://www.linkedin.com/in/mkamrandev/" 
                                className="group w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl flex items-center justify-center hover:border-purple-500/50 transition-all duration-300"
                                whileHover={{scale: 1.1, y: -2}}
                                whileTap={{scale: 0.95}}
                            >
                                <img src={assets.linkedin_icon} alt="linkedin" className="w-5 h-5 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" />
                            </motion.a>
                        </div>
                        
                        {/* Newsletter */}
                        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Subscribe for the latest updates and features.
                            </p>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 text-sm text-white bg-slate-700/50 border border-purple-500/30 rounded-xl focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 backdrop-blur-sm"
                                />
                                <motion.button
                                    type="submit"
                                    className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 whitespace-nowrap"
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                >
                                    Subscribe
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.6, delay:0.1}}
                    >
                        <h3 className="text-sm font-semibold text-purple-300 mb-6 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Gallery', path: '/gallery' },
                                { name: 'Features', path: '/features' },
                                { name: 'Pricing', path: '/buy' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.path} 
                                        className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support */}
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.6, delay:0.2}}
                    >
                        <h3 className="text-sm font-semibold text-purple-300 mb-6 uppercase tracking-wider">Support</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Help Center', path: '#' },
                                { name: 'Contact Us', path: '#' },
                                { name: 'Privacy Policy', path: '#' },
                                { name: 'Terms', path: '#' }
                            ].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.path} 
                                        className="text-gray-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                        className="lg:col-span-3"
                        initial={{opacity:0, y:20}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.6, delay:0.3}}
                    >
                        <h3 className="text-sm font-semibold text-purple-300 mb-6 uppercase tracking-wider">Our Impact</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { number: '1M+', label: 'Images Created' },
                                { number: '50K+', label: 'Happy Users' },
                                { number: '99%', label: 'Satisfaction' },
                                { number: '24/7', label: 'Available' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                                    whileHover={{scale: 1.05}}
                                >
                                    <div className="text-2xl font-bold text-purple-400 mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    className="mt-16 pt-8 border-t border-purple-500/20"
                    initial={{opacity:0, y:20}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.6, delay:0.4}}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} inkImage. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-400">Team Lead @iCreativez</span>
                            </div>
                            <div className="text-sm text-gray-400">
                                Made by MKamran Developer
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;