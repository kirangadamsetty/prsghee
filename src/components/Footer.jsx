import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/prslogo.png"; 

function Footer() {
  return (
    <footer className="bg-body-secondary pt-5 pb-3">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-start">
          
          {/* Logo and Description */}
          <div className="col-md-6 mb-4 text-center text-md-start">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "180px", transform: "rotate(-1deg)" }}
              className="mb-1"
            />
            <p className="text-dark">
              We produce pure, traditional Cow and Buffalo Ghee using the finest milk, delivering rich taste and unmatched quality to your kitchen.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 mb-4 text-center text-md-start">
            <h5 className="mb-3 text-dark">Contact Us</h5>

            {/* WhatsApp */}
            <p className="text-dark">
              <a
                href="https://wa.me/917730982553?text=Hello%20PRS%20Ghee,%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaWhatsapp className="me-2 text-success" /> +91 7730982553
              </a>
            </p>

            {/* Call */}
            <p className="text-dark">
              <a
                href="tel:+917981855393"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaPhoneAlt className="me-2 text-primary" /> +91 7981855393
              </a>
            </p>

            {/* Email */}
            <p className="text-dark">
              <a
                href="mailto:prsenterprises781@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <FaEnvelope className="me-2 text-warning" /> prsenterprises781@gmail.com
              </a>
            </p>

            {/* Address */}
            <p className="text-dark">
              <FaMapMarkerAlt className="me-2 text-danger" /> D.no:8-140-8-6-4, RTC busstand back side, Srinivasa Nagar, Dhone -518222
            </p>
          </div>
        </div>

        <div
          className="w-100 border-top mt-3"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
        ></div>
        <div className="text-center pt-2">
          <small className="text-dark">
            © {new Date().getFullYear()} Designed and crafted with love ❤️ by Kiran.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
