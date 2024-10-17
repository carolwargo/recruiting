import React from "react";
import { Link } from "react-router-dom";
import ClaySmall from '../assets/images/ClaySmall.png';
import ClayCover3 from '../assets/images/ClayCover3.png';
import Hit from '../assets/images/Hit.png';
import Catch from '../assets/images/Catch.png';
import Stats from '../assets/images/Stats.png';
import Virginia from '../assets/images/Testiminals/Virginia.png';
import Wake from '../assets/images/Testiminals/Wake.png';
import Teacher from '../assets/images/Testiminals/Teacher.png';
import Principal from '../assets/images/Testiminals/Principal.png';
import VideoCards from '../components/Demo/VideoCards';
import { InView } from 'react-intersection-observer';
import Graphics from '../assets/images/ServiceCards/Graphics.png';
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
          to="#about"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </Link>
        <Link
          to="#photos"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-eye w3-xxlarge"></i>
          <p>MEDIA</p>
        </Link>
        <Link
          to="#contact"
          className="w3-bar-item w3-button w3-padding-large w3-hover-black"
        >
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </Link>
      </nav>

      {/* Navbar on small screens (Hidden on medium and large screens) */}
      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link
            to="#"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            HOME
          </Link>
          <Link
            to="#about"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            ABOUT
          </Link>
          <Link
            to="#photos"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            PHOTOS
          </Link>
          <Link
            to="#contact"
            className="w3-bar-item w3-button"
            style={{ width: "25% !important" }}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="w3-padding-large" id="demo-main">    

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
                width="992"
                height="1108"
              />
            </header>
          )}
        </InView>

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
                <i className="fa fa-download"></i> Download Stats
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
                    <img src={Stats} alt="stats" className="w-100 rounded shadow-sm" />
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

           {/* Video Stat Section */}

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

        {/* Contact Section */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`} 
        id="contact">
          <h2 className="w3-text-light-grey">Contact Me</h2>
          <h5>Get in touch direct or send me a message through the site:</h5>
         
<div className="row w3-padding-small w3-padding-16 d-flex justify-content-center w3-white">
<div className="col-sm-12 col-md-6 col-lg-6">
          <div className="w3-card mt-1 w3-round w3-white">
  
  <form className="w3-padding-large">
  <div className="my-2">

</div>

<div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
    <p>
      <input
        className="w3-input mt-0 py-2 rounded shadow border"
        type="text"
        placeholder="First Name"
        required
        name="FirstName"
      />
    </p>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        
    <p className=" mt-1">
    <input
        className="w3-input mt-0 py-2 rounded shadow border"
        type="text"
        placeholder="Last Name"
        required
        name="LastName"
      />
    </p>
    </div>
    </div>

    <p className="">
    <input
        className="w3-input rounded shadow border"
        type="text"
        placeholder="Email"
        required
        name="Email"
      />
    </p>
    <p className=" mt-1">
      <input
        className="w3-input rounded shadow border"
        type="text"
        placeholder="Subject"
        required
        name="Subject"
      />
    </p>
    <p className=" mt-1">
      <textarea
        className="w3-input rounded shadow border"
        type="text-area"
        placeholder="Type your message here"
        required
        name="Message"
        rows='4'
      />
    </p>
    <p>
      <button
        className="w3-button w3-black w3-padding-small w3-text-large"
        type="submit"
      >
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </p>
  </form>
<hr/>
                <div className="w3-container  w3-center">
                  <div className="w3-margin-bottom">
                    <p className="mb-0 mt-3">MESSAGE ME ON:</p>
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
    <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="w3-card mt-1 w3-round w3-white">
  
  <form className="w3-padding-large">
  <div className="my-2">

</div>

<div className="row">
    <div className="col-sm-12 col-md-6 col-lg-6">
    <p>
      <input
        className="w3-input mt-0 py-2 rounded shadow border"
        type="text"
        placeholder="First Name"
        required
        name="FirstName"
      />
    </p>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
        
    <p className=" mt-1">
    <input
        className="w3-input mt-0 py-2 rounded shadow border"
        type="text"
        placeholder="Last Name"
        required
        name="LastName"
      />
    </p>
    </div>
    </div>

    <p className="">
    <input
        className="w3-input rounded shadow border"
        type="text"
        placeholder="Email"
        required
        name="Email"
      />
    </p>
    <p className=" mt-1">
      <input
        className="w3-input rounded shadow border"
        type="text"
        placeholder="Subject"
        required
        name="Subject"
      />
    </p>
    <p className=" mt-1">
      <textarea
        className="w3-input rounded shadow border"
        type="text-area"
        placeholder="Type your message here"
        required
        name="Message"
        rows='4'
      />
    </p>
    <p>
      <button
        className="w3-button w3-black w3-padding-small w3-text-large"
        type="submit"
      >
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </p>
  </form>
<hr/>
                <div className="w3-container  w3-center">
                  <div className="w3-margin-bottom">
                    <p className="mb-0 mt-3">MESSAGE ME ON:</p>
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
          {/* End Contact Section */}
        </div>
          )}
    </InView>
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

export default DemoPage;
