import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
import './setting.css'
// import { useState } from 'react';
import { useRef } from 'react';
const Settingicon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const [dlinks,setlinks]=useState('JavaScript')
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
            <Box className='boxst'>D&L</Box>
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
            <Box className='boxst2'>Editor Theme</Box>
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
            <Box className='boxst2'>Editor Key Maps</Box>
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
            <Box className='boxst2'>Whiteboard Mode</Box>
            <Box className='boxst'>on off</Box>
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