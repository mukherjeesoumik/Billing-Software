import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
  Checkbox,
  IconButton
} from "@material-tailwind/react";
import { 
  ArrowRightIcon, 
  ExclamationTriangleIcon, 
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon
} from "@heroicons/react/24/outline";

const SignIn = () => {
  const [error, setError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: Implement actual sign-in logic
    setError('');
  };

  return (
    <div className="flex items-center min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl shadow-2xl border border-gray-700/50 bg-black/30 backdrop-blur-xl"
      >
        {/* Left Column: Sign In Form */}
        <div className="p-8 md:p-12">
          <Typography variant="h3" className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-bold">
            Craftivas Billing
          </Typography>
          <Typography variant="h5" color="white" className="mb-8 font-semibold">
            Welcome Back!
          </Typography>
          
          <motion.form 
            layout
            className="space-y-5" 
            onSubmit={handleSignIn}
          >
            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Input 
                label="Email Address" 
                variant="outlined"
                type="email" 
                name="email" 
                color="white"
                icon={<EnvelopeIcon className="h-5 w-5 text-gray-500" />}
                className="focus:!border-t-cyan-500"
                labelProps={{
                  className: "peer-focus:!text-cyan-500"
                }}
                containerProps={{ className: "min-w-full" }}
                required 
              />
            </motion.div>
            
            <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Input 
                label="Password" 
                variant="outlined"
                type={passwordShown ? "text" : "password"}
                name="password" 
                color="white"
                icon={<LockClosedIcon className="h-5 w-5 text-gray-500" />}
                className="focus:!border-t-cyan-500"
                labelProps={{
                  className: "peer-focus:!text-cyan-500"
                }}
                containerProps={{ className: "min-w-full" }}
                iconProps={{
                  children: (
                    <IconButton
                      variant="text"
                      color="gray"
                      size="sm"
                      onClick={togglePasswordVisiblity}
                      className="!absolute right-1 top-1 rounded"
                    >
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </IconButton>
                  )
                }}
                required 
              />
            </motion.div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400"
              >
                 <ExclamationTriangleIcon className="h-5 w-5" />
                 <Typography variant="small" className="font-medium">{error}</Typography>
              </motion.div>
            )}
            
            <div className="flex items-center justify-between -ml-2.5">
              <Checkbox label={<Typography color="gray" className="font-medium text-gray-400">Remember Me</Typography>} color="cyan" defaultChecked />
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Forgot Password?
              </Typography>
            </div>

            <Button 
              type="submit" 
              className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 hover:shadow-cyan-500/40 shadow-md hover:shadow-lg transition-all"
              fullWidth
            >
              Sign In
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </motion.form>

          <Typography color="gray" className="mt-8 text-center font-normal text-gray-400">
            Not a member?{' '}
            <Link to="/auth/sign-up" className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
              Sign Up
            </Link>
          </Typography>
        </div>

        {/* Right Column: Image */}
        <div className="hidden md:block relative">
          <img 
            src="/img/background-image.png" 
            alt="Sign In illustration" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-[#1a163a]/50 to-transparent"></div>
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
             className="absolute bottom-12 right-12 text-right text-white p-6 rounded-lg bg-black/50 backdrop-blur-md max-w-xs"
          >
             <Typography variant="h4" className="mb-2 font-semibold">Streamline Your Workflow</Typography>
             <Typography className="text-gray-300 text-sm">Manage billing, clients, and projects all in one place.</Typography>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn; 