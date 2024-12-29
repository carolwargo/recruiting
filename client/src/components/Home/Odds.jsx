import React, { useRef } from "react";
import { InView } from "react-intersection-observer";
import { useInView } from "framer-motion";
import NCAATeal from "../../assets/images/NCAA/NCAATeal.png";  
const HomeOdds = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div 
    className="home-odds position-relative" 
    id="home-odds"
    style={{
      backgroundImage: `url(${NCAATeal})`,
      backgroundSize: "cover", 
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      zIndex: 1,
    }}
  >
    {/* Mask to overlay only on HomeOdds */}
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{ backgroundColor: "rgba(0, 0, 0, .25)", zIndex: -1 }}
    ></div>
    
      <div className="w3-padding-16 w3-text-white">
      <p>
        <i>**Odds</i>
      </p>
      <div className="container text-center w3-padding-24">
        <h1
          ref={ref}
          style={{
            fontSize: "3rem" ,
            textShadow:'1px 1px 4px white',
            transform: isInView ? "none" : "translateX(-150px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            className: "w3-text-white",
          }}
        >
        What Sets Us Apart?
        </h1>
        <h2>The NCAA is struggling to maintain relevance, and prove their value to simply stay afloat- <br />
        </h2>
        <h4 className="text-white">
       < b>FOUNDING PURPOSE</b> was to regulate college sports in order to protect young athletes seems 
           The ALL student-athletes has narrowed to the money-makers, and compromise is inevitable. <br />
              The NCAA's main source of revenue (90%+) is generated by 
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
                  <span style={{ fontWeight: "bold", color: "#d32c9a" }}></span>
                  .
                  <span>            
                     <blockquote className="blockquote">
  <p className="mb-0">"Where the money flows is where the loyalty goes."</p>
