import { Container } from '@mui/material'
import React from 'react'
import Details from './Details'

import Qnav from './Qnav'


const Question = () => {
  return (
    <Container>
        <Qnav></Qnav>
        <Details></Details>
    
    </Container>
  )
}

export default Question