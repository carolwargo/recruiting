import React from "react";
import { InView } from 'react-intersection-observer';      
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import XO from '../../assets/images/CardBG/XO.png';
const WebTimeline = () => {

  return (

  <div className="web-timeline" id="web-timeline">
        <InView triggerOnce={true}>
  {({ inView, ref }) => (
    <div ref={ref} className={`w3-content w3-justify w3-text-grey 
       ${inView ? "animate-fade-in" : ""}`}
>

{/** 

<div>
        <p style={{fontSize:'12px'}}>  /components/Timeline/StepsTimeline</p>
      
         <h3>Getting started is said to be the hardest part but, it doesn't have to be- In face we have gone actually simplified things to a streamlined 3-step process. Step 1- Get started!</h3>
<h4>OUR PHILOSOPHY-</h4>
<p>Simplicity is key for <span style={{fontWeight:'bold', color:'#d32c9a'}}> OUR CLIENTS</span>, as well as <span style={{fontWeight:'bold', color:'#d32c9a'}}>YOUR AUDIENCE</span>. Coaches want exactly what you want; one-stop-shop to tell me everything i need to know. A SINGLE clear, concise, organized, and efficient platform, that is easy navigate.
  A final destination- 
</p>
<h1>
  LEARN MORE ABOUT PLATFORM TYPES: <br />
  Controlled Platforms vs. Platform Controls & Restrictions</h1>
<h3>FAQS</h3>
<p>Q: Does a website eliminate the use of my Social Media Accounts?</p>
<p>A: On the contrary! How it works.</p>
<p>For Example- </p>
<p><b>SCENARIO:</b> 'You received All-Conference Honors'</p>
<p><b>SOCIAL MEDIA USE:</b> 'Post the announcement on social media sites, WITH A SEE MORE LINK, that takes the user to your website.'</p>

<h1>For more on Controlled Platforms vs. Platform Controls & Restrictions</h1>
</div>
*/}

<div className="row w3-padding-16">
  <div className='col-sm-12 col-md-6 col-lg-6'>
    <div className="container w3-padding-large">
    <img src={XO} alt="clay" className="w-100"/>
    </div>
  </div>
  <div className='col-sm-12 col-md-6 col-lg-6'>
    <MDBContainer className="py-2">
      <MDBRow style={{marginLeft:'5px'}}>
      <div className="container w3-padding-24">
            <h2 style={{color:'#f64b65', fontWeight:'bold'}}>THE PROCESS IS SIMPLE-</h2>
            <h4>3 easy steps from start to finish</h4>
         
          </div>
        <MDBCol md="12">
         
        <div id="content">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-4">
        <span className="timeline-icon fw-bold" style={{ backgroundImage: 'linear-gradient(to right,  #f64b65 , #d32c9a,  #b42b81)', color:'white'}}>
            1
          </span>

          <h5 className="fw-bold">DISCOVERY</h5>
          <p className="text-muted" style={{fontSize:'14px'}}>
  We’ll explore your vision, goals, and unique strengths to create a standout presentation. Share more details in our <Link>intake form</Link>.
</p>
 </li>

        <li className="timeline-item mb-4">
        <span className="timeline-icon fw-bold" style={{ backgroundImage: 'linear-gradient(to right,  #f64b65 , #d32c9a,  #b42b81)', color:'white'}}>
            2
          </span>
          <h5 className="fw-bold">PLANNING</h5>
         <p className="text-muted" style={{fontSize:'14px'}}>
  Develop a custom plan based on Discovery, including site structure, design, content strategy, and functionality.
</p>

        </li>

        <li className="timeline-item mb-4">
        <span className="timeline-icon fw-bold" style={{ backgroundImage: 'linear-gradient(to right,  #f64b65 , #d32c9a,  #b42b81)', color:'white'}}>
            3
          </span>
          <h5 className="fw-bold">DEVELOPMENT</h5>
         <p className="text-muted" style={{fontSize:'14px'}}>
  Upon final approval, we build a polished, fully functional site, ready for testing and final tweaks.
</p>
       </li>
      </ul>
      </div>

      </MDBCol>
   
      </MDBRow>
      
      <div className="text-center mt-2">
      <em style={{fontSize:'12px'}}>* "Timeframes are estimates and depend on customer response time and customization level."</em>
      </div>
    </MDBContainer>

    </div>
    </div>

  {/**
  <div
    style={{  backgroundImage: 'linear-gradient(to right,  #f64b65 , #d32c9a, #b42b81)',
    }}
    >
        <p style={{fontSize:'12px'}}>/components/Home/Intro</p>
       <div 
      >
       <div className="container w3-padding-48">
       <div className="text-center w3-padding-large">


<p style={{fontSize:'12px'}}>  /components/Timeline/StepsTimeline</p>
      
<h3>Getting started is said to be the hardest part but, it doesn't have to be- In face we have gone actually simplified things to a streamlined 3-step process. Step 1- Get started!</h3>
<h4>OUR PHILOSOPHY-</h4>
<p>Simplicity is key for <span style={{fontWeight:'bold', color:'#d32c9a'}}> OUR CLIENTS</span>, as well as <span style={{fontWeight:'bold', color:'#d32c9a'}}>YOUR AUDIENCE</span>. Coaches want exactly what you want; one-stop-shop to tell me everything i need to know. A SINGLE clear, concise, organized, and efficient platform, that is easy navigate.
A final destination- 
</p>
<h1>
LEARN MORE ABOUT PLATFORM TYPES: <br />
Controlled Platforms vs. Platform Controls & Restrictions</h1>
<h3>FAQS</h3>
<p>Q: Does a website eliminate the use of my Social Media Accounts?</p>
<p>A: On the contrary! How it works.</p>
<p>For Example- </p>
<p><b>SCENARIO:</b> 'You received All-Conference Honors'</p>
<p><b>SOCIAL MEDIA USE:</b> 'Post the announcement on social media sites, WITH A SEE MORE LINK, that takes the user to your website.'</p>
<h1>For more on Controlled Platforms vs. Platform Controls & Restrictions</h1>
<button
                        type="button"
                        className="w-100 btn btn-lg fw-bold w3-black mt-2"
                      >
                       GET STARTED
                      </button>

</div>
</div>
</div>
</div>
 */}
</div>
)}
</InView>
</div>
);
};

export default WebTimeline;



/**       
 * 
 
 <ol>
        <li>Your Objectives: What do you want your website to accomplish?</li>
      <li>Target Audience: Who are you looking to engage or convert?</li>
       <li>Design Preferences: Any specific styles, color schemes, or layouts in mind?
       </li>
       <li>Must-Have Features: Essential pages, functionalities, or integrations (e.g., contact forms, e-commerce, or booking).
       </li>
       <li>Timeline & Budget: How soon do you need the project completed, and what is your budget?</li>
       </ol>
        */