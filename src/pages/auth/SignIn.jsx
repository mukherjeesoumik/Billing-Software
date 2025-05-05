import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50"
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Craftivas Billing</h1>
        <h2 className="text-xl font-semibold text-center mb-6">Sign In</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              className="w-full px-4 py-2 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-cyan-400 hover:text-cyan-300">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full py-2.5 px-4 rounded-lg font-semibold shadow-lg transition-all bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a163a] focus:ring-cyan-400"
            >
              Sign In
            </motion.button>
          </div>
        </form>
        <p className="mt-8 text-center text-sm text-gray-400">
          Not a member? {' '}
          <Link to="/auth/sign-up" className="font-medium text-cyan-400 hover:text-cyan-300">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn; 