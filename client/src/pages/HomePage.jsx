import React from "react";
import Services from "../components/Home/Services";
import Intro from "../components/Home/Intro";
import AboutMe from "../components/Home/AboutMe";
import FAQS from "../components/Home/FAQS";
import Test from "../components/Home/Test"; 
import '../styles/pricing.css'

const HomePage = () => {
  return (
    <div>
{/** 
        <div className="d-flex border-bottom w3-black w3-hide-medium w3-hide-small">
            <nav
              className="d-inline-flex fw-bold w3-hide-medium w3-hide-small"
              style={{ fontSize: "15px" }}
            >
              <button className="w3-button me-2 w3-black w3-hover-pink w3-hide-medium w3-hide-small">
              <a
                className=" link-light text-decoration-none "
                 href="#web-pricing-component"
                 style={{fontSize: "13px"}}
              >
              Who We Are
              </a>
              </button>
              <button className="w3-button me-2 w3-black w3-hover-pink w3-hide-medium w3-hide-small">
              <a
                className=" link-light text-decoration-none "
                 href="#web-pricing-component"
                 style={{fontSize: "13px"}}
              >
              What We Do
              </a>
              </button>
      
              <button className="w3-button me-2 w3-black w3-hover-pink w3-hide-medium w3-hide-small">
              <a
                className=" link-light text-decoration-none "
                 href="#web-pricing-component"
                 style={{fontSize: "13px"}}
              >
                Why We Do It
              </a>
              </button>
              <button className="w3-button me-2 w3-black w3-hover-pink w3-hide-medium w3-hide-small">
              <a
                className=" link-light text-decoration-none "
                 href="#web-pricing-component"
                 style={{fontSize: "13px"}}
              >
              Recruiting FAQS
              </a>
              </button>
              <button className="w3-button me-2 w3-black w3-hover-pink w3-hide-medium w3-hide-small">
              <a
                className=" link-light text-decoration-none "
                 href="#web-pricing-component"
                 style={{fontSize: "13px"}}
              >
             Where To Start
              </a>
              </button>
            </nav>
          </div>    
*/}


<div>
  <Services/>
  </div>




  <Intro/>
      
  <Test/>


    
    <div>
        <AboutMe />
        </div>

        <div>
          <FAQS /> 
    </div>
    </div>
  );
};

export default HomePage;
