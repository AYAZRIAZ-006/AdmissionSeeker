import axios from "axios"
import { React, useState } from 'react';
import Table from 'react-bootstrap/Table';
import BasicTable from "./table";
import { Box, Button, FormControl, Link, FormHelperText, TextField, Grid, InputLabel, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import dotenv from "dotenv"



// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

// console.log(process.env.CONDITIONAL_DEP_URL);
function MiddleSection() {
  const [department, setDepartment] = useState('');
  const [level, setlevel] = useState('');
  var [deciplineType, setDeciplineType] = useState('');
  const [applyMerit, setapplyMerit] = useState('');
  const [result, setResults] = useState([]);
  const [resultAll, setAllResults] = useState([]);

  let data = [];
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    // if (applyMerit < 1 || applyMerit >100 ) {
    //   setResults("Merit can not be less then 1 and greater than 100");
    //   setResults("Merit can not be less then 1 and greater than 100");
    // }
    data = await axios.post("http://localhost:5000/api/v1/Department/ConditionalShow", {
      dep_Name: department,
      deciplineType:"Engineering",
      applyMerit,
      level,
    })
    console.log("data", data);
    if (data.data.status === 200) {
      // console.log("done", data.data.results);
      setResults(data.data.results.a);
      setAllResults(data.data.results.b);
    } else {
      setResults({
        dep_Name: "not found",
        deciplineType: "not found",
        applyMerit: "not found",
        level: "not found",
      })
    }
    console.log("resu", result);
    // make an API call to get results based on selected options
    // update the state with the fetched results
    // setResults(resultsFromApi);
  };

  // const classes = useStyles();
  return (
    <div style={{ background: "white", padding: "10px 20px", height:"90%" }}>
    <div>
      <h1>Well Come to Admission Seeker</h1>
      <h6>if you select <strong>Master, PHD or M-phil</strong>Enter your CGPA</h6>
      {/* <p><strong>
      Welcome to our innovative website designed to simplify the process of applying to universities.
       Our platform provides a smart algorithm that matches students with universities based on their academic qualifications,
        making it easier than ever to find the right institution to continue your education. In addition,
         universities can register on our website and manage their departments, admission requirements, 
         and other details, making it a one-stop-shop for both students and institutions.
          Join us today and take the first step towards your academic success!
      </strong>
      </p> */}
    </div>
      <Box sx={{
        // width: 300,
        // height: 300,
        padding: "20px 0px",
        backgroundColor: 'white',
        
        // '&:hover': {
        //   backgroundColor: 'white',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        >
          {/* <Grid item xs={12} sm={6} md={2.5} lg={2.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true} size="small">
              <InputLabel required id="demo-simple-select-helper-label">Discipline type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={deciplineType}
                label="Discipline type"
                onChange={(e) => setDeciplineType(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Type</em>
                </MenuItem>
                <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                <MenuItem value={"Engineering"}>Engineering</MenuItem>
                <MenuItem value={"Medical Science"}>Medical Science</MenuItem>
                <MenuItem value={"Computer Science & IT"}>Computer Science & IT </MenuItem>
                <MenuItem value={"Social Science"}>Social Science</MenuItem>
                <MenuItem value={"Power Engineering"}>Power Engineering</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={12} sm={6} md={2.5} lg={2.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true} size="small">
              <InputLabel required id="demo-simple-select-helper-label">level</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={level}
                label="Level"
                onChange={(e) => setlevel(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select level</em>
                </MenuItem>
                <MenuItem value={"bachelor"}>Bachelor</MenuItem>
                <MenuItem value={"master"}>Master</MenuItem>
                <MenuItem value={"phd"}>PHD</MenuItem>
                <MenuItem value={"mphil"}>M Phil</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5} lg={2.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true} size="small">
              <InputLabel required id="demo-simple-select-helper-label">Cources</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={department}
                label="Cources"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Type</em>
                </MenuItem>
                <MenuItem value={"computer science"}>Computer Science</MenuItem>
                <MenuItem value={"Electrical Engineering"}>Electrical Engineering</MenuItem>
                <MenuItem value={"Medical Science"}>Medical Science</MenuItem>
                <MenuItem value={"Computer Science & IT"}>Computer Science & IT </MenuItem>
                <MenuItem value={"Civil Engineering"}>Civil Engineering</MenuItem>
                <MenuItem value={"BBA"}>BBA</MenuItem>
                <MenuItem value={"Mechanical Engineering"}>Mechanical Engineering</MenuItem>
                <MenuItem value={"Environmental Sciences"}>Environmental Sciences</MenuItem>
                <MenuItem value={"Chemistry"}>Chemistry</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2.5} lg={2.5}>
            <TextField
            size="small"
            sx={{ m: 1, minWidth: 120 }} 
            fullWidth={true}
              required
              id="outlined-required"
              label="Merit"
              Value={applyMerit}
              onChange={(e) => setapplyMerit(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} style={{ justifyContent: 'left', display: "flex", alignItems: "center" }}>
            <div className="submitBtn">
              <Button type='submit' color='primary' onClick={handleSubmit} variant="contained" size={"medium"}>Submit</Button>
            </div>
          </Grid>
        </Grid>
      </Box>

      <div style={{ width: "70%" }}>
        {/* <BasicTable dep_Name={"department Name"} _id={"_id"} applyMerit={"applyMerit"} universityId={"universityId"} /> */}
        <TableContainer component={Paper} size="small" width={"50%"}>
          <Table className={"table"} aria-label="simple table" size={"small"} stickyHeader={true} >
            <TableHead>
              <TableRow>
                <TableCell>University</TableCell>
                <TableCell align="right">department</TableCell>
                <TableCell align="right">applyMerit</TableCell>
                <TableCell align="right">Level</TableCell>
                <TableCell align="right">closingDate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <Link href={row.universityId.website} target="_blank" rel="noopener">
                      {row.universityId.universityName} </Link>
                  </TableCell>
                  <TableCell align="right">{row.dep_Name}</TableCell>
                  <TableCell align="right">{row.applyMerit}</TableCell>
                  <TableCell align="right">{row.level}</TableCell>
                  <TableCell align="right">{row.closingDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <h6>here is all universities where you can apply on other departments</h6>
            <TableBody>
              {resultAll.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <Link href={row.universityId.website} target="_blank" rel="noopener">
                      {row.universityId.universityName} </Link>
                  </TableCell>
                  <TableCell align="right">{row.dep_Name}</TableCell>
                  <TableCell align="right">{row.applyMerit}</TableCell>
                  <TableCell align="right">{row.level}</TableCell>
                  <TableCell align="right">{row.closingDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* {result.map((element) => {
          const { dep_Name, applyMerit, universityId, _id } = element;
          return <div key={_id} >
            <BasicTable dep_Name={dep_Name} _id={_id} applyMerit={applyMerit} universityId={universityId} />
          </div>
        })} */}
      </div>

    </div>
  );
}

export default MiddleSection;
