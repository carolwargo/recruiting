import React from "react";
import MLB from "../../assets/images/Video/MLB.png";
import { Link } from "react-router-dom";

const PlayerPosts = () => {
  return (
    <div className="posts" id="posts">
<style>
    {`
   .w3-body .posts-header .w3-large {
    color:'white';}`}
</style>
        {/* MEDIA SECTION PLAYER POSTS Section */}

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
      {/* ROW 1 */}
      <div className="row">
        <div className="col-12 col-md-6 my-2">
<div className="container">
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

<div className="col-12 col-md-6 my-2">
<div className="container">
<img
  src={MLB}
  alt="principal"
  className="w3-left rounded mb-4"
  style={{ width: "100%" }}
/>
<div className=" w3-body">
<p className="posts-header">
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

<div className="col-12 col-md-6 my-2">
<div className="container">
<img
  src={MLB}
  alt="principal"
  className="w3-left rounded mb-4"
  style={{ width: "100%" }}
/>
<div className=" w3-body">
<p className="posts-header">
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

<div className="col-12 col-md-6 my-2">
<div className="container">
<img
  src={MLB}
  alt="principal"
  className="w3-left rounded mb-4"
  style={{ width: "100%" }}
/>
<div className=" w3-body">
<p className="posts-header">
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

        </div>
      </div>
  );
};

export default PlayerPosts;
