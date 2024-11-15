import React from 'react';
import { Outlet } from 'react-router-dom';
import NCAAHeader from '../Header/NCAAHeader';
import Footer from '../Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <main>
        <NCAAHeader />
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default MainLayout;