// components/Home/AboutMe.jsx

import React, { useRef } from "react";
import { useInView } from "framer-motion";
//import MeWhite from "../../assets/images/MeWhite.png";
//import LocationView from "../../assets/images/LocationView.png";
//import ContactModal from "../Modals/ContactModal";
import { InView } from "react-intersection-observer";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="about-me w3-black" id="about-me">
      <p>
        <i>**AboutMe</i>
      </p>

      <div>
        <div className="container text-center">
          <h1
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <span
              style={{
                fontSize: "4.5rem",
              }}
              className="mb-3"
            >
              <span>
                <i
                  style={{
                    fontFamily: "Montserrat",
                    fontSize: "3.5rem",
                    textShadow: "1px 1px 4px black",
                  }}
                >
                Who We Are
                </i>
              </span>
           
            </span>
          </h1>

          <h3>
            <i
              style={{
                fontFamily: "Montserrat",
              }}
            >
              <b className=" w3-text-gray">"PASSION & EXPERTISE </b>{" "}
            </i>
            <i>
              Unite to <b className=" w3-text-gray">CHAMPION & PROMOTE</b> the
              essential yet often overlooked force shaping our future:
              <span className=" w3-text-gray">
                {" "}
                <i>
                  <b>YOUNG PEOPLE</b>
                </i>
              </span>{" "}
              with bold dreams, relentless ambition, and a refusal to accept
              limits."
            </i>
          </h3>
        </div>

        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-grey w3-padding-16 
            ${inView ? "animate-fade-in" : ""}`}
            >
              {/*start About Me personally */}
              {/** 
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
              */}
              {/*end About Me personally */}

              {/*start Quick Stats */}
              <div
                className="w3-row w3-center w3-black w3-padding-32"
                style={{ backgroundColor: "#FF385C" }}
              >
                <div className="w3-quarter w3-section">
                  <span className="w3-xxlarge">20+</span>
                  <br />
                  <span className="w3-large"> BUSINESS EXPERIENCE</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span className="w3-xxlarge">100+</span>
                  <br />
                  <span className="w3-large"> TRANSFER STUDENTS</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span className="w3-xxlarge">100+</span>
                  <br />
                  <span className="w3-large"> HIGH SCHOOL RECRUITS</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span className="w3-xxlarge">100%</span>
                  <br />
                  <span className="w3-large">DEDICATED TO SUCCESS</span>
                </div>
              </div>
              {/*end Quick Stats */}
              {/*start Location */}
              {/** 
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
*/}
            </div>
          )}
        </InView>
      </div>
    </div>
  );
}
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
