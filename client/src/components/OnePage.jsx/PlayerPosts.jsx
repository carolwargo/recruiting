import React from "react";
import { InView } from 'react-intersection-observer';
import Offense from "../../assets/images/Video/Offense.png";
import Defense from "../../assets/images/Video/Defense.png";
import MLB from "../../assets/images/Video/MLB.png";
import {Link} from 'react-router-dom';


const PlayerPosts = () => {

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
                <h1 className="w3-text-light-grey w3-margin-bottom">Media</h1>
                <div className="container w3-padding-16">
          <h3>VIDEO SKILLS LIBRARY</h3>
          <h4 className="">
          Video Library consists of a Offense, Defense and and MLB Bullpens.
          </h4>
         <h5>
            {" "}
            Pick a service below to get started, or simply{" "}
            <Link to="contact">contact us</Link> with questions.{" "}
          </h5>
        </div>


          <div className="w3-row-padding w3-padding-16 d-flex justify-content-center align-items-end" style={{ margin: "0 -16px" }}>
          <div className="w3-col m6 w3-margin-bottom">  
            <div className="container">
            <img
         src={Offense}
         alt="principal"
         className="w3-left  w3-margin-right rounded"
         style={{ width: "100%" }}
       />
          </div>
          </div>
        
          <div className="w3-col m6 w3-margin-bottom">  
            <div className="container w3-padding-16">
           <p>
           <span className="w3-large">OFFENSE</span>
           <br /><i>Lorem- ipsum dolor sit</i>.
          </p>
          <p> <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?</i>.</p>
   <footer className="">
    <hr />
    <p>last updated: 1-1-2025</p>
   </footer>
          </div> 
          </div>
          </div>

          <hr />
          <div className="w3-row-padding w3-padding-16 d-flex justify-content-center align-items-end" style={{ margin: "0 -16px" }}>
          <div className="w3-col m6 w3-margin-bottom">  
         <div className="container">
         <img
      src={Defense}
      alt="principal"
      className="w3-left  w3-margin-right rounded"
      style={{ width: "100%" }}
    />
       </div>
       </div>
       <div className="w3-col m6 w3-margin-bottom">  
            <div className="container w3-padding-16">
           <p>
           <span className="w3-large">DEFENSE</span>
           <br /><i>Lorem- ipsum dolor sit</i>.
          </p>
          <p> <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?</i>.</p>
   <footer className="">
    <hr />
    <p>last updated: 1-1-2025</p>
   </footer>
          </div> 
          </div>
       </div>

<hr/>
           
       <div className="w3-row-padding w3-padding-16 d-flex justify-content-center align-items-end" style={{ margin: "0 -16px" }}>
       <div className="w3-col m6 w3-margin-bottom">  
         <div className="container">
         <img
      src={MLB}
      alt="principal"
      className="w3-left  w3-margin-right rounded"
      style={{ width: "100%" }}
    />
       
       </div>
       </div>
      
       <div className="w3-col m6 w3-margin-bottom">  
            <div className="container w3-padding-16">
           <p>
           <span className="w3-large">MLB BULLPENS</span>
           <br /><i>Lorem- ipsum dolor sit</i>.
          </p>
          <p> <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam pariatur accusamus, quam velit at ad enim animi aliquam, porro nulla molestias tempore fuga neque similique. Necessitatibus, iusto ex?</i>.</p>
   <footer className="">
    <hr />
    <p>last updated: 1-1-2025</p>
   </footer>
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

export default PlayerPosts;