import React from "react";
import ServiceCards from "../components/Home/ServiceCards";
import Intro from "../components/Home/Intro";
import AboutComponent from "../components/AboutMe";
import AboutUs from "../components/Home/AboutUs";
import StepsTimeline from "../components/Samples/Timeline/StepsTimeline";

const HomePage = () => {
  return (
    <div>
  <ServiceCards/>
  <div className="container py-3 mt-2">
 
        </div>
    <Intro/>
      <div className="container py-3 mt-2">
        <AboutUs/>
        </div>
        <div className="w3-light-gray py-3 mt-2">
        <AboutComponent />
        </div>
        <div className="container py-3 mt-2">
          <StepsTimeline /> 
    </div>
    </div>
  );
};

export default HomePage;
