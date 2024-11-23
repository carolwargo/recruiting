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
import PlayerDownloads from "../components/OnePage.jsx/PlayerDownloads";  
import ClaySmall from '../assets/images/ClaySmall.png';
import ClayCover3 from '../assets/images/ClayCover3.png';
import { RiHome6Line } from "react-icons/ri";
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
        <a
          href="/demo"
          className="w3-bar-item w3-button w3-padding-large w3-black"
        >
          <RiHome6Line className="" style={{fontSize:'3rem'}}/>
          <p>HOME</p>
        </a>
        <a
          href="#demo1-player-profile"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge"></i>
          <p>PROFILE</p>
        </a>
        <a
          href="#demo1-player-performance"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className=" fa fa-chart-bar w3-xxlarge"></i>
          <p className="text-center">STATS</p>
        </a>
        <a
          href="#demo1-player-media"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-film w3-xxlarge"></i>
          <p>MEDIA</p>
        </a>
      </nav>
</div>
   
      <div className="w3-black w3-center"
    style={{paddingTop:'3rem'}}>
<div className="page-container" >
      {/* Page Content */}
      <main className="w3-padding-large main-content" id="main">    

    
  
                   {/* Navbar on small screens (Hidden on medium and large screens) */}
      <div className=" w3-black w3-top w3-hide-large w3-hide-medium w3-padding-top-24 w3-center" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link
            href="#"
            className="w3-bar-item w3-button"
         
          >
            HOME
          </Link>
          <Link
            href="#demo1-player-profile"
            className="w3-bar-item w3-button"
         
          >
            PROFILE
          </Link>
          <Link
            href="#demo1-player-performance"
            className="w3-bar-item w3-button"
         
          >
          STATS
          </Link>
          <Link
            href="demo1-player-#media"
            className="w3-bar-item w3-button"
         
          >
           MEDIA
          </Link>
        </div>
        <hr />
      </div>


      

              <h1 className="w3-jumbo w3-animate-left">
                <span className="w3-hide-small">I'm</span> Joe Baseball.
              </h1>
              <p>NCAA STUDENT-ATHLETE | 2024 HIGH SCHOOL BASEBALL | CATCHER RECRUIT</p>
              <img
                src={ClaySmall}
                alt="boy"
                className="w3-image w3-hide-large"
                width="1500"
                height="1108"
              />

<img
                src={ClayCover3}
                alt="boy"
                className="w3-image w3-hide-small w3-hide-medium"
                width="1500"
                height="1108"
              />
        
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
<PlayerDownloads/>
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
