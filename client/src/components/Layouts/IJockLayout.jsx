import React from 'react';
import { Outlet } from 'react-router-dom';



const IJockLayout = () => {
  return (
    <div className="forms-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default IJockLayout;