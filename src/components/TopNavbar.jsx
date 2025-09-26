import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/navbar.css"
import logo from "../assets/prslogo.png" 
function TopNavbar() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#home"><img alt  ="logo" className = "logo-image" src = {logo} width = "100" height = "100" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" style ={{fontWeight:"500"}}>Home</Nav.Link>
            <Nav.Link href="#link" style ={{fontWeight:"500"}}>About</Nav.Link>
             <Nav.Link href="#link" style ={{fontWeight:"500"}}>Our Products</Nav.Link>
          <Nav.Link href="#link" style ={{fontWeight:"500"}}>Order on Whatsapp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;