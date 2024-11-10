//components/Home/NCAAMissions.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";



const NCAAMission = () => {
    return (
      <div className="ncaa-mission" id="ncaa-mission">


   <div>

<div className="w3-black">
<p style={{fontSize:'12px'}}>/components/Home/NCAA/Mission</p>
<div className="w3-container w3-padding-large w3-padding-32 ">
<div className="row w3-margin-top w3-margin-bottom">
          {/*Start Service Header & intro container */}
        <div className="container text-center">
          <h1>
            <span
              style={{
                fontSize: "4.5rem",
              }}
              className="mb-3"
            >
              <span>
                <i
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "4.5rem",
                    textShadow: "1px 1px 4px black",
                  }}
                >
            The NCAA- 
                </i>
              </span>
              <span
                className="fw-bold"
                style={{
                  fontFamily: "Dancing Script",
                  marginLeft: "-10px",
                  textShadow: "1px 1px 4px black",
                  color: " #d32c9a",
                }}
              >
                What you need to know. 
              </span>
            </span>
          </h1>
   
         
          <div className="text-center fw-light w3-padding-large">
          <h4 className="mb-4 px-4 w3-hide-small w3-hide-medium">
       Common misunderstanding: 
          </h4>
         
          </div>
        </div>
</div>
</div>
</div>


    <div className="w3-container w3-content w3-padding-32">
   <div className="row px-4 mb-2">
    <div className="container">NCAA <i>Mission & Priorities</i></div>
   <div className="col-sm-12 col-md-6 col-lg-6 d-flex mb-2 align-items-start w3-padding-large">
    <div className="mission">
         <h4 className="fw-bold mb-0 fs-2 text-body-emphasis">Mission</h4>
         <p style={{fontSize:'16px', marginTop:'5px', marginBottom:'10px'}}>
         Mission
         Provide a world-class athletics and academic experience for student-athletes that fosters lifelong well-being.
         </p>
       </div>
       <div className="priorities">
         <h4 className="fw-bold mb-0 fs-2 text-body-emphasis">Priorities</h4>
        
        <div>
         <p style={{fontSize:'16px', marginTop:'5px', marginBottom:'10px'}}>
        <i><b>Coordinate and deliver safe, fair and inclusive competition directly and by Association members:</b></i>  </p>
         <ul>
            <li>Set rules and guidelines and provide enforcement.</li>
<li>Create programs that support outstanding performance on and off the field.</li>
<li>Deliver excellent and inclusive championships.</li>
         </ul>
         </div>

<div>
         <p style={{fontSize:'16px', marginTop:'5px', marginBottom:'10px'}}>
        <i><b>Provide world-class services to student-athletes and members that leverage the NCAA’s collective scale:</b></i>  </p>
         <ul>
            <li>Lead research and promote innovation that improves health, safety and performance.</li>
<li>Provide capabilities and programming that fill in the gaps for members.</li>
<li>Identify, co-create and distribute best practices to student-athletes and members.</li>
         </ul>
         </div>


         <div>
         <p style={{fontSize:'16px', marginTop:'5px', marginBottom:'10px'}}>
        <i><b>Grow the college sports ecosystem:</b></i>  </p>
         <ul>
            <li>Inspire the next generation of athletes and up-and-coming sports.</li>
<li>Enable quality access and viewing for all who want it.</li>
<li>Use data to engage fans with highly personalized experiences and products.</li>
         </ul>
         </div>



         <div>
         <p style={{fontSize:'16px', marginTop:'5px', marginBottom:'10px'}}>
        <i><b>Deliver sustainable funding for the NCAA mission:</b></i>  </p>
         <ul>
            <li>Excite fans fandom through compelling entertainment products and services.</li>
<li>Grow media, sponsorship and ticketing revenue.</li>
<li>Innovate new revenue streams.</li>
<li>Set a culture of cost discipline.</li>
         </ul>
         </div>


       </div>
     </div>

     <div className="col-sm-12 col-md-6 col-lg-6 d-flex mb-2 align-items-start w3-padding-large">
    <div>
         <h4 className="fw-bold mb-0 fs-2 text-body-emphasis">Custom Website Development</h4>
         <p style={{fontSize:'16px', marginTop:'5px', marginBottom:'10px'}}>
         Create your own dedicated website to showcase your achievements- A platform you control with no limits on how you highlight your brand.
         </p>
       </div>
     </div>
   </div>

 </div>

<div className="w3-container w3-content">
<hr className="w3-padding-16"/>
</div>







 <div className="w3-container w3-content w3-padding-16">
 
  <div className=" w3-padding-16">
 <h3 className="text-center">
Not sure where to start? <Link to="contact">Contact us</Link> with questions or schedule a 30-minute <Link to="contact">discovery call</Link> to learn more.
          </h3>
          </div>
          </div>
 </div>
    </div>
  );
}

export default NCAAMission;