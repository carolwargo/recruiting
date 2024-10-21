import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";


function ContactPage() {
  const [email, setEmail] = useState("");
  const [Fullname, setFullname] = useState("");
    const [message, setMessage] = useState("");

  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function submit(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/contact", {
      method: "POST",
      body: JSON.stringify({Fullname, email, message}),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } 
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="w3-padding-large" style={{}}>
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{ width: "185px" }}
                  alt="logo"
                />
                <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
              </div>

              <p>Please login to your account</p>

              <form className="submit" onClick={submit}>
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Full Name"
                  value={Fullname}
                  onChange={(ev) => setFullname(ev.target.value)}
                  type="email"
                />

                <MDBInput
                  wrapperClass="mb-4"
                  id="form2"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />

                
<MDBTextArea
                  wrapperClass="mb-4"
                  id="form2"
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(ev) => setMessage(ev.target.value)}
                />

                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn className="mb-4 w-100 gradient-custom-2">
                    Send Message
                  </MDBBtn>
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
              </form>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <MDBBtn outline className="mx-2" color="danger">
                  Danger
                </MDBBtn>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default ContactPage;
