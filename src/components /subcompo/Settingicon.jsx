import React, { useReducer, useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsMoon,BsSun} from 'react-icons/bs';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Flex,
  IconButton,
  Avatar,
  SimpleGrid,
  VStack,
  GridItem,
  Text,
  HStack,
  Stack,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react'


import { FiAlignJustify } from "react-icons/fi";
import { useDisclosure } from '@chakra-ui/react';
import './setting.css';
// import  from '../reducers /Btnc';
import {btntheme,Font1,editorthem,editorkey,btnonff}from '../reducers /Btnc';
// import { useState } from 'react';
import { useRef } from 'react';
const Settingicon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [dlinks,setlinks]=useState('JavaScript')
  // const [font1,setfont2]=useState('1x')
  const initial='#15314b'
  const initialc='#15314b'
  const inifont='0.8'
  const inieditor='Monokai'
  const inieditorkey='Sublime'
  const [changecolor,dispatch]=useReducer(btntheme,initial);
  const [offcolor,dispatchc]=useReducer(btnonff,initialc);
  // const [changecolor1,dispatch1]=useReducer(btntheme1,initial);
  const [font1,dispatchf]=useReducer(Font1,inifont);
  const [editor,dispatche]=useReducer(editorthem,inieditor);
  const [editorkey1,dispatchkey]=useReducer(editorkey,inieditorkey);


  return (
    <>


      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}


      >
        <DrawerOverlay />
        <DrawerContent bgColor={'var(--blueback)'} className='maingrid' >
          <DrawerCloseButton _hover={{ bgColor: "red" }} width={'55px'} height={'40px'} bgColor={'var(--blueback)'} ml={'-20px'} />
          <DrawerHeader mt={'20px'} mb={'20px'}>
            <Heading as='h3' fontWeight={'400'} lineHeight={'1.3'}
              fontSize={'18px'}>Workspace Setting</Heading>
          </DrawerHeader>


          <SimpleGrid columns={2} spacingX='20px' spacingY='20px' textAlign={'center'} justifyContent={'center'}>
            <Box className='boxst2'>Theme</Box>
            <Box className='boxst4'>
            <Button leftIcon={<BsMoon />} bgColor={changecolor} colorScheme='teal' variant='solid' className='boxst3'onClick={()=>dispatch({type:'dark'})}>
                Dark
              </Button>
            <Button leftIcon={<BsSun />}  bgColor={changecolor} colorScheme='teal' variant='solid' className='boxst3'onClick={()=>dispatch({type:'sun'})}>
                Light
              </Button>


            </Box>
            <Box className='boxst2'>Layout</Box>
            <Box className='boxst'>
            <NavDropdown title={dlinks} id="basic-nav-dropdown" className='settinglink'>
                
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
            </Box>
            <Box className='boxst2'>Font Size</Box>
            <Box className='boxst'>
            <NavDropdown title={font1} id="basic-nav-dropdown" className='settinglink'>
                
                <NavDropdown.Item href="#action/3.2" className='droplink' onClick={()=>dispatchf({type:'0.8x'})}>
                  0.8x
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchf({type:'0.9x'})}>
                  0.9x
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchf({type:'1x'})}>
                  1x
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchf({type:'1.1x'})}>
                  1.1x
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchf({type:'1.2x'})}>
                  1.2x
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchf({type:'1.3x'})}>
                  1.3x
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchf({type:'1.4'})}>
                  1.4x
                </NavDropdown.Item>
              </NavDropdown>
            </Box>
            <Box className='boxst2'>Editor Theme</Box>
            <Box className='boxst'>
            <NavDropdown title={editor} id="basic-nav-dropdown" className='settinglink'>
                
                <NavDropdown.Item href="#action/3.2" className='droplink' onClick={()=>dispatche({type:'Monokai'})}>

                  Monokai
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatche({type:'One Dark'})}>
                  One Dark
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatche({type:'Material'})}>
                  Material
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatche({type:'Dracula'})}>
                  Dracula
                </NavDropdown.Item>
              </NavDropdown>
            </Box>
            <Box className='boxst2'>Editor Key Maps</Box>
            <Box className='boxst'>
            <NavDropdown title={editorkey1} id="basic-nav-dropdown" className='settinglink'>
                
                <NavDropdown.Item href="#action/3.2" className='droplink' onClick={()=>dispatchkey({type:'Sublime'})}>

                  Sublime
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchkey({type:'Vim'})}>
                  Vim
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className='droplink' onClick={()=>dispatchkey({type:'Emacs'})}>
                  Emacs
                </NavDropdown.Item>
              </NavDropdown>
            </Box>
            <Box className='boxst2'>Whiteboard Mode</Box>
            <Box className='boxst4'>
              <Button bgColor={offcolor} colorScheme='teal' variant='solid' className='boxst3' onClick={()=>dispatchc({type:"on"})}>
                  On
                </Button>
              <Button  bgColor={offcolor} colorScheme='teal' variant='solid' className='boxst3' onClick={()=>dispatchc({type:"off"})}>
                  Off
                </Button>
            </Box>
          </SimpleGrid>

        </DrawerContent>
      </Drawer>
      <Box className='link6 setflex' ref={btnRef} onClick={onOpen}>

        <i className="fa-solid fa-gear"></i>
      </Box>

    </>
  )
}

export default Settingicon