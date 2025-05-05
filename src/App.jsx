import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { Dashboard, Auth } from "@/layouts"; // Remove old layouts
import { AnimatePresence } from 'framer-motion';

// Import New Layout and Pages
import MainLayout from '@/components/layout/MainLayout';
import { Home } from "@/pages/dashboard/home"; // Keep existing Home component
import Customers from '@/pages/Customers';
import Products from '@/pages/Products';
import Invoices from '@/pages/Invoices';
import Payments from '@/pages/Payments';
import Reports from '@/pages/Reports';
import Settings from '@/pages/Settings';
import SignIn from '@/pages/auth/SignIn';
import SignUp from '@/pages/auth/SignUp';

function App() {
  const location = useLocation();

  return (
    // AnimatePresence is needed for exit animations on route changes
    <AnimatePresence mode="wait">
      {/* 
        Keying the Routes component with location.pathname 
        ensures components remount or animate correctly on change.
        This is often needed when exit animations are used inside the Route elements.
      */}
      <Routes location={location} key={location.pathname}> 
        {/* Routes using the MainLayout (Sidebar + Navbar) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> {/* Dashboard Home */}
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Standalone Auth Routes */}
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />

        {/* Fallback route - Redirect to dashboard home */}
        {/* Consider adding a 404 page later */}
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    </AnimatePresence>
  );
}

export default App;
