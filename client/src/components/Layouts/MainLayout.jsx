import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../Header/MainHeader';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main>
        <MainHeader />
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default MainLayout;