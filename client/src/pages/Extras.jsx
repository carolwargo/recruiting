import React from "react";
import { Link } from "react-router-dom";
import ClaySmall from "../assets/images/ClaySmall.png";
import ProfileGraphic from "../assets/images/ProfileGraphic.png";
import { InView } from "react-intersection-observer";

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
    <div>
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`w3-content w3-justify w3-text-grey w3-padding-16 bg-black
         ${inView ? "animate-fade-in" : ""}`}
            id="overview"
          >
            <div
              className="rounded"
              style={{
                backgroundImage: "linear-gradient(to right, #000000, #737373)",
              }}
            >
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  {" "}
                  {/* Profile */}
                  <img src={ClaySmall} style={{ width: "100%" }} alt="Avatar" />
                  <div>
                    <button className="w3-button w3-block w3-white w3-left-align mt-2">
                      DOWNLOADS
                    </button>

                    <button
                      onClick={() => myFunction("Demo1")}
                      className="w3-button w3-block w3-white w3-left-align"
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
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <img
                    src={ProfileGraphic}
                    style={{ width: "100%" }}
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default Extras;
