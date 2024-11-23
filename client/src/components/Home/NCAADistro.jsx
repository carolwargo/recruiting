import React from "react";
import { InView } from "react-intersection-observer";
//import about from "../../assets/images/HomeImages/about.png";

const Stats = () => {
  return (
    <div className="container-fluid">
      <div>
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`w3-content w3-justify w3-padding-16 ${
              inView ? "animate-fade-in" : ""
            }`}
          >
              <p>components/home/NCAADistro</p>
                    <div className="container w3-padding-large w3-padding-32 w3-text-black ">
              
             
           
                {/**<p>Coaches want exactly what you want; 
                one-stop-shop to tell me everything i need to know. 
                A SINGLE clear, concise, organized, and efficient platform,
                 that is easy navigate.
              A final destination- </p> */}
           <div className="row w3-padding-32 justify-content-center align-items-center">
           <div className="col-sm-12 col-md-12 col-lg-12">
           
                  <h5 style={{ 
                    fontFamily: "sans-serif", 
                    fontWeight: "bold",
                    textShadow: ".75px .75px 1.5px black",
                  }}
                  >
                  "Understanding the NCAA's role in college sports requires insight into the organization's inner workings- <span
                      className=" w3-text-blue"
                      style={{ fontWeight: "bold" }}
                    >
                      <span
                       className=" w3-text-blue"
                       style={{ fontWeight: "bold" }}
                       >FUNDING SOURCES</span></span>, <span
                    className=" w3-text-blue"
                    style={{ fontWeight: "bold" }}
                  >BOARD STRUCTURE</span> , <span 
                  className=" w3-text-blue"
                  style={{ fontWeight: "bold" }}
                >LEGISLATIVE PROCESS </span> , and <span
                className=" w3-text-blue"
                style={{ fontWeight: "bold" }}
              >FOCUSED MISSION</span> These key metrics and insights are essential for aspiring college athletes to plan effectively and manage their expectations for playing at the next level."
                  </h5>

                  <h4 className="mt-5"
                        style={{
                          fontFamily: "Montserrat",
                          textShadow: "1px 1px 3px black",
                        }}>
                    Where The Money Flows{" "}
                   
                      Is Where The Loyalty Goes.
                </h4>
                </div>
              </div>
</div>


<div className="w3-container w3-content">
    
              {/**Start About Section*/}
              <div className="row w3-padding-32 justify-content-center align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-12">
             
                <h1 style={{ 
                    fontFamily: "sans-serif", 
                    fontWeight:'bold',
                    textShadow: ".75px .75px 1.5px black", }}>
            THINGS TO KNOW ABOUT THE
              <span
              className=" w3-text-blue"
             > NCAA- </span> 
                  </h1>
        
                  <h4 style={{ fontFamily: "sans-serif" }}>
                  Understanding the NCAA's actual role in college sports requires insight
                   into the organization's inner workings like-
                  <span
                  className=" w3-text-black"
                  style={{ fontWeight: "bold",
                      textShadow: "1px 1px 2px black",
                  }}> <i>FUNDING SOURCES, BOARD STRUCTURE, LEGISLATIVE PROCESS, and MISSION FOCUS</i></span>.
                  </h4>
                  <p style={{ fontFamily: "sans-serif" }}>
                    Exploring the following key metrics and insights are essential for aspiring college athletes to plan effectively and manage their expectations for playing at the next level.
                  </p>
                </div>
              </div>
            </div>
  {/**WHO IS THEY NCAA*/}
<div className="w3-container w3-content">

    <div className="row justify-content-center align-items-center w3-padding-16">
    <div className="container my-2">
    <div className="card w3-light-gray w3-padding-large">
    <h3>
    <b style={{fontFamily:'Montserrat'}}>NCAA-</b> Top Funding Source
    </h3>
    </div>
  </div>
            </div>


    {/**DISTRIBUTION */}
    <h3>According to the Most Recent Report, The NCAA generated around $1.3 billion in revenue <i className="text-secondary fs-5">(fiscal year 2022-2023) </i></h3>
 <ul>
  <li>Source of Revenue: $1.17 billion from <i>-Television, Marketing Rights & Championship Tournaments</i></li>
 </ul>
   <h2> <b>DISTRIBUTION OF FUNDS</b></h2> 

<div className="row justify-content-center align-items-center">

              <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="card">
                    <div className="card-header">D1 Distributions</div>
                    <div className="card-body">
                        <div className="card-title w3-text-pink mb-1">
                            <b style={{ fontSize: "24px" }}>$192 <span style={{ fontSize: "14px" }}>M</span></b>
                            </div>
                            <div className="card-text">

                            </div>
                        </div>
                        </div>
               </div>

               <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="card">
                    <div className="card-header">D1 Distributions</div>
                    <div className="card-body">
                        <div className="card-title w3-text-pink mb-1">
                            <b style={{ fontSize: "24px" }}>$192 <span style={{ fontSize: "14px" }}>M</span></b>
                            </div>
                            <div className="card-text">

                            </div>
                        </div>
                        </div>
               </div>


               <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="card">
                    <div className="card-header">D1 Distributions</div>
                    <div className="card-body">
                        <div className="card-title w3-text-pink mb-1">
                            <b style={{ fontSize: "24px" }}>$192 <span style={{ fontSize: "14px" }}>M</span></b>
                            </div>
                            <div className="card-text">

                            </div>
                        </div>
                        </div>
               </div>

               
               <div className="col-sm-12 col-md-3 col-lg-3">
                <div className="card">
                    <div className="card-header">D1 Distributions</div>
                    <div className="card-body">
                        <div className="card-title w3-text-pink mb-1">
                            <b style={{ fontSize: "24px" }}>$192 <span style={{ fontSize: "14px" }}>M</span></b>
                            </div>
                            <div className="card-text">

                            </div>
                        </div>
                        </div>
               </div>

            </div>




              <div className="row w3-padding-32 justify-content-center align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header">D1 Distributions</div>
                    <div className="card-body">
                        <div className="card-title w3-text-pink mb-1">
                            <b style={{ fontSize: "24px" }}>$192 <span style={{ fontSize: "14px" }}>M</span></b>
                            </div>
                            <div className="card-text">

                            </div>
                        </div>
                        </div>
               </div>

               <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="card">
                    <div className="card-header">D1 Distributions</div>
                    <div className="card-body">
                        <div className="card-title w3-text-pink mb-1">
                            <b style={{ fontSize: "24px" }}>$192 <span style={{ fontSize: "14px" }}>M</span></b>
                            </div>
                            <div className="card-text">

                            </div>
                        </div>
                        </div>
               </div>
            </div>
            </div>






            <div
              className="w3-container w3-content"
              style={{ fontFamily: "sans-serif" }}
            >
          
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title w3-text-pink mb-1">
                        <b style={{ fontSize: "24px" }}>QUESTION:</b>
                      </div>
                      <div
                        className="card-text w3-margin-bottom"
                        style={{ fontSize: "14px" }}
                      >
                        <i>
                          {" "}
                          WHAT IS THE HIGH SCHOOL TO COLLEGE CONVERSION RATE?
                        </i>
                      </div>
                      <div className="card-title w3-text-pink mb-1">
                        <b style={{ fontSize: "24px" }}>ANSWER:</b>
                      </div>
                      <div
                        className="card-text w3-margin-bottom"
                        style={{ fontSize: "14px" }}
                      >
                        <i>
                          {" "}
                          Only about 7% of high school student-athletes end up
                          competing in the NCAA. The latest data shows that from
                          7,200,000 high school athletes from all NCAA sports,
                          just under 500,000 make it to the NCAA.
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title w3-text-pink mb-1">
                        <b style={{ fontSize: "24px" }}>QUESTION:</b>
                      </div>
                      <div
                        className="card-text w3-margin-bottom"
                        style={{ fontSize: "14px" }}
                      >
                        <i>
                          {" "}
                         DISTRIBUTION OF FUNDS IN NCAA
                        </i>
                      </div>
                      <div className="card-title w3-text-pink mb-1">
                        <b style={{ fontSize: "24px" }}>ANSWER:</b>
                      </div>
                      <div
                        className="card-text w3-margin-bottom"
                        style={{ fontSize: "14px" }}
                      >
                        <i>
                          {" "}
                          Only about 7% of high school student-athletes end up
                          competing in the NCAA. The latest data shows that from
                          7,200,000 high school athletes from all NCAA sports,
                          just under 500,000 make it to the NCAA.
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
      </div>
    </div>
  );
};

