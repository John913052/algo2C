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
import Question from './components /question/Question';
// import Navbar from './components /dumy/Navbar';
import LastSection from './components /question/LastSection';
import { Routes,BrowserRouter,Route } from 'react-router-dom';

// import Promote from './components /Promote';
// import { Container } from 'react-bootstrap';
// import 'react-reflex/style.css';
const App = () => {
  return (
    <>
    
      <div className='appcontainer'>
        <AlgoNav></AlgoNav>
        <Demo></Demo>
      </div>
      {/* className='appcontainer2' */}
    </>


  )
}

export default App

{/* <BrowserRouter>
<Demo></Demo>
<AlgoNav />
<Routes>
    <Route path="/questions" element={<Question/>} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NoPage />} />
</Routes>
</BrowserRouter> */}

