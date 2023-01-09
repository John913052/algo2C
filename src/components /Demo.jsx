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

import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack } from '@chakra-ui/react'


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
    <ReflexContainer orientation="vertical" style={{ height: '90vh', marginTop: '20px'}} className='resize'>
  
      <ReflexElement >
  
        <ReflexContainer orientation="horizontal">
  
          <ReflexElement 
            name="appPane">
            <Tabs size='md' variant='enclosed' fontSize={'14px'}>
              <TabList bgColor={'#15314b'} height={40}>
                <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'80px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch({type:'fun1'})} >Prompt</Tab>
                <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'108px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch({type:'fun2'})} >Scratchpad</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state}

                  </Container>
                </TabPanel>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state}

                  </Container>
                </TabPanel>
              </TabPanels>
            </Tabs>
  
          </ReflexElement>
  
          <ReflexSplitter />
  
          <ReflexElement className="bottom-pane">
          <Tabs size='md' variant='enclosed'>
              <TabList bgColor={'#15314b'} height={40} fontSize={'14px'}>
                <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'67px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun5'})} >Test</Tab>
                {/* <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'103px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun6'})} >QuickTest</Tab> */}
                {/* <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'103px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun7'})} >Sandbox</Tab> */}
                {/* <HStack > */}
                  {/* <Button  width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#003dae'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button>  */}
                  {/* <Button  width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button>  */}
                  {/* <Button  width={'93px'} height={'40px'} _hover={{bgColor:'#0046C7'}} bgColor={'#003dae'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button>  */}
                {/* </HStack> */}
                
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state2}

                  </Container>
                </TabPanel>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state2}

                  </Container>
                </TabPanel>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state2}

                  </Container>
                </TabPanel>
              </TabPanels>
            </Tabs>
      
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
            <Tabs size='md' variant='enclosed' fontSize={'14px'}>
              <TabList bgColor={'#15314b'} height={40} justifyContent={'space-between'}>
                <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch3({type:'fun8'})} >YourSolution</Tab>
                <HStack >
                  {/* <Button  width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#003dae'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button>  */}
                  {/* <Button  width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button>  */}
                  <Button  width={'93px'} height={'40px'} _hover={{bgColor:'#0046C7'}} bgColor={'#003dae'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button> 
                </HStack>
                {/* <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'108px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun9'})} >QuickTest</Tab>
                <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'108px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun9'})} >QuickTest</Tab> */}
                {/* <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'108px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun9'})} >Run Code</Tab> */}
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state3}

                  </Container>
                </TabPanel>
                {/* <TabPanel>
                  <Container className='bottom'>
               
                    {state3}

                  </Container>
                </TabPanel> */}
              </TabPanels>
            </Tabs>
  
          </ReflexElement>
  
          <ReflexSplitter />
  
          <ReflexElement className="bottom-pane">
          <Tabs size='md' variant='enclosed' fontSize={'14px'}>
              <TabList bgColor={'#15314b'} height={40}  justifyContent={'space-between'}>
                <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch4({type:'fun9'})} >CustomOutput</Tab>
                {/* <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'108px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun9'})} >QuickTest</Tab>
                <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'108px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch2({type:'fun9'})} >QuickTest</Tab> */}
                {/* <Tab _selected={{ color: 'white', bg: 'var(--compoback)'}} width={'108px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch4({type:'fun10'})} >Raw Output</Tab> */}
                <HStack >
                  {/* <Button  width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#003dae'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button>  */}
                  {/* <Button  width={'131px'} height={'40px'} _hover={{bgColor:'var(--hovertab)'}} bgColor={'#15314b'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Run Code</Button>  */}
                  <Button  width={'114px'} height={'40px'} _hover={{bgColor:'#008529'}} bgColor={'#006C21'} border={'none'} onClick={()=>dispatch3({type:'fun8'})}>Submit Code</Button> 
                </HStack>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state4}

                  </Container>
                </TabPanel>
                <TabPanel>
                  <Container className='bottom'>
                    {/* html or componet */}
                    {/* <Demo></Demo> */}
                    {state4}

                  </Container>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ReflexElement>
  
        </ReflexContainer>
  
      </ReflexElement>
    </ReflexContainer>
  )
}

 

export default Demo;