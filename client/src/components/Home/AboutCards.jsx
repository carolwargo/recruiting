import React from "react";
import { InView } from "react-intersection-observer";
//import { Link } from "react-router-dom";
import "../../App.css";
import { FaArrowRightLong } from "react-icons/fa6";
const AboutCards = () => {
  return (
    <div className="about-cards w3-black">
      <style>
        {`
      .bold-white-shadow {
        text-shadow: .5px .5px 2px black;
        color: lightgray;

        }
        .glow-shadow {
  text-shadow: 
    0 0 10px red,  /* red glow */
    0 0 20px red, 
    0 0 30px #ff0000,
    0 0 40px #ff0000,
    2px 2px 50px #ff0000;
  /* Ensure the underline remains visible under the glow */
  text-decoration: underline;
  /* Adjust color if needed */
  color: #ff0000;
}

  .glow-shadow-light {
  text-shadow: 
    0 0 10px #ffffff,  /* red glow */
    0 0 20px red, 
    0 0 30px #ff0000,
    0 0 40px #ff0000,
    2px 2px 50px #ff0000;
  /* Ensure the underline remains visible under the glow */
  text-decoration: underline;
  /* Adjust color if needed */
  color: #ff0000;
}

        `}
      </style>

      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={` w3-padding-24 w3-padding-large  w3-margin-bottom
            ${inView ? "animate-slide-right" : ""}`}
          >
            <div className="container-fluid w3-padding-16 text-center justify-content-center align-items-center">
              {/** 
                <h2>
                  Self-promotion has become an assumed and unavoidable part of
                  the recruitment journey, essential for securing opportunities.
                </h2>
                */}
            </div>

       
      <div className="container  w3-padding-large">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-col justify-content-center align-items-center">
        <div className=" w3-padding-small header mb-4">
        <h1 className=" w3-text-light-gray" 
        style={{fontSize:'4rem'}}> WHAT <span className=" w3-text-red">WE ARE
        </span><span  className=" w3-text-gray"> VS. </span><span className=" w3-text-light-gray">WHO <span className=" w3-text-red">WE ARE NOT</span></span>   
        </h1>   
           
        <h4 className=" w3-text-gray" style={{fontFamily:'Roboto'}}> 
        <span className=" w3-text-red"><b>WE ARE</b></span> a <i>
        <span className=" w3-text-white">RECRUIT </span><i className=" w3-text-white text-decoration-underline glow-shadow">ASSISTANCE</i> <span className=" w3-text-white">SERVICE</span> .
        </i>
        </h4>
   
   <h4 className=" w3-text-gray" style={{fontFamily:'Roboto'}}> 
       <b> <span className=" w3-text-red">WE ARE NOT </span></b> a <span className=" w3-text-white text-decoration-line-through">RECRUITING SERVICE</span>. <br />
       </h4>
     </div>
                </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-col justify-content-center align-items-center">
              </div>
              </div>
      <hr />



      <div className="row d-flex justify-content-center align-items-center">

        <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-col justify-content-center align-items-center">
        <div className="mb-4">
       <div>

        <h3><span className="w3-text-red w3-hover-text-white">WHY US</span><span className=" w3-text-gray">|</span>NOT THEM-</h3>
        </div>
   
        <p className="fw-light mb-1" style={{fontFamily:'Roboto'}}> 
        Recruiters aka, recruiting services intentionally, and unapologetically miss the mark, exploiting fear for profit.
        </p> 
        <p className="fw-light mb-1" style={{fontFamily:'Roboto'}}>
    Recruiting services often miss the mark BIGGLY, exploiting fear for profit, filled with empty promises. They blatantly undermine what coaches want to see from recruits. YES, WE SAID IT, AND WE STAND BY THE STATEMENT - Those of us who truly understand the inner workings of college athletics know that most coaches cringe and delete when contacted by recruiting services.
</p>
                </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-col justify-content-center align-items-center">
                <div className="mb-4">
                    <h3>IT'S SIMPLE</h3>
                <div>
                     
        <h4 className="mt-3">HOW OUR RECRUIT <span className="w3-text-red text-decoration-underline">ASSISTANCE</span> SERVICES ARE POSITIONED TO PROVIDE THE SUPERIOR OUTCOMES FOR RECRUITS.</h4>

        <h5 className="fw-light" style={{fontFamily:'Roboto'}}><b>Q:</b> What do Recruiters do? </h5>
                <h5 className="fw-light" style={{fontFamily:'Roboto'}}><b>A:</b> Intervene as a Third-party</h5>
                <div className="mt-2">
                <button>See More</button>
                </div>
    </div>
                </div>
                </div>
            </div>
          
      





<hr />

      <div className="row d-flex justify-content-center align-items-center">
      
            <div className="container mb-3">
               
  
       <div className="row">
        <div className="title">
        <h3><span className="w3-text-red w3-hover-text-white">WHY US</span><span className=" w3-text-gray">|</span>NOT THEM-</h3>
          
            <h6>Recruiters unapologetically miss the mark, Exploiting fear for profit.</h6>
            <p>Coaches reject third-party involvement, </p>
            <p>Don't let anyone take control of your narritive!  
               The association with a traditional recruiting services 
               immediately brands you in a negative manner, weakens your personal 
               impact, and standing with college coaches. 
                These services make empty promises, charge excessive fees, offer little support.
            </p>
  </div>
       

            <h4>What <span className=" w3-text-red">RECRUITERS</span> do</h4>
            <p className=" opacity-75 pb-0 mb-1" style={{fontSize:'15px'}}> Recruiters  </p>
              
                    <p style={{fontSize:'14px'}}>Control your platform
                        Speak on your behalfHigh cost, mediocre resultsLittle knowledge or insight gained</p>

              
                <div className="mb-2">
                  Learn more about what coaches want <FaArrowRightLong />
                </div>
                </div>
      <div className="title">
        <h4>What <span className=" w3-text-red">COACHES</span> want</h4>
        <p className="opacity-75 pb-0 mb-1" style={{ fontSize: "15px" }}>KEY FACTORS:</p>
<p>
  **Coaches Reject Third-Party Involvement** - Coaches prefer direct communication and often ignore recruiting services. Using a recruiter can harm an athlete's reputation, as it contradicts the initiative, communication skills, and character that coaches value. With less than 7% of high school athletes playing in college, showcasing these qualities is essential.
</p>
<p>
  **Exploiting Fear for Profit** - Recruiting services prey on families' insecurities, charging exorbitant fees for minimal or no value. Coaches are unimpressed by athletes who rely on paid recruiters, viewing it negatively instead.
</p>
<p>
  **Loss of Control** - Letting recruiters dictate your narrative weakens your personal impact. These services make empty promises, charge excessive fees, and offer little support, prioritizing profit over loyalty or genuine help.
</p>
{/*
                  <h5 className="fw-light" style={{fontFamily:'Roboto'}}> <span  style={{color:'#ff0035'}}>PASSION & EXPERTISE </span>united, to champion and promote the most 
                    essential force shaping our future- YOUNG PEOPLE with bold dreams, relentless ambition, and a refusal to accept limits!</h5>
          <p className=" opacity-75 pb-0 mb-1" style={{fontSize:'15px'}}>KEY FACTORS: </p>
<p>Coaches Don't Want Third-Party Interference-
    Coaches DO NOT WANT to be contacted by recruiting services, some won't respond.
    Using a recruiter is like being branded with a scarlet letter.  
Recruiting services completely contradict what coaches seek. 
At the next level, Talent is a standard, and with less than 7% of high school athletes advancing to play a 
sport in college, standing out is essential.
Relying on third-party services diminishes an athlete's 
ability to show initiative, communication skills and character.
</p>           
<p>
Fear-Mongering and Financial Exploitation-
Recruiting services manipulate families into ridiculously 
high price tags, for low to no return in value. 
Coaches are not impressed by athletes who pay for recruiters, 
quite the contrary. 
</p>
<p>
Surrender of Control-
Don't let a recruiter control your narrative. 
Don't fall for the empty promises, outrageous fees, and no support.
Money can't buy loyalty- The same promises made to you are extended to every recruit they represent. 
</p>
*/}
                <div className="mb-2">
                  Learn more about what coaches want <FaArrowRightLong />
                </div>
                </div>
       
              </div>
              </div>
        
        {/**ROW */}
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-col justify-content-center align-items-center">
        <div className=" w3-padding-large header mb-4">
        <h1>WHAT WE ARE & WHO WE ARE NOT! </h1>
        <h5 className="fw-light" style={{fontFamily:'Roboto'}}> 
            We are <span>NOT</span> a recruiting service. We <span>ARE</span> a recruit ASSISTANCE SERVICE.
        </h5>
        <h4>WHAT'S THE DIFFERENCE?</h4>
              
          </div>
                </div>

                <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-col justify-content-center align-items-center">
                <div className="row d-flex justify-content-center align-items-center">
       
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-col justify-content-center align-items-center">
            <div className="border">
              <div className="w3-padding-large w3-padding-16">
                <div className="card-title">
                  <h5 className="fw-bold"> RECRUITING SERVICE</h5>
                </div>
                <p>
                Our entire staff has been through the recruiting process- Parents, former athletes, current athletes, and recruitment specialists. 

                </p>
                <div className="mt-2">
                  <button>See More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-col justify-content-center align-items-center">
            <div className="border">
              <div className="w3-padding-large w3-padding-16">
                <div className="card-title">
                <div className="card-title">
                  <h5 className="fw-bold"> RECRUIT ASSISTANCE SERVICE</h5>
                </div>
                </div>
                <p>
                  PASSION, PURPOSE & EXPERTISE UNITED, TO CHAMPION & PROMOTE THE
                  MOST ESSENTIAL FORCE SHAPING OUR FUTURE- YOUNG PEOPLE WITH
                  BOLD DREAMS, RELENTLESS AMBITION, AND A REFUSAL TO ACCEPT
                  LIMITS!
                </p>
                <div className="mt-2">
                <button>See More</button>
                </div>
              </div>
            </div>
          </div>

         
        </div>
        </div>
      </div>
<hr />
{/**TEST ROW */}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-col justify-content-center align-items-center">
        <div className=" w3-padding-large header mb-4">
        <h1>WHAT WE ARE & WHO WE ARE NOT! </h1>
        <h5 className="fw-light" style={{fontFamily:'Roboto'}}> 
            We are NOT recruiters. We ARE a recruiting ASSISTANCE SERVICE.
        </h5>
        <h4>WHAT'S THE DIFFERENCE?</h4>
              
                  <h5 className="fw-light" style={{fontFamily:'Roboto'}}> <span  style={{color:'#ff0035'}}>PASSION & EXPERTISE </span>united, to champion and promote the most 
                    essential force shaping our future- YOUNG PEOPLE with bold dreams, relentless ambition, and a refusal to accept limits!</h5>
                </div>
                </div>

                <div className="col-sm-12 col-md-8 col-lg-8 d-flex flex-col justify-content-center align-items-center">
                <div className="row d-flex justify-content-center align-items-center">
       
          <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-col justify-content-center align-items-center">
            <div className="border">
              <div className="w3-padding-large w3-padding-16">
                <div className="card-title">
                  <h3> <b>Why us?</b></h3>
                </div>
                <p>
                Our entire staff has been through the recruiting process- Parents, former athletes, current athletes, and recruitment specialists. 

                </p>
                <div className="mt-2">
                  <button>See More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-col justify-content-center align-items-center">
            <div className="border">
              <div className="w3-padding-large w3-padding-16">
                <div className="card-title">
                  <h3>Who We Value-</h3>
                </div>
                <p>
                  PASSION, PURPOSE & EXPERTISE UNITED, TO CHAMPION & PROMOTE THE
                  MOST ESSENTIAL FORCE SHAPING OUR FUTURE- YOUNG PEOPLE WITH
                  BOLD DREAMS, RELENTLESS AMBITION, AND A REFUSAL TO ACCEPT
                  LIMITS!
                </p>
                <div className="mt-2">
                <button>See More</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 d-flex flex-col justify-content-center align-items-center">
            <div className="border">
              <div className="w3-padding-large w3-padding-16">
                <div className="card-title">
                  <h3>What We Believe...</h3>
                </div>
                <p>
                  PASSION, PURPOSE & EXPERTISE UNITED, TO CHAMPION & PROMOTE THE
                  MOST ESSENTIAL FORCE SHAPING OUR FUTURE- YOUNG PEOPLE WITH
                  BOLD DREAMS, RELENTLESS AMBITION, AND A REFUSAL TO ACCEPT
                  LIMITS!
                </p>
                <div className="mt-2">
                  <button>What We Believe...</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>



 {/**STATS ROW*/}     
      <div className="w3-row w3-center w3-black w3-padding-32"
                style={{ backgroundColor: "#FF385C" }}
              >
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">
                    20<span style={{ fontSize: "10px" }}>yrs</span> +
                  </span>
                  <br />
                  BUSINESS EXPERIENCE
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">100+</span>
                  <br />
                  DESIGN PROJECTS
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">10+</span>
                  <br />
                  LEADERSHIP ROLES
                </div>
                <div className="w3-quarter w3-section">
                  <span className="w3-xlarge">100+</span>
                  <br />
                  MEETINGS
                </div>
              </div>
          </div>
        )}
      </InView>
