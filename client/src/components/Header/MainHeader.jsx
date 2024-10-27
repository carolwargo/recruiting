import React from 'react';
import PinkBlackBG from '../../assets/images/PinkBlackBG.png';
import { Link as ScrollLink } from 'react-scroll';
import AnimatedHeading from '../Home/AnimatedHeading';
import TopNav from '../Navigation/TopNav';
const MainHeader = () => {

  return (
    <header  style={{fontFamily:'Raleway'}}>
   <TopNav />
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
        <div className="row d-flex h-100 px-3 w3-margin-top text-center position-relative">
 <div className="col-sm-12 col-md-1 col-lg-1 "></div>
          <div className="col-sm-12 col-md-10 col-lg-10 text-white p-3 position-relative z-index-1">
           
             <div className='text-center'>
             <AnimatedHeading />
        
        <h2 className="align-items-center w3-padding-large text-white fw-bold w3-hide-small w3-hide-medium" 
         style={{ textShadow: "2px 2px 4px black"}}>PROVIDING <span 
         className="glowing-text fw-bold" style={{color:'#d32c9a'}}> GRAPHICS, EDITING, RECRUITING STRATEGIES & PLATFORMS</span> FOR STUDENT-ATHELETES, TEAMS & ORGANIZATIONS. 
        </h2>
        
        <h4 className="align-items-center mb-4 text-white  w3-hide-large" 
         style={{ textShadow: "2px 2px 4px black"}}>PROVIDING MEDIA, MARKETING STRATEGIES & WEB DESIGN FOR ATHLETES, TEAMS & ORGANIZATIONS. 
        </h4>
    

             <p 
             style={{ textShadow: "2px 2px 4px black"}}>
              <i> Graphic Design | Digital Marketing | Web Design | Content Management</i></p>
             
  
<div className="py-3">
                 
<ScrollLink to="/contact" smooth={true} duration={500}>
<button
  type="button"
  className="btn mx-2 mb-2 custom-btn-purple"
>
  <b style={{textShadow:'2px 2px 4px black', color:'white'}}>Get Started</b>
</button>

</ScrollLink>

               </div>
              
 <p className='text-white' style={{fontSize:'12px'}}><i>'Services are tailored to individual need- However, template elements are available.'</i></p>
   
        </  div>
          
         
          </div>   
          <div className="col-sm-12 col-md-1 col-lg-1 "></div>   
      </div>
   </div>
    </header>
  );
};

export default MainHeader;


