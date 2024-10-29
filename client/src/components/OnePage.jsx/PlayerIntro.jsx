import React from "react";
import { InView } from 'react-intersection-observer';

const PlayerProfile = () => {

  return (
    <div>

<InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} 
            className={`w3-content w3-justify w3-text-grey w3-padding-16 bg-black
               ${inView ? "animate-fade-in" : ""}`}
            id="overview"
        >
 

            <h1 className="w3-text-light-grey">Joe Baseball</h1>
          <hr style={{ width: "235px" }} className="w3-opacity" />
          <p className="">
            Some text about me. Some text about me. I am lorem ipsum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
    {/* Overview PROFILE Section */}
    <div>
    </div>
    </div>
    )}  

    </InView>
 
    </div>

  );
};

export default PlayerProfile;