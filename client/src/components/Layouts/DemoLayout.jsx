import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../Navigation/TopNav';


const DemoLayout = () => {
  return (
    <div className="forms-layout">
      <main>
        <TopNav/>
        <Outlet />
      </main>
    </div>
  );
};

export default DemoLayout;