import React from 'react';
import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import './resize.css'
import './own.css'


class Demo
  extends React.Component {

  constructor(props) {

    super(props)

    this.onResizePane = this.onResizePane.bind(this)

    this.layoutState = this.getLayoutState()
  }

  getLayoutState() {

    const item = window.localStorage.getItem(
      "re-flex-storage-demo")

    if (item) {

      return JSON.parse(item)
    }

    return {
      appPane: {
        flex: 0.8
      },
      rightPane: {
        flex: 0.2
      }
    }
  }

  onResizePane(event) {

    const { name, flex } = event.component.props

    this.layoutState[name].flex = flex

    window.localStorage.setItem(
      "re-flex-storage-demo",
      JSON.stringify(this.layoutState))
  }

  render() {

    return (
      <ReflexContainer orientation="vertical" style={{ height: '85vh', marginTop: '20px' }} className='resize'>

        <ReflexElement>

          <ReflexContainer orientation="horizontal">

            <ReflexElement flex={this.layoutState.appPane.flex}
              onResize={this.onResizePane}
              name="appPane">
              <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav'>
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
                        <Nav.Link href="#link" className='linkr4 link4'><i class="fa-solid fa-eye-slash"></i></Nav.Link>
                        {/* <Nav.Link href="#link" className='linkr4 link4'><i class="fa-solid fa-eye"></i></Nav.Link> */}
                      </div>
                      <Nav.Link href="#link" className='linkr3 link3'><i class="fa-solid fa-circle-info"></i></Nav.Link>
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

            <ReflexElement flex={this.layoutState.appPane.flex}
              onResize={this.onResizePane}
              name="appPane">
              <Navbar bg="l#15314b" expand="lg" className='sticky-top algonav'>
                <Container className='container'>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Nav">
                      <Nav.Link href='#link' className='linkr1 link1'>Your Solution</Nav.Link>
                      <Nav.Link href="#link" className='linkr2 link2'><i class="fa-solid fa-arrows-to-eye"></i></Nav.Link>
                      <Nav.Link href="#link" className='linkr3 link3'><i class="fa-solid fa-rotate-right"></i></Nav.Link>
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
}

export default Demo;