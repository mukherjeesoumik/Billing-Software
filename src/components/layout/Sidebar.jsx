import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

// Variants only needed for mobile animation
const sidebarVariants = {
  open: { x: 0, transition: { type: 'tween', ease: 'easeInOut', duration: 0.3 } },
  closed: { x: '-100%', transition: { type: 'tween', ease: 'easeInOut', duration: 0.3 } }
};

const SidebarContent = () => (
  <>
    <div className="px-6 pt-4 pb-4 mb-4 border-b border-gray-700/50">
      <h1 className="text-2xl font-bold text-white text-center">Craftivas Billing</h1>
    </div>
    <nav className="flex flex-col px-3 space-y-1">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) =>
            `flex items-center px-4 py-2.5 rounded-lg transition-colors duration-200 hover:bg-gray-700/60 hover:text-white ${
              isActive ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md font-semibold' : 'text-gray-400 font-medium'
            }`
          }
        >
          <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
          <span className="truncate">{item.name}</span>
        </NavLink>
      ))}
    </nav>
  </>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile toggle
  const [isMobile, setIsMobile] = useState(false); // State to track screen size
  const location = useLocation();

  // Effect to check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize); // Cleanup
  }, []);

  // Effect to close mobile sidebar on navigation
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]); // Rerun if path changes or screen size crosses breakpoint

  // Render different structure based on screen size
  if (isMobile) {
    // Mobile: Animated sidebar with toggle and overlay
    return (
      <>
        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800/60 backdrop-blur-sm text-white lg:hidden hover:bg-gray-700/80 transition-colors"
          aria-label="Toggle sidebar"
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>

        {/* Animated Sidebar */}
        <motion.aside 
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-5 bg-gradient-to-b from-[#1a163a] to-[#0f0c29] text-gray-300 shadow-lg border-r border-gray-700/50`} 
          variants={sidebarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <SidebarContent />
        </motion.aside>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && ( 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </>
    );
  } else {
    // Desktop: Static, always visible sidebar
    return (
      <aside 
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-5 bg-gradient-to-b from-[#1a163a] to-[#0f0c29] text-gray-300 shadow-lg border-r border-gray-700/50 translate-x-0`}
      >
        <SidebarContent />
      </aside>
    );
  }
};

export default Sidebar; 