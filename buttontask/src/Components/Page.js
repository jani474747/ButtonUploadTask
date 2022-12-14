// import React, { useEffect, useState } from "react";
// import { Grid, Typography } from "@mui/material";
// import "./Pages.css";
// import "bootstrap/dist/css/bootstrap.css";
// // import { ToastContainer, toast } from 'react-toastify';
// import input from '@mui/material/input';

// let i;
// var data = []
// const Page = () => {
//   //const myFile = 0;
//     const [file, setFile] = useState();
//    const [selected, setSelected] = useState(false);

//   const handleSelect = (e) => {
//     e.preventDefault();
//     data = e.target.value;
//     for(i=0;i<data.length;i++){
//       setSelected(data)
//       //  console.log(data)
//      }
//     console.log("-->",data[i])
//      const fileSize = data[i].size / 1024 / 1024
//      if(fileSize.size > 2){
//       alert("file is too large")
//      }
//      else{

//      if(file !== null){
//       setFile(data)
//     }else{
//       setFile(null);
//     }
  
//      }
//    }
    
//   return (

   
//     <Grid
//       sx={{
//         width: "50%",
//         height: "auto",
//         border: "1px solid black",
//         textAlign: "left",
//       }}
//     >
//       <Grid>
//         <Grid sx={{ mt: 3, ml: 5 }}>
//           <Typography variant="h4"> Upload Documents</Typography>
//           <Typography variant="p">Upload documnets to verify</Typography>
//         </Grid>
//         <Grid sx={{ mt: 3, ml: 5 }}>
//           <Typography variant="h5">Company Financially</Typography>
//           <Typography variant="p">
//             last 3 years of company Income Tax Filling / IT assesment by
//             government
//           </Typography>
//         </Grid>
//         <Grid sx={{ mt: 3, ml: 5,}}>
//           <input
//           sx={{background: "green", color: "white" }}
//             id="Upload"
//             name="upload"
//             type="file"
//             max-size={40000000}
//             onChange={handleSelect}
//              accept=".pdf"
           
//           />
//         </Grid>
      
//       </Grid>

//       <Grid sx={{ ml: 5 }}>
//         <Grid sx={{ mt: 3 }}>
//           <Grid sx={{ mt: 3 }}>
//             <Typography variant="h5">
//               Current partner / Channel Network
//             </Typography>
//             <Typography variant="p">ERP report on channel billing</Typography>
//           </Grid>
//           <Grid sx={{ mt: 3 }}>
//             <input type="file"  id="Upload"
//             name="upload"
//             onChange={handleSelect}
//              accept=".pdf"  />
            
//           </Grid>
//         </Grid>

//         <Grid sx={{ mt: 3 }}>
//           <Grid sx={{ mt: 3 }}>
//             <Typography variant="h5">Team Structure</Typography>
//             <Typography variant="p">Payroll info on employees</Typography>
//           </Grid>
//           <Grid sx={{ mt: 3 }}>
//             <input type="file"  id="Upload"
//             name="upload"
//             onChange={handleSelect}
//              accept=".pdf" />
//           </Grid>
//         </Grid>

//         <Grid sx={{ mt: 3 }}>
//           <Grid sx={{ mt: 3 }}>
//             <Typography variant="h5">Current Product Portfolio</Typography>
//             <Typography variant="p">
//               Principle certification or letter from principle confirm your
//               status and mentions certification category
//             </Typography>
//           </Grid>
//           <Grid sx={{ mt: 3 }}>
//             <input  id="Upload"
//             name="upload"
//             type="file"
//             onChange={handleSelect}
//              accept=".pdf" />
//           </Grid>
//         </Grid>

//         <Grid sx={{ mt: 3 }}>
//           <Grid sx={{ mt: 3 }}>
//             <Typography variant="h5">Infrastructure</Typography>
//             <Typography variant="p">
//               Office / warehouse lease copy (1st page where the address and
//               lease validity data is mentioned)
//             </Typography>
//           </Grid>
//           <Grid sx={{ mt: 3 }}>
//             <input id="Upload"
//             name="upload"
//             type="file"
//             onChange={handleSelect}
//              accept=".pdf" />
//           </Grid>
//         </Grid>
//       </Grid>
//       {/* <ToastContainer /> */}
//     </Grid>
              
//   );
// };

// export default Page;
