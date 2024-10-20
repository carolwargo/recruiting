import React from "react";
import { Link } from "react-router-dom";
import ClaySmall from '../../assets/images/ClaySmall.png';
import StatsBW from '../../assets/images/StatsBW.png';
import { InView } from 'react-intersection-observer';
import Graphics from '../../assets/images/ServiceCards/Graphics.png';
import { RiHome6Line } from 'react-icons/ri';
import { HiAcademicCap } from 'react-icons/hi';
import { GrScorecard } from 'react-icons/gr';
import { MdLocationPin } from 'react-icons/md';
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";


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

 
<div className="page-container" >
      {/* Page Content */}
 
   
   {/* About Section */}
   <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
            id="overview"
        >
            <h1 className="w3-text-light-grey">Joe Baseball</h1>
          <hr style={{ width: "235px" }} className="w3-opacity" />
          <p className="">
            Some text about me. Some text about me. I am lorem ipsum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
            </div>
         )}
        </InView>

    {/* Overview PROFILE Section */}
    <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} 
            className={`w3-content w3-justify w3-text-grey w3-padding-16 bg-black
               ${inView ? "animate-fade-in" : ""}`}
            id="overview"
        >
          <hr className="w3-opacity w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey">Profile</h1>
          <hr style={{ width: "235px" }} className="w3-opacity" />
          <div className="container w3-white w3-padding-16">
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m6 px-1">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                    <p className="w3-center">
                      <img
                        src={ClaySmall}
                        style={{ width: "100%" }}
                        alt="Avatar"
                      />
                    </p>
                </div>
             

              <div className="w3-card w3-round">
                <div className="w3-white">
                  <button
                    onClick={() => myFunction("Demo1")}
                    className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
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
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
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
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
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
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                  >
                    <i className="fa fa-video fa-fw w3-margin-right"></i>
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

 {/* Right Column */}
                <div className="w3-col m6 px-1">
             

                <div className="w3-card w3-round mb-1 w3-white">
              <div className="w3-container w3-border w3-border-black w3-padding">
                  <div className="w3-margin-top">
                    <h4 className="">CLAY WARGO</h4>
                  </div>
                </div>
              </div>
              


             
              <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-border w3-border-black w3-padding">
                  <div className="w3-margin-top">
                    <h5 className="">Player Info</h5>
                  </div>
                  <hr />

<div className="row">
    <div className="col">
    <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    New York, NY.
                  </p>
    </div>
    <div className="col">
    <p>
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    Catcher
                  </p>
                  <p>
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    2024
                  </p>
                  <p>
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                  <p>
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    New York, NY.
                  </p>
    </div>
</div>  <button className="w3-button w3-black btn-wide w3-section">
                <i className="fa fa-download"></i> Download StatsBW
              </button>

                </div>
              </div>
              
              <div className="w3-card w3-round mt-2 w3-white">
                <div className="w3-container px-3  mt-1 py-2">
                  <h6 className="w3-margin-top">MESSAGE ME</h6>
                  <p className="w3-opacity" style={{ fontSize: "12px" }}>
                    Click Message button to contact me through the website-
                  </p>
                  <p>
                    <button className="w3-button w3-block w3-theme-l4">
                      Message
                    </button>
                  </p>
                </div>
              </div>

              
              <div className="w3-card w3-round mt-2 w3-white w3-center">
                <div className="w3-container">
                  <div className="w3-margin-bottom">
                    <p className="mb-0 mt-3">FOLLOW ME ON:</p>
                    <Link
                      className="text-decoration-none link-body-emphasis w3-opacity text-black"
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
              </div>
                    </div>
              </div>
              </div>
