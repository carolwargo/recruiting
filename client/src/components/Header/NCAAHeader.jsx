import React from 'react';
import NCAABWTrans from '../../assets/images/NCAA/NCAABWTrans.png'; 
import { Link as ScrollLink } from 'react-scroll';
import AnimatedHeading from '../Header/Animated/AnimatedHeading';
import TopNav from '../Navigation/TopNav';
//import { FaArrowRight } from 'react-icons/fa';

const NCAAHeader = () => {

  return (
    <header  style={{fontFamily:'Montserrat'}}>
   <TopNav />
      <div
        id="intro-example"
        className="w3-padding-large w3-padding-48 bg-image position-relative"
        style={{
          backgroundImage: `url(${NCAABWTrans})`,
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          
        }}
      >
        {/* Overlay div for masking */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        ></div>
        <div className="row d-flex h-100 px-3 w3-margin-top text-center position-relative">
 <div className="col-sm-12 col-md-1 col-lg-1 "></div>
          <div className="col-sm-12 col-md-10 col-lg-10 text-white p-3 position-relative z-index-1">
           
             <div className='text-center'>
         
             <div className="container w3-padding-large w3-padding-32  text-center">
               
             <AnimatedHeading />
                <h1 >
                  <i
                    style={{
                      fontFamily: "Montserrat",
                      fontSize: "2.5rem",
                      textShadow: "1px 1px 4px black",
                    }}
                  >
                    THE{" "}
                    <span
                      className=" w3-text-blue"
                      style={{ fontWeight: "bold" }}
                    >
                      {" "}
                      NCAA{" "}
                    </span>
                    - Things You Need to Know
                  </i>
                </h1>
                <h4 className="text-white">
                  Understanding an organization's inner workings—like
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black",
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i>FUNDING SOURCES</i>
                  </span>
                  ,{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black",
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i>BOARD STRUCTURE</i>
                  </span>
                  ,{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black"
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i> LEGISLATURE</i>
                  </span>
                  , and{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      textShadow: "1px 1px 3px black",
                    }}
                    className="w3-text-blue"
                  >
                    {" "}
                    <i>FOCUSED MISSION</i>
                  </span>
                  — is essential for effective planning and tempering
                  expectations.
                  <span style={{ fontWeight: "bold", color: "black" }}></span>
                  .
                </h4>
                {/**<p>Coaches want exactly what you want; 
                one-stop-shop to tell me everything i need to know. 
                A SINGLE clear, concise, organized, and efficient platform,
                 that is easy navigate.
              A final destination- </p> */}
                
<div className=" w3-margin-top">
<h5 className=' w3-text-light-grey'><i>'We welcome fact checking from all- if you see something, tell us, and if you have some wisdom to empart, we would love to hear from you.</i></h5>
 
  
<ScrollLink to="/contact" smooth={true} duration={500}>
<button
  type="button"
  className="btn py-2 btn-dark"
  style={{boxShadow:'1px 1px 8px rgba(0,0,0,0.5)', borderRadius:'8px', paddingRight:'30px', paddingLeft:'30px'}}
>
  <span style={{textShadow:'1px 1px 3px black'}}>Speak Up</span>
</button>

{/**<button
  type="button"
  className="btn py-2 btn-primary border border-secondary"
  style={{boxShadow:'1px 1px 8px rgba(0,0,0,0.5)', backgroundImage:'linear-gradient(to right, #033e79, #047bf6, #38b6ff, #033e79,)', borderRadius:'10px'}}
>
  <b style={{textShadow:'1px 1px 3px black'}}>Set Us Straight</b>
</button> */}
</ScrollLink>
               </div>             
              </div>
        </div>
          </div>   
          <div className="col-sm-12 col-md-1 col-lg-1 "></div>   
      </div>
   </div>
    </header>
  );
};

export default NCAAHeader;


