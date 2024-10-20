import React from "react";
import { InView } from 'react-intersection-observer';
import Hit from '../../assets/images/Hit.png';
import Catch from '../../assets/images/Catch.png';
import VideoCards from '../../components/Demo/VideoCards';


const PlayerMedia = () => {

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
 
     {/* Media Section */}

     <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
         id="videos">
               <hr className="w3-opacity w3-padding-16" />
               <h1 className="w3-text-light-grey w3-margin-bottom">Media</h1>
<VideoCards/>
</div>
    )}
    </InView>

        <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
         id="videos">
               <hr className="w3-opacity w3-padding-16" />
               <h1 className="w3-text-light-grey w3-margin-bottom">Video Library</h1>

          {/* Grid for photos */}
          <div className="w3-row-padding w3-padding-16" style={{ margin: "0 -16px" }}>
            <div className="container">
            <div className="col m5">
              <img
                src={Hit}
                alt="pic"
                style={{ width: "100%" }}
                className="w3-padding"
              />
            </div>
            <div className="col m7">
             <p><i>Uploaded: 1-1-2023</i></p>
             <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laboriosam suscipit tenetur unde, ea at. Veritatis est iusto alias, architecto minima illum sed ducimus voluptatibus molestiae, autem doloribus error fuga!</p>
           
            </div>
            </div>
            {/* End photo grid */}
          </div>
          {/* End Portfolio Section */}
          
          <hr style={{ width: "100%" }} className="w3-opacity" />


          <div className="w3-row-padding w3-padding-16" style={{ margin: "0 -16px" }}>
            <div className="container w3-padding-large">
            <div className="w3-quarter">
              <img
                src={Hit}
                alt="pic"
                style={{ width: "100%" }}
              />
               
            </div>
            <div className="w3-quarter">
          
                  <img
                src={Catch}
                alt="pic"
                style={{ width: "100%" }}
              />
            </div>
            <div className="w3-quarter">
          
          <img
        src={Catch}
        alt="pic"
        style={{ width: "100%" }}
      />
    </div>
    <div className="w3-quarter">
          
          <img
        src={Catch}
        alt="pic"
        style={{ width: "100%" }}
      />
    </div>
            </div>
         
            {/* End photo grid */}
          </div>
          {/* End Portfolio Section */}
          
          <hr style={{ width: "100%" }} className="w3-opacity" />
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

export default PlayerMedia;