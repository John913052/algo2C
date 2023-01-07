import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MakeF1 from './firstleft/MakeF1';
import Yoursolution from './SecondLsft.jsx/Yoursolution';
import Customop from './Lastright/Customop';
import { useReducer } from 'react';
import Handelstate from './reducers /MainFun';
import Handelstate2 from './reducers /Handelstate2';
import Handelstate3 from './reducers /Handelstate3';
import Handelstate4 from './reducers /handelstate4';


import './resize.css'
import './own.css'
import Test from './second/Test';
// import MakeF1 from './firstleft/MakeF1';
// import MakeF2 from './firstleft/MakeF2';


const Demo=()=>{
  const initialValue=<MakeF1></MakeF1>
  const initialValue2=<Test></Test>
  const initialValue3=<Yoursolution></Yoursolution>
  const initialValue4=<Customop ></Customop>
  const [state, dispatch] = useReducer(Handelstate,initialValue)
  const [state2, dispatch2] = useReducer(Handelstate2,initialValue2)
  const [state3, dispatch3] = useReducer(Handelstate3,initialValue3)
  const [state4, dispatch4] = useReducer(Handelstate4,initialValue4)
  
  return (
    <ReflexContainer orientation="vertical" style={{ height: '90vh', marginTop: '20px' }} className='resize'>
  
      <ReflexElement >
  
        <ReflexContainer orientation="horizontal">
  
          <ReflexElement 
            name="appPane">
            <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav'>
              <Container className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto Nav">
                  <Nav.Link href='#link' className='linkr1 link1' onClick={()=>dispatch({type:"fun1"})}>Prompt</Nav.Link>
                <Nav.Link href="#link" className='linkr2 link2' onClick={()=>dispatch({type:"fun2"})}>Scratchpad</Nav.Link>
                <Nav.Link href="#link" className='linkr3 link3' onClick={()=>dispatch({type:"fun3"})}>Solution</Nav.Link>
                <Nav.Link href="#link" className='linkr4 link4' onClick={()=>dispatch({type:"fun4"})}>Video Explanation </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container className='bottom'>
              {/* {this.first} */}
              {state}
            </Container>
  
          </ReflexElement>
  
          <ReflexSplitter />
  
          <ReflexElement className="bottom-pane">
            <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav'>
              <Container className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto Nav">
                    <Nav.Link href='#link' className='linkr1 link1' onClick={()=>dispatch2({type:'fun5'})}>Test</Nav.Link>
                    <Nav.Link href="#link" className='linkr2 link2' onClick={()=>dispatch2({type:'fun6'})}>QuickTest</Nav.Link>
                    <Nav.Link href="#link" className='linkr3 link3' onClick={()=>dispatch2({type:'fun7'})}>Sandbox</Nav.Link>
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
              {state2}
              
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
                    <Nav.Link href='#link' className='linkr1 link1'onClick={()=>dispatch3({type:'fun8'})}>Your Solution</Nav.Link>
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
              {state3}
             
  
  
            </Container>
  
          </ReflexElement>
  
          <ReflexSplitter />
  
          <ReflexElement className="bottom-pane">
            <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav' >
              <Container className='container'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto Nav">
                    <Nav.Link href='#link' className='linkr1 link1'onClick={()=>dispatch4({type:'fun9'})}>Custom Outputs</Nav.Link>
                    <Nav.Link href="#link" className='linkr2 link2'onClick={()=>dispatch4({type:'fun10'})}>Raw Output</Nav.Link>
                    <Nav.Link href="#link" className='linkr3 link3 btn-submit'>SubmitCode</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Container className='bottom'>
              {/* html or componet */}
              {/* <Demo></Demo> */}
              {state4}
  
            </Container>
          </ReflexElement>
  
        </ReflexContainer>
  
      </ReflexElement>
    </ReflexContainer>
  )
}

 

export default Demo;