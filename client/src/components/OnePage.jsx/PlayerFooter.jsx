import React from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import {BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhoneSquare, FaSnapchatSquare } from "react-icons/fa";
import { PiPaperPlane } from "react-icons/pi";

const PlayerFooter = () => {

  return (
    <div>

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

 
<div className="text-center">

    <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
        id="player-footer">


            <hr />
          <h2 className="w3-text-light-grey text-center">CONNECT WITH ME:</h2>
          <h5 className="text-center">Get in touch direct or send me a message on a social media platform.</h5>

          <div className="w3-container w3-center text-center">
                  <div className="w3-margin-bottom">
                  <Link
                              className=" mx-2"
                              style={{ fontSize: "2.1rem" }}
                            >
                         <span className="icon-hover-zoom">
    <strong>
      <PiPaperPlane />
    </strong>
  </span>
                            </Link>
                            <Link
                               className="mx-1"
                              style={{ fontSize: "2rem" }}
                            >
                               <span className="icon-hover-zoom">
    <strong>
    <FaPhoneSquare />
    </strong>
  </span>
                           
                            </Link>


                  <Link
                              className=" mx-2"
                              style={{ fontSize: "1.9rem" }}
                            >
                         <span className="icon-hover-zoom">
    <strong>
      <BsTwitterX />
    </strong>
  </span>
                            </Link>


                            <Link
                               className="mx-1"
                              style={{ fontSize: "2.1rem" }}
                            >
                               <span className="icon-hover-zoom">
    <strong>
    <FaSquareInstagram />
    </strong>
  </span>
                           
                            </Link>

                            <Link
                           className="mx-1"
                              style={{ fontSize: "2.1rem" }}
                            >
                                       <span className="icon-hover-zoom">
    <strong>
    <FaSnapchatSquare />
    </strong>
  </span>               
                            </Link>
                  </div>
                </div>
                
          {/* End Contact Section */}
        </div>
          )}
    </InView>


  
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
      
    </div>
    </div>
  );
};

export default PlayerFooter;