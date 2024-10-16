import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import ClaySmall from '../../assets/images/ClaySmall.png';
import {Link} from 'react-router-dom';
import Graphics from '../../assets/images/ServiceCards/Graphics.png';


const myFunction = (id) => {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  };

const DemoCard = () => {
  return (

      <div className="w3-theme-l5 bg-black">
        {/* Page Container */}
        <div
          className="w3-container w3-content bg-black"
          style={{ maxWidth: "1400px", marginTop: "40px" }}
        >
          {/* The Grid */}
       <div className="row">
              <div className="w3-container w3-round w3-white w3-padding">
                      <span className="w3-right w3-opacity">updated: 8/23</span>
                      <h4>Player Profile</h4>
                      <hr className="w3-clear" />
                      <div className="row w3-margin-bottom">
                        <div className="w3-col m6">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                  <div className="w3-margin-top">
                    <p className="w3-center">
                      <img
                        src={ClaySmall}
                        style={{ width: "100%" }}
                        alt="Avatar"
                      />
                    </p>
                    <h4 className="">CLAY WARGO</h4>
                  </div>        
                </div>


                
                    {/**Accordian */}
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
                    
                        <div className="w3-col m6">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                  <div className="w3-margin-top">
                    <h4 className="">CLAY WARGO</h4>
                  </div>
                  <hr />
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
<br />
<div className="w3-container w3-border w3-border-black w3-padding">
                  <div className="w3-margin-top">
                    <h4 className="">CLAY WARGO</h4>
                  </div>
                  <hr />
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
                        </div>
                     
                      </div>
                      <p className="w3-padding">
                        Uncommitted- Playing Summerball for 'your-team-name'
                        through August 1. Summer Schedule Link{" "}
                      </p>
                    </div>
                  </div>
               
           


              <div className="w3-container w3-card w3-white w3-round w3-margin">
                <br />
                <span className="w3-right w3-opacity">1 min</span>
                <h4>DEFENSE</h4>
                <hr className="w3-clear" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                  <div className="w3-half">
                    <img
                      src="/w3images/lights.jpg"
                      style={{ width: "100%" }}
                      alt="Northern Lights"
                      className="w3-margin-bottom"
                    />
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/nature.jpg"
                      style={{ width: "100%" }}
                      alt="Nature"
                      className="w3-margin-bottom"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w3-button w3-theme-d1 w3-margin-bottom"
                >
                  <i className="fa fa-thumbs-up"></i>  Like
                </button>
                <button
                  type="button"
                  className="w3-button w3-theme-d2 w3-margin-bottom"
                >
                  <i className="fa fa-comment"></i>  Comment
                </button>
              </div>
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

            {/* End Grid */}
          

          {/* End Page Container */}
        </div>
 
      </div>
 
  );
};

export default DemoCard;