import React from "react";
import ClayCover3 from '../assets/images/ClayCover3.png';
import { InView } from 'react-intersection-observer';
import PlayerProfile from "../components/OnePage.jsx/PlayerProfile";
import SideNav from "../components/OnePage.jsx/SideNav";
import Testimonials from "../components/OnePage.jsx/Testimonials";
import PlayerMedia from "../components/OnePage.jsx/PlayerMedia";
import PlayerContact from "../components/OnePage.jsx/PlayerContact";
import PlayerFooter from "../components/OnePage.jsx/PlayerFooter";

const DemoPage = () => {

  return (
    <div className="body w3-black"
    style={{paddingTop:'3.6rem'}}>

      <style>
        {`
  
        /*start ANIMATIONS*/
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 2s ease-in-out;
}

.animate-slide-left {
  animation: slideLeft 2s ease-in-out;
}

/*end ANIMATIONS*/
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 12px}
.w3-sidebar {width: 120px;background: #222;}
#main {margin-left: 120px}
@media only screen and (max-width: 600px) 
{#main {margin-left: 0}}
 `}
      </style>

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

        {/* About Section */}
<PlayerProfile/>



          {/* Testimonial Section */}
<Testimonials/>

           {/* Video Stat Section */}
<PlayerMedia/>



    <PlayerContact/>

   {/* Footer */}
<PlayerFooter/>
  
        {/* END PAGE CONTENT */}
        <script>
          {`
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-theme-d1";
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme-d1", "");
  }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
  `}
        </script>
      </main>
    </div>
    </div>
  );
};

export default DemoPage;
