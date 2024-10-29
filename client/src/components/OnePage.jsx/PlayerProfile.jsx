import React from "react";
import { Link } from "react-router-dom";
import ClaySmall from '../../assets/images/ClaySmall.png';
import { InView } from 'react-intersection-observer';
import Graphics from '../../assets/images/ServiceCards/Graphics.png';
import { RiHome6Line } from 'react-icons/ri';
import { HiAcademicCap } from 'react-icons/hi';
import { GrScorecard } from 'react-icons/gr';
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const myFunction = (id) => {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  };


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

    {/* Overview PROFILE Section */}
    <div>
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} 
            className={`w3-content w3-justify w3-text-grey w3-padding-16 bg-black
               ${inView ? "animate-fade-in" : ""}`}
            id="overview"
        >
      <div
     style={{backgroundImage: 'linear-gradient(to right, gray, #2f4f4f)'}}>
         
          <div className="row d-flex w3-padding-16 justify-content-center align-items-center">
            {/* Left Column */}
            <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
              {/* Profile */}
              <div >
              <div className="container">
                <div>
                    <p className="w3-center">
                      <img
                        src={ClaySmall}
                        style={{ width: "100%" }}
                        alt="Avatar"
                      />
                    </p>
                    </div>
                    <div className="w3-card w3-white">
                  <button
                    onClick={() => myFunction("Demo1")}
                    className="w3-button w3-block w3-white w3-left-align mt-2"
                  >
                        <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
                 Schedule     
                  </button>

                  <div id="Demo1" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>2022 Summer</Link>
                      </li>
                      <li>
                        <Link>2022 Fall</Link>
                      </li>
                      <li>
                        <Link>2023 Spring</Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => myFunction("Demo2")}
                    className="w3-button w3-block w3-white w3-left-align"
                  >
                    <i className="fa fa-book fa-fw w3-margin-right"></i>
                    Unofficial Transcripts
                  </button>
                  <div id="Demo2" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>2020 Freshman</Link>
                      </li>
                      <li>
                        <Link>2021 Sophomore</Link>
                      </li>
                      <li>
                        <Link>2022 Junior</Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => myFunction("Demo3")}
                    className="w3-button w3-block w3-white w3-left-align"
                  >
                    <i className="fa fa-pencil fa-fw w3-margin-right"></i>
                    References
                  </button>
                  <div id="Demo3" className="w3-hide w3-container">
                    <ul className="text-decoration-none mt-2">
                      <li>
                        <Link>Coach Joe</Link>
                      </li>
                      <li>
                        <Link>Coach Jack</Link>
                      </li>
                      <li>
                        <Link>Principal Jock</Link>
                      </li>
                      <li>
                        <Link>Teacher Jane</Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => myFunction("Demo4")}
                    className="w3-button w3-block w3-white w3-left-align"
                  >
                    <i className="fa fa-video fa-fw w3-margin-right mb-3"></i>
                    Skills Videos
                  </button>
                  <div id="Demo4" className="w3-hide w3-container">
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                        <img
                          src={ClaySmall}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src={Graphics}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src={ClaySmall}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src={ClaySmall}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              </div>
              </div>
 {/* Right Column */}
 <div className="col-sm-12 col-md-6 col-lg-6 justify-content-center align-items-center">
            
        <div className="card-body w3-padding">
                <div className="card-header">
                  <h5 className="fw-bold mt-2">Player Profile</h5>
                <hr />
                </div>
             
              <div className="row">
         <div className="w3-padding pt-1 pb-3 d-flex justify-content-center align-items-center">

    <div className="col-sm-12 col-md-6 col-lg-6 mt-1">
    <p className="mt-0 py-0 text-dark-emphasis" style={{marginBottom:'5px'}}>
    <span className="fa-fw" style={{marginRight:'5px'}}>
     <b style={{fontSize:'1.2rem'}}><RiHome6Line/></b> </span> <span className="text-dark-emphasis"> CATCHER</span>
      <br />  
      </p>

      <p className="mt-0 py-0 text-dark-emphasis" style={{marginBottom:'4px'}}>
                  <span className="fa-fw" style={{marginRight:'5px'}}>
                  <b style={{fontSize:'1.2rem'}}> <HiAcademicCap/></b></span> <span className="text-dark-emphasis"> 2024</span>
      <br />  
      </p>

      <p className="mt-0 py-0 text-dark-emphasis" style={{marginBottom:'4px'}}>
                  <span className="fa-fw" style={{marginRight:'5px'}}>
                  <b style={{fontSize:'1.2rem'}}>  <GrScorecard/></b></span> <span className="text-dark-emphasis"> SAT-9000 | GPA- 5.0</span>
      <br />  
      </p>

      <p className="mt-0 py-0 text-dark-emphasis" style={{marginBottom:'4px'}}>
      <span className="fa-fw text-dark-emphasis" style={{marginRight:'5px'}}>
      <b style={{fontSize:'1.2rem'}}>< FaPhoneVolume/></b> </span> <Link className="text-dark-emphasis">(123) 456-7890</Link>
   <br />
    </p>

    <p className="mt-0 py-0 text-dark-emphasis" style={{marginBottom:'4px'}}>
    <span className="fa-fw text-dark-emphasis" style={{marginRight:'5px'}}>
    <b style={{fontSize:'1.2rem'}}>< MdOutlineEmail/> </b></span> <Link className="text-dark-emphasis">EMAIL@MAIL.COM</Link>
   <br />
    </p>


    </div>
    <div className="col-sm-12 col-md-6 col-lg-6 mt-1">   
<p className="text-dark-emphasis" style={{display: 'flex', flexWrap: 'wrap'}}>
<span className="pb-1"> <b>HT:</b> 6'0" <b className=" w3-margin-left"> WT:</b> 225LBS </span>
<span className="py-1"><b>BATS:</b> R/L <b className=" w3-margin-left">THROWS:</b> R </span>
<span className="py-1"><b>BORN:</b> 11/1/01, MD. </span>
 </p>

    <button className="w3-button w3-black btn-sm">
                <i className="fa fa-download"></i> Download StatsBW
              </button> 
                  </div>
    </div>
    </div>
    </div>


    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
      <div className="container">
         <div className="text-center py-4 mt-3">
       <h6 className="">FOLLOW ME ON SOCIAL MEDIA:</h6>
                 <Link
                   className=" text-decoration-none link-body-emphasis w3-opacity text-black"
                   style={{ fontSize: "1.7rem" }}
                 >
                   <strong>
                     <BsTwitterX className="" />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-opacity w3-text-black w3-hover"
                   style={{ fontSize: "1.9rem" }}
                 >
                   <strong>
                     <FaSquareInstagram />
                   </strong>{" "}
                 </Link>
                 <Link
                   className="text-decoration-none w3-hover w3-text-black"
                   style={{ fontSize: "1.9rem" }}
                 >
                   <strong>
                     <FaSnapchatSquare />
                   </strong>
                 </Link>
                 </div> 
          </div>
          </div>
          </div>
          <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="text-center pb-5">
         <hr className=" w3-padding-16"/>
       <h6 className="">MESSAGE ME</h6>
                  <p className="w3-opacity" style={{ fontSize: "15px" }}>
                    Click Message button to contact me through the website-
                  </p>
                  
               <button className="w3-button w3-block w3-theme-l4">Message</button>
          </div>
          </div>
          </div>
       </div>
              </div>
              </div>
                    </div>
              </div>
    )}
    </InView>
    </div>
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
   
  );
};

export default PlayerProfile;