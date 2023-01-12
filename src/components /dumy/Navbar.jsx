import { Box, Heading, HStack, IconButton, Stack } from '@chakra-ui/react'
import React from 'react';
import { FiChevronDown } from "react-icons/fi";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex
} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Stack height={'40px'}
      display={'flex'}
      justifyContent={'space-between'}
      direction={'row'}
      width={'full'}
      spacing='24px'
      border={'1px solid red'}
      lineHeight={'23px'}
      zIndex={'9999'}
    >

      <Box>
        <Heading>HiCounselor</Heading>
        <IconButton><FiChevronDown /></IconButton>
        <IconButton><FiChevronDown /></IconButton>
        {/* <Menu bg={'red'} >
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
        <IconButton>Sample</IconButton>
        <IconButton>Sample</IconButton> */}
      </Box>

      <Box>
        <IconButton><FiChevronDown /></IconButton>
        <IconButton><FiChevronDown /></IconButton>
      </Box>
    </Stack>
  )
}

export default Navbar