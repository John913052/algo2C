import React from 'react'
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
    Stack
} from '@chakra-ui/react'
import { FiAlignJustify} from "react-icons/fi";
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
      <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Create your account</DrawerHeader>

        <DrawerBody>
          <SimpleGrid
            column={2}
            columnGap={3}
            rowGap={2}
          >
            <VStack>
              <HStack >
                <Flex justifyContent={'space-between'} alignContent={'space-between'}>

                  <GridItem colSpan={1}>
                    <Text>first col</Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Text>first col</Text>
                  </GridItem>
                </Flex>
              </HStack>
            </VStack>
          </SimpleGrid>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
          <div className='link6 setflex' ref={btnRef} onClick={onOpen}>
            
              <i className="fa-solid fa-gear"></i>
          </div>
    {/* <Nav.Link href="#link"  > </Nav.Link> */}

  </>
  )
}

export default Settingicon