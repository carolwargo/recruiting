import React from "react";
import Offense from "../../assets/images/Video/Offense.png";
import Defense from "../../assets/images/Video/Defense.png";
import MLB from "../../assets/images/Video/MLB.png";
import { Link } from "react-router-dom";

const PlayerVideo = () => {
  return (
    <div className="container"> {/* Added Bootstrap container class for proper alignment */}
      <div className="w3-padding-16">
        <h3>VIDEO SKILLS LIBRARY</h3>
        <h4>
          Video Library consists of Offense, Defense and MLB Bullpens.
        </h4>
        <h5>
          Pick a service below to get started, or simply{" "}
          <Link to="contact">contact us</Link> with questions.{" "}
        </h5>
      </div>

      {/* ROW 1 */}
      <div className="row w3-padding-16">
        <div className="col-12 col-md-6 w3-margin-bottom"> {/* Adjusted col-12 for stacking on small screens */}
          <div className="container">
            <img
              src={Offense}
              alt="Offense"
              className="w3-left w3-margin-right rounded"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 w3-margin-bottom"> {/* Adjusted col-12 for stacking on small screens */}
          <div className="container w3-padding-16">
            <p>
              <span className="w3-large">OFFENSE</span>
              <br />
              <i>Lorem- ipsum dolor sit</i>.
            </p>
            <p>
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet
                consectetur adipisicing elit. Voluptate quibusdam totam pariatur
                accusamus, quam velit at ad enim animi aliquam, porro nulla
                molestias tempore fuga neque similique. Necessitatibus, iusto
                ex?
              </i>
            </p>
            <footer>
              <hr />
              <p>last updated: 1-1-2025</p>
            </footer>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <hr />
      <div className="row w3-padding-16">
        <div className="col-12 col-md-6 w3-margin-bottom">
          <div className="container">
            <img
              src={Defense}
              alt="Defense"
              className="w3-left w3-margin-right rounded"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 w3-margin-bottom">
          <div className="container w3-padding-16">
            <p>
              <span className="w3-large">DEFENSE</span>
              <br />
              <i>Lorem- ipsum dolor sit</i>.
            </p>
            <p>
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet
                consectetur adipisicing elit. Voluptate quibusdam totam pariatur
                accusamus, quam velit at ad enim animi aliquam, porro nulla
                molestias tempore fuga neque similique. Necessitatibus, iusto
                ex?
              </i>
            </p>
            <footer>
              <hr />
              <p>last updated: 1-1-2025</p>
            </footer>
          </div>
        </div>
      </div>

      {/* ROW 3 */}
      <hr />
      <div className="row w3-padding-16">
        <div className="col-12 col-md-6 w3-margin-bottom">
          <div className="container">
            <img
              src={MLB}
              alt="MLB Bullpens"
              className="w3-left w3-margin-right rounded"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 w3-margin-bottom">
          <div className="container w3-padding-16">
            <p>
              <span className="w3-large">MLB BULLPENS</span>
              <br />
              <i>Lorem- ipsum dolor sit</i>.
            </p>
            <p>
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat fugiat neque, delectus Fugiat. Ipsum dolor sit amet
                consectetur adipisicing elit. Voluptate quibusdam totam pariatur
                accusamus, quam velit at ad enim animi aliquam, porro nulla
                molestias tempore fuga neque similique. Necessitatibus, iusto
                ex?
              </i>
            </p>
            <footer>
              <hr />
              <p>last updated: 1-1-2025</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerVideo;