</blockquote></span>
                </h4>
        <h4>"We go beyond the information overload provided on the NCAA’s website. We've analyzed, summarized key facts, and developed strategies to inform our recruits with insights 'between the lines' that aren't publicly available."</h4>   
      </div>
      <div>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-white  ${
                inView ? "animate-fade-in" : ""
              }`}
            >

              
               <div className="container">
                <div className="row">
             <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="w3-container w3-content mb-4">
                      <div className="row d-flex justify-content-start align-items-center">
                        <div className="w3-container w3-content">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                                  <div className="w3-margin-left text-white">
          <p className="text-white">"We go beyond the information overload provided on the NCAA’s website. We've analyzed, summarized key facts, and developed strategies to inform our recruits with insights 'between the lines' that aren't publicly available."</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        
                        <div className="">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                                  <div className="w3-margin-left text-white">
                                    {/** <h4>MISSION</h4>*/}
                                    ORIGIN OF THE NCAA-
Short PC Answer:
'The NCAA was founded in response to the need for safer play in college football'-

The Unedited Reality- (The Death Harvest 1905):
College football's exploitation and disregard for player safety nearly led to its ban, with reports of 18-25 deaths and countless injuries in a single season.
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                                  <div className="w3-margin-left text-white">
                                    {/** <h4>MISSION</h4>*/}
                                    The NCAA is struggling to maintain relevance, and prove their value to simply stay afloat-
                                    ORIGIN & MISSION Loyalty to ALL student-athletes has narrowed to the money-makers, and compromise is inevitable.
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                                  <div className="w3-margin-left text-white">
                                    {/** <h4>MISSION</h4>*/}
                                    The NCAA's main source of revenue (90%+) is generated by FUNDING SOURCES, BOARD STRUCTURE, LEGISLATURE, and FOCUSED MISSION— is essential for effective planning and tempering expectations..
                                    "Where the money flows is where the loyalty goes."
                                  </div>
                                </div>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>




                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="mb-4">
                      <div className="row d-flex justify-content-start align-items-center">
                        <div className="w3-container w3-content">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                           
                                  <div className="w3-margin-left text-white">
                                    {/**  <h4>MISSION</h4>*/}
                                    Importance of Video in Recruitment 90% of
                                    coaches say that highlight videos are a key
                                    part of their evaluation process. Properly
                                    edited skills videos that are easy to access
                                    and professionally presented can make a
                                    significant difference in recruitment.
                                  </div>
                                </div>
                              </div>
                            </div>
                         
                        <div className="w3-container w3-content">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                                  <div className="w3-margin-left text-white">
                                    {/**<h4>MISSION</h4> */}
                                    Rise of Digital Recruiting In a survey, 40%
                                    of college coaches indicated they use online
                                    recruiting platforms as their primary source
                                    for identifying athletes. This shift to
                                    digital recruitment highlights the need for
                                    athletes to have an optimized personal
                                    website, social media presence, and
                                    professional digital content.
                                  </div>
                                </div>
                            </div>
                          </div>
                      

                        <div className="w3-container w3-content">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                            <div className="w3-margin-left text-white">
                                    {/**<h4>MISSION</h4> */}
                                    Increased Focus on Personal Branding 78% of
                                    college coaches recommend that athletes
                                    brand themselves online to maximize
                                    exposure. A consistent personal brand that
                                    reflects an athlete’s unique strengths,
                                    achievements, and personality can attract
                                    more interest from recruiters.
                                  </div>
                            </div>
                          </div>
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
    </div>
  );
};

export default HomeOdds;

/**<div>
 *  <h4>
                  Impact of COVID-19 on Recruiting The COVID-19 pandemic has
                  accelerated the shift to digital recruiting, with in-person
                  recruiting events and campus visits limited. Athletes who have
                  a strong online presence and can effectively showcase their
                  skills and character have a competitive advantage in the
                  current recruiting landscape.
                  <span className="text-danger">
                    {" "}
                    It COVID-19 pandemic, accelerated a massive shift to digital
                    recruiting- Athletes with a strong online presence have a
                    competitive advantage in the new recruiting landscape.
                  </span>
                </h4>
                
                <h4>A flurry of changes occured during COVID that went way beyond limiting in-person recruiting 
                events, and campus visits.</h4>
                <ul>
                  <li className="text-danger">
                    {" "}
                    The COVID-19 pandemic, accelerated a massive shift to digital
                    recruiting- Athletes with a strong online presence have a
                    competitive advantage in the new recruiting <br /> <span className="">
In addition to the limiting in-person recruiting events, and campus visits
Here are some of the key changes that
student-athletes should be aware of:</span>

                
                    Here is what happened:
                    <ul>
                        <li>2020- An additional year of eligibility was granted for current athletes.</li>
                        <li></li>
                        <li></li>
                    </ul>
                  </li>
                  <li>The NCAA transfer portal-</li>
                </ul>
 * </div> */

/**   
Key metrics highlighting the growing need for 
student-athletes to brand and market themselves to play sports in college:

1. Competitive Environment
Out of 8 million U.S. high school athletes, only about 6%—or 495,000—compete 
at the NCAA level. In sports like football and basketball, the percentage 
is even lower, highlighting the importance of personal branding to stand out.
 
2. NCAA Scholarship Opportunities
The NCAA awards about $3.6 billion in athletic scholarships annually, but 
only 1%-2% undergraduates will receive athletic money. By effectively marketing 
themselves, athletes can improve their chances of being noticed by coaches 
and securing scholarships.

3. Coach Recruitment Preferences
85% of coaches use social media to recruit athletes. Having a strong, 
well-branded online presence can help athletes connect with coaches, 
demonstrate their skills, and convey character.

4. Importance of Video in Recruitment
90% of coaches say that highlight videos are a key part of their evaluation 
process. Properly edited skills videos that are easy to access and 
professionally presented can make a significant difference in recruitment.

5. Rise of Digital Recruiting
In a survey, 40% of college coaches indicated they use online recruiting 
platforms as their primary source for identifying athletes. This shift to 
digital recruitment highlights the need for athletes to have an optimized 
personal website, social media presence, and professional digital content.

6. Increased Focus on Personal Branding
78% of college coaches recommend that athletes brand themselves online to 
maximize exposure. A consistent personal brand that reflects an athlete’s 
unique strengths, achievements, and personality can attract more interest 
from recruiters.


7. Impact of COVID-19 on Recruiting
The COVID-19 pandemic has accelerated the shift to digital recruiting,
with in-person recruiting events and campus visits limited. Athletes who
have a strong online presence and can effectively showcase their skills
and character have a competitive advantage in the current recruiting 
landscape.

These metrics show how branding and digital marketing are becoming essential 
tools for athletes aiming to compete at the college level. It’s not just 
about talent; having a strategic online presence can greatly enhance 
visibility and recruitment prospects.



<div className="w3-light-gray">
              <div className="container w3-padding-48 w3-padding-large">
                <div className="row py-4">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="text-center py-4">
                      <p>
                        Marketing isn’t a requirement, but with only 7% of high
                        school athletes getting the chance to play in college
                        and less than 2% reaching Division I, effective
                        self-promotion is essential.
                      </p>
                      <p>
                        Our tailored solutions, including dynamic websites,
                        eye-catching graphic designs, and innovative marketing
                        strategies, are designed to elevate your profile and
                        highlight what makes you stand out. With Con-scribe,
                        you’re not just another athlete; you’re a brand ready to
                        make an impact.
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="w3-container w3-content mb-4">
                      <div className="row d-flex justify-content-start align-items-center">
                        <div className="w3-container w3-content">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                              <div className="row d-flex justify-content-start align-items-center">
                                <div className="col-md-2">
                                  <GiBullseye style={{ fontSize: "5.5rem" }} />
                                </div>
                                <div className="col-md-10">
                                  <div className="w3-margin-left text-white">
                                    <h4>MISSION</h4>
                                    Let us help you tell your story and maximize
                                    your exposure in the competitive world of
                                    sports recruiting.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w3-container w3-content">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                              <div className="row d-flex justify-content-start align-items-center">
                                <div className="col-md-2">
                                  <GiBullseye style={{ fontSize: "5.5rem" }} />
                                </div>
                                <div className="col-md-10">
                                  <div className="w3-margin-left text-white">
                                    <h4>MISSION</h4>
                                    Let us help you tell your story and maximize
                                    your exposure in the competitive world of
                                    sports recruiting.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w3-container w3-content">
                          <div className="card mb-2 bg-black border-light-subtle">
                            <div className="card-body">
                              <div className="row d-flex justify-content-start align-items-center">
                                <div className="col-md-2">
                                  <GiBullseye style={{ fontSize: "5.5rem" }} />
                                </div>
                                <div className="col-md-10">
                                  <div className="w3-margin-left text-white">
                                    <h4>MISSION</h4>
                                    Let us help you tell your story and maximize
                                    your exposure in the competitive world of
                                    sports recruiting.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */