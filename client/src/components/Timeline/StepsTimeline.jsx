import React from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import './steps.css'
export default function App() {
  return (
    <div className="steps-timeline" id="steps-timeline">
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


    <MDBContainer className="py-2">
      <MDBRow style={{marginLeft:'5px'}}>
        <MDBCol md="12">
        <div id="content">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5">
          <span className="timeline-icon fw-bold">
            1
          </span>

          <h5 className="fw-bold">Schedule a </h5>
          <p className="text-muted mb-2 fw-bold">11 March 2020</p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            necessitatibus adipisci, ad alias, voluptate pariatur officia
            repellendus repellat inventore fugit perferendis totam dolor
            voluptas et corrupti distinctio maxime corporis optio?
          </p>
        </li>

        <li className="timeline-item mb-5">
        <span className="timeline-icon fw-bold">
            2
          </span>
          <h5 className="fw-bold">First customer</h5>
          <p className="text-muted mb-2 fw-bold">19 March 2020</p>
          <p className="text-muted">
            Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
            aliquet laoreet sapien, eget pulvinar lectus maximus vel. Phasellus
            suscipit porta mattis.
          </p>
        </li>

        <li className="timeline-item mb-5">
        <span className="timeline-icon fw-bold">
            3
          </span>
          <h5 className="fw-bold">Earned the first million $!</h5>
          <p className="text-muted mb-2 fw-bold">15 October 2020</p>
          <p className="text-muted">
            Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed et
            urna sit amet massa dapibus tristique non finibus ligula. Nam
            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
            vulputate mattis.
          </p>
        </li>
      </ul>
      </div>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}