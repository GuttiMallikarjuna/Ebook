import React from 'react';
// import { Link} from "react-router-dom";
    
const Navbar = () => {
  
  return (
    <>
    <nav className="navbar navbar-light bg-light text-dark sticky-top d-lg-flex justify-content-around">
      <div>
      {/* <span className='toggle' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-text-left"></i></span> */}
      <img src='https://infomericainc.com/Content/images/logo.png' height="50px"  alt='Logo' className='infmlogo'></img>
      </div>
      <div className='col-8 d-lg-flex  navmenu'>
          <span>HOME</span>
          <span>ABOUT US</span>
          <span>INDUSTRIES</span>
          <span>SERVICES</span>
          <span>SOLUTIONS</span>
          <span>CONTACT US</span>
          <span>CSR</span>
          <span>CAREERS</span>
      </div>
    </nav>

    
    {/* <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
               
      <div className="offcanvas-header">
        <img src='https://infomericainc.com/Content/images/logo.png' height="50px"  alt='Logo'></img>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page"  to="/">Home</Link>
          </li>      
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">
              ABOUT US
            </Link>
          
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/industries">
              INDUSTRIES
            </Link>
          
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              SERVICES
            </Link>
           
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/solutions">
              SOLUTIONS
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/contactus">CONTACT US</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/csr">CSR</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link" to="/careers">
              CAREERS
            </Link>
           
          </li>
        </ul>
        
      </div>
    </div> */}
              
    </>
  );
};
export default Navbar;