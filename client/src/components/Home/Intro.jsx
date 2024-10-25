import React from "react";
import { InView } from "react-intersection-observer";

const HomeIntro = () => {
  return (
    <div className="home-intro" id="home-intro">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right,  #f64b65 , #d32c9a, #b42b81)",
        }}
      >
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-black w3-padding-16 ${
                inView ? "animate-fade-in" : ""
              }`}
            >
              <p style={{ fontSize: "12px" }}>/components/Home/Intro</p>
              <div>
                <div className="container w3-padding-48">
                  <div className="text-center w3-padding-large">
                    <h1>
                      <i
                        style={{
                          fontFamily: "Raleway",
                          fontSize: "2.5rem",
                          textShadow: "1px 1px 4px black",
                        }}
                      >
                        BUILD YOUR BRAND
                      </i>
                    </h1>

                    <h3 className="text-white mb-3">
                      Successful recruitment requires more than the traditional metrics
                      — it’s about creating, controlling and conveying a compelling narrative to
                      showcases both your skills and your academic achievements, and character requires strategies & experience in the recruitment landscape.
                    </h3>
                    <div className="mt-4">
                      <button className="btn btn-dark border-dashed">
                        <b>Get Started</b>
                      </button>
                    </div>
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

export default HomeIntro;
