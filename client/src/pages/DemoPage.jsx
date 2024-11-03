import React from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import PlayerProfile from "../components/OnePage.jsx/PlayerProfile";
import Testimonials from "../components/OnePage.jsx/PlayerTestimonials";
import PlayerMedia from "../components/OnePage.jsx/PlayerMedia";
import PlayerContact from "../components/OnePage.jsx/PlayerContact";
import PlayerFooter from "../components/OnePage.jsx/PlayerFooter";
import PlayerPerformance from "../components/OnePage.jsx/PlayerPerformance";
import PlayerIntro from "../components/OnePage.jsx/PlayerIntro";
import PlayerCarousel from "../components/OnePage.jsx/PlayerCarousel";
import ClaySmall from '../assets/images/ClaySmall.png';
import ClayCover3 from '../assets/images/ClayCover3.png';
import '../styles/demo.css'; 

const DemoPage = () => {

  return (
    <div>


<div className="body w3-black"
    style={{paddingTop:'1rem'}}>
      {/* Icon Bar (Sidebar - hidden on small screens) */}
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        {/* Avatar image in top left corner */}
        <img
          src={ClaySmall}
          alt="pic"
          style={{ width: "100%" }}
        />
        <Link
          to="/demo"
          className="w3-bar-item w3-button w3-padding-large w3-black"
        >
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </Link>
        <Link
          to="#demo1-player-profile"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge"></i>
          <p>PROFILE</p>
        </Link>
        <Link
          to="#demo1-player-performance"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-eye w3-xxlarge"></i>
          <p className="text-center">STATS</p>
        </Link>
        <Link
          to="#demo1-player-media"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>MEDIA</p>
        </Link>
      </nav>
</div>
      {/* Navbar on small screens (Hidden on medium and large screens) */}
      <div className=" w3-black w3-top w3-hide-large w3-hide-medium w3-padding-top-24 w3-center" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link
            to="#"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            HOME
          </Link>
          <Link
            to="#demo1-player-profile"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            PROFILE
          </Link>
          <Link
            to="#demo1-player-performance"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
          STATS
          </Link>
          <Link
            to="demo1-player-#media"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
           MEDIA
          </Link>
        </div>
        <hr />
      </div>



      <div className="body w3-black"
    style={{paddingTop:'3rem'}}>
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
        <div className="demo1-player-profile" id="demo1-player-profile">
        <PlayerProfile/>
        </div>

        {/* Performance Section */}
        <div className="demo1-player-performance" id="demo1-player-performance">
        <PlayerPerformance/>
        </div>


        <div className="demo1-player-testimonial" id="demo1-player-testimonial">
                    {/* Testimonial Section */}
<Testimonials/>
        </div>


<div className="demo1-player-media" id="demo1-player-media">
           {/* Media Section */}
<PlayerMedia/>
    {/* Contact Section */}
    <PlayerCarousel/>
</div>

    <PlayerContact/>

   {/* Footer */}
<PlayerFooter/>
  
        {/* END PAGE CONTENT */}
      </main>
    </div>
    </div>
    </div>
  );
};

export default DemoPage;
