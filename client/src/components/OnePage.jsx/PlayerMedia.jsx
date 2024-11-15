import React from "react";
import { InView } from 'react-intersection-observer';
import PlayerVideo from "./PlayerVideos";
import PlayerPosts from "./PlayerPosts";



const PlayerMedia = () => {

  return (
    <div>
 
          {/* Media Section */}
          <InView triggerOnce={true}>
          {({ inView, ref }) => (
          <div ref={ref} className={`w3-content w3-justify w3-text-grey 
            ${inView ? "animate-fade-in" : ""}`} 
          id="media">






            
               <hr className="w3-opacity w3-text-white w3-padding-16 w3-margin-top" />
               <div className="d-flex justify-content-between align-items-center">
  {/* Start Brand <h1> keep in same position */}
  <h1 className="w3-text-light-grey w3-margin-bottom">Player Media</h1>
  {/* End Brand <h1> keep in same position */}


  <div className="container">
  {/* Toggle button for small screens */}
  <button
    className="navbar-toggler d-md-none"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasNavbar"
    aria-controls="offcanvasNavbar"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon "></span>
  </button>

  {/* Offcanvas Sidebar */}
  <div
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
  >
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
      <button
        type="button"
        className="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div className="offcanvas-body">
      <nav className="d-flex flex-column">
        <a
          className="mb-3 link-dark fw-light text-decoration-underline"
          href="/"
        >
          Skills Videos
        </a>
        <a
          className="mb-3 link-dark fw-light text-decoration-underline"
          href="/"
        >
          Posts
        </a>
        <a
          className="mb-3 link-dark fw-light text-decoration-underline"
          href="/"
        >
          Season Review
        </a>
      </nav>
    </div>
  </div>

  {/* Nav for larger screens */}
  <nav
    className="d-none d-md-inline-flex fw-bold ms-auto"
    style={{ fontSize: "15px" }}
  >
    <a className="me-3 link-light fw-light text-decoration-underline" href="/">
      Skills Videos
    </a>
    <a className="me-3 link-light fw-light text-decoration-underline" href="/">
      Posts
    </a>
    <a className="me-3 link-light fw-light text-decoration-underline" href="/">
      Season Review
    </a>
  </nav>
</div>




  {/* Start Nav move to the right side of column */}
  <nav
    className="d-inline-flex fw-bold ms-auto w3-hide-small w3-hide-medium"
    style={{ fontSize: "15px" }}
  >
    <a className="me-3 link-light fw-light text-decoration-underline  w3-hide-small w3-hide-medium" href="/">
     Skills Videos
    </a>
    <a className="me-3 link-light fw-light text-decoration-underline  w3-hide-small w3-hide-medium" href="/">
    Posts
    </a>
    <a className="me-3 link-light fw-light text-decoration-underline  w3-hide-small w3-hide-medium" href="/">
    Season Review
    </a>
  </nav>
</div>


<div>
<PlayerVideo  />
</div>

<div>
<PlayerPosts  />  
</div>
</div>
          )}
          </InView>
    </div>
  );
};

export default PlayerMedia;