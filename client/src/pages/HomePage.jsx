import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import AboutComponent from "../components/AboutComponent";

const HomePage = () => {
  return (
    <div>
     
        <div className="container py-5">
        <div className="py-2">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our application.</p>
        </div>
        <div className="row">
          <div className="col">
          <MDBCard>
      <MDBRipple 
      rippleColor='light' 
      rippleTag='div' 
      className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' 
        fluid alt='...' 
        style={{width:'100%'}}/>
        <div>
        <div>
          <div className='mask' 
          style={{ 
            backgroundColor: 'rgba(251, 251, 251, 0.15)' 
            }}></div>
        </div>
        </div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Graphics</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div className="col">
          <MDBCard>
      <MDBRipple 
      rippleColor='light' 
      rippleTag='div' 
      className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' 
        fluid alt='...' 
        style={{width:'100%'}}/>
        <div>
        <div>
          <div className='mask' 
          style={{ 
            backgroundColor: 'rgba(251, 251, 251, 0.15)' 
            }}></div>
        </div>
        </div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Video Editing</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div className="col">
          <MDBCard>
      <MDBRipple 
      rippleColor='light' 
      rippleTag='div' 
      className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' 
        fluid alt='...' 
        style={{width:'100%'}}/>
        <div>
        <div>
          <div className='mask' 
          style={{ 
            backgroundColor: 'rgba(251, 251, 251, 0.15)' 
            }}></div>
        </div>
        </div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Custom Website</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>
          <div className="col">
          <MDBCard>
      <MDBRipple 
      rippleColor='light' 
      rippleTag='div' 
      className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' 
        fluid alt='...' 
        style={{width:'100%'}}/>
        <div>
        <div>
          <div className='mask' 
          style={{ 
            backgroundColor: 'rgba(251, 251, 251, 0.15)' 
            }}></div>
        </div>
        </div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Recruiting Strategies</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
          </div>
        </div>
      </div>
    
      <div className="container py-5">
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of our application.</p>
        
        </div>
        <AboutComponent />
    </div>
  );
};

export default HomePage;
