import React from "react";
import DefOnly from "../../assets/images/DefOnly.png";
import { InView } from "react-intersection-observer";
import "../../styles/service-cards.css";

const AboutUs = () => {
  return (
    <div className="about-us" id="about-us">
      <div      style={{
        backgroundImage:
          "linear-gradient( #eeeeee, #ffffff, #f80287)",
      }}>
         <p><i>**AboutUs</i></p>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={` w3-padding-24 w3-padding-large text-center w3-margin-bottom
            ${inView ? "animate-slide-right" : ""}`}
            >
              <div className="w3-padding-16 justify-content-center align-items-center">
               
                <h1>
                  {" "}
               
                  <span
                    style={{
                      fontSize: "4.5rem",
                    }}
                    className="mb-3"
                  >
                       Welcome to 
                    <span>
                      <i
                        style={{
                          fontFamily: "Raleway",
                          fontSize: "4.5rem",
                          textShadow: "1px 1px 4px black",
                        }}
                      > Con
                      </i>
                    </span>
                    <span
                      className="fw-bold"
                      style={{
                        fontFamily: "Dancing Script",
                        marginLeft: "-10px",
                        textShadow: "1px 1px 4px black",
                        color: "color:'#ff90d9'",
                      }}
                    >
                      Scribe
                    </span>
                    
                  </span>{" "}
                </h1>

                <h2>
                  Self-promotion has become an assumed and unavoidable part of
                  the recruitment journey, essential for securing opportunities.
                </h2>
              </div>
       
             <div className="container w3-padding-16 w3-padding-large">
                <div className="row justify-content-around align-items-end">
                  <div className="col-sm-12 col-md-5 col-lg-5 w3-margin-bottom">
                      <img
                        src={DefOnly}
                        alt="default"
                        style={{ width: "100%" }}
                        className="w3-round-xlarge shadow shadow-5-strong hover-shadow w3-hover-pink"
                      />
                    </div>
                

                  <div className=" col-sm-12 col-md-7 col-lg-7 d-flex w3-margin-bottom w3-margin-top align-items-start my-3">
                  <div className=" w3-padding">
                      <h1>
                        <span
                          style={{
                            fontSize: "2.5rem",
                          }}
                          className="mb-3"
                        >
                          <span>
                            <i
                              style={{
                                fontFamily: "Raleway",
                                fontSize: "2.5rem",
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
                              marginLeft: "-8px",
                              textShadow: "1px 1px 2.5px black",
                              color: " #ff90d9",
                            }}
                          >
                            Scribe
                          </span>
                        </span>{" "}
                        <span> </span>
                      </h1>
                      <h2 className="fw-bold mb-0 fs-3 text-body-emphasis">
                        What's in the name?{" "}
                      </h2>
                      <p className=" w3-margin-top">
                   Student athletes are unknowingly up against tremendous competition for scholarships and roster spots. 
                    The pressure to stand out is immense, and the need to be proactive is paramount.
                      </p>
                      <p className=" w3-margin-top">
                        Though the focus should be on performance & academics, athletes are
                        required to build their brand and market their talents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>




              <div className=" w3-padding-large">
              {/*start Quick Stats */}
              <div
                className="w3-row w3-center w3-black"
                style={{ backgroundColor: "#FF385C", fontFamily:'Montserrat'}}
              >
                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>20+<span style={{ fontWeight: 'light', fontSize:'18px'}}>YRS</span></span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}> BUSINESS EXPERIENCE</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>100+</span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}> TRANSFER STUDENTS</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>100+</span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}> HIGH SCHOOL RECRUITS</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>100%</span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}>DEDICATED TO SUCCESS</span>
                </div>
              </div>
              </ div>
            </div>
          )}
        </InView>
      </div>
      </div>
  );
};

export default AboutUs;
