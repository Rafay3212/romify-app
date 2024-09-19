import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const location = useLocation();
  
  // Define routes where header and footer should not be shown
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div>
      {/* Conditionally render Header and Footer */}
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default Layout;
