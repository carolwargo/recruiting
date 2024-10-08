import React from "react";
import ServiceCards from "../components/Home/ServiceCards";
import Intro from "../components/Home/Intro";
import AboutComponent from "../components/AboutMe";
import AboutUs from "../components/Home/AboutUs";

const HomePage = () => {
  return (
    <div>
  <ServiceCards/>
    <Intro/>
      <div className="container py-3 mt-2">
        <AboutUs/>
        </div>
        <AboutComponent />
     
    </div>
  );
};

export default HomePage;
