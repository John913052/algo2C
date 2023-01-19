import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlgoNav from './components /AlgoNav'
import Demo from './components /Demo';
import Question from './components /question/Question';
import LastSection from './components /question/LastSection';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    
      <div className='appcontainer'>
        <BrowserRouter>
        {/* <Demo></Demo> 
        <AlgoNav /> */}
        <Routes>
            <Route path="/" element={<Demo></Demo>} />
            <Route path="/question" element={ <Question />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        </BrowserRouter>
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

