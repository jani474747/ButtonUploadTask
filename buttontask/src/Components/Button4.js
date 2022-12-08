import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.css";
// import { ToastContainer, toast } from 'react-toastify';
import input from '@mui/material/input';


let i;
var data = []
const Button4 = () => {

    const [file, setFile] = useState();
    const [selected, setSelected] = useState(false);


    const handleSelect = (e) => {
        e.preventDefault();
        data = e.target.value;
        for(i=0;i<data.length;i++){
          setSelected(data)
          
         }
        console.log("-->",data)
  
         if(file !== null){
          setFile(data)
        }else{
          setFile(null);
        }

       }

  return (
    <Grid sx={{
        textAlign: "left",
        ml:5
     }}>
    <Grid sx={{ mt: 3 }}>
      <Typography variant="h5">Current Product Portfolio</Typography>
      <Typography variant="p">
        Principle certification or letter from principle confirm your
        status and mentions certification category
      </Typography>
    </Grid>
    <Grid className="input-field-cs">
      <input
      className="input-btn"
       id="Upload"
      name="upload"
      type="file"
      onChange={handleSelect}
       accept=".pdf" />
       <button className="main-btn">Upload</button>
    </Grid>
  </Grid>
  )
}

export default Button4