import React from "react";
import Stats1 from '../../assets/images/Video/Stats1.png';
import Stats2 from '../../assets/images/Video/Stats2.png';

import { Link } from "react-router-dom";
import { InView } from 'react-intersection-observer';
import Carousel from 'react-bootstrap/Carousel';

const PlayerCarousel = () => {
  return (
    <div>

      
          {/* Media Section */}
          <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey 
            ${inView ? "animate-fade-in" : ""}`} 
          id="media">
          <hr className="w3-opacity w3-padding-16" />

     <div className="row" style={{ margin: "0 -16px" }}>
       
<div className="col-12 col-md-4 my-2 d-flex flex-column justify-content-end">
    <div className="container py-2">
        <h4 className="fw-bold text-white">IN-SEASON PROGRESS & OFF-SEASON UPDATES</h4>
      
        <h6 className="w3-margin-top w3-text-grey">
        <span className="w3-margin-top w3-text-grey fw-bolder"><i className="fa fa-calendar-check-o fa-fw"></i> 2.12.2023 </span> <i className="w3-margin-right"> Slow start but, felt great. Good swings, good visions, good at-bats, great contact, and walked a lot. Stayed focused by working on approach, timing and patience.</i>   </h6>

        <h6 className="w3-margin-top w3-text-grey">
          Watch a video, share a video, request additional footage, or
          <span>
            {" "}
            <Link className="link-light text-decoration-none" to="contact">contact me</Link>
          </span>{" "}
          with questions or feedback.
        </h6>
      </div>
    </div>
    <div className="col-12 col-md-8 my-2">
      <div className="w3-container w3-padding">
      <Carousel data-bs-theme="light" className="rounded shadow-4-secondary">
      <Carousel.Item>
        <img
          className="d-block w-100 rounded shadow-4-secondary"
          src={Stats1}
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded shadow-4-secondary"
          src={Stats2}
          alt="Second slide"
        />
    
      </Carousel.Item>

    </Carousel>
    </div>
    </div>
  </div>
  </div>
          )}
          </InView>
    </div>
  );
};

export default PlayerCarousel;
