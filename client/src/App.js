import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext.jsx";

import HomePage from "./pages/HomePage";

import HomeLayout from "./components/Layout/MainLayout.jsx";
import MultiDropNav from "./components/Navigation/MultiDropNav";

import ErrorBoundary from "./components/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <MultiDropNav />
          <UserContextProvider>
            <Routes>
            <Route element={<HomeLayout />} >
            <Route path="/" element={<HomePage />} />
          </Route>
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
