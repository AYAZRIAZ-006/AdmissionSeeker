import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="info" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">AdmissionSeeker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">contact us</Nav.Link>
          </Nav>
            <Button variant="outline-success">SingUp</Button>
            <Button variant="outline-success">SignIn</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;