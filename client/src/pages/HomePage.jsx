import React from "react";
import ServiceCards from "../components/Home/ServiceCards";
import Intro from "../components/Home/Intro";
import AboutComponent from "../components/AboutMe";
import AboutUs from "../components/Home/AboutUs";
import StepsTimeline from "../components/Home/StepsTimeline";

const HomePage = () => {
  return (
    <div>
  <ServiceCards/>
    <Intro/>
      <div className="container py-3 mt-2">
        <AboutUs/>
        </div>
        <AboutComponent />
        <div className="container py-3 mt-2">
        <StepsTimeline/>
        </div>
    </div>
  );
};

export default HomePage;
