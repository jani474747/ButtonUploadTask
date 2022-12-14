import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.css";
// import { ToastContainer, toast } from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





var data = []
const maxVal = 1024 * 1024 * 5;
const maxLen = 5;
const Button2 = () => {
  
    const [file, setFile] = useState();
    const [selected, setSelected] = useState(false);
    const [click, setClick] = useState("");
  // const [isdisabled, setIsDisabled] = useState(false)

   
    const handleSelect = (e) => {
      let filsiz = e.target.files;
      console.log(filsiz)
      
    if(!filsiz.length <= 0){
      data.push(filsiz);
    }
  
      for (let i = 0; i < data.length; i++) {
        // console.log(filsiz[i].size)
  
        if (filsiz[i]?.size > maxVal) {
          toast.error("Please Select file less than 5MB!", {
            position: toast.POSITION.TOP_CENTER,
          });
           data.pop()
     
        } else {
          setFile(e.target.files);
          setSelected([...data]);
          if (data.length >= maxLen) {
            toast.error("Reached Max Limit!", {
              position: toast.POSITION.TOP_CENTER,
            });
            // data.pop()
            data.splice(5,1)
            setSelected([...data])
            break;
        }else{
          continue;
        }
       
      }
    };
  }

  const deleteHandler = (indexValue) => {
    // const newData = selected.filter((list, index) => index !== indexValue);
    data.splice(indexValue,1)
    // console.log(newData)
    setSelected([...data]);
    // setIsDisabled(true)
  };

  const handledownload = (e) => {
    const download = selected(e.target.value);
    console.log("data-->", download);
    setClick(download);
  };


  return (
    <Grid sx={{
        textAlign: "left",
        ml:10
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
       accept=".pdf"
       multiple="multiple" 
      //  disabled = {isdisabled}
       />
       <button className="main-btn">Upload
       </button>
       <ToastContainer />
    </Grid>
    <Grid>
    <div>
   <p> {!selected ? "" : selected.map((e,index)=>
     <ul key = {index}>
      <a className = "A-Style" href={e[0]?.name}
      onClick={handledownload}
      download>
        {!e ? "" : e[0]?.name}
      </a>
      {/* <Icon>+</Icon> */}
      <Grid sx={{ml : 5, size : "10px"}} className='lastbutton' onClick = {()=>deleteHandler(index)}
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

export default Button2