import React from 'react';
import ContactBG from '../assets/images/ContactBG.png';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function LoginPage() {
  return (
    <div className='w3-light-gray'>
    <MDBContainer style={{paddingTop:'3rem'}}>

      <div className="p-5 bg-image" 
      style={{backgroundImage: `url(${ContactBG})`, height: '300px'}}></div>
<MDBContainer className='d-flex justify-content-center'>
      <MDBCard className='mx-5 mb-5 p-3 shadow-5 ' style={{width:'50rem', marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput 
              wrapperClass='mb-4' 
              placeholder='First name'
              type='text'/>

            </MDBCol>

            <MDBCol col='6'>
              <MDBInput 
              wrapperClass='mb-4' 
            placeholder='Last name' 
              type='text'/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4'  
          id='form1' 
          type='email'
          placeholder='Email'
          />
          <MDBInput wrapperClass='mb-4' 
          id='form1' 
          type='password'
          placeholder='Password'
          />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' 
            id='flexCheckDefault' 
            label='Subscribe to our newsletter' />
          </div>

          <MDBBtn className='w-100 mb-4 bg-black' size='md'>sign up</MDBBtn>

          <div className="text-center">

            <p>or sign up with:</p>

            <MDBBtn tag='a' color='none' className='mx-3' 
            style={{ color: 'black' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' 
            
            color='none' 
            className='mx-3' style={{ color: 'black' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'black' }}>
              <MDBIcon fab icon='google' size="sm"/>
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'black' }}>
              <MDBIcon fab icon='github' size="sm"/>
            </MDBBtn>

          </div>

        </MDBCardBody>
      </MDBCard>
      </MDBContainer>
    </MDBContainer>
    </div>
  );
}

export default LoginPage;



