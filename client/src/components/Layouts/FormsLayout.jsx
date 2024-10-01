import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer';

const FormsLayout = () => {
  return (
    <div className="forms-layout">
      <main>
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default FormsLayout;