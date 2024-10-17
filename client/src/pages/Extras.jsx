import React from "react";
import { Link } from "react-router-dom";
import Graphics from "../assets/images/ServiceCards/Graphics.png";
import Web from "../assets/images/ServiceCards/Web.png";
import Video from "../assets/images/ServiceCards/Video.png";
import Market from "../assets/images/ServiceCards/Market.png";
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import Stats from "../assets/images/Stats.png";

const myFunction = (id) => {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") === -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
};

const Extras = () => {
  return (

      <div className="w3-theme-l5"
        style={{
          backgroundImage:'linear-gradient(to right, black , #737373, #737373, )',
        }}>
        {/*Start Page Container */}
        <div
          className="w3-container w3-content"
          style={{ maxWidth: "1400px", marginTop: "40px" }}
        >
          {/* Start main row*/}
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <div className="w3-margin-top">
                    <p className="w3-center">
                      <img
                        src={Graphics}
                        style={{ width: "100%" }}
                        alt="Avatar"
                      />
                    </p>
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
              <br />

              {/* Accordion */}
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
                          src={Web}
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
                          src={Video}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src={Market}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
PG
              <div className="w3-card w3-round w3-white">
                <div className="w3-container ">
                <img
                  src={Graphics}
                  alt="graphics"
                  className="shadow w3-margin-top"
                  style={{ width: "100%" }}
                />
                  <h6 className="w3-margin-top">CONTACT</h6>

                  <div className="w3-block w3-theme-l4 border-gray-300 ">
                  <p className=" p-2 ">
                    <span
                      className="w3-opacity py-1"
                      style={{ fontSize: "13px" }}
                    >
                      Cell:{" "}
                      <Link
                        style={{ fontSize: "12px", textDecoration: "none" }}
                      >
                        444-123-1234
                      </Link>{" "}
                    </span>{" "}
                    <br />
                    <span
                      className="w3-opacity py-1"
                      style={{ fontSize: "13px" }}
                    >
                      Email:{" "}
                      <Link
                        style={{ fontSize: "12px", textDecoration: "none" }}
                      >
                        email@gmail.com
                      </Link>{" "}
                    </span>
                    <br />
                    <span className="w3-opacity" style={{ fontSize: "13px" }}>
                      Address: 
                    
                      <Link
                        style={{ fontSize: "12px", textDecoration: "none" }}
                      >
                        123 Your St. Htown, MD. 20639
                      </Link>{" "}
                    </span>{" "}
                    <br />
                  </p>
                  </div>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white">
                <div className="w3-container px-3 py-2">
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
              <br />

              <div className="w3-card w3-round w3-white w3-center">
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
              <br />
                    {/*Teams Accordion 
                    <div className="w3-card w3-round">
                <div className="w3-white">
                  <button
                    onClick={() => myFunction("Demo1")}
                    className="w3-button w3-block w3-theme-l1 w3-left-align mt-2"
                  >
                    <GrSchedules className="fa-fw w3-margin-right" />
                    Schedule <LiaDownloadSolid/>
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
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
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
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>
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
                    <i className="fa fa-users fa-fw w3-margin-right"></i>
                    Articles
                  </button>
                  <div id="Demo4" className="w3-hide w3-container">
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                        <img
                          src={Web}
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
                          src={Video}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                      <div className="w3-half">
                        <img
                          src={Market}
                          style={{ width: "100%" }}
                          alt="pic"
                          className="w3-margin-bottom"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
*/}
              {/* Interests */}
              <div className="w3-card w3-round w3-white w3-hide-small">
                <div className="w3-container">
                  <p>Interests</p>

                  <p>
                    <span className="w3-tag w3-small w3-theme-d7">
                      NCAA Baseball
                    </span>
                    <span className="w3-tag w3-small w3-theme-d6">
                      Student-athlete
                    </span>
                    <span className="w3-tag w3-small w3-theme-d5">Catcher</span>
                    <span className="w3-tag w3-small w3-theme-d4">
                      2024 Recruit
                    </span>
                    <span className="w3-tag w3-small w3-theme-d3">
                      Dirtbags
                    </span>
                    <span className="w3-tag w3-small w3-theme-d2">PBR</span>
                    <span className="w3-tag w3-small w3-theme-d1">
                      Perfect Game
                    </span>
                    <span className="w3-tag w3-small w3-theme-l1">Top ten</span>
                    <span className="w3-tag w3-small w3-theme-l2">Honors</span>
                    <span className="w3-tag w3-small w3-theme-l3">ESPN+</span>
                    <span className="w3-tag w3-small w3-theme-l4">
                      Evoshield
                    </span>
                  </p>
                </div>
              </div>
              <br />

              {/* End Left Column */}
            </div>

            {/* Middle Column */}
            <div className="w3-col m9">
            <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div>
                    <div className="w3-container w3-padding">
                    <div className="row">
                    <div className="w3-col m4">
                    <div className="w3-container w3-border w3-border-gray rounded shadow w3-padding">
                            <p className="w3-opacity">PLAYER OVERVIEW</p>
                            <h5>CLAY WARGO <span className="w3-tag w3-blue" style={{fontSize:'11px', paddingTop:'.75px', paddingBottom:'.75px'}}><i>2024 CATCHER</i></span></h5>
                            <p style={{fontSize:'12px'}} ><b className=" text-dark-emphasis">HEIGHT </b><span >6'0"</span> <b className="text-dark-emphasis"> WEIGHT</b> 235 <br /><b className="text-dark-emphasis"> BATS|</b>R <b className="text-dark-emphasis"> THROWS|</b>R <br/><b className="text-dark-emphasis"> PRIMARY|</b>C <b className="text-dark-emphasis"> SECONDARY|</b>1B 
                            <br/> <hr/>  <b className="text-dark-emphasis"> GRAD YR </b><span>2024</span> <br/> <b className="text-dark-emphasis"> BORN:</b><span>11-11-01</span> <br /><b className="text-dark-emphasis"> HOME:</b><span>HUNTINGTOWN, MD.</span></p>
                    
                         <hr />
                         <h4>TEAMS</h4>
                          </div>

</div>





<div className="w3-col m8">

<div className="w3-container w3-padding">
  <h6 className="w3-opacity">PLAYER STATS</h6>
  <img src={Stats} alt="stats" className="w-100 shadow rounded" />
  <p className='text-reset text-center mt-2' style={{fontSize:'12px'}}><i>*Stats were gathered using <Link>Trackman</Link> data and actionable insights.  <br/>**Stats recorded 1/1/2024.</i></p>
</div>

</div>
                  </div>

</div>
                  </div>

                  </div>
                  </div>


{/**

              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <span className="w3-right w3-opacity">updated: 8/23</span>
                      <h4 >Stats</h4>
                      <hr className="w3-clear" />
                      <div className="row w3-margin-bottom">
                        <div className="w3-col m6">
                          <div className="w3-container w3-border w3-border-gray w3-padding">
                            <p className="w3-opacity">PLAYER OVERVIEW</p>
                            <h5>CLAY WARGO <span className="w3-tag w3-light-gray" style={{fontSize:'11px', paddingTop:'.75px', paddingBottom:'.75px'}}><i>2024 CATCHER</i></span></h5>
                            <p style={{fontSize:'12.5px'}}><b>HT:</b>6'0" <b>WT:</b>235 <b>BATS:</b>RIGHT <b>THROWS:</b>RIGHT <b>PRIMARY:</b>CATCHER <b>SECONDARY:</b>1B 
                            <b> BORN:</b><span>11-11-01</span> <b>HOME:</b><span>HUNTINGTOWN, MD.</span></p>
                          </div>
                        </div>

                        <div className="w3-col m6">

                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">PLAYER STATS</h6>
                          </div>
                          <img src={Stats} alt="stats" className="w-100" />
                        </div>
                      
                      </div>
                      <p className="w3-padding">
                        Uncommitted- Playing Summerball for 'your-team-name'
                        through August 1. Summer Schedule Link{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
 */}



              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <span className="w3-right w3-opacity">updated: 8/23</span>
                      <h4 >Stats</h4>
                      <hr className="w3-clear" />
                      <div className="row w3-margin-bottom">
                        <div className="w3-col m6">
                          <div className="w3-container w3-border w3-border-gray w3-padding">
                            <p className="w3-opacity">PLAYER OVERVIEW</p>
                            <h5>CLAY WARGO <span className="w3-tag w3-light-gray" style={{fontSize:'11px', paddingTop:'.75px', paddingBottom:'.75px'}}><i>2024 CATCHER</i></span></h5>
                            <p style={{fontSize:'12.5px'}}><b>HT:</b>6'0" <b>WT:</b>235 <b>BATS:</b>RIGHT <b>THROWS:</b>RIGHT <b>PRIMARY:</b>CATCHER <b>SECONDARY:</b>1B 
                            <b> BORN:</b><span>11-11-01</span> <b>HOME:</b><span>HUNTINGTOWN, MD.</span></p>
                          </div>
                        </div>

                        <div className="w3-col m6">
                          
                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">PLAYER STATS</h6>
                          </div>
                        </div>
                        <img src={Stats} alt="stats" className="w-100" />
                      </div>
                      <p className="w3-padding">
                        Uncommitted- Playing Summerball for 'your-team-name'
                        through August 1. Summer Schedule Link{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <span className="w3-right w3-opacity">updated: 8/23</span>
                      <h4>PG</h4>
                      <hr className="w3-clear" />
                      <div className="row w3-margin-bottom">
                        <div className="w3-col m3">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">PLAYER STATS</h6>
                          </div>
                        </div>
                        <div className="w3-col m3">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">60</h6>
                          </div>
                        </div>
                        <div className="w3-col m3">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">PLAYER STATS</h6>
                          </div>
                        </div>
                        <div className="w3-col m3">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">PLAYER STATS</h6>
                          </div>
                        </div>
                      </div>
                      <p className="w3-padding">
                        Uncommitted- Playing Summerball for 'your-team-name'
                        through August 1. Summer Schedule Link{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <span className="w3-right w3-opacity">updated: 8/23</span>
                      <h4>DEFENSE</h4>
                      <hr className="w3-clear" />
                      <div className="row w3-margin-bottom">
                        <div className="w3-col m6">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">PLAYER STATS</h6>
                          </div>
                        </div>

                        <div className="w3-col m6">
                          <div className="w3-container w3-border w3-border-black w3-padding">
                            <h6 className="w3-opacity">PLAYER STATS</h6>
                          </div>
                        </div>
                      </div>
                      <p className="w3-padding">
                        Uncommitted- Playing Summerball for 'your-team-name'
                        through August 1. Summer Schedule Link{" "}
                      </p>
                    </div>
                  </div>
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

              {/* End Middle Column */}
            </div>
            {/* End Grid */}
          </div>
            {/* End main row*/}
          {/* End Page Container */}
        </div>
        <br />




        {/* Footer 
        <footer className="w3-container w3-theme-d3 w3-padding-16">
          <h5>Footer</h5>
        </footer>

        <footer className="w3-container w3-theme-d5">
          <p>
            Powered by{" "}
            <Link
              to="https://www.conscribe.com"
              target="_blank"
            >
            Conscribe
            </Link>
          </p>
        </footer>
*/}
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

export default Extras;






            /* Right Column 
            <div className="w3-col m2">
          

              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <div className="w3-margin-bottom">
                    <p className="mb-0 mt-3">FOLLOW ME ON:</p>
                    <Link
                      className="text-decoration-none w3-opacity text-black"
                      style={{ fontSize: "2.2rem" }}
                    >
                      <strong>
                        <BsTwitterX className="" />
                      </strong>{" "}
                    </Link>
                    <Link
                      className="text-decoration-none w3-opacity w3-text-pink"
                      style={{ fontSize: "2.35rem" }}
                    >
                      <strong>
                        <FaSquareInstagram />
                      </strong>{" "}
                    </Link>
                    <Link
                      className="text-decoration-none w3-opacity w3-text-purple"
                      style={{ fontSize: "2.4rem" }}
                    >
                      <strong>
                        <FaSnapchatSquare />
                      </strong>
                    </Link>
                  </div>
                </div>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
                <p>ADS</p>
              </div>
              <br />

              <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
                <p>
                  <i className="fa fa-bug w3-xxlarge"></i>
                </p>
              </div>

              </div>
              */