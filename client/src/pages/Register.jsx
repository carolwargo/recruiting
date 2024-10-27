import React, {useContext, useState} from 'react';
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext";
import {Link} from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';

function SignupPage() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function signup(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (


    <div className='container w3-padding-large'>
  <MDBContainer className="mt-5 gradient-form">
  <MDBRow className='h-100 d-flex justify-content-center align-items-center w3-padding-top-32'>
    <MDBCol col='6' className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center gradient-custom-2 h-100 mb-4">

        <div className="text-black p-md-5 mx-md-4">
        <h1
          style={{
          fontSize: "4.5rem",
              }} >
              <span>
                <i
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "3.75rem",
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
                  marginLeft: "-10px",
                  color: "#d32c9a",
                  textShadow: "1px 1px 4px black",
                }}
              >
                Scribe
              </span>
            </h1>
          <h4 className="mb-2">We are more than just a company</h4>
          <p className="small mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </MDBCol>
    
    <MDBCol col='6' className="d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="gradient-custom-2 h-100 mb-4 shadow">
         

          <form className="signup w3-white" onSubmit={signup}>
      
            <div className="container w3-padding-large w3-padding-24">
            <p>Create an account.</p>
            <MDBInput 
              wrapperClass='mb-4' 
              placeholder="Email@mail.com"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              type='email'
              autoComplete='email'
            />
            <MDBInput 
              wrapperClass='mb-4' 
              id='form2' 
              type='password'
              placeholder="Password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              autoComplete='current-password'
            />
            <div className="text-center pt-1 mb-3 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" type='submit'>
                Signup
              </MDBBtn>
            </div>

          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="mb-0">Already have an account?</p>
            <Link to='/login' className='mx-2'>
              Login
            </Link>
          </div>
          </div>
          </form>
        </div>
      </div>
    </MDBCol>
  </MDBRow>
</MDBContainer>

    </div>
  );
}

export default SignupPage;