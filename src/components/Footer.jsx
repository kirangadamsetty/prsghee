import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/prslogo.png"; 

function Footer() {
  return (
    <footer className="bg-body-secondary pt-5 pb-3">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-start">
          <div className="col-md-6 mb-4 text-center text-md-start">
            <img src={logo} alt="Logo" style={{ height: "180px", transform:"rotate(-1deg)" }} className="mb-1" />
            <p className="text-dark">
              We produce pure, traditional Cow and Buffalo Ghee using the finest milk, delivering rich taste and unmatched quality to your kitchen.
            </p>
          </div>

          <div className="col-md-6 mb-4 text-center text-md-end ">
          
            <h5 className="mb-3 text-dark">Contact Us</h5>
            <p className="text-dark">
              <FaWhatsapp className="me-2 text-success" /> +91 98765 43210
            </p>
            <p className="text-dark">
              <FaPhoneAlt className="me-2 text-primary" /> +91 91234 56789
            </p>
            <p className="text-dark">
              <FaEnvelope className="me-2 text-warning" /> info@yourbrand.com
            </p>
          </div>

        </div>

        <div className="w-100 border-top mt-3" style={{ borderColor: "rgba(0,0,0,0.1)" }}></div>
        <div className="text-center pt-2">
          <small className="text-dark">© {new Date().getFullYear()} All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
