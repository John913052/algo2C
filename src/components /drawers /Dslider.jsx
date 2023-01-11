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
import './dslider.css'
// import { useState } from 'react';
import { useRef } from 'react';

import React from 'react'

const Dslider = () => {

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
            <DrawerCloseButton
              width={"50px"}
              height={"40px"}
              bg={"var(--hovertab)"}
              _hover={{ bgColor: "red" }}
              bgColor={"whiteAlpha.600"}
            />
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

            {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
          </DrawerContent>
        </Drawer>

        <Flex height={"40px"} justifyContent={"space-between"}>
          <IconButton
            color={"white"}
            bg={"var(--hovertab)"}
            fontSize={"16px"}
            width={"50px"}
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
          >
            <FiAlignJustify id={"open"}></FiAlignJustify>
          </IconButton>
          <Avatar className="ma"></Avatar>
        </Flex>
      </>
    );
}

export default Dslider