import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.css";
// import { ToastContainer, toast } from 'react-toastify';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from 'sweetalert';

var data = [];
const maxVal = 1024 * 1024 * 5;
const maxLen = 5;
const Button1 = () => {
  const [file, setFile] = useState();
  const [selected, setSelected] = useState(false);
  const [click, setClick] = useState("");
// const [isdisabled, setIsDisabled] = useState(false)

 
  const handleSelect = (e) => {
    let filsiz = e.target.files;   // targeting the file which is selected
    console.log(filsiz)
    
  if(!filsiz.length <= 0){   // if file length is greater than 0 the pushing filsiz into data an empty array like (data = [])
    data.push(filsiz);
  }
 
      if (filsiz[0]?.size > maxVal) {
        // toast.error("Please Select file less than 5MB!", {   // filsiz[0] means array of object 0 array is filsiz and in object 0 the firs value stores
        //   position: toast.POSITION.TOP_CENTER,
        // });
        // alert("Please Select file less than 5MB!")
        swal( "Oops" ,  "Please Select file less than 5MB!" ,  "error" )
         data.pop()
   
      }else if(data.length >= maxLen && filsiz[0]?.size > maxVal){  // if both greater than maxlength 5 and maxValue = 5MB it should show only the toster given below 
        console.log(data.length)
        // toast.error("Reached Max limit & Size should be less than 5MB", {
        //   position: toast.POSITION.TOP_CENTER,
        // });
        // alert("Reached Max limit & Size should be less than 5MB")
        data.splice(5,1)
        setSelected([...data])
      } else if(filsiz[0]?.size < maxVal){ // if size is less than 5MB it should add there in UI
        setFile(e.target.files);
        setSelected([...data]);
        if (data.length >= maxLen) {   // if reaches to max size show error
          // toast.error("Reached Max Limit!", {
          //   position: toast.POSITION.TOP_CENTER,
          // });
          // alert("Reached Max Limit!")
          swal( "Oops" ,  "Reached Max Limit!" ,  "error" )
          data.splice(5,1)  // remove last selected one after 5th
          setSelected([...data]) // add data
      }
     
    }
  // };
}

const deleteHandler = (indexValue) => {
  data.splice(indexValue,1)
  setSelected([...data]);
};

const handledownload = (e) => {
   let download = e.target.data
  console.log("data-->", download);
  setClick(download);
};

  return (
    <Grid
      sx={{
        textAlign: "left",
        ml: 10,
      }}
    >
      <Grid sx={{ mt: 3 }}>
        <Typography variant="h5">Company Financially</Typography>
        <Typography sx={{ width: "50%" }} variant="p">
          last 3 years of company Income Tax Filling / IT assesment by
          government
        </Typography>
      </Grid>
      <Grid className="input-field-cs">
        <input
          className="input-btn"
          type="file"
          id="Upload"
          name="upload"
          onChange={handleSelect}
          accept=".pdf"
          multiple="multiple"
        />
        <button className="main-btn">Upload</button>
        <ToastContainer />
      </Grid>
      <Grid>
        <div>
          <p>
            {" "}
            {!selected
              ? null
              : selected.map((e, index) => (
                  <ul key={index}>
                    <a
                      className="A-Style"
                      value={click}
                      // href = "/url"
                      onClick={handledownload}
                      // download
                      href={e[0].name}
                      download
                    >
                      {!e ? null : e[0].name}
                    </a>
                    {/* <Icon>+</Icon> */}
                    <Grid
                      sx={{ml : 5, size : "10px"}}
                      className="lastbutton"
                      onClick={() => deleteHandler(index)}
                      item
                      xs={8}
                    >
                      <DeleteForeverIcon />
                    </Grid>
                  </ul>
                ))}
          </p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Button1;
