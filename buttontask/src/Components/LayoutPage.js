import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4'
import Button5 from './Button5'
import { Grid } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LayoutPage = () => {
  return (
    <Grid sx = {{ width: "50%", margin: "auto",
    height: "auto",
    // border: "1px solid tra",
    boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"}} >
    <Button1 />
    <Button2 />
    <Button3 />
    <Button4 />
    <Button5 />
    </Grid>
  )
}

export default LayoutPage