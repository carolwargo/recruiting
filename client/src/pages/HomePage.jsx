import React from "react";
import Services from "../components/Home/Services";
import Intro from "../components/Home/Intro";
import AboutMe from "../components/Home/AboutMe";
import AboutUs from "../components/Home/AboutUs";
import StepsTimeline from "../components/Timeline/StepsTimeline";

const HomePage = () => {
  return (
    <div>


<div>
        <AboutUs/>
        </div>

<div >
  <Intro/>
        </div>


<div>
  <Services/>
  </div>
    
    <div>
        <AboutMe />
        </div>

        <div>
          <StepsTimeline /> 
    </div>
    </div>
  );
};

export default HomePage;
