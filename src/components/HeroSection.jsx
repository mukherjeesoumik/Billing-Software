import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@material-tailwind/react";
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiTypescript, SiVite
} from 'react-icons/si'; // Using react-icons for tech logos

const icons = [
  { id: 1, icon: SiReact, className: "text-cyan-400", pos: { top: '5%', left: '15%' } },
  { id: 2, icon: SiNodedotjs, className: "text-green-500", pos: { top: '20%', right: '10%' } },
  { id: 3, icon: SiTailwindcss, className: "text-teal-400", pos: { bottom: '15%', left: '25%' } },
  { id: 4, icon: SiJavascript, className: "text-yellow-400", pos: { top: '60%', left: '5%' } },
  { id: 5, icon: SiTypescript, className: "text-blue-500", pos: { bottom: '10%', right: '20%' } },
  { id: 6, icon: SiVite, className: "text-purple-500", pos: { top: '40%', right: '35%' } },
];

const iconVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    y: [0, -10, 0], // Floating effect
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      y: {
        duration: 3 + Math.random() * 2, // Vary float speed
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }),
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: { type: "spring", stiffness: 300 },
  }
};

const textVariant = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay } 
  },
});

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-4">
      {/* Subtle Background Elements (Optional: Add stars/particles here if needed) */}
      {/* <div className="absolute inset-0 z-0 opacity-10"> ... stars ... </div> */}

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
        {/* Text Content */}
        <div className="lg:w-1/2 max-w-2xl">
          <motion.h1 
            variants={textVariant(0)}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
          >
            Manage Invoices. 
            <br /> Simplify <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Billing.</span>
          </motion.h1>
          <motion.p 
            variants={textVariant(0.2)}
            initial="initial"
            animate="animate"
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Stop wasting time on scattered tools. Streamline your invoicing process and get paid faster with Craftivas Billing.
          </motion.p>
          <motion.div 
            variants={textVariant(0.4)}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 rounded-lg font-semibold shadow-lg transition-all bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a163a] focus:ring-cyan-400"
            >
              Create Invoice
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 rounded-lg font-semibold shadow-lg transition-all bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1a163a] focus:ring-teal-400"
            >
              Add Customer
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Icons Area */}
        <div className="relative w-full lg:w-1/2 h-64 lg:h-96 hidden lg:block"> 
          {/* Hide on small screens for simplicity, adjust if needed */}
          {icons.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className="absolute z-10 p-3 bg-white/5 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center"
                style={item.pos}
                custom={i}
                variants={iconVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <IconComponent className={`w-6 h-6 md:w-8 md:h-8 ${item.className}`} />
              </motion.div>
            );
          })}
          {/* Optional: Central glowing element/portal */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl"></div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// Helper for radial gradient (if needed directly in Tailwind)
// Add to tailwind.config.js -> theme -> extend:
// backgroundImage: {
//   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
// } 