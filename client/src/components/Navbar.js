import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import Signup from './SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../redux/slices/auth';
import AddDepartment from './Adddepartment';

function NavBar() {

  const { isLoggedIn, university } = useSelector(state => state.auth)
  console.log("isloggedIn", isLoggedIn);
  const modalRef = useRef();
  const modalRefSignUp = useRef();
  const modalRefAddDepartment = useRef();
  const navigate=useNavigate()
  const dispatch=useDispatch();

  const handleLogIn = () => {

    modalRef.current.logInOpen();

  }
  const handleSignUp = () => {

    // modalRef.current.SignUpOpen();
    modalRefSignUp.current.signUpOpen();

  }
  const LogoutUser=()=>{
    localStorage.removeItem("university");
    dispatch(Logout());
    navigate("/");
  }
  const addDepartment =async ()=>{
    modalRefAddDepartment.current.AddDepartmentOpen();
  }
  return (
    <Navbar bg="info" expand="lg" style={{padding:"10px 20px 10px 20px"}}>
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
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/university">All Universities</Nav.Link>
          </Nav>


          {
            isLoggedIn ?
              <>
                <Button variant="outline-success" onClick={addDepartment}>Add Department</Button>
                <Button variant="outline-success" onClick={LogoutUser}>Logout</Button>
              </> :
              <>
                <Button variant="outline-success" onClick={handleSignUp}>SignUp</Button>
                <Button type="button" variant="outline-success" onClick={handleLogIn}>SignIn</Button>
              </>
          }
          <Login ref={modalRef} />
          <Signup ref={modalRefSignUp} />
          <AddDepartment ref={modalRefAddDepartment} />

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;