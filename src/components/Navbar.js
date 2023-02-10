import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavbarStyles.css";
 
function Navbar1() {
  return ( 
    <>
      <Navbar sticky="top" expand="lg" variant="dark" className="top-container">
      <Container>
        <Navbar.Brand id="h1" href="/">@adityakahanhai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link className="ul-links" href="/">Home</Nav.Link>
            <Nav.Link className="ul-links" href="/about">About</Nav.Link>
            <Nav.Link className="ul-links" href="/project">Project</Nav.Link>
            <Nav.Link className="ul-links" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbar1;