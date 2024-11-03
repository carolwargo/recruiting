import React from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import ClaySmall from "../../assets/images/ClaySmall.png";
import { RiHome6Line } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi";
import { GrScorecard } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import PlayerProfile2 from "./PlayerProfile2";
import ProfileBG from "../../assets/images/ProfileBG.png";

const PlayerProfile = () => {
  return (
    <div >

      
      <style>
        {`
  
        /*start ANIMATIONS*/
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 2s ease-in-out;
}

.animate-slide-left {
  animation: slideLeft 2s ease-in-out;
}
 `}
      </style>
      <div className="page-container" >
      {/* Page Content */}
 
      {/* Performance Section */}
      <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
               ${inView ? "animate-fade-in" : ""}`}
            id="profile"
            
        >
          
       {/**   style={{backgroundImage: `url(${ProfileBG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
         
         }}
          */} 
         <div className="row w3-padding-24 d-flex justify-content-center align-items-center g-3">
            

                {/* Main row with column 4 and nested columns in column 8 */}
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div>
                    <img src={ClaySmall} alt="clay" style={{width:'80%'}} />
                  </div>
                  </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                  <div className="row d-flex justify-content-center align-items-center g-1">
                  <div className="w3-text-white">
                  <h3 className="fw-bold text-white mt-2">Player Profile</h3>
                  <hr />
                </div>
                   <div className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.3rem" }}
                            >
                              <RiHome6Line />
                            </b>{" "}
                          </span>
                          <span
                            className="text-white"
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            CATCHER
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.3rem" }}
                            >
                              {" "}
                              <HiAcademicCap />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            2024
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className="text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              {" "}
                              <GrScorecard />
                            </b>
                          </span>{" "}
                          <span
                            className="text-white"
                            style={{ fontSize: ".9rem" }}
                          >
                            {" "}
                            SAT-9000 | GPA- 5.0
                          </span>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.1rem" }}
                            >
                              <FaPhoneVolume />
                            </b>{" "}
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: ".85rem" }}
                          >
                            (123) 456-7890
                          </Link>
                          <br />
                        </p>

                        <p
                          className="mt-0 py-0 text-white"
                          style={{ marginBottom: "4px" }}
                        >
                          <span
                            className="fa-fw text-white"
                            style={{ marginRight: "4px" }}
                          >
                            <b
                              className=" text-white-50"
                              style={{ fontSize: "1.2rem" }}
                            >
                              <MdOutlineEmail />{" "}
                            </b>
                          </span>{" "}
                          <Link
                            className="text-white"
                            style={{ fontSize: ".85rem" }}
                          >
                            EMAIL@MAIL.COM
                          </Link>
                          <br />
                        </p>
                      </div>

                      <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="w3-text-white py-2">
                  <h5 className="fw-bold text-white mt-2">Player Vitals</h5>
               
                </div>

                <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Bats: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> R/L
                          </span>
                          Throws: 
                          <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> R
                          </span>
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Height: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 6'0
                          </span> Weight: 
                          <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 335 lbs
                          </span>
                        </p>
                     
                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Born: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}> 11-01-2006, <i>ST.</i>
                          </span> 
                        </p>

                        <p className="mt-0 py-0 text-white"
                style={{ marginBottom: "4px" }}> Home: <span 
                className=" text-white-50"
                style={{ marginRight: "4px" }}><i>1234 Anywhere St. ST. 12345</i>
                          </span> 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
{/**<PlayerProfile2 />*/}
</div>
 )}
    </InView>



                
</div>








                </div>            
  
  );
};

export default PlayerProfile;
