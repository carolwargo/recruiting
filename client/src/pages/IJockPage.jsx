import React from "react";
import { Link } from "react-router-dom";
import "../components/Cover/cover.css";
import AnimatedHeading from "../components/Header/Animated/AnimatedHeading";
import IJockDropdown from "../components/IJock/IJockDropdown";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes the needed JS for dropdowns

const IJockPage = () => {

  return (
    <div className=" w3-black">

      <div className='d-flex h-100 text-center'>
        <div className="cover-container d-flex w-100 h-100 w3-padding-large w3-padding-32 mx-auto flex-column">
          {/* Header */}
        
          <header className="mb-auto">
            <div>
              <nav className="nav nav-masthead mb-3 justify-content-center float-md-end">
                <Link to="/" className="nav-link fw-bold py-1 px-0 active" aria-current="page">
                  Home
                </Link>
                <Link to="/" className="nav-link fw-bold py-1 px-0">
                  Features
                </Link>
                <Link to="/" className="nav-link fw-bold py-1 px-0">
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          <main>
   
      
            {/** 
            <p className="lead">
              <a href="/" className="btn btn-lg btn-light fw-bold border-white bg-white">
                Learn more
              </a>
            </p>
            <p className="lead">
              <a href="/" className="btn btn-lg btn-light fw-bold border-white bg-white">
                Learn more
              </a>
            </p>
            */}
          </main>
        </div>
        
      </div>
      <div className="justify-content-center text-center">
      <AnimatedHeading />
      <IJockDropdown />
      </div>
    </div>
  );
};

export default IJockPage;