<hr />
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={` w3-padding-24 w3-padding-large
            ${inView ? "animate-slide-right" : ""}`}
          >
            <div className="container-fluid text-center justify-content-center align-items-center">
              {/** 
                <h2>
                  Self-promotion has become an assumed and unavoidable part of
                  the recruitment journey, essential for securing opportunities.
                </h2>
                */}
            </div>

            <div className="container w3-padding-16 w3-padding-large shadow-lg ">
              <div className="row d-flex justify-content-center align-items-center">

                <div className="col-sm-12 col-md-5 col-lg-5 my-2">
                  <div className=" ">
                    <div className="w3-padding-large w3-padding-24">
                    <h6>
                    {" "}
                    <span className="mb-0 pb-0">
                     WHAT'S IN THE NAME?                   </span>{" "}
                  </h6>
                      <h1 className="mt-0 pt-0">
                        <span
                          style={{
                            fontSize: "4rem",
                          }}
                          className="mb-3"
                        >
                          <span>
                            <i
                              style={{
                                fontFamily: "Raleway",
                                textShadow: "1px 1px 4px black",
                              }}
                            >
                              Con
                            </i>
                          </span>
                          <span
                            className="fw-bold"
                            style={{
                              fontFamily: "Dancing Script",
                              marginLeft: "-8px",
                              textShadow: "2px 2px 2px 4px black",
                              color: "gray",
                            }}
                          >
                            Scribe
                          </span>
                        </span>{" "}
                        <span> </span>
                      </h1>

                      <p>
                        /ˈkən-ˈskrīb / <br />
                        <i className=" fw-light text-white">
                          conscribed; conscribing
                        </i>
                      </p>

                      <h6>
                        {" "}
                        <i>
                          ‘to <b className="bold-white-shadow">enlist</b>{" "}
                          compulsorily; conscript:{" "}
                          <b className="bold-white-shadow">required</b> by law
                          or a rule;
                          <b className="bold-white-shadow">obligatory</b>: 'to
                          enlist;{" "}
                          <b className="bold-white-shadow">
                            voluntarily or by force
                          </b>
                          .'
                        </i>
                      </h6>
                      <div></div>
                    </div>
                  </div>
                </div>

                <div className=" col-sm-12 col-md-7 col-lg-7 d-flex align-items-start my-2">
                  <div className=" w3-padding">
               
                    {/**
                    <p className="w3-margin-top">
  The focus may be on performance and academics, but student-athletes are 
  <b className="bold-white-shadow">required</b> to actively 
  <b className="bold-white-shadow">enlist</b> in the recruitment process. 
  Though participation might seem 
  <b className="bold-white-shadow">voluntary</b>, the 
  <b className="bold-white-shadow">force</b> of intense competition for limited 
  roster spots creates an undeniable 
  <b className="bold-white-shadow">obligation</b> to stand out and be proactive. 
  In this high-stakes environment, excelling in recruitment has become 
  <b className="bold-white-shadow">compulsory</b>, as the pressure continues to mount.
</p>
<p className="w3-margin-top">
  Student-athletes are <b className="bold-white-shadow"> required</b> to 
  <b className="bold-white-shadow"> enlist</b> in the recruitment process. 
  Excelling has become <b className="bold-white-shadow"> compulsory</b>, as they are 
  <b className="bold-white-shadow">obligated</b> to stand out in a highly competitive field.
</p>   
 */}
       
