
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import ReactSwitch from 'react-switch'
import { ColorContext } from '../context/Color.context';

function HeaderMenu() {
    const {themeColor, toggleTheme} = useContext(ColorContext)
  return (
    <header className="header-wrap"  id='dark'>
        <Navbar  expand="sm">
            <Container>
                <Navbar.Brand className='logo' href="#">ThemeColor</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className='menu-wrap' id="navbarScroll">
                <Nav>
                    <NavDropdown title="Home" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                    <Nav.Link href="#action2">Blog</Nav.Link>
                    <div  className="color-witch">
                      <ReactSwitch onChange={toggleTheme} checked={themeColor === 'dark'}/>
                    </div>
                    <Button variant="success">Login</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
}

export default HeaderMenu;