import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
// import "./Pages.css";
import "bootstrap/dist/css/bootstrap.css";
// import { ToastContainer, toast } from 'react-toastify';
// import input from '@mui/material/input';
import './Style.css'


let i;
let data;
let initialFileSize = 0;
const maxVal = 1024 * 1024 * 5;
let filename ;

const Button1 = () => {

    const [file, setFile] = useState();
    const [selected, setSelected] = useState();
    // const [size,setSize] = (true)


    const handleSelect = (e) => {
     
    // let filename = e.target.files[0].name
    let filsiz = e.target.files[0];
    var filename = filsiz.name
    // console.log(filename)
    if (filsiz && !filename) {
      for(let i=0;i<filename.length;i++){
       if(e.target.files.length > 0){
        console.log(filename)
        // setFile(filename)
      }else{
        // setFile(null)
        console.log("no file")
      }
     }
    }
    if (filsiz.size > maxVal) {
      alert("Please upload a file smaller than 5 MB");
      return false;
    }
            

    // filename = e.target.files[0].name;
    //     for(let i=0;i<filename.length;i++){

    //     if (e.target.files.length > 0) {
    //        console.log(filename)
    //        setFile(filename)
    //      }else{
    //       setFile(null)
    //      }
    //   }


    
    }
    // console.log(file)

    // const handleSubmit = (e) =>{
        
    //      console.log(file)
    // }

  return (
    <Grid sx={{
        textAlign: "left",
      }}>
    <Grid sx={{ mt: 3, ml: 5 }}>
      <Typography variant="h4"> Upload Documents</Typography>
      <Typography variant="p">Upload documnets to verify</Typography>
    </Grid>
    <Grid sx={{ mt: 3, ml: 5 }}>
      <Typography variant="h5">Company Financially</Typography>
      <Typography variant="p">
        last 3 years of company Income Tax Filling / IT assesment by
        government
      </Typography>
    </Grid>
    <Grid 
     sx={{ml: 5,}}
    className="input-field-cs"
    // onSubmit = {handleSubmit}
    >
      <input
      className="input-btn"
      sx={{background: "green", color: "white" }}
        id="Upload"
        name="upload"
        type="file"
        // value={file || ""}
        onChange={handleSelect}
         accept="application/pdf"
         multiple="multiple"
      />
      <button className="main-btn">Upload</button>
    </Grid>
    <Grid>
    {/* {!file ? "" : file.map((item)=>(
      <div>
        <li>{item.name}</li>
        <li>{item.size}</li>
      </div>
    )) } */}
    </Grid>
    
  </Grid>
  )
}

export default Button1