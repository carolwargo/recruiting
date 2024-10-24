import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../Navigation/TopNav';
import Footer from '../Footer';

const FormsLayout = () => {
  return (
    <div className="forms-layout">
      <main>
        <TopNav />
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default FormsLayout;