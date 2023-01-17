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



const Sappbar=styled(AppBar)`
  background:#021f3a;


`;
const Boxm=styled(Box)`
  justify-content: center;
  align-items: flex-end;
  
`;

const Qnav = ({title}) => {

  const [anchorElUser, setAnchorElUser] =useState(null);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
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
                <IconButton onMouseEnter={handleOpenUserMenu} sx={{ p: 0 ,backgroundColor:'blue'}}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'blue'}}/>
                </IconButton>
              </Tooltip>
              <Menu className='menuitem'
                sx={{ mt: '45px',border:'1px solid red'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
               
              {/* profile tab  */}
                <MenuItem  onClick={handleCloseUserMenu} className="menuitemlist">
                  <Box clssName='menuitemlist' sx={{width:"290px"}}>
                    <Box>
                      <Typography>Welcome, Sandeep!</Typography>
                      <Typography>You're on a Google account.</Typography>
                    </Box>
                    <Box sx={{
                        width:"250px",
                        display:'flex',
                        flexWrap:'wrap',
                        justifyContent:'space-evenly',
                        alignItems:'center',
                        border:"1px solid red",
                        marginTop:"20px",
                        flexDirection:"column"
          
                      }}>
                        <Typography>Products servies</Typography>
                      <Box sx={{
                        display:'flex',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor:'red',
                        justifyContent:'center',
                        alignItems:'center',
                        
                      }}>
                        hi
                      </Box>
                      <Box sx={{
                        display:'flex',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor:'red',
                        justifyContent:'center',
                        alignItems:'center'
                      }}>
                        hi
                      </Box>
                      <Box sx={{
                        display:'flex',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor:'red',
                        justifyContent:'center',
                        alignItems:'center'
                      }}>
                        hi
                      </Box>
                      <Box sx={{
                        display:'flex',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor:'red',
                        justifyContent:'center',
                        alignItems:'center'
                      }}>
                        hi
                      </Box>
                      <Box sx={{
                        display:'flex',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor:'red',
                        justifyContent:'center',
                        alignItems:'center'
                      }}>
                        hi
                      </Box>
                   
                    </Box>
                  </Box>
                </MenuItem>
          
             {/* profile tab  */}

              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </Sappbar>
    );
 
}

export default Qnav