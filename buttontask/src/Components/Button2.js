import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.css";
// import { ToastContainer, toast } from 'react-toastify';
import input from '@mui/material/input';


let i;
var data = []
const Button2 = () => {

    const [file, setFile] = useState();
    const [selected, setSelected] = useState(false);


    const handleSelect = (e) => {
        e.preventDefault();
        data = e.target.value;
        for(i=0;i<data.length;i++){
          setSelected(data)
          //  console.log(data)
         }
        console.log("-->",data)
        //  const fileSize = data[i].size / 1024 / 1024
        //  if(fileSize.size > 2){
        //   alert("file is too large")
        //  }
        //  else{
    
         if(file !== null){
          setFile(data)
        }else{
          setFile(null);
        }
      
        //  }
       }

  return (
    <Grid sx={{
        textAlign: "left",
        ml:5
      }}>
    <Grid sx={{ mt: 3 }}>
      <Typography variant="h5">
        Current partner / Channel Network
      </Typography>
      <Typography variant="p">ERP report on channel billing</Typography>
    </Grid>
    <Grid className="input-field-cs">
      <input
      className="input-btn"
      type="file"  id="Upload"
      name="upload"
      onChange={handleSelect}
       accept=".pdf"  />
       <button className="main-btn">Upload
       </button>
      
    </Grid>
  </Grid>
  )
}

export default Button2