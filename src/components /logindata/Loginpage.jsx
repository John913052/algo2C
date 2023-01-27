import React from 'react'
import { Typography,Button,SimpleDialog, TextField } from '@mui/material';
// import styled from "styled-components";
import styled from '@emotion/styled';
// import styled from '@emotion/styled';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import './loginpage.css'
import { useState } from 'react';
import { authenticateSignup } from '../../services /api';

const Loginbox=styled(Box)`
    color:red;
    // background-color:red;
    height:auto;
    width:600px;
`
const Imgwarper=styled(Box)`
    background: #626ee3;
    width:250px;
    paddling:0px 10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Loginboxwarpper=styled(Box)`


    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:25px 35px;
    width:350px;
    height:100%;

`

const obj={
    FirstName:'',
    LastName:'',
    UserName:'',
    Email:"",
    Password:''

}
const Loginpage = ({open,setopen}) => {
    //send open and setopen as prop for dialog for handling login button onclick
    const [input, setinput] = useState(obj)

    const inpubox=(e)=>{
        setinput({
            ...input,[e.target.name]:e.target.value
        })
    }

    // importing authentication from service's 
    const handelinput=async(input)=>{
        let response =await authenticateSignup(input);
        console.log(response)
    }

    const handleClose=()=>{
        setopen(false)
    }
    return (
       
          <Dialog 
            open={open}
            onClose={handleClose}>
    
            <Loginbox>
                <Box sx={{display:'flex',height:'80%'}}>

                    <Imgwarper>
                        
                        <Typography variant='h6' sx={{color:'black',padding:'0px 10px',marginBottom:'30px'}}>Hi-Counselor <Typography variant= 'span' sx={{color:'white'}}>Editor</Typography></Typography>
                        <Typography variant='h6' sx={{padding:'0px 10px',fontSize:'15px',color:'white',backgroundColor:'skyblue'}}><marquee>Welcome To The Coding World</marquee></Typography>
                    </Imgwarper>
                    <Loginboxwarpper >
                        <Typography variant='h5' sx={{color:'black'}}>Sign-Up</Typography>
                        <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your First name" variant="standard" name='FirstName'/>
                        <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your last name" variant="standard" name='LastName'/>
                        <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your User name" variant="standard" name='UserName'/>
                        <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your Email" variant="standard" name='Email'/>
                        <TextField onChange={(e)=> inpubox(e)} style={{width: '100%',margin:'6px 0px'}} label="Enter your password" variant="standard" name='Password'/>
                        <Button variant="outlined" type='button' onClick={()=>handelinput()}  sx={{color:'red',margin:'20px 0px',width:'100%'}}>Signup</Button>
                        <Typography> Already Have a Account <Typography variant= 'span' sx={{color:'blue'}}>Login</Typography>
                        </Typography>
                    </Loginboxwarpper>
                </Box>
            </Loginbox>
        </Dialog>

      );
}

export default Loginpage