import React from 'react';
import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Navbar = () => {
  // Placeholder for auth status
  const isLoggedIn = false; // TODO: Replace with actual auth state

  return (
    <nav className="fixed top-0 left-0 lg:left-64 right-0 z-30 bg-[#1a163a]/80 backdrop-blur-md h-16 border-b border-gray-700/50 flex items-center justify-between px-6">
      {/* Left side - Search Bar (Placeholder) */}
      <div className="relative w-full max-w-xs hidden md:block">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-gray-700"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      {/* Right side - Icons & User */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Search Icon for Mobile */}
        <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 md:hidden">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>
        
        <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50">
          <BellIcon className="w-6 h-6" />
          {/* TODO: Add notification indicator */}
        </button>
        <Link to="/settings" className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50">
          <Cog6ToothIcon className="w-6 h-6" />
        </Link>

        {/* User Avatar / Sign In Button */}
        <div className="relative">
          {isLoggedIn ? (
            // TODO: Replace with actual user avatar and dropdown menu
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
              U
            </button>
          ) : (
            <Link to="/auth/sign-in">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 transition-colors shadow-md"
              >
                Sign In
              </motion.button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 