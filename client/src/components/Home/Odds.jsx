import React from "react";
import { GiBullseye } from "react-icons/gi";
import { InView } from "react-intersection-observer";
import NCAABG from "../../assets/images/NCAA/NCAABG.png";

const HomeOdds = () => {
  return (
    <div className="home-odds" id="home-odds"
    style={{
      backgroundImage: `url(${NCAABG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      width: "100%",
    }}>
      <div>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-grey w3-padding-16 ${
                inView ? "animate-fade-in" : ""
              }`}
            >
              <div className="container w3-padding-48 w3-padding-large">
                <div className="row py-4">
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
                                    {/*    <h5>8 MILLION HIGH SCHOOL ATHLETES</h5>*/}
                                    Out of 8 million U.S. high school athletes,
                                    roughly 6% will compete in college. In major
                                    college sports like football and basketball,
                                    the percentage is even lower. Marketing
                                    isn’t a requirement, but with only 7% of
                                    high school athletes getting the chance to
                                    play in college and less than 2% reaching
                                    Division I, effective self-promotion is
                                    essential.
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
                                    {/** <h4>MISSION</h4>*/}
                                    The NCAA awards about $3.6 billion in
                                    athletic scholarships annually, but only
                                    1%-2% undergraduates will receive athletic
                                    money.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                                    {/**  <h4>MISSION</h4>*/}
                                    4. Importance of Video in Recruitment 90% of
                                    coaches say that highlight videos are a key
                                    part of their evaluation process. Properly
                                    edited skills videos that are easy to access
                                    and professionally presented can make a
                                    significant difference in recruitment.
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
                                    {/**<h4>MISSION</h4> */}
                                    5. Rise of Digital Recruiting In a survey,
                                    40% of college coaches indicated they use
                                    online recruiting platforms as their primary
                                    source for identifying athletes. This shift
                                    to digital recruitment highlights the need
                                    for athletes to have an optimized personal
                                    website, social media presence, and
                                    professional digital content.
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
                                    {/**<h4>MISSION</h4> */}
                                    6. Increased Focus on Personal Branding 78%
                                    of college coaches recommend that athletes
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
              </div>
            </div>
          )}
        </InView>
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
