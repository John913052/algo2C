import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './algonav.css'

function AlgoNav() {
  return (
      <Navbar bg="light" expand="lg" className='sticky-top algonav'>
        <Container className='container'>
          <Navbar.Brand href="#home" className='navtitle linkt'>Hi-Counselor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Nav">
              <Nav.Link href="#home" className='link1'><i className="fa-solid fa-bars"></i></Nav.Link>
              <Nav.Link href="#link" className='link2'><i className="fa-solid fa-arrow-right-long"></i></Nav.Link>
              {/* <Nav.Link href="#link" className='link3'>Link</Nav.Link> */}
              <NavDropdown title="JavaScript" id="basic-nav-dropdown" className='link3'>
                <NavDropdown.Item href="#action/3.1" className='droplink'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className='droplink'>
                  C#
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className='droplink'>Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'>
                  C++
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'>
                  Go Lang
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'>
                  Java
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'>
                  Python
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'>
                  kotlin
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink'>
                  typeScript
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className='link4'><i className="fa-sharp fa-solid fa-share-nodes"></i></Nav.Link>
            </Nav>
            <Nav className='n2'>
              <Nav.Link href="#link" className='link5'><i className="fa-solid fa-bug"></i></Nav.Link>
              <Nav.Link href="#link" className='link6'><i className="fa-solid fa-gear"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default AlgoNav;