import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./Pages.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


let i;
var data = []
const maxVal = 1024 * 1024 * 5;

const Button5 = () => {

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
          toast.error('Please Select file less than 5MB!', {
            position: toast.POSITION.TOP_CENTER
          });
          setSelected("")
        }
        if(filsiz.length > 5){
          alert("block reached to max level")
        }
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
        pb: 5
      }}>
    <Grid sx={{ mt: 3 }}>
      <Typography variant="h5">Infrastructure</Typography>
      <Typography variant="p">
        Office / warehouse lease copy <br/>(1st page where the address and
        lease validity data is mentioned)
      </Typography>
    </Grid>
    <Grid className="input-field-cs">
      <input
      className="input-btn"
       id="Upload"
      name="upload"
      type="file"
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

export default Button5