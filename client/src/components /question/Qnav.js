import { border, color } from '@chakra-ui/react';
// import styled from '@emotion/styled';
import { AppBar,Box ,Toolbar,IconButton,Typography, Container,Menu ,Avatar,Button,Tooltip,MenuItem  } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import './qnav.css'
import Hovertab from './Hovertab';
import { Circle } from '@mui/icons-material';
import { textAlign } from '@mui/system';
import Loginpage from '../logindata/Loginpage';


const Sappbar=styled(AppBar)`
  background:#021f3a;


`;
const Boxm=styled(Box)`
  justify-content: center;
  align-items: flex-end;
  
`;

const Qnav = ({title}) => {

  const [open,setopen]=useState(false)

  const handelopen=()=>{
    setopen(true)
  }
    return (
      <Sappbar position="static" sx={{backgroundColor:'#021f3a',boxShadow:"none"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily:'Open-San',
                fontWeight: 700,
                fontSize:'34px',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HiCounSelor
            </Typography>

            {/* nav list tab */}

            <Boxm sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              {/* <Button   sx={{ my: 2}} className='qnavbtn'>Products</Button> */}
              <Hovertab title='Products'></Hovertab>
              <Hovertab title='Purchase'></Hovertab>
              <Button   sx={{ my: 2}} className='qnavbtn'>Team</Button>
              <Button   sx={{ my: 2}} className='qnavbtn'>Content</Button>
            </Boxm>
            
            {/* nav list tab */}
            
            <Box sx={{ flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton  sx={{ p: 0 ,backgroundColor:'blue'}} onClick={()=>handelopen()} >
                  <Avatar  alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'blue'}}/>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
        <Loginpage open={open} setopen={setopen}></Loginpage>
      </Sappbar>
    );
 
}

export default Qnav