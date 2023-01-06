import React from 'react';
import { useState } from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MakeF1 from './firstleft/MakeF1';
import MakeF2 from './firstleft/MakeF2';
import MakeF3 from './firstleft/MakeF3';
import MakeF4 from './firstleft/MakeF4'


import './resize.css'
import './own.css'
// import MakeF1 from './firstleft/MakeF1';
// import MakeF2 from './firstleft/MakeF2';


const Demo=()=>{
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
    <ReflexContainer orientation="vertical" style={{ height: '85vh', marginTop: '20px' }} className='resize'>
  
      <ReflexElement>
  
        <ReflexContainer orientation="horizontal">
  
          <ReflexElement 
            name="appPane">
            <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav'>
              <Container className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto Nav">
                  <Nav.Link href='#link' className='linkr1 link1' onClick={fun1}>Prompt</Nav.Link>
                <Nav.Link href="#link" className='linkr2 link2' onClick={fun2}>Scratchpad</Nav.Link>
                <Nav.Link href="#link" className='linkr3 link3' onClick={fun3}>Solution</Nav.Link>
                <Nav.Link href="#link" className='linkr4 link4' onClick={fun4}>Video Explanation </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container className='bottom'>
              {/* {this.first} */}
              {change}
            </Container>
  
          </ReflexElement>
  
          <ReflexSplitter />
  
          <ReflexElement className="bottom-pane">
            <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav'>
              <Container className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto Nav">
                    <Nav.Link href='#link' className='linkr1 link1'>Test</Nav.Link>
                    <Nav.Link href="#link" className='linkr2 link2'>QuickTest</Nav.Link>
                    <Nav.Link href="#link" className='linkr3 link3'>Sandbox</Nav.Link>
                    <div >
                      <Nav.Link href="#link" className='linkr4 link4'><i className="fa-solid fa-eye-slash"></i></Nav.Link>
                      {/* <Nav.Link href="#link" className='linkr4 link4'><i class="fa-solid fa-eye"></i></Nav.Link> */}
                    </div>
                    <Nav.Link href="#link" className='linkr3 link3'><i className="fa-solid fa-circle-info"></i></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container className='bottom'>
              {/* html or componet */}
              {/* <Demo></Demo> */}
              
            </Container>
          </ReflexElement>
  
        </ReflexContainer>
  
      </ReflexElement>
      {/* divider */}
      <ReflexSplitter />
      {/* divider */}
      <ReflexElement >
  
        <ReflexContainer orientation="horizontal">
  
          <ReflexElement 
            name="appPane">
            <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav'>
              <Container className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto Nav">
                    <Nav.Link href='#link' className='linkr1 link1'>Your Solution</Nav.Link>
                    <Nav.Link href="#link" className='linkr2 link2'><i className="fa-solid fa-arrows-to-eye"></i></Nav.Link>
                    <Nav.Link href="#link" className='linkr3 link3'><i className="fa-solid fa-rotate-right"></i></Nav.Link>
                    <Nav.Link href="#link" className='linkr4 link4 runcode'>Run Code</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container className='bottom'>
              {/* html or componet */}
              {/* <Demo></Demo> */}
             
  
  
            </Container>
  
          </ReflexElement>
  
          <ReflexSplitter />
  
          <ReflexElement className="bottom-pane">
            <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav' >
              <Container className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto Nav">
                    <Nav.Link href='#link' className='linkr1 link1'>Custom Outputs</Nav.Link>
                    <Nav.Link href="#link" className='linkr2 link2'>Raw Output</Nav.Link>
                    <Nav.Link href="#link" className='linkr3 link3 btn-submit'>SubmitCode</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container className='bottom'>
              {/* html or componet */}
              {/* <Demo></Demo> */}
              
  
            </Container>
          </ReflexElement>
  
        </ReflexContainer>
  
      </ReflexElement>
    </ReflexContainer>
  )
}

 

export default Demo;