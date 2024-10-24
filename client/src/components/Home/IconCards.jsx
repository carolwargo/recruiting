import React from "react";
import MeWhite from "../assets/images/MeWhite.png";
import LocationView from "../assets/images/LocationView.png";
import { InView } from "react-intersection-observer";
import "../App.css";

export default function IconCards() {
  return (
    <div className="icon-cards" id="icon-cards">
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`w3-content w3-justify w3-text-grey w3-padding-16 ${
              inView ? "animate-fade-in" : ""
            }`}
          >
            <div className="w3-pink">
              <div className="w3-content w3-container w3-padding-32">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-5">
                    <div className="container" style={{ padding: "40px" }}>
                      <img
                        src={MeWhite}
                        className="w3-round w3-image shadow border-gray-200 w3-hover-opacity-off mx-auto d-block"
                        alt="Me"
                      />
                      <p className=" fw-light text-center">
                        Carol Wargo-{" "}
                        <i className="text-secondary">No special title</i>
                      </p>
                      <div>
                        {" "}
                        <p className=" fw-light">
                          <em>
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
                          </em>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7"></div>
                </div>
              </div>

              <hr />

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

              <div className="w3-content w3-container w3-padding-32 ">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4">
                    <h1 className="text-center">WHERE I'M LOCATED</h1>
                    <h5 className="text-center">
                      <em>Huntingtown, Maryland!</em>
                    </h5>
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
          </div>
        )}
      </InView>
    </div>
  );
}
