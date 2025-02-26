import React from 'react';
import PinkBlackBG from '../../assets/images/PinkBlackBG.png';
import { Link as ScrollLink } from 'react-scroll';
import PinkAnimatedHeader from '../Header/Animated/PinkAnimatedHeader';
import TopNav from '../Navigation/TopNav';
import Button from 'react-bootstrap/Button';


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
        <PinkAnimatedHeader />
        

        <h2 className="align-items-center px-4 mt-3 text-white fw-bold w3-hide-small w3-hide-medium" 
         style={{ textShadow: "2px 2px 4px black", fontFamily:'Montserrat'}}>DIGITAL RECRUITING SERVICES <span 
         className="glowing-text fw-bold"> FOR STUDENT-ATHLETES</span>- PROVIDING <span 
         className="glowing-text fw-bold" style={{color:'#e9008c'}}>UNFILTERED GUIDANCE</span> AND A <span className="glowing-text fw-bold" style={{color:'#e9008c'}}>SEASONED PERSPECTIVE</span> THROUGH A <span className="glowing-text fw-bold" style={{color:'#e9008c'}}>UNIQUE APPROACH</span>. 
        </h2>
        
        <h4 className="align-items-center mb-4 text-white  w3-hide-large" 
         style={{ textShadow: "2px 2px 4px black"}}>PROVIDING MEDIA, MARKETING STRATEGIES & WEB DESIGN FOR ATHLETES, TEAMS & ORGANIZATIONS. 
        </h4>
    

             <p 
             style={{ textShadow: "2px 2px 4px black"}}>
              <i> Web Design | Graphic Design | Digital Marketing | Video Editing | Content Management</i></p>
             
  
<div className="py-4">
                 
<ScrollLink to="/contact" smooth={true} duration={500}>

<Button variant="light" className=' rounded-5 py-2'><b>Get Started</b></Button>

</ScrollLink>

               </div>
         {/**    
 <p className='text-white' style={{fontSize:'14px'}}><i>'Services are tailored to individual need- However, template elements are available.'</i></p>
   */}  
        </  div>
          
         
          </div>   
          <div className="col-sm-12 col-md-1 col-lg-1 "></div>   
      </div>
   </div>
    </header>
  );
};

export default MainHeader;


