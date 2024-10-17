import React from "react";
import { Link } from "react-router-dom";
import Web from "../../assets/images/ServiceCards/Web.png";
import Graphics from "../../assets/images/ServiceCards/Graphics.png";
import Video from "../../assets/images/ServiceCards/Video.png";
import Market from "../../assets/images/ServiceCards/Market.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ServiceCards = () => {
  return (
    <div
      className="service-cards"
      id="service-cards"
      style={{
        backgroundImage:
          "linear-gradient(to right, white,  #e6e6e6, light-gray, #d32c9a)",
      }}
    >
      <style>
        {`.glow {
  color: #fff;
  text-align: center;
 text-shadow: 0 0 5px black, 0 0 15px black, 0 0 30px black;
}
  .glow-icon {
  color: #fff;
  text-size: 1.5rem;
  text-align: center;
 text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px #4e4e50, 0 0 40px black;
}
 .glow-icon-small {
  color: #000;
  text-size: 1.5rem;
  text-align: center;
 text-shadow: 0 0 5px black, 0 0 10px black, 0 0 20px #4e4e50, 0 0 40px black;
}
}`}
      </style>
      <div className="container py-4">
          {/*Start Service Header & intro container */}
        <div className="container mt-4 text-center">
          <h1>
            WELCOME TO{" "}
            <span
              style={{
                fontSize: "4.5rem",
              }}
              className="mb-3"
            >
              <span>
                <i
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "4.5rem",
                    textShadow: "1px 1px 4px black",
                  }}
                >
                  Con
                </i>
              </span>
              <span
                className="fw-bold"
                style={{
                  fontFamily: "Dancing Script",
                  marginLeft: "-10px",
                  textShadow: "1px 1px 4px black",
                  color: " #d32c9a",
                }}
              >
                Scribe
              </span>
            </span>
          </h1>
          <h3 className="mb-4 px-4 w3-hide-small w3-hide-medium">
            EXPLORE OUR ESSETIAL KEY OFFERINGS- DISCOVER HOW WE CAN HELP CREATE OR ELEVATE
            YOUR PERSONAL BRAND & STREAMLINE YOUR MARKETING STRATEGIES.
          </h3>
          <h5 className="mb-4 px-4 w3-hide-large">
            EXPLORE OUR ESSENTIAL KEY OFFERINGS- DISCOVER HOW WE CAN HELP CREATE OR ELEVATE
            YOUR PERSONAL BRAND & STREAMLINE YOUR MARKETING STRATEGIES.
          </h5>
          <p className="w3-hide-large">
            {" "}
            Pick a service below to get started, or simply{" "}
            <Link to="contact">contact us</Link> with questions.{" "}
          </p>
             <h5 className="w3-hide-small w3-hide-medium">
            {" "}
            Pick a service below to get started, or simply{" "}
            <Link to="contact">contact us</Link> with questions.{" "}
          </h5>
        </div>
 {/*Start Service Header & intro container */}

        {/*Start Small service cards */}
        <div className="container mt-3 w3-hide-large">
<div className="row d-flex justify-content-center align-items-center w3-padding-large w3-padding-24">
          <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Video}
                  alt="video editing card link"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-70  shadow shadow-5-strong w3-hover-purple"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2>Video Editing</h2>
                <p>This is the text overlaid on the image.</p>
                <Link
                    to="/video"
                    className="button text-white"
                    style={{ textDecoration: "none" }}
                  >
                <button className="w3-button border border-light w3-text-light-grey  w3-round-large mt-2"
                style={{
                    color:'black',
                     boxShadow: "6px 6px 17px rgba(0, 0, 0, 8)"
                }}>
                    Learn More
                </button>
                </Link>
              </div>
            </div>
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Graphics}
                  alt="graphics card link"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-secondary opacity-70  shadow shadow-5-strong w3-hover-purple"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                <h2>Graphic Design</h2>
                <p>Eye-catching visual content designed to...
                </p>
                <Link
                    to="/graphics"
                    className="button text-white"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="w3-button border border-light w3-text-light-grey  w3-round-large mt-2"
                style={{
                    color:'black',
                     boxShadow: "6px 6px 17px rgba(0, 0, 0, 8)"
                }}>
                    Learn More
                </button>
                </Link>
              </div>
            </div>
            <div className=" col-sm-12 col-md-4 col-lg-4 flex-column position-relative p-0">
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Web}
                  alt="webdesign card link" 
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-70 shadow shadow-5-strong w3-hover-purple"></div>
              </div>
              {/* Text */}
              <div className="position-absolute top-50 start-50 translate-middle text-black text-center">
                <h2>Recruiting Websites</h2>
                <p>This is the text overlaid on the image.</p>
              <Link
                    to="/web"
                    className="button text-white"
                    style={{ textDecoration: "none" }}
                  >
                       <button className="w3-button border border-black w3-text-black  w3-round-large mt-2"
                style={{
                    color:'black',
                     boxShadow: "6px 6px 17px rgba(0, 0, 0, 8)"
                }}>
                    Learn More
                </button>
                  </Link>
              
              </div>
            </div>
          </div>
