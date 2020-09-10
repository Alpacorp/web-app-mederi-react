import React from 'react';
import Header from '../componentes/Header'
import Footer from '../componentes/Footer';
import '../styles/universal.css';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;
