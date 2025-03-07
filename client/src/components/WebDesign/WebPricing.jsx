import React from "react";
import { InView } from "react-intersection-observer";
import BBHoop from '../../assets/images/CardBG/BBHoop.png'
import WhiteNet from '../../assets/images/CardBG/WhiteNet.png'
import { FaRegUserCircle } from "react-icons/fa";
import { RiRestartLine } from "react-icons/ri";
import { BsSend } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrDocumentPdf } from "react-icons/gr";
import { VscGraphLine } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
//import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { PiSignatureLight } from "react-icons/pi";
//import { Link } from "react-router-dom";

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
    <div ref={ref} className={`w3-justify w3-content w3-text-black 
       ${inView ? "animate-fade-in" : ""}`}
>

  
            <nav
              className="d-inline-flex fw-bold justify-content-center"
              style={{ fontSize: "15px" }}
            >
              <a
                className="me-3 link-dark text-decoration-underline"
                href="/"
              >
                Pricing
              </a>
              <a
                className="me-3 link-dark text-decoration-underline"
                href="/"
              >
                Features
              </a>

              <a
                className="me-3  link-dark text-decoration-underline"
                href="/"
              >
                Support
              </a>
            </nav>
         
           
           
    
          <div className="container w3-padding-large w3-padding-32 text-center">
              <h1 className="fw-normal text-black">
                Plans & Pricing
              </h1>
             
              <p className="fs-5 text-black">
              Simplicity is key for <span style={{fontWeight:'bold', color:'#d32c9a'}}> OUR CLIENTS</span>, as well as <span style={{fontWeight:'bold', color:'#d32c9a'}}>YOUR AUDIENCE</span>. Coaches want exactly what you want; one-stop-shop to tell me everything i need to know. A SINGLE clear, concise, organized, and efficient platform, that is easy navigate.
              A final destination- 
              </p>
            </div>
      
      <div className="container w3-padding-large w3-padding-16 justify-content-center align-items-center">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div
                className="card pb-2 rounded-3 shadow-lg"
                style={{
                  backgroundImage: `url(${BBHoop})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "2rem 5rem 10rem rgba(255, 192, 203, 0.5)",
                  height:'30rem'
                }}
              >
                <div className="container justify-content-center">
                <div className="card-body w3-padding-large pb-2 mt-2"
                  style={{ height:'30rem'}}>
                    <h4 className="my-0 fw-normal text-light">Standard</h4>
                    <p className="w3-text-light-gray opacity-75" style={{ fontSize: "14px" }}>
                      CMA of choice
                    </p>

                    <h2 className="card-title pricing-card-title  text-light fw-bolder">
                      Starting  <br />  $299
                      <span className="text-light fw-light"
                      style={{fontSize:'14px'}}>
                        /base
                      </span>
                    </h2>
                    <div>
                 
                 
                      <ul className="my-4 text-light justify-content-center list-unstyled">
                        <li>
                          <FaRegUserCircle
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}></span> 1 user
                          included
                        </li>
                        <li className="mt-1">
                          <RiRestartLine
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            2 GB of of team storage
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <BsSend
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Transfer files up to 20 GB
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <VscGraphLine
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            File engagement tracker
                          </span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <PiProjectorScreenChartFill
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Record, review, and edit video
                          </span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <GrDocumentPdf
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>PDF editing</span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <MdOutlineAdminPanelSettings
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            1-admin role setup
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <PiSignatureLight
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Limited signature requests
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <BiSupport
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Limited Email Support
                          </span>{" "}
                        </li>
                      </ul>
                    </div>
                   
                
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="card pb-2 rounded-3 shadow-lg w3-light-grey"
              style={{height:'30rem'}}>
                <div className="container justify-content-center">
                <div className="card-body w3-padding-large py-4 mt-2">
                    <h4 className="my-0 fw-bold text-dark-emphasis">Dynamic One-Page</h4>
                    <p className="text-secondary" style={{ fontSize: "14px" }}>
                    Customized Application
                    </p>
                    <h2 className="card-title pricing-card-title text-dark-emphasis fw-bold">
                      Starting<br />  $399
                      <span className=" text-reset text-dark-emphasis fw-light"
                      style={{fontSize:'14px'}}>
                        /base
                      </span>
                    </h2>
                    <div>
                      <ul className="my-4 justify-content-center list-unstyled">
                        <li className="mt-1">
                          <FaRegUserCircle
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}></span> 20 users
                          included
                        </li>
                        <li className="mt-1">
                          <RiRestartLine
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            10 GB of of team storage
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <BsSend
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Transfer files up to 125 GB
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <VscGraphLine
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            File engagement tracker
                          </span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <PiProjectorScreenChartFill
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Record, review, and edit video
                          </span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <GrDocumentPdf
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>PDF editing</span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <MdOutlineAdminPanelSettings
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            2-admin role setup
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <PiSignatureLight
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Limited signature requests
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <BiSupport
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Limited Email Support
                          </span>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-sm-12 col-md-4 col-lg-4">
              <div
             className="card pb-2 rounded-3 shadow-lg" 
             style={{
               backgroundImage: "linear-gradient(#f6145c, #f6145c, #d32c9a, #d32c9a)",
               height: '30rem'
             }}
              >
                <div className="container justify-content-center text-light">
                  <div className="card-body w3-padding-large pb-2 mt-2">
                    <h4 className="my-0 fw-normal text-light">Custom MultiPage</h4>
                    <p className="text-reset" style={{ fontSize: "14px" }}>
                     Customized Application
                    </p>
                    <h2 className="card-title pricing-card-title text-reset text-light-emphasis fw-bold">
                      Starting  <br />  $599
                      <span className=" text-reset text-light-emphasis fw-light"
                      style={{fontSize:'14px'}}>
                        /base
                      </span>
                    </h2>
                    <div>
                    
  
                      <ul className="my-4 list-unstyled justify-content-center">
                        <li className="mt-1">
                          {" "}
                          <FaRegUserCircle
                            className="w3-margin-right"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}></span> 30 users
                          included
                        </li>
                        <li className="mt-1">
                          <RiRestartLine
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            15 GB of of team storage
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <BsSend
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Transfer files up to 250 GB
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <VscGraphLine
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            File engagement tracker
                          </span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <PiProjectorScreenChartFill
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Record, review, and edit video
                          </span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <GrDocumentPdf
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>PDF editing</span>{" "}
                        </li>
                        <li className="mt-1">
                          {" "}
                          <MdOutlineAdminPanelSettings
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            1-admin role setup
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <PiSignatureLight
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Limited signature requests
                          </span>
                        </li>
                        <li className="mt-1">
                          {" "}
                          <BiSupport
                            className="w3-margin-right fw-bold"
                            style={{ fontSize: "16px" }}
                          />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Limited Email Support
                          </span>{" "}
                        </li>
                      </ul>
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
