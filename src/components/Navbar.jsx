import React, { useContext, useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const profileRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Community', path: '/gallery' },
        { name: 'How It Works', path: '/features' },   
        { name: 'Billing', path: '/buy' },
    ];

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('[aria-label="Toggle menu"]')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle keyboard navigation
    const handleKeyDown = (e, action) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

    // Handle search
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery('');
        }
    };

    // Toggle mobile menu
    const toggleMobileMenu = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsOpen(!isOpen);
    };

    // Close mobile menu
    const closeMobileMenu = () => {
        setIsOpen(false);
    };

    // Handle credit check
    const handleCreateImage = () => {
        if (credit > 0) {
            navigate('/result');
            closeMobileMenu();
        } else {
            toast.info('You need credits to create new images. Redirecting to upgrade...', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setTimeout(() => {
                navigate('/buy');
                closeMobileMenu();
            }, 1000);
        }
    };

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-500/30' id='nav-bar' role="navigation">
            <div className='max-w-6xl mx-auto px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    
                    {/* Logo Section */}
                    <Link to='/' className="flex items-center group" aria-label="Imagify Home">
                        <div className="relative">
                            <img 
                                src={assets.logo} 
                                alt="Imagify Logo" 
                                className="w-32 sm:w-36 lg:w-40 brightness-110 group-hover:brightness-125 transition-all duration-300" 
                            />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 group ${
                                    location.pathname === item.path
                                        ? 'text-purple-300'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                                aria-current={location.pathname === item.path ? 'page' : undefined}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* User Section */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-4">
                                
                                {/* Create Button */}
                                <button 
                                    onClick={() => navigate('/result')}
                                    className="hidden sm:flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                                    aria-label="Create new image"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    <span className="text-sm font-medium">Create</span>
                                </button>
                                
                                {/* Credits Display */}
                                <div className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-slate-800/50 rounded-full border border-purple-500/30">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-purple-300">
                                        {credit} Credits
                                    </span>
                                </div>

                                {/* Profile Dropdown */}
                                <div className="relative" ref={profileRef}>
                                    <button 
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        onKeyDown={(e) => handleKeyDown(e, () => setIsProfileOpen(!isProfileOpen))}
                                        className="flex items-center space-x-2 p-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                                        aria-label="User menu"
                                        aria-expanded={isProfileOpen}
                                    >
                                        <img 
                                            src={user.avatar || assets.profile_icon}
                                            alt="Profile" 
                                            className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                                        />
                                        <svg className="hidden sm:block w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    
                                    {/* Profile Dropdown Menu */}
                                    <div 
                                        className={`absolute right-0 mt-3 w-56 bg-slate-900/95 backdrop-blur-lg rounded-2xl py-2 shadow-2xl border border-purple-500/30 transition-all duration-300 ${
                                            isProfileOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                                        }`}
                                        role="menu"
                                        onClick={() => setIsProfileOpen(false)}
                                    >
                                        <div className="px-4 py-3 border-b border-purple-500/30">
                                            <p className="text-sm font-semibold text-white">{user.name}</p>
                                            <p className="text-xs text-purple-300">{user.email}</p>
                                        </div>
                                        <Link 
                                            to="/dashboard" 
                                            className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 transition-colors"
                                            role="menuitem"
                                        >
                                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                            Dashboard
                                        </Link>
                                        <Link 
                                            to="/settings" 
                                            className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 transition-colors"
                                            role="menuitem"
                                        >
                                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Settings
                                        </Link>
                                        <button 
                                            onClick={() => navigate('/buy')} 
                                            className="flex items-center w-full text-left px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-purple-600/20 transition-colors"
                                            role="menuitem"
                                        >
                                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            Upgrade Plan
                                        </button>
                                        <button 
                                            onClick={logout} 
                                            className="flex items-center w-full text-left px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-600/20 transition-colors"
                                            role="menuitem"
                                        >
                                            <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <button
                                onClick={() => setShowLogin(true)}
                                onKeyDown={(e) => handleKeyDown(e, () => setShowLogin(true))}
                                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                                aria-label="Login"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span>Login</span>
                            </button>
                        )}

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                onKeyDown={(e) => handleKeyDown(e, toggleMobileMenu)}
                                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200"
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                                aria-controls="mobile-menu"
                                tabIndex={0}
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={mobileMenuRef}
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-4 py-6 space-y-3 bg-slate-800/50 backdrop-blur-lg rounded-2xl mx-4 mb-4 border border-purple-500/30">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                    location.pathname === item.path
                                        ? 'text-purple-300 bg-purple-600/20 shadow-lg'
                                        : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                                }`}
                                onClick={closeMobileMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        {user ? (
                            <>
                                <div className="flex items-center justify-between px-4 py-3 bg-slate-700/50 rounded-xl">
                                    <span className="text-sm font-medium text-purple-300">
                                        Credits: {credit}
                                    </span>
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                </div>
                                <button
                                    onClick={handleCreateImage}
                                    className="w-full text-left px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl transition-all duration-200 shadow-lg"
                                >
                                    Create New Image
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    setShowLogin(true);
                                    closeMobileMenu();
                                }}
                                className="w-full text-left px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl transition-all duration-200 shadow-lg"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;