export default Stats;

/**Start STATS List Group container
<div className="w3-container w3-content">
<div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <ListGroup as="ol" style={{ borderRadius: '0px' }} >
            <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> WHAT IS THE HIGH SCHOOL TO COLLEGE 
             CONVERSION RATE?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA.</i></p>
                  </div>
            </ListGroup.Item>


           
            <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> HOW MUCH DO GRADES REALLY MATTER & WHY?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA.</i></p>
                  </div>
            </ListGroup.Item>
     
          </ListGroup>
        </div>
        <div className="col-sm-12 col-md-6">
          <ListGroup as="ol" style={{ borderRadius: '0px' }} className="d-flex align-items-center justify-content-center">
          <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> WHAT IS THE HIGH SCHOOL TO COLLEGE 
             CONVERSION RATE?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA.</i></p>
                  </div>
            </ListGroup.Item>


           
            <ListGroup.Item as="li" className="my-3 d-flex align-items-center justify-content-center">
              <div  className='w3-padding w3-margin-top'>
             <h5 className="w3-text-pink"><b>Q:<i> HOW MUCH DO GRADES REALLY MATTER & WHY?</i></b></h5>
          
                  <p style={{fontSize:'14px'}}>A: <i> Only about 7% of high school student-athletes end up competing in the 
                    NCAA. The latest data shows that from 7,200,000 high school athletes from all NCAA 
                    sports, just under 500,000 make it to the NCAA. </i></p>
                  </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
</div>
*/
