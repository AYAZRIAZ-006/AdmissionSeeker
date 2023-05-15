import axios from "axios"
import { React, useState } from 'react';
import Table from 'react-bootstrap/Table';
import BasicTable from "./table";
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Paper, Select, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
  const [deciplineType, setDeciplineType] = useState('');
  const [applyMerit, setapplyMerit] = useState('');
  const [result, setResults] = useState([]);

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let data = [];
  const handleSubmit = async (event) => {
    event.preventDefault();
    data = await axios.post("http://localhost:5000/api/v1/Department/ConditionalShow", {
      dep_Name: department,
      deciplineType: "Computer Science",
      applyMerit,
      level,
    })
    if (data.data.status === 200) {
      // console.log("done", data.data.results);
      setResults(data.data.results);
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
    <div style={{background:"white",padding:"10px 20px"}}>
      {/* <div className="tableForSelect">
        <Table hover style={{ backgroundColor: "lightcyan" }}>
          <thead >
            <tr>
              <td style={{ width: "20%" }}>Discipline type</td>
              <td style={{ width: "20%" }}>level</td>
              <td style={{ width: "20%" }}>Cources</td>
              <td style={{ width: "10%" }}>merit</td>
            </tr>
          </thead>
          <tr>
            <td style={{ width: "20%" }}>
              <select style={{ width: "100%" }} value={deciplineType} onChange={(e) => setDeciplineType(e.target.value)}>
                <option name="Select Type" value="SelectType">Select Type</option>
                <option name="Social Science" value="SocialScience">Social Science</option>
                <option name="Computer Science & IT" value="ComputerScience&IT">Computer Science & IT </option>
                <option name="Computer Science" value="Computer Science">Computer Science </option>
                <option name="Engineering" value="Engineering">Engineering</option>
                <option name="Medical Science" value="MedicalScience">Medical Science</option>
              </select>
            </td>
            <td style={{ width: "20%" }}>
              <select style={{ width: "100%" }} value={level} onChange={(e) => setlevel(e.target.value)}>
                <option name="Select Level" value="SelectLevel">Select Level</option>
                <option name="Bachelor" value="bachelor">Bachelor </option>
                <option name="Master" value="master">Master </option>
                <option name="Phd" value="phd">Phd</option>
                <option name="M Phil" value="mphil">M Phil</option>
              </select>
            </td>
            <td style={{ width: "20%" }}>
              <select style={{ width: "100%" }} value={department} onChange={(e) => setDepartment(e.target.value)}>
                <option name="Select Cources" value="select cources">Select Cources</option>
                <option name="Computer Science" value="computer science">Computer Science </option>
                <option name="Computer Engineering" value="computer engineering">Computer Engineering </option>
                <option name="Mechanical Engineering" value="mechanical engineering">Mechanical Engineering</option>
                <option name="Electrical Engineering" value="electrical engineering">Electrical Engineering</option>

              </select>
            </td>
            <td style={{ width: "10%" }}>
              <input style={{ width: "100%" }} type="number" placeholder="Enter Merit" value={applyMerit} onChange={(e) => setapplyMerit(e.target.value)} />
            </td>
          </tr>
        </Table>
      </div> */}





      <Box sx={{
        // width: 300,
        // height: 300,
        padding:"20px 0px",
        backgroundColor: 'white',
        // '&:hover': {
        //   backgroundColor: 'white',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
          <Grid item xs={12} sm={6} md={2.5} lg={2.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true} size="small">
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}  md={2.5} lg={2.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true} size="small">
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}  md={2.5} lg={2.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true} size="small">
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}  md={2.5} lg={2.5}>
            <FormControl sx={{ m: 1, minWidth: 120 }}  p={0} size="small" fullWidth={true}>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2}  style={{justifyContent: 'left',display:"flex",alignItems:"center"}}>
            <div className="submitBtn">
              <Button type='submit' color='primary' variant="contained" size={"medium"}>Submit</Button>
            </div>
          </Grid>
        </Grid>
      </Box>

      <div style={{width:"70%"}}>
        {/* <BasicTable dep_Name={"department Name"} _id={"_id"} applyMerit={"applyMerit"} universityId={"universityId"} /> */}
        <TableContainer component={Paper} size="small" width={"50%"}>
          <Table className={"table"} aria-label="simple table" size={"small"} stickyHeader={true} >
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
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
