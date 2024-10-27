import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext.jsx";

import HomePage from "./pages/HomePage";
import HomeTimeline from "./pages/HomeTimeline";  
import SignupPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import WebDesign from "./pages/WebDesign.jsx";
import GraphicsPage from "./pages/GraphicsPage.jsx";
import DemoPage from "./pages/DemoPage.jsx";  
import Demo2 from "./pages/Demo2.jsx";

import ScrollToTop from "./components/ScrolltoTop.jsx";
import Extras from "./pages/Extras.jsx";  
import FormsLayout from "./components/Layouts/FormsLayout.jsx";
import MainLayout from "./components/Layouts/MainLayout.jsx";
import DemoLayout from "./components/Layouts/DemoLayout.jsx";

import ErrorBoundary from "./ErrorBoundary.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <ScrollToTop />
          <UserContextProvider>
            <Routes>
            <Route element={<MainLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/home-time" element={<HomeTimeline />} />
            <Route path="/web" element={<WebDesign />} />
            <Route path="/graphics" element={<GraphicsPage />} />
        
          </Route>
          <Route element={<FormsLayout />} >
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      
        <Route element={<DemoLayout />} >
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/demo2" element={<Demo2 />} />
          <Route path="/extras" element={<Extras />} />
        </Route>


          <Route path="*" element={<NotFound />} />
            </Routes>
            </UserContextProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

// Create a component for handling not found routes
function NotFound() {
  console.error("Page not found!"); // Log error to console
  return <h1>404 - Not Found</h1>;
}

export default App;
