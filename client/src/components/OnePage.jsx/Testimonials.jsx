import React from "react";
import { InView } from 'react-intersection-observer';

import Teacher from '../../assets/images/Testiminals/Teacher.png';
import Principal from '../../assets/images/Testiminals/Principal.png';
import Virginia from '../../assets/images/Testiminals/Virginia.png';
import Wake from '../../assets/images/Testiminals/Wake.png';


const PlayerProfile = () => {

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
 
   
   {/* Testimonial Section */}
 
          {/* Testimonial Section */}
          <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
          id="testimonials">
          <hr className="w3-opacity w3-padding-16" />
          <h1 className="w3-text-light-grey w3-margin-bottom">Reputation</h1>
          <div className="w3-row-padding w3-padding-16" style={{ margin: "0 -16px" }}>
       
          <div className="w3-col m6 w3-margin-bottom">  
            <div className="container">
          <img
            src={Teacher}
            alt="teacher"
            className="w3-left w3-circle w3-margin-right w3-grayscale-max w3-image"
            style={{ width: "80px" }}
          />
           <p className='w3-padding'>
            <span className="w3-large">REBECCA FLEX- </span>
            <br /><i>Teacher- Htown High School</i>.
          </p>
          <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
          </div> 
          </div>
          
          <div className="w3-col m6 w3-margin-bottom">  
            <div className="container">
            <img
         src={Principal}
         alt="principal"
         className="w3-left w3-circle w3-margin-right w3-grayscale-max"
         style={{ width: "80px" }}
       />
           <p className='w3-padding'>
            <span className="w3-large w3-margin-right">KEVIN STEELE- </span>    
            <br /><i>Principal- Htown High School</i>.
          </p>
          <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
          </div>
          </div>
          </div>
          <div className="w3-row-padding w3-padding-16" style={{ margin: "0 -16px" }}>
       
       <div className="w3-col m6 w3-margin-bottom">  
         <div className="container">
       <img
         src={Virginia}
         alt="va coach"
         className="w3-left w3-circle w3-margin-right w3-grayscale-max"
         style={{ width: "80px" }}
       />
       <p className='w3-padding'>
         <span className="w3-large w3-margin-right">JAX DOE- </span>
         <br /><i>Varsity Coach- Htown High School</i>.
       </p>
     <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
           </div> 
       </div>
       
       <div className="w3-col m6 w3-margin-bottom">  
         <div className="container">
       <img
         src={Wake}
         alt="wake coach"
    className="w3-left w3-circle w3-margin-right w3-grayscale-max"
         style={{ width: "80px" }}
       />
       <p className='w3-padding'>
         <span className="w3-large w3-margin-right">Jock Doe.</span>
         <br /><i>Summer Coach- Dirtbags</i>.
       </p>
     <p> 
            <i style={{fontSize:'13px'}}>Joe Baseball is the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?
          </i>
          </p> 
           </div>
       </div>
       </div>
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

export default PlayerProfile;