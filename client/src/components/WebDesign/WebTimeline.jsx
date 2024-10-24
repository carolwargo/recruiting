import React from "react";
import { InView } from 'react-intersection-observer';      

const WebTimeline = () => {

  return (

  <div className="web-timeline" id="web-timeline">
<div>
  <InView triggerOnce={true}>
  {({ inView, ref }) => (
    <div ref={ref} className={`w3-content w3-justify w3-text-grey w3-padding-16 
       ${inView ? "animate-fade-in" : ""}`}
    id="web-timeline"
>
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

{/**Modal below- where to put modal button */}

<h1>For more on Controlled Platforms vs. Platform Controls & Restrictions</h1>
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

export default WebTimeline;

