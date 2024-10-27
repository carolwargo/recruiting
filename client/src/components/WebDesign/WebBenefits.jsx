import React from "react";
import { GiBullseye } from "react-icons/gi";
import { InView } from 'react-intersection-observer';       

const WebBenefits = () => {

  return (

  <div className="web-benefits" id="web-benefits">
      <InView triggerOnce={true}>
  {({ inView, ref }) => (
    <div ref={ref} className={`w3-justify w3-text-white w3-padding-16 
       ${inView ? "animate-fade-in" : ""}`}
>

        <div className="w3-light-gray">
        <div className="container w3-padding-48 w3-padding-large">
          <div className="row py-4">
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="text-center py-4">
            <p>
              Marketing isn’t a requirement, but with only 7% of high school
              athletes getting the chance to play in college and less than 2%
              reaching Division I, effective self-promotion is essential.
            </p>
            <p>
              Our tailored solutions, including dynamic websites, eye-catching
              graphic designs, and innovative marketing strategies, are designed
              to elevate your profile and highlight what makes you stand out.
              With Con-scribe, you’re not just another athlete; you’re a brand
              ready to make an impact.
            </p>
          </div>
            </div>
            
            <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="w3-container w3-content mb-4">
                  <div className="row d-flex justify-content-start align-items-center">
 
             

              <div className="w3-container w3-content">
              <div className="card mb-2 bg-black border-light-subtle">
                <div className="card-body">
                  <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-md-2">
                      <GiBullseye style={{ fontSize: "5.5rem" }} />
                    </div>
                    <div className="col-md-10">
                      <div className="w3-margin-left text-white">
                        <h4>MISSION</h4>
                        Let us help you tell your story and maximize your
                        exposure in the competitive world of sports recruiting.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</div>
<div className="w3-container w3-content">
              <div className="card mb-2 bg-black border-light-subtle">
                <div className="card-body">
                  <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-md-2">
                      <GiBullseye style={{ fontSize: "5.5rem" }} />
                    </div>
                    <div className="col-md-10">
                      <div className="w3-margin-left text-white">
                        <h4>MISSION</h4>
                        Let us help you tell your story and maximize your
                        exposure in the competitive world of sports recruiting.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</div>

<div className="w3-container w3-content">
              <div className="card mb-2 bg-black border-light-subtle">
                <div className="card-body">
                  <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-md-2">
                      <GiBullseye style={{ fontSize: "5.5rem" }} />
                    </div>
                    <div className="col-md-10">
                      <div className="w3-margin-left text-white">
                        <h4>MISSION</h4>
                        Let us help you tell your story and maximize your
                        exposure in the competitive world of sports recruiting.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</div>
            </div>
          </div>
          
          </div>
                </div>
        </div>
      </div>
    </div>
    )}
    </InView>
    </div>

  );
};

export default WebBenefits;