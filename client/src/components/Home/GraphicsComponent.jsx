import React from   "react";
import Resume1 from "../../assets/images/Resume1.png";
import "../../App.css";    

const GraphicsComponent = () => {
 

    return (
        <div className="web-component" id="web-component">
            <div className="container w3-padding-32">
                <div className="row d-flex">
                <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
<div className="card">
    <div className="card-body">
        <h5 className="card-title">Web Development</h5>
        <p className="card-text">I have experience in web development using HTML, CSS, JavaScript, React, and Node.js.</p>
    </div>
</div>
          </div> 
                    <div className="col-sm-12 col-md-4 col-lg-4 mb-2">

  <img
    src={Resume1}
    alt="Long content"
    style={{ display: "block", width: "100%" }} // Ensures image scales horizontally
  />
</div>

<div className="col-sm-12 col-md-4 col-lg-4 mb-2">

<img
  src={Resume1}
  alt="Long content"
  style={{ display: "block", width: "100%" }} // Ensures image scales horizontally
/>
</div>

</div>
                </div>
  
        </div>

    );
}


export default GraphicsComponent;