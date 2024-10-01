import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { CgOverflow } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/dancing-script"; //

import { useMediaQuery } from "react-responsive";

const MultiDrop = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 991.98 }); // Adjust breakpoint as needed

  const handleDropdownToggle = (dropdown) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const handleDropdownClick = (dropdown) => {
    if (isSmallScreen) {
      setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  // Check login status when the component mounts
  useEffect(() => {
    axios.get('http://localhost:4000/profile', { withCredentials: true })
      .then(response => {
        setIsLoggedIn(true);
        setUserInfo(response.data);  // Store user information (like username)
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);



  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"> 
          <span style={{ fontFamily: "Dancing Script" }}>
            <CgOverflow
              style={{ fontSize: "2rem"}}
              className="shadow rounded"
            />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Container>
      <Nav className="mx-auto justify-content-center">
        <NavDropdown
          title="Services"
          id="services-dropdown"
          show={dropdownOpen === "services"}
          onClick={() => handleDropdownClick("services")}
          onMouseEnter={() => handleDropdownToggle("services")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/web-dev">
            Web Development
          </NavDropdown.Item>
          <NavDropdown.Item href="/graphics">
            Graphics
          </NavDropdown.Item>
          <NavDropdown.Item href="/digital-marketing">
           Digital Marketing
          </NavDropdown.Item>
          <NavDropdown.Item href="/content-creation">
            Content Creation
        {/** Content Creation*/}    
          </NavDropdown.Item>
          <NavDropdown.Item href="/seo-analytics">
            SEO & Analytics
          </NavDropdown.Item>
          <NavDropdown.Item href="/it">
          Tech Support
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Portfolio"
          id="portfolio-dropdown"
          show={dropdownOpen === "portfolio"}
          onClick={() => handleDropdownClick("portfolio")}
          onMouseEnter={() => handleDropdownToggle("portfolio")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/portfolio/websites">
            Websites
          </NavDropdown.Item>
          <NavDropdown.Item href="/portfolio/branding">
            Branding
          </NavDropdown.Item>
          <NavDropdown.Item href="/portfolio/case-studies">
            Case Studies
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Blog"
          id="blog-dropdown"
          show={dropdownOpen === "blog"}
          onClick={() => handleDropdownClick("blog")}
          onMouseEnter={() => handleDropdownToggle("blog")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/blog/web-design">
            Web Design
          </NavDropdown.Item>
          <NavDropdown.Item href="/blog/seo-tips">
            SEO Tips
          </NavDropdown.Item>
          <NavDropdown.Item href="/blog/digital-marketing">
            Digital Marketing
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="About"
          id="about-dropdown"
          show={dropdownOpen === "about"}
          onClick={() => handleDropdownClick("about")}
          onMouseEnter={() => handleDropdownToggle("about")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/about/our-story">
            Our Story
          </NavDropdown.Item>
          <NavDropdown.Item href="/about/team">
            Team
          </NavDropdown.Item>
          <NavDropdown.Item href="/about/careers">
            Careers
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="More"
          id="more-dropdown"
          show={dropdownOpen === "more"}
          onClick={() => handleDropdownClick("more")}
          onMouseEnter={() => handleDropdownToggle("more")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <NavDropdown.Item href="/privacy-policy">
            Privacy Policy
          </NavDropdown.Item>
          <NavDropdown.Item href="/terms-conditions">
            Terms & Conditions
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
          title="Get Started"
          id="start-dropdown"
          show={dropdownOpen === "start"}
          onClick={() => handleDropdownClick("start")}
          onMouseEnter={() => handleDropdownToggle("start")}
          onMouseLeave={() => handleDropdownToggle(null)}
        >
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/calendly">Book Discovery Call</Nav.Link>
        </NavDropdown>
      </Nav>
    </Container>
    <Nav className="ms-auto">
  <Container className="d-flex align-items-center">  {/* Ensure items align horizontally */}
    {/* Conditionally render login/signup or logout */}
    {isLoggedIn ? (
      <>
        <Nav.Link as={Link} to="/profile"
        >  {/* Adjust margin */}
          <span className="rounded rounded-circle p-1 shadow">
            Profile
            {userInfo?.username || 'Profile'}
          </span>
        </Nav.Link>
      </>
    ) : (
      <>
      <Link to="/login">
  <button
    className="rounded bg-danger-subtle border border-1 px-2 py-1 shadow"
    style={{ fontSize:'14px', cursor: 'pointer'}}
    onClick={() => navigate('/login')}
  >
 <span style={{fontSize:'14px'}}>LOGIN</span>
  </button>
</Link>
    
        <Nav.Link as={Link} to="/signup" className="mx-1 px-1">  {/* Adjust margin */}
          <span className=""
          style={{fontSize:'14px'}}>
           SIGNUP 
          </span>
        </Nav.Link>
      </>
    )}
  </Container>
</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MultiDrop;
