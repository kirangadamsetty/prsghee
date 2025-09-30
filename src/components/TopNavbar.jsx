import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from '../utils/CartContext';
import { FaShoppingCart } from "react-icons/fa"; 
import "../styles/navbar.css";
import logo from "../assets/prslogo.png";

function TopNavbar() {
  const { cartData } = useContext(CartContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (path) => {
    navigate(path);
    setExpanded(false); 
  };

  return (
    <Navbar expand="lg" className="bg-white fixed-top" expanded={expanded}>
      <Container className="d-flex align-items-center justify-content-between">

        {/* Logo */}
        <Navbar.Brand onClick={() => handleNavClick("/")}>
          <img
            alt="logo"
            className="logo-image"
            src={logo}
            width="100"
            height="100"
          />
        </Navbar.Brand>
  <div
              className="cart-icon-container d-flex align-items-center ms-auto d-lg-none"
              onClick={() => handleNavClick("/cart")}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <FaShoppingCart size={24} color="#437459" />
              {cartData.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "#437459",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {cartData.length}
                </span>
              )}
            </div>
        {/* Toggle button for small screens */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="ms-3 d-lg-none"
        />

        {/* Nav links + cart for large screens */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link onClick={() => handleNavClick("/")} style={{ fontWeight: "500" }}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("/about")} style={{ fontWeight: "500" }}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("/products")} style={{ fontWeight: "500" }}>
              Our Products
            </Nav.Link>
            <Nav.Link onClick={() => handleNavClick("/order")} style={{ fontWeight: "500" }}>
              Order on Whatsapp
            </Nav.Link>

            {/* Cart icon */}
            <div
              className="cart-icon-container d-flex align-items-center ms-3  d-lg-block d-none"
              onClick={() => handleNavClick("/cart")}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <FaShoppingCart size={24} color="#437459" />
              {cartData.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "#437459",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {cartData.length}
                </span>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default TopNavbar;
