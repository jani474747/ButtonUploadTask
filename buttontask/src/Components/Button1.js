import './Style.css'
import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




let i;
var data = []
const maxVal = 1024 * 1024 * 5;
const Button3 = () => {

    const [file, setFile] = useState();
    const [selected, setSelected] = useState(false);


    const handleSelect = (e) => {
      
      let filsiz = e.target.files;
      data.push(filsiz)
      // data.map((e)=>console.log(e[0].name))
      // console.log(data)

      for(let i=0;i<5;i++){

      // console.log(filsiz[i].size)

      if(filsiz[i].size < maxVal) {
        setFile(e.target.files)
        const newData = [...data,data]
        setSelected(newData)
        setFile("")
        // console.log(data)
        return false
      }
        else{
          // alert("Please upload a file smaller than 5 MB");
          toast.error('Please Select file less than 5MB!', {
            position: toast.POSITION.TOP_CENTER
          });
          setSelected("")
          // return false;
        }
        // if(filsiz.length > 5){
        //   alert("block reached to max level")
        // }
      }
            
       }

    const deleteHandler = (indexValue) =>{
       const newData = selected.filter((list,index)=> index !== indexValue)
       setSelected(newData)
    }

  return (
    <Grid sx={{
        textAlign: "left",
        ml:10,
        pt: 3,
        mt : 3
      }}>
    <Grid sx={{ mt: 3, }}>
        <Typography variant="h4"> Upload Documents</Typography>
        <Typography variant="p">Upload documnets to verify</Typography>
      </Grid>
      <Grid sx={{ mt: 3, }}>
        <Typography variant="h5">Company Financially</Typography>
        <Typography sx={{width: "50%"}} variant="p">
          last 3 years of company Income Tax Filling / IT assesment by
          government
        </Typography>
      </Grid>
    <Grid className="input-field-cs">
      <input className = "input-btn" type="file"  id="Upload"
      name="upload"
      onChange={handleSelect}
       accept=".pdf"
       multiple="multiple" />
       <button className="main-btn">Upload</button>
      <ToastContainer />
    </Grid>
    <Grid>
    <div>
   <p> {!selected ? "" : selected.map((e,index)=>
     <ul key = {index}>
      <a className = "A-Style" href={e[0].name} download>
        {!e ? "" : e[0].name}
      </a>
      {/* <Icon>+</Icon> */}
      <Grid className='lastbutton' onClick = {()=>deleteHandler(index)}
       item xs={8}>
       <DeleteForeverIcon />
      </Grid>
     </ul>
     )}
     </p> 
    </div>
    </Grid>
  </Grid>
  )
}

export default Button3