// import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MakeF1 from './firstleft/MakeF1';
import MakeF2 from './firstleft/MakeF2';
import MakeF3 from './firstleft/MakeF3';
import MakeF4 from './firstleft/MakeF4'
import Demo from './Demo';

import './resize.css'
import './own.css'
import { useState } from 'react';
// import Demo from './Demo';

function Promote() {
  const [change,setchange]=useState(<MakeF1/>)
    const fun1=(e)=>{
        setchange(<MakeF1></MakeF1>)
    }

    const fun2=(e)=>{
      setchange(<MakeF2></MakeF2>)
    }
    const fun3=(e)=>{
      setchange(<MakeF3></MakeF3>)
    }
    const fun4=(e)=>{
      setchange(<MakeF3></MakeF3>)
    }
  return (
    <>
    <ReflexContainer style={{ height: '500px',marginTop:'20px'}} orientation="vertical" className='resize'>
        <ReflexElement style={{ border:'1px solid red' }}>
          {/* left content goes here */}
          <Navbar bg="l#15314b" expand="lg" className='algonav'>
            <Container className='container'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto Nav">
                  <Nav.Link href='#link' className='linkr1 link1' onClick={fun1}>Prompt</Nav.Link>
                  <Nav.Link href="#link" className='linkr2 link2' onClick={fun2}>Scratchpad</Nav.Link>
                  <Nav.Link href="#link" className='linkr3 link3' onClick={fun3}>Solution</Nav.Link>
                  <Nav.Link href="#link" className='linkr4 link4' onClick={fun3}>Video Explanation </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            <Container className='bottom'>
                {/* html or componet */}
                {/* <Demo></Demo> */}
                {change}

            </Container>
        </ReflexElement>
        <ReflexSplitter />
     
        <ReflexElement style={{ border:'1px solid red' }}>
          {/* left content goes here */}
          <Navbar bg="l#15314b" expand="lg" className='algonav'>
            <Container className='container'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto Nav">
                <Nav.Link href="#home" className='linkr1 link1'>Prompt</Nav.Link>
                  <Nav.Link href="#link" className='linkr2 link2'>Scratchpad</Nav.Link>
                  <Nav.Link href="#link" className='linkr3 link3'>Solution</Nav.Link>
                  <Nav.Link href="#link" className='linkr4 link4'>Video Explanation </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            <Container className='bottom'>
                {/* right div */}
     
            </Container>
        </ReflexElement>
    </ReflexContainer>
    </>
  );
}

export default Promote;
