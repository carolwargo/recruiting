import React from "react";
import { InView } from 'react-intersection-observer';       
import {Link} from 'react-router-dom';

const WebStart = () => {

  return (

    <div
    style={{  
      backgroundImage: 'linear-gradient(to right,  #f64b65 , #d32c9a, #f6145c, #b42b81)',
    }}
    >

  <div className="web-start" id="web-start">
      <InView triggerOnce={true}>
  {({ inView, ref }) => (
    <div ref={ref} className={`w3-justify w3-text-white
       ${inView ? "animate-fade-in" : ""}`}
>


   
       <div 
      >
       <div className="container w3-padding-48">
       <div className="text-center w3-padding-large text-black">
       <h1
      style={{
        fontFamily: "Raleway",
        fontSize: "3rem",
        color: "white",
        backgroundImage: "linear-gradient(90deg, #f6145c, #d32c9a)",
        WebkitBackgroundClip: "text",
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
        fontWeight:'bold'
      }}
    >
      Start Building Your Brand
    </h1>

    <h2 className="text-white mb-4 px-3" style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
      Control your narrative—showcase your skills, achievements, and personality with freedom.
      Create a competitive edge that social media alone can’t offer.
    </h2>
    
    <div className="mt-4">
     <Link to='/contact'><button className="btn btn-dark px-5 py-2 rounded-pill" style={{ border: "1px dashed white" }}>
        <b>Get Started</b>
      </button> 
      </Link> 
      </div>
            </div>
        </div>
        </div>
        </div> 
    )}
    </InView>
    </div>
    </div>
  );
};

export default WebStart;