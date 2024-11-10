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

  {/* Start Nav move to the right side of column */}
  <nav
    className="d-inline-flex fw-bold ms-auto"
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