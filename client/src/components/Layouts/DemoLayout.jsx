import React from 'react';
import { Outlet } from 'react-router-dom';



const DemoLayout = () => {
  return (
    <div className="forms-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DemoLayout;