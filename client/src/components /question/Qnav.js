
// import styled from '@emotion/styled';
import { AppBar,Box ,Toolbar,IconButton,Typography, Container,Menu ,Avatar,Button,Tooltip,MenuItem  } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import './qnav.css'
import Hovertab from './Hovertab';

import Loginpage from '../logindata/Loginpage';
import { useSelector } from 'react-redux';



const Sappbar=styled(AppBar)`
  background:#021f3a;


`;
const Boxm=styled(Box)`
  justify-content: center;
  align-items: flex-end;
  
`;

const Qnav = ({title}) => {

  const [open,setopen]=useState(false)
  // const [showname,setname]=useState(false)
  const authlogin=useSelector((state)=>state.Authlogin)

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
              <Hovertab title={'Products'} >{title}</Hovertab>
              <Hovertab title={'Purchase' }>{title}</Hovertab>
              <Button   sx={{ my: 2,color:"white"}} className='qnavbtn'>Team</Button>
              <Button   sx={{ my: 2,color:"white"}} className='qnavbtn'>Content</Button>
            </Boxm>
            
            {/* nav list tab */}
            
            <Box sx={{ flexGrow: 0,display:"flex",justifyContent:"space-between",alignItems:"center",margin:'10px 5px'}}>
              <Tooltip title="Open Profile">
                <IconButton  sx={{ p: 0 ,backgroundColor:'blue'}}  >
                  <Avatar  alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'blue'}}/>
                </IconButton>
              </Tooltip>
            </Box>
            {/* logintoggle for showing your details */}

            {
              authlogin === true ?
                <Box >
                  <Typography sx={{ color: "white", marginLeft: "10px" }}>Hi sandy</Typography>
                </Box>
                :
                <Box sx={{ color: "blue", marginLeft: "20px" }} onClick={() => handelopen()}>
                  <Button>Login</Button>
                </Box>
            }


          </Toolbar>
        </Container>
        <Loginpage open={open} setopen={setopen}></Loginpage>
      </Sappbar>
    );
 
}

export default Qnav