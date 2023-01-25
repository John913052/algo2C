import React from 'react'
import { Typography,Button,SimpleDialog, TextField } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';
import './loginpage.css'
const Loginpage = ({open,setopen}) => {
    const handleClose=()=>{
        setopen(false)
    }
    return (
       
          <Dialog 
            open={open}
            onClose={handleClose}>
            <Box sx={{width:'350px',display:'flex',justifyContent:'center'}}>
                <Box sx={{width:'300px',padding:"20px"}}>
                    <TextField id="standard-basic" label="Enter your First name" variant="standard" name='FirstName' value=''/>
                    <TextField id="standard-basic" label="Enter your last name" variant="standard" name='LastName' value=''/>
                    <TextField id="standard-basic" label="Enter your User name" variant="standard" name='UserName' value=''/>
                    <TextField id="standard-basic" label="Enter your Email" variant="standard" name='Email' value=''/>
                    <TextField id="standard-basic" label="Enter your password" variant="standard" name='Password' value=''/>
                    <Button variant="contained">Signup</Button>
                    <Typography> Already Have a Account <Typography variant= 'span' sx={{color:'blue'}}>Login</Typography>
                    </Typography>
                </Box>
            </Box>
        </Dialog>

      );
}

export default Loginpage