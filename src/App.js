import React from 'react'
// import { Container, Row } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlgoNav from './components /AlgoNav'
// import Algodiv from './components /Algodiv';
// import Downside from './components /Downside';
// import Second from './components /Second';
// import Resize from './components /Resize';
import Demo from './components /Demo';
import Dslider from './components /drawers /Dslider'
// import Promote from './components /Promote';
// import { Container } from 'react-bootstrap';
// import 'react-reflex/style.css';

const App = () => {
  return (
    <div className='appcontainer'>
      {/* <Dslider></Dslider> */}
      <AlgoNav></AlgoNav>
      {/* <Resize></Resize> */}
      {/* <Algodiv></Algodiv> */}
      {/* <Downside></Downside>
      <Second></Second> */}
      <Demo></Demo>
      {/* <Promote></Promote> */}
  
    </div>
      
 
  )
}

export default App