<p className="w3-margin-top">  {" "}
                TODAY'S FOCUS FOR STUDENT-ATHLETES  <b className="bold-white-shadow">
   EXTENDS BEYOND PERFORMANCE AND ACADEMIC SUCCESS </b> IN THE CLASSROOM. Active participation in self-promotion has become a critical responsibility.
</p>    
<p className=" w3-margin-top">With <b className="bold-white-shadow"> FEWER THAN 7% </b> of high school athletes advancing to play a sport in college, intense competition demands proactive efforts. </p>  
<p>Success now hinges on  <b className="bold-white-shadow">SELF-PROMOTION</b>,  <b className="bold-white-shadow">STRATEGIC BRANDING</b>, and  <b className="bold-white-shadow">EFFECTIVE MARKETING</b> to stand out and secure coveted roster spots.</p>      
     </div>
                </div>
              </div>
            </div>





            <div className=" w3-padding-large">
              {/*start Quick Stats */}
              <div
                className="w3-row w3-center w3-black"
                style={{ backgroundColor: "#FF385C", fontFamily:'Montserrat'}}
              >
                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>20+<span style={{ fontWeight: 'light', fontSize:'18px'}}>YRS</span></span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}> BUSINESS EXPERIENCE</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>100+</span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}> TRANSFER STUDENTS</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>100+</span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}> HIGH SCHOOL RECRUITS</span>
                </div>

                <div className="w3-quarter w3-section">
                  <span  className=' w3-xxlarge'>100%</span>
                  <br />
                  <span className="w3-large" style={{fontFamily:'Roboto'}}>DEDICATED TO SUCCESS</span>
                </div>
              </div>
              </ div>
          </div>
        )}
      </InView>

    </div>
  );
};

export default AboutCards;
