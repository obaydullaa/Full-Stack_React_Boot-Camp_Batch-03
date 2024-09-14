import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

function MainNavbar() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <NavLink className='navbar-brand' to='home'>React-Router</NavLink>
        <Navbar.Toggle className='justify-content-end' aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav"  className='justify-content-end'>
          <Nav className="justify-content-end">
            <NavLink to='home' className='nav-link' 
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } 
            >
              Home
            </NavLink>
            {/* <NavLink to='about' className='nav-link' >About</NavLink> */}
            <NavLink to='contact' className='nav-link' >Contact</NavLink>
            
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavLink to='/about' className="dropdown-item">About</NavLink>
              <NavLink to='about/single-about' className="dropdown-item">Single About</NavLink>
              <NavLink to="/about/details-about" className="dropdown-item">About Details</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
