import React from "react";
import Services from "../components/Home/Services";
import Intro from "../components/Home/Intro";
import AboutMe from "../components/Home/AboutMe";
import AboutUs from "../components/Home/AboutUs";
import FAQS from "../components/Home/FAQS";
import Odds from "../components/Home/Odds"; 
import Test from "../components/Home/Test";
import NCAADistro from "../components/Home/NCAADistro";
import '../styles/pricing.css'
import AboutCards from "../components/Home/AboutCards";
import WebComponent from "../components/Home/WebComponent";
import GraphicsComponent from "../components/Home/GraphicsComponent";

const HomePage = () => {
  return (
    <div>
 <Services/>
 <AboutCards />
 <WebComponent/>
 <GraphicsComponent/>
<AboutMe />

  <Odds/> 
        <Intro/>
      <AboutUs /> 
      <Test/>
          <FAQS /> 
          <NCAADistro/>
 
    </div>
  );
};

export default HomePage;
