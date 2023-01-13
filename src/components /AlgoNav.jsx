import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { useRef } from 'react';

import './algonav.css';
import Timer from './subcompo/Timer';
import Settingicon from './subcompo/Settingicon';

function AlgoNav() {
  const [dlinks,setlinks]=useState('JavaScript')
  return (
    <>

      <Navbar bg="light" expand="lg" className='sticky-top algonav'>
        <Container className='container'>
          <Navbar.Brand href="https://www.algoexpert.io/product" className='navtitle linkt'>Hi-Counselor</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Nav">
              <Nav.Link href="https://www.algoexpert.io/questions" className='link1'><i className="fa-solid fa-bars"></i></Nav.Link>
              <Nav.Link href="https://www.algoexpert.io/questions/river-sizes" className='link2'><i className="fa-solid fa-arrow-right-long"></i></Nav.Link>
              {/* <Nav.Link href="#link" className='link3'>Link</Nav.Link> */}
              <NavDropdown title={dlinks} id="basic-nav-dropdown" className='link3'>
                
                <NavDropdown.Item href="#action/3.2" className='droplink' onClick={()=>{setlinks("c#")}}>
                  C#
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('C++')}}>
                  C++
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('Go Lang')}}>
                  Go Lang
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('Java')}}>
                  Java
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('Python')}}>
                  Python
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('Kotlin')}}>
                  kotlin
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>{setlinks('TypeScript')}}>
                  TypeScript
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className='link4'><i className="fa-sharp fa-solid fa-share-nodes"></i></Nav.Link>
      

                  <Timer></Timer>
            
            </Nav>
            <Nav className='n2'>
              <Nav.Link href="#link" className='link5'><i className="fa-solid fa-bug"></i></Nav.Link>
              
              <Settingicon></Settingicon>
              {/* <Nav.Link href="#link" className='link6' > <i className="fa-solid fa-gear"></i></Nav.Link> */}
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AlgoNav;