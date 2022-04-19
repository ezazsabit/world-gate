import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.module.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div  >
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
    <img src="Image/Logo/companyLogo.png"   alt="" />
 <NavLink className='text-decoration-none text-dark fs-3 me-3' to='/'>World-Gate</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/blogs'>Blogs</Link>
      <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/aboutme'>About</Link>
      <a className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' href="/home#services">Services</a>
      
      
    </Nav>
    <Nav>
    {user? <p
    className='my-auto text-danger signout' onClick={logout}>Log-Out</p>:<Link to='/signin' className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto'>Sign-In</Link>}
    <Link className='text-decoration-none text-dark d-flex align-items-center px-2 mx-auto' to='/signup'>Register</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;