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
               <hr className="w3-opacity w3-padding-16" />
                <h1 className="w3-text-light-grey w3-margin-bottom">Media</h1>             
<div>
<PlayerVideo  />
</div>
<hr className="w3-opacity w3-padding-16" />
<div className="w3-padding-16">
<PlayerPosts  />  
</div>
</div>
          )}
          </InView>
    </div>
  );
};

export default PlayerMedia;