</div>
  {/*End Small service cards */}

    {/*Start Large service cards */}
        <div
          style={{
            paddingLeft: "100px",
            paddingRight: "100px",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >

          <div className="row w3-hide-small w3-hide-medium">
            <div
              className="col-sm-12 col-md-6 border border-opacity-50 flex-column position-relative p-0"
              style={{ boxShadow: ".25rem 1rem 10rem rgba(0, 0, 0, 0.75)" }}
            >
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Graphics}
                  alt="Left"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-20  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>

              {/* Text */}
              <div className="position-absolute rounded px-3 top-50 start-50 translate-middle text-white text-center">
                <h1
                  className="glow fw-bold text-white"
                  style={{ fontSize: "3rem", marginRight: "-7px" }}
                >
                  GRAPHIC
                  <span
                    style={{
                      fontFamily: "Grey Qo",
                      color: "#f676ca",
                      fontSize: "4.5rem",
                      marginLeft: "-7px",
                    }}
                  >
                    Design
                  </span>
                </h1>
                <Link to={"/graphics"}>
                  <button
                    className="btn btn-light border border-gray-100 w3-hover-border fw-bolder mt-0"
                    style={{ 
                      fontSize: "13px",
                  boxShadow: "2px 1px 7px rgba(0, 0, 0, 8)",}}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-6 flex-column border border-opacity-75 position-relative p-0"
              style={{ boxShadow: "2rem 1rem 10rem rgba(0, 0, 0, 0.75)" }}
            >
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Web}
                  alt="Left"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-10  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute rounded px-3 top-50 start-50 translate-middle text-white text-center">
                <h1
                  className="glow fw-bold text-white"
                  style={{ fontSize: "3rem", marginRight: "-7px" }}
                >
                  WEB
                  <span
                    style={{
                      fontFamily: "Grey Qo",
                      color: "#f676ca",
                      fontSize: "4.5rem",
                      marginLeft: "-7px",
                    }}
                  >
                    Development
                  </span>
                </h1>
                <Link to={"/web"}>
                  <button
                    className="btn btn-light border border-gray-100 w3-hover-border fw-bolder mt-0"
                    style={{ 
                      fontSize: "13px",
                  boxShadow: "2px 1px 7px rgba(0, 0, 0, 8)",}}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="row w3-hide-small w3-hide-medium">
            <div
              className="col-sm-12 col-md-6 col-lg-6 flex-column border border-opacity-75 position-relative p-0"
              style={{ boxShadow: "1rem 5rem 10rem rgba(0, 0, 0, 0.75)" }}
            >
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Market}
                  alt="Left"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-10  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute rounded px-3 top-50 start-50 translate-middle text-white text-center">
                <h1
                  className="glow fw-bold text-white"
                  style={{ fontSize: "3rem", marginRight: "-7px" }}
                >
                  DIGITAL
                  <span
                    style={{
                      fontFamily: "Grey Qo",
                      color: "#f676ca",
                      fontSize: "4.5rem",
                      marginLeft: "-7px",
                    }}
                  >
                    Marketing
                  </span>
                </h1>
            <Link to={"/marketing"}>
                  <button
                    className="btn btn-light border border-gray-100 w3-hover-border fw-bolder mt-0"
                    style={{ 
                      fontSize: "13px",
                  boxShadow: "2px 1px 7px rgba(0, 0, 0, 8)",}}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div
              className="col-sm-12 col-md-6 col-lg-6 flex-column border border-opacity-75 position-relative p-0"
              style={{ boxShadow: "2rem 5rem 10rem rgba(0, 0, 0, 0.75)" }}
            >
              {/* Image Container */}
              <div className="position-relative">
                <img
                  src={Video}
                  alt="Left"
                  style={{ width: "100%" }}
                  className=" shadow shadow-5-strong hover-shadow w3-hover-pink"
                />
                {/* Dark Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-10  shadow shadow-5-strong  w3-hover-pink"></div>
              </div>
              {/* Text */}
              <div className="position-absolute rounded px-3 top-50 start-50 translate-middle text-white text-center">
                <h1
                  className="glow fw-bold text-white"
                  style={{ fontSize: "3rem", marginRight: "-7px" }}
                >
                  VIDEO
                  <span
                    style={{
                      fontFamily: "Grey Qo",
                      color: "#f676ca",
                      fontSize: "4.5rem",
                      marginLeft: "-7px",
                    }}
                  >
                    Editing
                  </span>
                </h1>
                <Link to={"/editing"}>
                  <button
                    className="btn btn-light border border-gray-100 w3-hover-border fw-bolder mt-0"
                    style={{ 
                      fontSize: "13px",
                  boxShadow: "2px 1px 7px rgba(0, 0, 0, 8)",}}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
           {/*End Large service cards */}
      </div>
    </div>
  );
};

export default ServiceCards;