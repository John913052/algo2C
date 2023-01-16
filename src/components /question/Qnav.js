import { color } from '@chakra-ui/react';
// import styled from '@emotion/styled';
import { AppBar,Box ,Toolbar,IconButton,Typography, Container,Menu ,Avatar,Button,Tooltip,MenuItem  } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React from 'react';
import './qnav.css'
import Hovertab from './Hovertab';



const Sappbar=styled(AppBar)`
  background:#021f3a;
  height:100%

`;
const Boxm=styled(Box)`
  justify-content: center;
  align-items: flex-end;
  
`;
const pages = ['Products', 'Content', 'Team','purchase'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




const Qnav = ({title}) => {
  const [anchorElNav, setAnchorElNav] =useState(null);
  const [anchorElUser, setAnchorElUser] =useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
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
            <Boxm sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
              {/* <Button   sx={{ my: 2}} className='qnavbtn'>Products</Button> */}
              <Hovertab title='Products'></Hovertab>
              <Hovertab title='Purchase'></Hovertab>
              <Hovertab title='Team'></Hovertab>
              <Hovertab title='Content'></Hovertab>
            </Boxm>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </Sappbar>
    );
 
}

export default Qnav