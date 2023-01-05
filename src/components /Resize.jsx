// import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './resize.css'
import './own.css'
import Demo from './Demo';

function Resize() {
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
                  <Nav.Link href='#link' className='linkr1 link1'>Prompt</Nav.Link>
                  <Nav.Link href="#link" className='linkr2 link2'>Scratchpad</Nav.Link>
                  <Nav.Link href="#link" className='linkr3 link3'>Solution</Nav.Link>
                  <Nav.Link href="#link" className='linkr4 link4'>Video Explanation </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            <Container className='bottom'>
                {/* html or componet */}
                {/* <Demo></Demo> */}
                <div className="para1">
                <div className="html">
                  <p>
                    Given two non-empty arrays of integers, write a function that determines
                    whether the second array is a subsequence of the first one.
                  </p>
                  <p>
                    A subsequence of an array is a set of numbers that aren't necessarily adjacent
                    in the array but that are in the same order as they appear in the array. For
                    instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
                    <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
                    that a single number in an array and the array itself are both valid
                    subsequences of the array.
                  </p>
                  <h3>Sample Input</h3>
                  <pre><span className="paraspan1">array</span> = [5, 1, 22, 25, 6, -1, 8, 10]
                    <span className="paraspan2">sequence</span> = [1, 6, -1, 10]
                  </pre>
                  <h3>Sample Output</h3>
                  <pre>true
                  </pre>
                </div>
              </div>

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
                <div className="para1">
                <div className="html">
                  <p>
                    Given two non-empty arrays of integers, write a function that determines
                    whether the second array is a subsequence of the first one.
                  </p>
                  <p>
                    A subsequence of an array is a set of numbers that aren't necessarily adjacent
                    in the array but that are in the same order as they appear in the array. For
                    instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
                    <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
                    that a single number in an array and the array itself are both valid
                    subsequences of the array.
                  </p>
                  <h3>Sample Input</h3>
                  <pre><span className="paraspan1">array</span> = [5, 1, 22, 25, 6, -1, 8, 10]
                    <span className="paraspan2">sequence</span> = [1, 6, -1, 10]
                  </pre>
                  <h3>Sample Output</h3>
                  <pre>true
                  </pre>
                </div>
              </div>

            </Container>
        </ReflexElement>
    </ReflexContainer>
    <ReflexSplitter />
    <ReflexContainer style={{ height: '500px',marginTop:'20px'}} orientation="vertical" className='resize'>
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
                {/* html or componet */}
                <div className="para1">
                <div className="html">
                  <p>
                    Given two non-empty arrays of integers, write a function that determines
                    whether the second array is a subsequence of the first one.
                  </p>
                  <p>
                    A subsequence of an array is a set of numbers that aren't necessarily adjacent
                    in the array but that are in the same order as they appear in the array. For
                    instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
                    <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
                    that a single number in an array and the array itself are both valid
                    subsequences of the array.
                  </p>
                  <h3>Sample Input</h3>
                  <pre><span className="paraspan1">array</span> = [5, 1, 22, 25, 6, -1, 8, 10]
                    <span className="paraspan2">sequence</span> = [1, 6, -1, 10]
                  </pre>
                  <h3>Sample Output</h3>
                  <pre>true
                  </pre>
                </div>
              </div>

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
                {/* html content */}

                <div className="para1">
                <div className="html">
                  <p>
                    Given two non-empty arrays of integers, write a function that determines
                    whether the second array is a subsequence of the first one.
                  </p>
                  <p>
                    A subsequence of an array is a set of numbers that aren't necessarily adjacent
                    in the array but that are in the same order as they appear in the array. For
                    instance, the numbers <span>[1, 3, 4]</span> form a subsequence of the array
                    <span>[1, 2, 3, 4]</span>, and so do the numbers <span>[2, 4]</span>. Note
                    that a single number in an array and the array itself are both valid
                    subsequences of the array.
                  </p>
                  <h3>Sample Input</h3>
                  <pre><span className="paraspan1">array</span> = [5, 1, 22, 25, 6, -1, 8, 10]
                    <span className="paraspan2">sequence</span> = [1, 6, -1, 10]
                  </pre>
                  <h3>Sample Output</h3>
                  <pre>true
                  </pre>
                </div>
              </div>

            </Container>
        </ReflexElement>
    </ReflexContainer>
    </>
  );
}

export default Resize;
