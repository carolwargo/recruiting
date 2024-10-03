import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../Navigation/TopNav';
import Header from '../Header/Header';


const HomeLayout = () => {
  return (
    <div className="service-layout">
      <main>
        <TopNav />
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
