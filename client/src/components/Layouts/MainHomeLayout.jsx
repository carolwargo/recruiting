import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';


const HomeLayout = () => {
  return (
    <div className="service-layout">
      <main>
        <Header />
        <Outlet />
        <Footer />  
      </main>
    </div>
  );
};

export default HomeLayout;
