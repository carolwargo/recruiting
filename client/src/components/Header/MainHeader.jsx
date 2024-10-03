import React from 'react';
import PinkBlackBG from '../../assets/images/PinkBlackBG.png';
import { Link as ScrollLink } from 'react-scroll';

const MainHeader = () => {

  return (
    <header  style={{fontFamily:'Raleway'}}>
   
      <div
        id="intro-example"
        className="w3-padding-large w3-padding-48 bg-image position-relative"
        style={{
          backgroundImage: `url(${PinkBlackBG})`,
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          
        }}
      >
        {/* Overlay div for masking */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
        <div className="row d-flex h-100 px-3 text-center position-relative">
       <div className="col-sm-12 col-md-1 col-lg-1"></div>   
          <div className="col-sm-12 col-md-10 col-lg-10 text-white p-3 position-relative z-index-1">
           
             <div className='text-center'>
             <h1 className="glowing-brand text-pink fw-bold"
             style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontFamily:'Raleway'}}>
              <i>Con</i>
            <span className="w3-text-pink fw-bold" 
            style={{fontSize:'4rem', fontFamily:'Dancing Script'}}>Scribe</span>.</h1>
         <h1 className="align-items-center mb-3 text-white fw-bold w3-hide-small w3-hide-medium" 
         style={{ textShadow: "2px 2px 4px black"}}>PROVIDING CONTROLLED<span className="glowing-text text-pink fw-bold"> RECRUITING STRATEGIES & PLATFORMS</span> FOR STUDENT-ATHELETES. 
        </h1>
        <h4 className="align-items-center mb-3 text-white w3-hide-large"
        style={{ textShadow: "2px 2px 4px black"}}>PROVIDING CONTROLLED <span className="glowing-text text-pink fw-bold"> RECRUITING STRATEGIES & PLATFORMS </span> FOR STUDENT-ATHELETES. 
        </h4>
             <h5 style={{ textShadow: "2px 2px 4px black"}}><i> DIGITAL MARKETING <span className='w3-text-pink fw-bold'>|</span> DATA ANALYSIS <span className='w3-text-pink fw-bold'>|</span> CONTENT MANAGEMENT</i></h5>
             
  
<div className="p-2">
                 
<ScrollLink to="email-graphics" smooth={true} duration={500}>
    <button type="button" className="btn btn-light mx-2 w3-round-xlarge shadow">
        <b style={{ textShadow: "2px 2px 4px #991d44",}}>Get Started</b>
    </button>
</ScrollLink>
               
               </div>
              
<br />
 <p className='text-white' style={{fontSize:'12px'}}><i>    'The Graphic Elements page is currently under development and will be completed shortly. Thank you in advance for your patience.'</i></p>
   
        </  div>
          
         
          </div>      
          <div className="col-sm-12 col-md-1 col-lg-1"></div> 
      </div>
   </div>
    </header>
  );
};

export default MainHeader;


