import React from "react";
import { Link } from "react-router-dom";
import Offense from "../../assets/images/Video/Offense.png";
import Defense from "../../assets/images/Video/Defense.png";
import MLB from "../../assets/images/Video/MLB.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ServiceCards = () => {
  return (
    <div
      className="service-cards"
      id="service-cards"
      style={{
        backgroundImage:
          "linear-gradient(to right, white,  #e6e6e6, light-gray, #d32c9a)",
      }}
    >
 
 
      <div className="container py-4">
          {/*Start Service Header & intro container */}
        <div className="container mt-4 text-center">
          <h1>Video Library</h1>
          <h3 className="mb-4 px-4">
          Video Library consists of a Offense, Defense and and MLB Bullpens.
          </h3>
         <h5 className="">
            {" "}
            Pick a service below to get started, or simply{" "}
            <Link to="contact">contact us</Link> with questions.{" "}
          </h5>
        </div>



     
<div>
        <div className="row">

          <div className="col ">
            <div className="card">
              <div className="card-image-container">  
                <img src={Offense} alt="defense" className="w-100" />
    
              </div>
              <div className="card-body">
                <h4 className="card-title text-dark-emphasis">OFFENSE</h4>
                <div className="card-text">
                  <p style={{fontSize:'13px'}}>
                    The Offense video library consists of a variety of drills and techniques to help improve your hitting.
                  </p>
                </div>
                </div>
                <div className="card-footer text-muted text-end py-2" style={{fontSize:'12px'}}> Jun 12, 2023</div>
            </div>
          </div>
      
          <div className="col">
            <div className="card">
              <div className="card-image">  
                <img src={Defense} alt="defense" className="w-100" />
              </div>
              <div className="card-body">
              <h4 className="card-title text-dark-emphasis">DEFENSE</h4>
                <div className="card-text">
                  <p>
                    The Offense video library consists of a variety of drills and techniques to help improve your hitting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-image">  
                <img src={MLB} alt="mlb" className="w-100" />
              </div>
              <div className="card-body">
              <h4 className="card-title text-dark-emphasis">MLB BULLPENS</h4>
                <div className="card-text">
                  <p>
                    The MLB Bullpens video library consists of a variety of drills and techniques to help improve your hitting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        
          </div>
          </div>
      
           {/*End Large service cards */}
      </div>
    </div>
  );
};

export default ServiceCards;