</div>
         
        
    )}
    </InView>

            {/* Performance Section */}
            <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
            id="performance"
        >
                   <hr className="w3-opacity w3-padding-16 w3-margin-top" />
            <h1 className="w3-text-light-grey w3-margin-bottom">Performance</h1>
         <h6>Performance numbers are done through Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui reiciendis dolor quasi aperiam ut repellendus sint in vel vero, cupiditate tempore et nam repudiandae dolore, iste aliquid? Voluptatum, expedita.</h6>
          <br />
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-col m4 w3-margin-bottom">   
          <h5 className="w3-margin-top w3-text-white">EVALUATION SUMMARY</h5>   
          <hr style={{ width: "180px" }} className="w3-opacity" />
          <p className="w3-wide fw-bold mb-0" style={{fontSize:'13px'}}>DEFENSE</p>
          <p className="w3-text-grey mb-1" style={{fontSize:'12px'}}>Top-tier hands and ability to muscle the ball into the zone with subtlty- In-game pop-time average of 1.91 in 2023.</p>   
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "25px", width: "85%" }}
            ></div>
          </div>

          <p className="w3-wide fw-bold mt-3 mb-0" style={{fontSize:'13px'}}>OFFENSE</p>
          <p className="w3-text-grey mb-1" style={{fontSize:'14px'}}>Disciplined hitter, that stands in with intent, swings at strikes and works the count.</p>   
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "25px", width: "85%" }}
            ></div>
            
          </div>
          <p className="w3-wide fw-bold mt-3 mb-0" style={{fontSize:'13px'}}>SPEED</p>
          <p className="w3-text-grey mb-1" style={{fontSize:'12px'}}><b>60-</b> Infield speed: In-game avg 6.9 | Practice avg 6.8 <br /><b>BASE PATH-</b> Good reads: quick, wild & ambitious.</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "25px", width: "80%" }}
            ></div>
       </div>
       <p className="w3-wide fw-bold mt-3 mb-0" style={{fontSize:'13px'}}>DURABILITY</p>
          <p className="w3-text-grey mb-1" style={{fontSize:'12px'}}><b>2023 HIGH SCHOOL:</b> Caught 298 2/3 innings <br />
         <b>2023 SUMMER BALL:</b>  Caught 342 2/3 innings </p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "25px", width: "80%" }}
            ></div>
       </div>
                </div>
                <div className="w3-col m1 w3-margin-bottom">
                    </div>
                <div className="w3-col m7 w3-margin-bottom">
                <h5 className="w3-margin-top w3-text-white">PERFORMANCE METRICS</h5>   
                <hr style={{ width: "225px" }} className="w3-opacity" />
                    <img src={StatsBW} alt="stats" className="w-100 rounded shadow-sm" />
                   <p className='text-reset text-center w3-margin-top' style={{fontSize:'14px'}}><i>*Stats were gathered using <Link>Trackman</Link> data and actionable insights.  <br/>**Stats recorded 1/1/2024 at PBR event- <Link>event link</Link>.</i></p>

                </div>
            </div>
            </div>
    )}
    </InView>
    
     {/* Quick Stats Section */}
     <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} 
            className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
            id="quick-stats">            
            <hr className="w3-opacity w3-padding-16 w3-margin-top" />
            <h1 className="w3-text-light-grey w3-margin-bottom">Quick Stats</h1>
         <h6>Quick Stats provide a weekly updated snapshot of four key performance metrics—Batting Average, On Base Percentage, Pop-Time, and Put-Outs— broadly highlighting important aspects of play.</h6>
          <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
            <div className="w3-quarter w3-section" style={{fontFamily:'Raleway'}}>
              <span className="w3-xxxlarge fw-bolder" style={{fontFamily:'monospace', fontWeight:'bolder'}}>1.93</span>
              <br />
             Pop-Time
            </div>
            <div className="w3-quarter w3-section" style={{fontFamily:'Raleway'}}>
             <span className="w3-xxxlarge fw-bold" style={{fontFamily:'monospace', fontWeight:'bolder'}}>10.4</span>
              <br />
              Put-Outs
            </div>
            <div className="w3-quarter w3-section" style={{fontFamily:'Raleway'}}>
             <span className="w3-xxxlarge fw-bold"  style={{fontFamily:'monospace', fontWeight:'bolder'}}>.723</span>
              <br />
            On Base%
            </div>
            <div className="w3-quarter w3-section" style={{fontFamily:'Raleway'}}>
             <span className="w3-xxxlarge fw-bold" style={{fontFamily:'monospace', fontWeight:'bolder'}}>.410</span>
              <br />
             Batting Avg.
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