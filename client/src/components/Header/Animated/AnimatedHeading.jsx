import React, { useRef } from 'react';
import '../../../App.css'; // Import your CSS file
import { useInView } from "framer-motion";
import LogoWhite from '../../../assets/images/Logo/LogoWhite.png';

const AnimatedHeading = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false});
  

  return (
    <div className='w3-marin-top'>
   
    <img ref={ref}
    src={LogoWhite}
    alt='logo'
      style={{
        width: "50%" ,
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
   </img>

    </div>
  );
};

export default AnimatedHeading;