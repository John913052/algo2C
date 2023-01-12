import React from 'react';
import { FiChevronDown } from "react-icons/fi";
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
  return (
    <>


      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}


      >
        <DrawerOverlay />
        <DrawerContent bgColor={'var(--blueback)'} >
          <DrawerCloseButton _hover={{ bgColor: "red" }} width={'55px'} height={'40px'} bgColor={'var(--blueback)'} ml={'-20px'} />
          <DrawerHeader mt={'20px'} mb={'20px'}>
            <Heading as='h3' fontWeight={'400'} lineHeight={'1.3'}
              fontSize={'18px'}>Workspace Setting</Heading>
          </DrawerHeader>

          <DrawerBody>
            <SimpleGrid columns={2} spacingX='50px' spacingY='20px'>
              <Box bg='tomato' height='50px' width={'200px'}><Heading as={'h4'}>Theme</Heading></Box>
              <Box bg='tomato' height='50px' width={'200px'}>Theme</Box>
              
              <Box bg='tomato' height='50px' width={'200px'}>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                      <MenuItem>Mark as Draft</MenuItem>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                  </Menu>
              </Box>
              <Box bg='tomato' height='50px' width={'200px'}></Box>
              <Box bg='tomato' height='50px' width={'200px'}></Box>
              <Box bg='tomato' height='50px' width={'200px'}></Box>
              <Box bg='tomato' height='50px' width={'200px'}></Box>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box className='link6 setflex' ref={btnRef} onClick={onOpen}>

        <i className="fa-solid fa-gear"></i>
      </Box>

    </>
  )
}

export default Settingicon