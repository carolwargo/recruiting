import React from   "react";
import FullPage from "../../assets/images/FullPage.png";
import "../../App.css";    

const WebComponent = () => {
 

    return (
        <div className="web-component bg-dark" id="web-component">
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
                    <div className="col-sm-12 col-md-8 col-lg-8 mb-2">
<div

  style={{
    overflowY: "scroll", // Enables vertical scrolling
    maxHeight: "400px", // Sets the visible height for the container
    border: "1px solid #000", // Optional, for visual reference
  }}
>
  <img
    src={FullPage}
    alt="Long content"
    style={{ display: "block", width: "100%" }} // Ensures image scales horizontally
  />
</div>
</div>

</div>
                </div>
  
        </div>

    );
}


export default WebComponent;