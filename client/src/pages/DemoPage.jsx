import React from "react";
import ClayCover3 from '../assets/images/ClayCover3.png';
import { InView } from 'react-intersection-observer';
import PlayerProfile from "../components/OnePage.jsx/PlayerProfile";
import SideNav from "../components/OnePage.jsx/SideNav";
import Testimonials from "../components/OnePage.jsx/PlayerTestimonials";
import PlayerMedia from "../components/OnePage.jsx/PlayerMedia";
import PlayerContact from "../components/OnePage.jsx/PlayerContact";
import PlayerFooter from "../components/OnePage.jsx/PlayerFooter";
import PlayerPerformance from "../components/OnePage.jsx/PlayerPerformance";
import PlayerIntro from "../components/OnePage.jsx/PlayerIntro";
import PlayerCarousel from "../components/OnePage.jsx/PlayerCarousel";
import '../styles/demo.css'; 

const DemoPage = () => {

  return (
    <div className="body w3-black"
    style={{paddingTop:'3.6rem'}}>

  <SideNav/>
<div className="page-container" >
      {/* Page Content */}
      <main className="w3-padding-large main-content" id="main">    

        {/* Header/Home */}    
   <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <header
              ref={ref}
              className={`w3-container w3-padding-32 w3-center w3-black 
                ${inView ? "animate-fade-in" : ""}`}
              id="demo-header">
              <h1 className="w3-jumbo w3-animate-left">
                <span className="w3-hide-small">I'm</span> Joe Baseball.
              </h1>
              <p>NCAA STUDENT-ATHLETE | 2024 HIGH SCHOOL BASEBALL | CATCHER RECRUIT</p>
              <img
                src={ClayCover3}
                alt="boy"
                className="w3-image"
                width="1500"
                height="1108"
              />
            </header>
          )}
        </InView>



        {/* IntroSection */}
        <PlayerIntro/>

        {/* Profile Section */}
<PlayerProfile/>

        {/* Performance Section */}
        <PlayerPerformance/>


          {/* Testimonial Section */}
<Testimonials/>

           {/* Media Section */}
<PlayerMedia/>


    {/* Contact Section */}
    <PlayerCarousel/>

    <PlayerContact/>

   {/* Footer */}
<PlayerFooter/>
  
        {/* END PAGE CONTENT */}
      </main>
    </div>
    </div>
  );
};

export default DemoPage;
