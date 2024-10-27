import React from "react";
import Offense from "../../assets/images/Video/Offense.png";
import Defense from "../../assets/images/Video/Defense.png";
import MLB from "../../assets/images/Video/MLB.png";
import { Link } from "react-router-dom";

const PlayerVideo = () => {
  return (
    <div>
  
      <div className="py-2">
        <h3 className=" fw-bold text-white">VIDEO SKILLS LIBRARY</h3>
        <h5 className="w3-margin-top">
          The Video Library showcases my skills, featuring a mix of in-game and
          practice videos, categorized into Offense, Defense, and MLB Bullpens.
        </h5>

        <h6 className="w3-margin-top w3-text-grey">
          Watch a video, share a video, request additional footage, or
          <span>
            {" "}
            <Link className="link-light text-decoration-none" to="contact">contact me</Link>
          </span>{" "}
          with questions or feedback.
        </h6>
      </div>
      {/* ROW 1 */}
      <div className="row w3-padding-top-16 justify-content-between align-items-center">
        <div className="col-12 col-md-6 my-2">
        <div className="container">
          {" "}
          {/* Adjusted col-12 for stacking on small screens */}
          <img
            src={Offense}
            alt="Offense"
            className="w3-left rounded"
            style={{ width: "100%" }}
          />
          </div>
        </div>

        <div className="col-12 col-md-6 my-2">
          <div className="container">
          {" "}
          {/* Adjusted col-12 for stacking on small screens */}
          <p>
            <span className="w3-large">OFFENSE</span>
            <br />
            <i>Sub-Heading</i>.
          </p>
          <p>
            <i>
             Description of the video based on strategies set- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              fugiat neque, delectus Fugiat. Ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate quibusdam totam pariatur accusamus,
              porro nulla molestias tempore
              fuga neque similique. Necessitatibus, iusto ex?
            </i>
          </p>
          <div>
            <p>last updated: 1-1-2025</p>
          </div>
          </div>
        </div>
      </div>
      {/* ROW 2 */}
      <hr />
      <div className="row w3-padding-top-16 justify-content-between align-items-center">
        <div className="col-12 col-md-6 my-2">
        <div className="container">
          {" "}
          {/* Adjusted col-12 for stacking on small screens */}
          <img
            src={Defense}
            alt="Defense"
            className="w3-left rounded"
            style={{ width: "100%" }}
          />
          </div>
        </div>

        <div className="col-12 col-md-6 my-2">
          <div className="container">
          {" "}
          {/* Adjusted col-12 for stacking on small screens */}
          <p>
            <span className="w3-large">DEFENSE</span>
            <br />
            <i>Sub-Heading</i>.
          </p>
          <p>
            <i>
             Description of the video based on strategies set- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              fugiat neque, delectus Fugiat. Ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate quibusdam totam pariatur accusamus,
              porro nulla molestias tempore
              fuga neque similique. Necessitatibus, iusto ex?
            </i>
          </p>
          <div>
            <p>last updated: 1-1-2025</p>
          </div>
          </div>
        </div>
      </div>

      {/* ROW 3 */}
      <hr />
      
      <div className="row w3-padding-top-16 justify-content-between align-items-center">
        <div className="col-12 col-md-6 my-2">
        <div className="container">
          {" "}
          {/* Adjusted col-12 for stacking on small screens */}
          <img
            src={MLB}
            alt="MLB Bullpens"
            className="w3-left rounded"
            style={{ width: "100%" }}
          />
          </div>
        </div>

        <div className="col-12 col-md-6 my-2">
          <div className="container">
          {" "}
          {/* Adjusted col-12 for stacking on small screens */}
          <p>
            <span className="w3-large">MLB BULLPENS</span>
            <br />
            <i>Sub-Heading</i>.
          </p>
          <p>
            <i>
             Description of the video based on strategies set- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              fugiat neque, delectus Fugiat. Ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate quibusdam totam pariatur accusamus,
              porro nulla molestias tempore
              fuga neque similique. Necessitatibus, iusto ex?
            </i>
          </p>
          <div>
            <p>last updated: 1-1-2025</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerVideo;
