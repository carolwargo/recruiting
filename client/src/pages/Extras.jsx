import React from 'react';
import CoverComponent from '../components/WebComponents/Cover/CoverComponent';
import Features from '../components/WebComponents/Features/Features';

const Extras = () => {

    return (
        <div className='w3-padding-top-48'>
            <CoverComponent/>
            <Features/>
     </div>
    )
}

export default Extras;


/*import React from "react";
import About from "../components/Home/About";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";import {Navbar, Container} from 'react-bootstrap';
import Services from "../components/Home/CustomCards";
import Cards from "../components/Home/Cards";
import Stats from "../components/Home/Stats";
import ContactComponent from '../components/Home/ContactComponent'
import WebPricing from '../components/WebDesign/WebPricing'


const WebDesign = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.1, // Percentage of the div that needs to be visible to trigger the animation
  });

  return (
    <div
   className="text-white"
    >
      <motion.div
        ref={ref}
        initial={{ y: -20, opacity: 0.5 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        exit={{ y: 20, opacity: 0.5 }}
        transition={{ duration: 0.8 }}
      >
  
      </motion.div>
    {/**  <Navbar className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Container>
</Navbar>

<div className="container-fluid">
<WebPricing/>
</div>

<div className="container-fluid"
 style={{ 
  backgroundImage: 'linear-gradient(red, yellow, blue)'}}>
        <About />
     </div>
     <div className="container-fluid">
        <Cards />
   </div>

        <Services />
   
        <Stats />
        <div className="container-fluid">
<ContactComponent />
  </div>
    </div>
  );
};

export default WebDesign;
*/
