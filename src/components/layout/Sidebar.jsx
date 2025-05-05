import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, UsersIcon, CubeIcon, DocumentTextIcon, CreditCardIcon, ChartBarIcon, Cog6ToothIcon, Bars3Icon, XMarkIcon 
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Dashboard', icon: HomeIcon, path: '/' },
  { name: 'Customers', icon: UsersIcon, path: '/customers' },
  { name: 'Products', icon: CubeIcon, path: '/products' },
  { name: 'Invoices', icon: DocumentTextIcon, path: '/invoices' },
  { name: 'Payments', icon: CreditCardIcon, path: '/payments' },
  { name: 'Reports', icon: ChartBarIcon, path: '/reports' },
  { name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
];

const sidebarVariants = {
  open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Default open on desktop

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800/50 text-white lg:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <motion.aside 
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-gradient-to-b from-[#1a163a] to-[#0f0c29] text-gray-300 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:pt-5 shadow-lg border-r border-gray-700/50`}
        variants={sidebarVariants}
        initial={false} // Don't animate initial load on desktop
        animate={isOpen ? "open" : "closed"} // Only animate based on state for mobile
        // On large screens, it's always 'open' visually due to lg:translate-x-0
      >
        <div className="px-6 py-4 mb-4 border-b border-gray-700/50">
          <h1 className="text-2xl font-bold text-white text-center">Craftivas Billing</h1>
        </div>
        <nav className="flex flex-col px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end // Use 'end' for the dashboard route to avoid matching nested routes
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 my-1 rounded-lg transition-colors duration-200 hover:bg-gray-700/50 hover:text-white ${
                  isActive ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md font-medium' : ''
                }`
              }
              onClick={() => setIsOpen(false)} // Close sidebar on mobile after click
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </motion.aside>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar; 