import React from "react";
import MeWhite from "../assets/images/MeWhite.png";
import LocationView from "../assets/images/LocationView.png";
import ContactModal from "../components/Modals/ContactModal";
import { InView } from "react-intersection-observer";

const AboutPage = () => {
  return (
    <div className="about-me" id="about-me">
      <div className="w3-light-gray">
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-grey w3-padding-16 
                ${inView ? "animate-fade-in" : ""}`}
            >

<div className="about-me" id="about-me">
            <div className="w3-light-gray">

            <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
          >
              <p style={{ fontSize: "12px" }}>/components/Home/AboutMe</p>
              <div
                className="w3-content w3-container w3-padding-32"
                style={{ padding: "40px" }}
              >
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-5">
                    <img
                      src={MeWhite}
                      className="w3-round w3-image shadow border-gray-200 w3-hover-opacity-off mx-auto d-block"
                      alt="Me"
                    />
                    <p className=" fw-light text-center">
                      Carol Wargo-{" "}
                      <i className="text-secondary">No special title</i>
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <div>
                      <h1 className="text-center">WHY WE DO IT?</h1>

                      <p className=" fw-light">
                        <em>
                          <i>
                            {" "}
                            "My passion lies in utilizing creative design to
                            drive innovative solutions through technology. With
                            a distinctive blend of skills and experience, I am a
                            full-stack software developer & UX Designer that
                            specializes in customer servicing & support, deeply
                            committed to collaboration, bringing together
                            diverse perspectives to tackle challenges
                            effectively. With over 20 years of experience in
                            business management & strategic development, I bring
                            a wealth of knowledge and expertise to every project
                            I undertake."
                          </i>
                          -Carol Wargo{" "}
                          <i>Owner/founder/Director of operations.</i>
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w3-row w3-center w3-black w3-padding-32"
                style={{ backgroundColor: "#FF385C" }}
              >
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">
                    20<span style={{ fontSize: "10px" }}>yrs</span> +
                  </span>
                  <br />
                  BUSINESS EXPERIENCE
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">100+</span>
                  <br />
                  DESIGN PROJECTS
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">10+</span>
                  <br />
                  LEADERSHIP ROLES
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">100+</span>
                  <br />
                  MEETINGS
                </div>
              </div>

              {/* Location */}
              <div className="w3-content w3-container w3-padding-32 ">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4">
                    <h2 className="text-center">WHERE WE ARE PHYSICALLY LOCATED</h2>
                    <h5 className="text-center">
                      <em>Huntingtown, Maryland!</em>
                    </h5>
                    <div className="text-center container">
                      <ContactModal />
                    </div>
                  </div>
                  <div className="col-lg-8 ">
                    <img
                      src={LocationView}
                      alt="htown"
                      className="w3-image w3-round shadow"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
        )}
      </InView>
      </div>
    </div>


              <div
                className="w3-content w3-container"
                style={{ paddingTop: "60px" }}
              >
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-5">
                    <img
                      src={MeWhite}
                      className="w3-round w3-image shadow border-gray-200 w3-hover-opacity-off mx-auto d-block"
                      alt="Me"
                    />
                    <p className=" fw-light text-center">
                      Carol Wargo-{" "}
                      <i className="text-secondary">No special title</i>
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <div>
                      <h1 className="text-center">WHY WE ARE?</h1>

                      <p className=" fw-light">
                        <em>
                          <i>
                            {" "}
                            "My passion lies in utilizing creative design to
                            drive innovative solutions through technology. With
                            a distinctive blend of skills and experience, I am a
                            full-stack software developer & UX Designer that
                            specializes in customer servicing & support, deeply
                            committed to collaboration, bringing together
                            diverse perspectives to tackle challenges
                            effectively. With over 20 years of experience in
                            business management & strategic development, I bring
                            a wealth of knowledge and expertise to every project
                            I undertake."
                          </i>{" "}
                          <br />
                          -Carol Wargo{" "}
                          <i>Owner/founder/Director of operations.</i>
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              {/**WHO WE ARE */}
              <div className="w3-container w3-padding w3-padding-32">
                <div className="row d-flex justify-content-center align-items-center">
                <div className="container w3-padding-16 w3-margin-bottom">
                 <h1 className=" text-center">MEET THE TEAM</h1>
                 </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="row d-flex justify-content-center align-items-center">
               
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div>
                      <img
                        src={MeWhite}
                        className="w3-round border border-danger-subtle border-2 w3-image shadow border-gray-200 w3-hover-opacity-off mx-auto d-block"
                        alt="Me"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="container">
           
                      <p className=" fw-light">
                        <i>
                          "My passion lies in utilizing creative design to drive
                          innovative solutions through technology bringing together
                            diverse perspectives to tackle challenges
                            effectively. Lorem, ipsum doloruo sapiente eos eaque alias!
                            Lorem ipsum
                        dolor sit amet, consectetur adipiscing"
                        </i>
                      </p>
                      <h4 className="mb-0 pt-0"><i>CAROL WARGO <span className="fw-bold opacity-60" style={{color:'#ef4482', textShadow: "1px 1px 3px black"}}>-XX</span></i></h4>
                      <h5 className="mt-0 pt-0">
                        <i style={{fontSize:'15px'}}>-Director of Operations</i>
                      </h5>
                      <button className="btn border border-danger-subtle border-2 px-3 py-1"><span style={{fontSize:'12px', color:'gray'}}><b> contact</b></span></button>

                    </div>
                  </div>
                  </div>
</div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="row d-flex justify-content-center align-items-center">
               
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div>
                      <img
                        src={MeWhite}
                        className="w3-round w3-image shadow border-gray-200 w3-hover-opacity-off mx-auto d-block"
                        alt="Me"
                      />
                      <p className=" fw-light text-center">
                        Carol Wargo-{" "}
                        <i className="text-secondary">No special title</i>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="container">
                      <h4 className="">Carol Wargo-</h4>
                      <h5>
                        {" "}
                        <i>Director of operations</i>
                      </h5>
                      <p className=" fw-light">
                        {" "}
                        <i>
                          "My passion lies in utilizing creative design to drive
                          innovative solutions through technology bringing together
                            diverse perspectives to tackle challenges
                            effectively. Lorem ipsum
                        dolor sit amet, consectetur adipiscing"
                        </i>
                      </p>
                    </div>
                  </div>
                  </div>
                 </div>
                </div>
              </div>
              {/**WHO WE ARE */}
              <div
                className="w3-content w3-container w3-padding-32"
                style={{ padding: "40px" }}
              >
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-5">
                    <img
                      src={MeWhite}
                      className="w3-round w3-image shadow border-gray-200 w3-hover-opacity-off mx-auto d-block"
                      alt="Me"
                    />
                    <p className=" fw-light text-center">
                      Carol Wargo-{" "}
                      <i className="text-secondary">No special title</i>
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <div>
                      <h1 className="text-center">WHY WE DO IT?</h1>

                      <p className=" fw-light">
                        <em>
                          <i>
                            {" "}
                            "My passion lies in utilizing creative design to
                            drive innovative solutions through technology. With
                            a distinctive blend of skills and experience, I am a
                            full-stack software developer & UX Designer that
                            specializes in customer servicing & support, deeply
                            committed to collaboration, bringing together
                            diverse perspectives to tackle challenges
                            effectively. With over 20 years of experience in
                            business management & strategic development, I bring
                            a wealth of knowledge and expertise to every project
                            I undertake."
                          </i>
                          -Carol Wargo{" "}
                          <i>Owner/founder/Director of operations.</i>
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w3-row w3-center w3-black w3-padding-32"
                style={{ backgroundColor: "#FF385C" }}
              >
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">
                    20<span style={{ fontSize: "10px" }}>yrs</span> +
                  </span>
                  <br />
                  BUSINESS EXPERIENCE
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">100+</span>
                  <br />
                  DESIGN PROJECTS
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">10+</span>
                  <br />
                  LEADERSHIP ROLES
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">100+</span>
                  <br />
                  MEETINGS
                </div>
              </div>

              {/* Location */}
              <div className="w3-content w3-container w3-padding-32 ">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4">
                    <h2 className="text-center">
                      WHERE WE ARE PHYSICALLY LOCATED
                    </h2>
                    <h5 className="text-center">
                      <em>Huntingtown, Maryland!</em>
                    </h5>
                    <div className="text-center">
                      <ContactModal />
                    </div>
                  </div>
                  <div className="col-lg-8 ">
                    <img
                      src={LocationView}
                      alt="htown"
                      className="w3-image w3-round shadow"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </div>
  );
};
/**
                 <div className="col-sm-12 col-md-6 col-lg-6">
    <p>Successful recruiting goes beyond the traditional metrics— it’s about crafting a compelling narrative that showcases both your talent and your academic achievements. 
    </p>
    
    <p>
    Marketing isn’t a requirement, but with only 7% of high school athletes getting the chance to play in college and less than 2% reaching Division I, effective self-promotion is essential.
    </p>
    <p>Our tailored solutions, including dynamic websites, eye-catching graphic designs, and innovative marketing strategies, are designed to elevate your profile and highlight what makes you stand out. With Con-scribe, you’re not just another athlete; you’re a brand ready to make an impact.</p>
    <p>
    Let us help you tell your story and maximize your exposure in the competitive world of sports recruiting.</p>
                      </div>
    <p className="text-center">We are a team of developers and designers who are passionate about creating funtional and visually appealing digital solutions.</p>
    <p className="text-center">Our goal is to help you build a strong online presence and grow your business.</p>
    
     */

/* Technical Proficiencies 
            <div className="w3-content w3-container w3-padding-32 mb-3">
              <p>TECHNOLOGICAL PROFICIENCIES</p>
              <h2 className=""><strong>WHAT I DO BEST.</strong></h2>
              <br />
              <p className="w3-wide text-black" style={{fontSize:'1rem'}}><GiGears className="justify-content-center"/> Core Technologies</p>
                  <div className="w3-light-grey shadow">
                    <div className="w3-container w3-padding-small w3-black w3-center shadow" style={{width:"85%"}}>85%</div>
                  </div>
      <br />
      <p className="w3-wide text-black" style={{fontSize:'1rem'}}><FaLaptopCode className="justify-content-center"/> Front-End Design</p>
      <div className="w3-light-grey shadow">
        <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"95%"}}>95%</div>
      </div>
      <br />
      <p className="w3-wide text-black" style={{fontSize:'1rem'}}><BsDatabaseLock  className="justify-content-center"/> Server-Side Development</p>
      <div className="w3-light-grey shadow">
        <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"80%"}}>80%</div>
      </div>
    <br />
    <p className="w3-wide text-black" style={{fontSize:'1rem'}}><HiOutlinePuzzlePiece className="justify-content-center"/> Full-Stack Integration</p>
      <div className="w3-light-grey shadow">
        <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
      </div>
    <br />
      <p className="w3-wide text-black" style={{fontSize:'1rem'}}><AiFillDatabase className="justify-content-center"/> Database Implementation</p>
      <div className="w3-light-grey shadow">
        <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
      </div>
              </div>
              */

export default AboutPage;
