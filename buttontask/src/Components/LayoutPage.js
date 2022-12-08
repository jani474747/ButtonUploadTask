import React from 'react'
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4'
import Button5 from './Button5'
import { Grid } from '@mui/material'

const LayoutPage = () => {
  return (
    <Grid sx = {{ width: "50%", margin: "auto",
    height: "auto",
    border: "1px solid black",}} >
    <Button1 />
    <Button2 />
    <Button3 />
    <Button4 />
    <Button5 />
    </Grid>
  )
}

export default LayoutPage