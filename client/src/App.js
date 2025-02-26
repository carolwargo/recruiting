import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext.jsx";

import HomePage from "./pages/HomePage";
import HomeTimeline from "./pages/HomeTimeline";  
import SignupPage from "./pages/SignupPage.jsx";
import Login from "./pages/Login.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Register from "./pages/Register.jsx";
import WebDesign from "./pages/WebDesign.jsx";
import GraphicsPage from "./pages/GraphicsPage.jsx";
import VideoPage from "./pages/VideoPage.jsx";

import NCAAFaqsPage from './pages/NCAAFaqsPage.jsx'
import IJockPage from './pages/IJockPage.jsx'

import ScrollToTop from "./components/ScrolltoTop.jsx";
import FormsLayout from "./components/Layouts/FormsLayout.jsx";
import MainLayout from "./components/Layouts/MainLayout.jsx";
import NCAALayout from "./components/Layouts/NCAALayout.jsx";
import IJockLayout from "./components/Layouts/IJockLayout.jsx";

import ErrorBoundary from "./ErrorBoundary.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div >
      <BrowserRouter basename="/recruiting">
        <ErrorBoundary>
          <ScrollToTop />
          <UserContextProvider>
            <Routes>
            <Route element={<MainLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/home-time" element={<HomeTimeline />} />
            <Route path="/web" element={<WebDesign />} />
            <Route path="/graphics" element={<GraphicsPage />} />
            <Route path="/video" element={<VideoPage />} />
          </Route>

          
          <Route element={<NCAALayout />} >
            <Route path="/ncaa" element={<NCAAFaqsPage />} />
          </Route>


          <Route element={<IJockLayout />} >
            <Route path="/ijock" element={<IJockPage />} />
          </Route>

          
          <Route element={<FormsLayout />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

          <Route path="*" element={<NotFound />} />
            </Routes>
            </UserContextProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#007BFF", textDecoration: "underline" }}>
        Return to Home
      </a>
    </div>
  );
}

export default App;
