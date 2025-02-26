import React, { useRef } from 'react';
import '../../../App.css'; // Import your CSS file
import { useInView } from "framer-motion";


const PinkAnimatedHeading = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false});
  

  return (
    <div className='w3-marin-top'>
      
      <h1 ref={ref}
      style={{
        fontSize: "5.5rem",
        textShadow:
        '1px 1px 12px black, -1px -1px 12px black, 1px -1px 2px black, -1px  1px 12px black',
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

      className='text-center fw-light text-white mt-0 mb-0 pt-0'>
     <b style={{letterSpacing:'-7px'}}>con</b><span style={{color:'#e9008c', marginLeft:'-5px', letterSpacing:'-5px'}}>scribe.</span>
   </h1>    
    </div>
  );
};

export default PinkAnimatedHeading;