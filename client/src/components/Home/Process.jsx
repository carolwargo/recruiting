//components/Home/Process.jsx
import React from "react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";



const Process = () => {
    return (
      <div className="process" id="process">
   <div>

 <div className="w3-container w3-content w3-padding-16">
  <div className=" w3-padding-16">
  <h1>Getting started is Easy- They say the hardest part is getting started, but we’ve simplified it into a <b>streamlined 3-step process—Step</b>  Step One 1: Start Now!</h1>

<h2>OUR PHILOSOPHY-</h2>
<h6>Simplicity is key for <span style={{fontWeight:'bold', color:'#d32c9a'}}> OUR CLIENTS</span>, as well as <span style={{fontWeight:'bold', color:'#d32c9a'}}>YOUR AUDIENCE</span>. Coaches want exactly what you want; one-stop-shop to tell me everything i need to know. A SINGLE clear, concise, organized, and efficient platform, that is easy navigate.
  A final destination- 
</h6>
<p>We prioritize an easy, organized experience for both our clients and their audience. Coaches, like you, want a one-stop-shop—a clear, concise, and efficient platform that’s easy to navigate, delivering everything in one place.</p>
          </div>
          </div>

          <div className="w3-black">




          <div className="home-intro" id="home-intro">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right,  #f64b65 , #d32c9a, #b42b81)",
        }}
      >
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-justify w3-text-black ${
                inView ? "animate-fade-in" : ""
              }`}
            >
       <div>
                <div className="w3-container w3-content w3-padding-48">
                  <div className=" w3-padding-large">
                    <h2>
                      <i
                        style={{
                          fontFamily: "Raleway",
                          fontSize: "2.5rem",
                          textShadow: "1px 1px 4px black",
                        }}
                      >
                       A Platform You Control vs. A Platform That Controls & Restricts You
                      </i>
                    </h2>

                    <h3 className="text-white my-4">
                    Having a controlled platform, like a website, versus a controlled platform, like social media, offers important advantages:
<div className="row">
<div className="col-sm-12 col-md-6 col-lg-6">
<ul>
    <li style={{fontSize:'18px'}}>
    <b>Ownership & Stability:</b>
 With a website, users own their content and design, reducing the risk of platform-imposed changes or account restrictions. Social media platforms, on the other hand, can modify rules, algorithms, or even suspend accounts, limiting control.
    </li>
    <li style={{fontSize:'18px'}}>
    <b>Brand Customization:</b>
 Websites offer more freedom in branding, layout, and functionality, creating a unique user experience. Social media layouts are standardized and often restricted.
    </li>
</ul>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-6">
    <ul>
    <li style={{fontSize:'18px'}}><b>Audience Reach & Data:</b>
 Websites allow users to gather in-depth analytics on visitors and behaviors, fostering personalized marketing. Social media platforms control audience data, limiting insights.
 </li>
    <li style={{fontSize:'18px'}}><b>Long-term Investment:</b>
 Websites serve as lasting digital assets, while social media is more transient, with posts quickly buried by new content.
                 </li>
</ul>
    </div>
</div>

</h3>
                    <p className="text-center">
Not sure where to start? <Link to="contact">Contact us</Link> with questions or schedule a 30-minute <Link to="contact">discovery call</Link> to learn more.
          </p>
                    <div className="mt-4">

                      <button className="btn btn-dark border-dashed w3-margin-top">
                        <b>Get Started</b>
                      </button>
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
 </div>
    </div>
  );
}

export default Process;