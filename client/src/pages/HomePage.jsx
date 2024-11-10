import React from "react";
import Services from "../components/Home/Services";
import Intro from "../components/Home/Intro";
import AboutMe from "../components/Home/AboutMe";
import AboutUs from "../components/Home/AboutUs";
import FAQS from "../components/Home/FAQS";
import Odds from "../components/Home/Odds"; 

const HomePage = () => {
  return (
    <div>

<div className="w3-black">
        <div className="d-flex justify-content-center py-2 border-bottom">
            <nav
              className="d-inline-flex fw-bold mt-2"
              style={{ fontSize: "15px" }}
            >
              <a
                className="me-3 py-2 link-light text-decoration-underline"
                 href="#web-pricing-component"
              >
               Pricing
              </a>
              <a
                className="me-3 py-2 link-light text-decoration-underline"
                  href="#web-timeline-component"
              >
                Process
              </a>

              <a
                className="me-3 py-2 link-light text-decoration-underline"
                href="#web-start-component"
              >
                Start Now
              </a>
            </nav>
          </div>
          </div>

<div>
        <AboutUs/>
        </div>

<div >
  <Intro/>
        </div>

<div>
  <Odds/>
</div>


<div>
  <Services/>
  </div>
    
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
