import React, { useRef } from 'react';
import '../../App.css'; // Import your CSS file
import { useInView } from "framer-motion";


const AnimatedHeading = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false});
  

  return (
    <div className='w3-marin-top'>
    <h1 ref={ref}
      style={{
        fontSize: "5.5rem" ,
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      className='mb-3'>
     <span><i style={{fontFamily:'Raleway',fontSize:'4.5rem', textShadow:'1px 1px 4px black'}}>Con</i></span>
     <span className='w3-text-pink fw-bold' style={{ fontFamily:"Dancing Script", marginLeft:'-10px', textShadow:'1px 1px 4px black'}}>Scribe</span>
   
  </h1>

    </div>
  );
};

export default AnimatedHeading;