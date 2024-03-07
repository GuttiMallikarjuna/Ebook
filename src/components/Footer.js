import React from 'react';
const Footer = () => {

  return (
    <>
    <div className='d-md-flex justify-content-between mt-2 footer1 ps-lg-5 pe-lg-5 pt-lg-4 p-2 bg-light'>
        <div className="nasscom">
          <img src="https://www.infomericainc.com/Content/images/logo-footer.png" height="45px" alt="NASSCOM Logo"/>
          <p>Infomerica is a Software Development and Systems Integration company, one of the fastest growing companies that is committed to help our customers grow and move forward in every aspect of their business.</p>
        </div>
        <div className="keylinks">
          <h5>Key Links</h5>
         <div className="d-md-flex linksdiv">
         <div>
            <span><a href="##"><i className="bi bi-chevron-double-right"></i> About Us</a></span> <hr/>
            <span><a href="##"><i className="bi bi-chevron-double-right"></i> Services</a></span> <hr/>
            <span><a href="##"><i className="bi bi-chevron-double-right"></i> Solutions</a></span> <hr/>
          </div>
          <div className="linksdiv2">
          <span><a href="##"><i className="bi bi-chevron-double-right"></i> CSR</a></span> <hr/>
            <span><a href="##"><i className="bi bi-chevron-double-right"></i> Careers</a></span> <hr/>
            <span><a href="##"><i className="bi bi-chevron-double-right"></i> Contact Us</a></span> <hr/>
          </div>

         </div>
        </div>
        <div className="getintouch">
          <h5>Get in touch</h5>
          <p><i className="bi bi-geo-alt-fill"></i>&nbsp;:&nbsp;Infomerica - USA, UK, India</p>
          <p><a href="mailto:{datatodisplay.email}"><i className="bi bi-envelope-fill"></i>&nbsp;:&nbsp;info@infomericainc.com</a></p>

        </div>
        <div className="followus">
          <h5>Follow Us</h5>
           <div>
            <img src="https://www.infomericainc.com/Content/images/facebook.jpg" alt="facebook" className="facebookimg"/>
            <img src="https://www.infomericainc.com/Content/images/youtube.png" alt="Youtube" className="youtubeimg"/>
            <img src="https://www.infomericainc.com/Content/images/linkedin.png" alt="linkedin" className="linkedinimg"/>
           </div>
        </div>

       </div>
      <footer className="page-footer font-small bg-blue pt-1">
        <div className="footer-copyright text-center">Copyright © 2023
          <span className='text-danger'> Infomerica </span>All Rights Reserved. 
          <span className='text-danger'> Terms </span> | <span className='text-danger'> Privacy Policy</span>
        </div>
      </footer>
      </>
  );
};
export default Footer;



