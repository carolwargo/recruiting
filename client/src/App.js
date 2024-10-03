import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext.jsx";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/LoginPage.jsx";
import LoginPage from "./pages/SignupPage.jsx";
import HomePage2 from "./pages/HomePage2.jsx";

import MainHomeLayout from "./components/Layouts/MainHomeLayout.jsx";
import FormsLayout from "./components/Layouts/FormsLayout.jsx";
import MainLayout from "./components/Layouts/MainLayout.jsx";
//import MultiDropNav from "./components/Navigation/MultiDropNav.jsx";
import TopNav from "./components/Navigation/TopNav.jsx";

import ErrorBoundary from "./ErrorBoundary.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <TopNav />
          <UserContextProvider>
            <Routes>
            <Route element={<MainLayout />} >
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<MainHomeLayout />} >
            <Route path="/2" element={<HomePage2 />} />
          </Route>
          <Route element={<FormsLayout />} >
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
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
