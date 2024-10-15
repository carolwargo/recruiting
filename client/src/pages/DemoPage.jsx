import React from "react";
import { Link } from "react-router-dom";
import ClaySmall from '../assets/images/ClaySmall.png';
import Footer from '../components/Footer';  
import ClayCover3 from '../assets/images/ClayCover3.png';
import Stats from '../assets/images/Stats.png';
import Virginia from '../assets/images/Testimonials/Virginia.png';
import Wake from '../assets/images/Testimonials/Wake.png';
import Teacher from '../assets/images/Testimonials/Teacher.png';
import Principal from '../assets/images/Testimonials/Principal.png';
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";


const DemoPage = () => {

  return (
    <div className="body w3-black"
    style={{paddingTop:'3.6rem'}}>
      <style>
        {`
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
      <div className="w3-padding-large" id="main">
        {/* Header/Home */}
        <header
          className="w3-container w3-padding-32 w3-center w3-black"
          id="home"
        >
          <h1 className="w3-jumbo">
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

        {/* About Section */}
        <div
          className="w3-content w3-justify w3-text-grey w3-padding-16"
          id="about"
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
         
          <hr className="w3-opacity w3-padding-16 w3-margin-top" />
          <h1 className="w3-text-light-grey">Overview</h1>

          <div className="w3-row">
            <div className="w3-card shadow-2-soft w3-light-grey w3-margin-bottom">
            <div className="w3-row w3-section d-flex justify-content-center align-items-center">
            {/* Left Column */}
            <div className="w3-col m4">
              {/* Profile */}
              <div className="">
                <div className="w3-container">
                  <div className="w3-margin-top">
                    <p className="w3-center">
                      <img
                        src={ClaySmall}
                        style={{ width: "100%" }}
                        alt="Avatar"
                        className="shadow"
                      />
                    </p>
                  </div>
             
                 
                </div>
              </div>
              </div>
           
              <div className="w3-col m8">
                <div className="row">
                <div className="w3-container w3-padding-large">
                  <div className="w3-margin-top">
            
                    <h4 className="">CLAY WARGO</h4>
                  </div>
                  <hr />
                  </div>
                <div className="w3-col m6">
              {/* Profile */}
                <div className="w3-container">
                  <p className="my-1 ">
                    <RiHome6Line
                      className="fa-fw w3-margin-right w3-text-theme py-0 my-0"
                      style={{ fontSize: "1.4rem" }}
                    />
                    Catcher
                  </p>
                  <p className="my-1 ">
                    <HiAcademicCap
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    2024
                  </p>
                     <p className="my-1 ">
                    <GrScorecard
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    SAT-9000 | GPA- 5.0
                  </p>
                     <p className="my-1 ">
                    <MdLocationPin
                      className="fa-fw w3-margin-right w3-text-theme"
                      style={{ fontSize: "1.4rem" }}
                    />
                    New York, NY.
                  </p>


                  <button className="w3-button w3-black w3-padding-large w3-section">
            <i className="fa fa-download"></i> Download Resume
          </button>
                </div>
                
              </div>
            
               
              <div className="w3-col m6">
              {/* Profile */}
                <div className="container w3-padding-small w3-padding-24">            
                
                  <p style={{fontSize:'13px'}} >
                  
<span>
                 <b className="text-dark-emphasis"> HEIGHT </b> <i className=" w3-text-gray">6'0</i> 
                    <b className="text-dark-emphasis w3-margin-left"> WEIGHT </b><i className=" w3-text-gray">225</i>
                    </span>   
                    <br/>
                    <span>
                 <b className="text-dark-emphasis"> PRIMARY </b> <i className=" w3-text-gray">C</i> 
                    <b className="text-dark-emphasis w3-margin-left"> SECONDARY </b><i className=" w3-text-gray">1B</i>
                    </span>   
                    <br/>
                    <span>
                 <b className="text-dark-emphasis"> THROWS </b> <i className=" w3-text-gray">R</i> 
                    <b className="text-dark-emphasis w3-margin-left"> BATS </b><i className=" w3-text-gray">R</i>
                    </span>   
                 
                             <hr/>  
                            <b className="text-dark-emphasis"> GRAD YR </b><span> <i className=" w3-text-gray">2024</i></span> <br/> <b className="text-dark-emphasis"> BORN </b><span><i className=" w3-text-gray">11-11-01</i></span> <br /><b className="text-dark-emphasis"> HOME </b><span><i className=" w3-text-gray">HUNTINGTOWN, MD.</i></span></p>
           
                </div>
            
              </div>
                </div>
                </div>
                </div>
            </div>
            {/* End Grid/Pricing tables */}
          </div>
<br />
          <hr className="w3-opacity w3-padding-16 w3-margin-top" />
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-col m4 w3-margin-bottom">   
          <h5 className="w3-margin-top w3-text-white">SELF-EVALUATION</h5>   
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
          <p className="w3-text-grey mb-1" style={{fontSize:'14px'}}>I am a disciplined hitter, that stands in with intent- Swing at strikes, not ball, and work the count.</p>   
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "25px", width: "85%" }}
            ></div>
            
          </div>
          <p className="w3-wide fw-bold mt-3 mb-0" style={{fontSize:'13px'}}>SPEED</p>
          <p className="w3-text-grey mb-1" style={{fontSize:'12px'}}>Top-tier hands and ability to muscle the ball into the zone with subtlty- In-game pop-time average of 1.91 in 2023.</p>
          <div className="w3-white">
            <div
              className="w3-dark-grey"
              style={{ height: "25px", width: "80%" }}
            ></div>
       </div>
       <p className="w3-wide fw-bold mt-3 mb-0" style={{fontSize:'13px'}}>DURABILITY</p>
          <p className="w3-text-grey mb-1" style={{fontSize:'12px'}}>Top-tier hands and ability to muscle the ball into the zone with subtlty- In-game pop-time average of 1.91 in 2023.</p>
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
                   <p className='text-reset text-center w3-margin-top' style={{fontSize:'14px'}}><i>*Stats were gathered using <Link>Trackman</Link> data and actionable insights.  <br/>**Stats recorded 1/1/2024.</i></p>

                </div>
            </div>
        

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
<br />
          <hr className="w3-opacity w3-padding-16" />
  

          {/* Testimonials */}
         
          <h1 className="w3-text-light-grey w3-margin-bottom">Reputation</h1>
          <div className="w3-row-padding w3-padding-16" style={{ margin: "0 -16px" }}>
       
          <div className="w3-col m6 w3-margin-bottom">  
            <div className="container">
          <img
            src={Teacher}
            alt="teacher"
            className="w3-left w3-circle w3-margin-right"
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
         className="w3-left w3-circle w3-margin-right"
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
         className="w3-left w3-circle w3-margin-right"
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
         className="w3-left rounded w3-margin-right"
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

          {/* End About Section */}
        </div>

        {/* Portfolio Section */}
        <div className="w3-padding-64 w3-content" id="photos">
          <h2 className="w3-text-light-grey">My Photos</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />

          {/* Grid for photos */}
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half">
              <img
                src="/w3images/wedding.jpg"
                alt="pic"
                style={{ width: "100%" }}
              />
              <img
                src="/w3images/rocks.jpg"
                alt="pic"
                style={{ width: "100%" }}
              />
              <img
                src="/w3images/sailboat.jpg"
                alt="pic"
                style={{ width: "100%" }}
              />
            </div>

            <div className="w3-half">
              <img
                src="/w3images/underwater.jpg"
                alt="pic"
                style={{ width: "100%" }}
              />
              <img
                src="/w3images/chef.jpg"
                alt="pic"
                style={{ width: "100%" }}
              />
              <img
                src="/w3images/wedding.jpg"
                alt="pic"
                style={{ width: "100%" }}
              />
              <img src="/w3images/p6.jpg" alt="pic" style={{ width: "100%" }} />
            </div>
            {/* End photo grid */}
          </div>
          {/* End Portfolio Section */}
        </div>

        {/* Contact Section */}
        <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
          <h2 className="w3-text-light-grey">Contact Me</h2>
          <hr style={{ width: "200px" }} className="w3-opacity" />

          <div className="w3-section">
            <p>
              <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              Chicago, US
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
              Phone: +00 151515
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
                {" "}
              </i>{" "}
              Email: mail@mail.com
            </p>
          </div>
          <br />
          <p>Let's get in touch. Send me a message:</p>

          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Name"
                required
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Email"
                required
                name="Email"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Subject"
                required
                name="Subject"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16"
                type="text"
                placeholder="Message"
                required
                name="Message"
              />
            </p>
            <p>
              <button
                className="w3-button w3-light-grey w3-padding-large"
                type="submit"
              >
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </form>
          {/* End Contact Section */}
          <Footer/>
        </div>
      
  {/** 
            <footer className="w3-content text-center w3-padding-32 w3-text-white w3-xlarge">
            <i className="fab fa-facebook-f w3-hover-opacity mx-1"></i>
<i className="fab fa-instagram w3-hover-opacity mx-1"></i>
<i className="fab fa-snapchat-ghost w3-hover-opacity mx-1"></i>
<i className="fab fa-pinterest-p w3-hover-opacity mx-1"></i>
<i className="fab fa-twitter w3-hover-opacity mx-1"></i>
<i className="fab fa-linkedin-in w3-hover-opacity mx-1"></i>
          <p className="w3-medium">
          © 2023 Copyright:{" "}
            <Link to="/" className="w3-content w3-padding-64 w3-text-white w3-xlarge w3-hover-opacity text-decoration-none" 
            onClick={handleNavLinkClick}><b><span><i style={{fontFamily:'Raleway', textShadow:'.5px .5px 1px black', fontSize:'13px'}}>Con</i></span>
     <span className='w3-text-pink fw-bold' style={{ fontFamily:"Dancing Script", marginLeft:'-2px', textShadow:'.5px .5px 1px black', fontSize:'17px'}}>Scribe</span></b></Link>
          </p>
        </footer>
        */}
     
        {/* END PAGE CONTENT */}
      </div>
    </div>
  );
};

export default DemoPage;
