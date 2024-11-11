import React from "react";
import { InView } from "react-intersection-observer";
import BBHoop from '../../assets/images/CardBG/BBHoop.png'
import WhiteNet from '../../assets/images/CardBG/WhiteNet.png'

import '../../styles/pricing.css'


const WebPricing = () => {

  return (
    <div className="web-pricing" id="web-pricing">
    <div
      style={{
        backgroundImage: `url(${WhiteNet})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
      }}
    >

 <InView triggerOnce={true}>
  {({ inView, ref }) => (
    <div ref={ref} className={`w3-justify w3-text-black 
       ${inView ? "animate-fade-in" : ""}`}
>
    
          <div className="container w3-padding-large w3-padding-32 w3-margin-top text-center">
              <h1>
                      <i
                        style={{
                          fontFamily: "Raleway",
                          fontSize: "2.5rem",
                          textShadow: "1px 1px 4px black",
                        }}
                      >
                 THE <span className=' w3-text-blue' style={{fontWeight:'bold'}}> NCAA </span>- Things You Need to Know
                      </i>
                    </h1>
              <h4 className="fs-4 text-black">
              Understanding an organization's inner workings—like 
              <span style={{fontWeight:'bold', textShadow: "1px 1px 3px black", fontSize:'2rem'}} className="w3-text-blue"> <i>FUNDING SOURCES</i>
              </span>,  <span style={{fontWeight:'bold', textShadow: "1px 1px 3px black", fontSize:'2rem'}} className="w3-text-blue"> <i>BOARD STRUCTURE</i> 
              </span>, <span style={{fontWeight:'bold', textShadow: "1px 1px 3px black", fontSize:'2rem'}} className="w3-text-blue"> <i> LEGISLATURE</i>  
              </span>, and <span style={{fontWeight:'bold', textShadow: "1px 1px 3px black", fontSize:'2rem'}} className="w3-text-blue"> <i>MISSION & FOCUS</i>
              </span>
               — is essential for 
              effective planning and temper expectations.
             <span style={{fontWeight:'bold', color:'#d32c9a'}}>
            </span>. 
              </h4>
              {/**<p>Coaches want exactly what you want; 
                one-stop-shop to tell me everything i need to know. 
                A SINGLE clear, concise, organized, and efficient platform,
                 that is easy navigate.
              A final destination- </p> */}
            </div>
      
      <div className="w3-content w3-padding-large w3-padding-16">
          <div className="row  justify-content-center align-items-center g-2">
            <div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2">
                <div
                className="card rounded-3 shadow-lg"
                style={{
                  backgroundImage: `url(${BBHoop})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "2rem 5rem 10rem rgba(255, 192, 203, 0.5)",
                  height:'12rem'
                }}
              >
                <div className="container justify-content-center">
                <div className="card-body w3-padding-large pb-2 mt-2"
                  style={{ height:'12rem'}}>
                      <h6 className="card-title pricing-card-title text-light fw-bold opacity-75">
                    Main Source of Revenue-
                    </h6>
                   <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                 MEN'S BASKETBALL 
                    </h4>
                    <h5 className="w3-text-light-gray  mb-0 pb-0" style={{ fontSize: "14px" }}>
                   <i>"90% of the NCAA's Revenue comes from "</i> 
                    </h5>
                  </div>
                </div>
              </div>
              </div>
              <div className="mb-2">
              <div className="card pb-2 rounded-3 shadow-lg w3-light-grey"
              style={{height:'12rem'}}>
                <div className="container justify-content-center">
                <div className="card-body w3-padding-large py-4 mt-2">
                <h6 className="card-title pricing-card-title text-dark-emphasis fw-bold">
                    Main Source of Revenue
                    </h6>
                    <h4 className="my-0 fw-bold w3-text-blue">Dynamic One-Page</h4>
                    <p className="text-secondary" style={{ fontSize: "14px" }}>
                    Customized Application
                    </p>
                  </div>
                </div>
              </div>
              </div>
              <div className="mb-2">
              <div
             className="card pb-2 rounded-3 shadow-lg" 
             style={{
               backgroundImage: "linear-gradient(#000000, #023996, #3882ff)",
               height: '12rem'
             }}
              >
                <div className="container justify-content-center text-light">
                <div className="card-body w3-padding-large pb-2 mt-2"
                  style={{ height:'12rem'}}>
                         <h6 className="card-title pricing-card-title text-light text-opacity-75 fw-bold">
                    Main Source of Revenue
                    </h6>
                    <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                    MEN'S BASKETBALL 
                    </h4>
                  <p className="w3-text-light-gray opacity-75 mb-0 pb-0" style={{ fontSize: "14px" }}>
                     The NCAA's Main Source of Revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>
</div>

<div className="col-sm-12 col-md-6 col-lg-6 mb-2">
                <div className="mb-2">
                <div
                className="card rounded-3 shadow-lg"
                style={{
                  backgroundImage: `url(${BBHoop})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "2rem 5rem 10rem rgba(255, 192, 203, 0.5)",
                  height:'12rem'
                }}
              >
                <div className="container justify-content-center">
                <div className="card-body w3-padding-large pb-2 mt-2"
                  style={{ height:'12rem'}}>
                      <h6 className="card-title pricing-card-title text-light fw-bold opacity-75">
                    Main Source of Revenue-
                    </h6>
                   <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                 MEN'S BASKETBALL 
                    </h4>
                    <h5 className="w3-text-light-gray  mb-0 pb-0" style={{ fontSize: "14px" }}>
                   <i>"90% of the NCAA's Revenue comes from "</i> 
                    </h5>
                  </div>
                </div>
              </div>
              </div>
              <div className="mb-2">
              <div className="card pb-2 rounded-3 shadow-lg w3-light-grey"
              style={{height:'12rem'}}>
                <div className="container justify-content-center">
                <div className="card-body w3-padding-large py-4 mt-2">
                <h6 className="card-title pricing-card-title text-dark-emphasis fw-bold">
                    Main Source of Revenue
                    </h6>
                    <h4 className="my-0 fw-bold w3-text-blue">Dynamic One-Page</h4>
                    <p className="text-secondary" style={{ fontSize: "14px" }}>
                    Customized Application
                    </p>
                  </div>
                </div>
              </div>
              </div>
              <div className="mb-2">
              <div
             className="card pb-2 rounded-3 shadow-lg" 
             style={{
               backgroundImage: "linear-gradient(#000000, #023996, #3882ff)",
               height: '12rem'
             }}
              >
                <div className="container justify-content-center text-light">
                <div className="card-body w3-padding-large pb-2 mt-2"
                  style={{ height:'12rem'}}>
                         <h6 className="card-title pricing-card-title text-light text-opacity-75 fw-bold">
                    Main Source of Revenue
                    </h6>
                    <h4 className="card-title pricing-card-title mt-0 pt-0 w3-text-blue fw-bolder">
                    MEN'S BASKETBALL 
                    </h4>
                  <p className="w3-text-light-gray opacity-75 mb-0 pb-0" style={{ fontSize: "14px" }}>
                     The NCAA's Main Source of Revenue
                    </p>
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
    </div>
  );
};

export default WebPricing;
