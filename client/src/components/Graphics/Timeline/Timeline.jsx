import React from "react";
import { MDBContainer, MDBRow, MDBCol} from "mdb-react-ui-kit";
import './timeline.css'
export default function App() {
  return (
    <div>
         <h3>Steps</h3>

    <MDBContainer className="py-2">
      <MDBRow style={{marginLeft:'5px'}}>
        <MDBCol md="12">
        <div id="content">
      <ul className="timeline-with-icons">
        <li className="timeline-item mb-5">
          <span className="timeline-icon fw-bold">
            1
          </span>

          <h5 className="fw-bold">Our company starts its operations</h5>
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