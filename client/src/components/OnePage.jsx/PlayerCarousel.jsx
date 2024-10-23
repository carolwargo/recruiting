import React from "react";
import Stats1 from '../../assets/images/Video/Stats1.png';
import Stats2 from '../../assets/images/Video/Stats2.png';


import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

const PlayerCarousel = () => {
  return (
    <div>

        {/* MEDIA SECTION PLAYER POSTS Section */}
        <div className="w3-container w3-padding">
            {/** 
        <div className="py-2">
        <h3 className="fw-bold text-white">POSTS & NEWS</h3>
        <h5 className="w3-margin-top">
          The Video Library showcases my skills, featuring a mix of in-game and
          practice videos, categorized into Offense, Defense, and MLB Bullpens.
        </h5>

        <h6 className="w3-margin-top">
          Watch a video, share a video, request additional footage, or
          <span>
            {" "}
            <Link to="contact">contact me</Link>
          </span>{" "}
          with questions or feedback.
        </h6>
      </div>
*/}

<div className="row">
<div className="col-12 col-md-4 my-2 d-flex flex-column justify-content-end">
    <div className="container py-2">
        <h3 className="fw-bold text-white">IN-SEASON PROGRESS & OFF-SEASON UPDATES</h3>
      
        <h6 className="w3-margin-top w3-text-grey">
        <span className="w3-margin-top w3-text-grey fw-bolder"><i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> 2.12.2023 </span>
    <i> Slow start but, felt great. Good swings, good visions, good at-bats, great contact, and walked a lot. Stayed focused by working on approach, timing and patience.</i>   </h6>

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



      {/* ROW 1 
      <div className="row">
        <div className="col-12 col-md-6 my-2">

<img
  src={MLB}
  alt="principal"
  className="w3-left rounded mb-4"
  style={{ width: "100%" }}
/>
<div className=" w3-body">
<p>
  <span className="w3-large">MLB BULLPENS</span>
<br />
  <i>Lorem- ipsum dolor sit</i>.
</p>
<p>
  {" "}
  <i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet
    consectetur adipisicing elit. Voluptate quibusdam totam
    pariatur accusamus, quam velit at ad enim animi aliquam, porro
    nulla molestias tempore fuga neque similique. Necessitatibus,
    iusto ex?
  </i>
  .
</p>
<div className="card-footer">
  <p>last updated: 1-1-2025</p>
</div>
</div>
</div>

<div className="col-12 col-md-6 my-2">

<img
  src={MLB}
  alt="principal"
  className="w3-left rounded mb-4"
  style={{ width: "100%" }}
/>
<div className=" w3-body">
<p>
  <span className="w3-large">MLB BULLPENS</span>
<br />
  <i>Lorem- ipsum dolor sit</i>.
</p>
<p>
  {" "}
  <i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet
    consectetur adipisicing elit. Voluptate quibusdam totam
    pariatur accusamus, quam velit at ad enim animi aliquam, porro
    nulla molestias tempore fuga neque similique. Necessitatibus,
    iusto ex?
  </i>
  .
</p>
<div className="card-footer">
  <p>last updated: 1-1-2025</p>
</div>
</div>
</div>


<div className="col-12 col-md-6 my-2">

<img
  src={MLB}
  alt="principal"
  className="w3-left rounded mb-4"
  style={{ width: "100%" }}
/>
<div className=" w3-body">
<p>
  <span className="w3-large">MLB BULLPENS</span>
<br />
  <i>Lorem- ipsum dolor sit</i>.
</p>
<p>
  {" "}
  <i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet
    consectetur adipisicing elit. Voluptate quibusdam totam
    pariatur accusamus, quam velit at ad enim animi aliquam, porro
    nulla molestias tempore fuga neque similique. Necessitatibus,
    iusto ex?
  </i>
  .
</p>
<div className="card-footer">
  <p>last updated: 1-1-2025</p>
</div>
</div>
</div>


<div className="col-12 col-md-6 my-2">

<img
  src={MLB}
  alt="principal"
  className="w3-left rounded mb-4"
  style={{ width: "100%" }}
/>
<div className=" w3-body">
<p>
  <span className="w3-large">MLB BULLPENS</span>
<br />
  <i>Lorem- ipsum dolor sit</i>.
</p>
<p>
  {" "}
  <i>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet
    consectetur adipisicing elit. Voluptate quibusdam totam
    pariatur accusamus, quam velit at ad enim animi aliquam, porro
    nulla molestias tempore fuga neque similique. Necessitatibus,
    iusto ex?
  </i>
  .
</p>
<div className="card-footer">
  <p>last updated: 1-1-2025</p>
</div>
</div>
</div>

        </div>
        */}
      </div>
    </div>
  );
};

export default PlayerCarousel;
