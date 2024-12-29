import React from "react";
import { Link } from "react-router-dom";    
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes the needed JS for dropdowns
import { FaAngleDoubleDown } from "react-icons/fa";


const IJockDropdown = () => {
  return (


    <div className=" justify-content-center">
      <p>
  <a class="btn bg-transparent text-white p-0" 
  data-bs-toggle="collapse" 
  href="#collapseExample" 
  role="button" aria-expanded="false" 
  aria-controls="collapseExample">
  <FaAngleDoubleDown style={{fontSize:'3rem'}}/>
  </a>

</p>
<div class="collapse pt-0" id="collapseExample">
  <div class="card card-body bg-transparent">
  <span className=" text-decoration-none text-center mt-0 mb-2" style={{fontFamily:'Montserrat'}}>ABOUT <b>ij</b>OCK</span> 
    <span className=" text-decoration-none text-center mb-2" style={{fontFamily:'Montserrat'}}><b>ij</b>OCK WEB</span> 
    <span className=" text-decoration-none text-center mb-2" style={{fontFamily:'Montserrat'}}><b>ij</b>OCK GRAPHICS</span> 
    <span className=" text-decoration-none text-center mb-2" style={{fontFamily:'Montserrat'}}><b>ij</b>OCK BUSINESS</span> 
  </div>
  </div>
</div>
    
  
  );
};

export default IJockDropdown;
/**
 *   <div className="dropdown">
      <style>
        {`
      
.dropdown-menu {
  background-color: transparent !important; 
  color: white; 

.dropdown-item {
  color: white !important; 
}

.dropdown-item:hover {
  background-color: transparent;
}

`}
      </style>
      <div className="container">
        <h2>Dropdowns</h2>
        <p>The .dropdown-header class is used to add headers inside the dropdown menu:</p>
        <div className="dropdown bg-transparent">
          <FaAngleDoubleDown
            className="btn btn-default border-0 dropdown-toggle text-white justify-items-center bg-transparent"
            type="button"
            data-bs-toggle="dropdown" 
            style={{ fontSize: '4rem' }}
          />

       
          <ul className="dropdown-menu text-center bg-transparent">
            <li className="dropdown-header">Dropdown header 1</li>
            <li><Link to={'/'} className="dropdown-item">HTML</Link></li>
            <li><Link to={'/'} className="dropdown-item">CSS</Link></li>
            <li><Link to={'/'} className="dropdown-item">JavaScript</Link></li>
            <li className="divider"></li>
            <li className="dropdown-header">Dropdown header 2</li>
            <li><Link to={'/'} className="dropdown-item">About Us</Link></li>
          </ul>
        </div>
      </div>
    </div>
 */