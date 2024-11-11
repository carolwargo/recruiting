import React from "react";
import { InView } from "react-intersection-observer";

const HomeIntro = () => {
  return (
    <div className="home-intro" id="home-intro">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #000000, #000000, #d32c9a)",
        }}
      >
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-white ${
                inView ? "animate-fade-in" : ""
              }`}
            >
       <div>
                <div className="container w3-padding-48">
                  <div className="text-center w3-padding-large">
                    <h1>
                      <i
                        style={{
                          fontFamily: "Raleway",
                          fontSize: "2.5rem",
                          textShadow: "1px 1px 4px white",
                        }}
                      >
                        BUILD YOUR BRAND
                      </i>
                      
                    </h1>

                    <h4 className="text-white my-3">
                    "Successful recruitment requires much more than traditional strategies— it’s about 
                    crafting a powerful narrative that showcases your <span className=" w3-text-gray"><b><i>skills
                      </i></b>
                    </span>, <span className=" w3-text-gray">
                    <b><i>academic achievements</i></b>  </span> , and <span className=" w3-text-gray"><b><i>character</i></b></span>, that conveys an exceptional level of 
                    <span className="w3-text-gray"><b><i> commitment</i></b> 
                    </span> and <span className="w3-text-gray"><b><i>discipline</i></b>
                    </span>  ." </h4>
                    <div className="">
                      <button className="btn btn-light border-dashed w3-margin-top">
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
