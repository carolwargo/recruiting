import React from "react";
import { InView } from 'react-intersection-observer';
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";


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

 
<div className="page-container" >
      {/* Page Content */}

    {/* Contact Section */}

    <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
        id="footer">


            <h1>-----NOTES</h1>
            <p>*******Maybe combine contact and footer</p>
            <hr />
          <h2 className="w3-text-light-grey">Contact Me</h2>
          <h5>Get in touch direct or send me a message through the site:</h5>

          <div className="w3-container  w3-center">
                  <div className="w3-margin-bottom">
                    <p className="mb-0 mt-3">MESSAGE ME ON:</p>
                    <Link
                      className="text-decoration-none link-body-emphasis w3-opacity text-white"
                      style={{ fontSize: "2.2rem" }}
                    >
                      <strong>
                        <BsTwitterX className="" />
                      </strong>{" "}
                    </Link>
                    <Link
                      className="text-decoration-none w3-opacity w3-text-pink w3-hover"
                      style={{ fontSize: "2.35rem" }}
                    >
                      <strong>
                        <FaSquareInstagram />
                      </strong>{" "}
                    </Link>
                    <Link
                      className="text-decoration-none w3-opacity w3-hover w3-text-purple"
                      style={{ fontSize: "2.4rem" }}
                    >
                      <strong>
                        <FaSnapchatSquare />
                      </strong>
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