import axios from "axios"
import { React, useState } from 'react';
import Table from 'react-bootstrap/Table';
// import BasicTable from "./table";
import DataSection from "./table";
// import dotenv from "dotenv"


// console.log(process.env.CONDITIONAL_DEP_URL);
function MiddleSection() {
  const [department, setDepartment] = useState('');
  const [level, setlevel] = useState('');
  const [deciplineType, setDeciplineType] = useState('');
  const [applyMerit, setapplyMerit] = useState('');
  const [result, setResults] = useState([]);
  let data = [];
  const handleSubmit = async (event) => {
    event.preventDefault();
    data = await axios.post("http://localhost:5000/api/v1/Department/ConditionalShow", {
      dep_Name: department,
      deciplineType: deciplineType,
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Table hover style={{ width: "70%", backgroundColor: "lightcyan", margin: "15px" }}>
          <thead >
            <tr>
              <td style={{width:"20%"}}>Discipline type</td>
              <td style={{width:"20%"}}>level</td>
              <td style={{width:"20%"}}>Cources</td>
              <td style={{width:"10%"}}>merit</td>
            </tr>
          </thead>
          <tr>
            <td style={{width:"20%"}}>
              <select style={{width:"100%"}} value={deciplineType} onChange={(e) => setDeciplineType(e.target.value)}>
                {/* your options for discipline type dropdown go here */}
                <option name="Select Type" value="Selecttype">Select Type</option>
                <option name="Social Science" value="Socialscience">Social Science</option>
                <option name="Computer Science & IT" value="Computerscience&IT">Computer Science & IT </option>
                <option name="Computer Science" value="Computerscience">Computer Science </option>
                <option name="Engineering" value="Engineering">Engineering</option>
                <option name="Medical Science" value="Medicalscience">Medical Science</option>
              </select>
            </td>
            <td style={{width:"20%"}}>
              <select style={{width:"100%"}} value={level} onChange={(e) => setlevel(e.target.value)}>
                {/* your options for department dropdown go here */}
                <option name="Select Level" value="Selectlevel">Select Level</option>
                <option name="Bachelor" value="bachelor">Bachelor </option>
                <option name="Master" value="master">Master </option>
                <option name="Phd" value="phd">Phd</option>
                <option name="M Phil" value="mphil">M Phil</option>
              </select>
            </td>
            <td style={{width:"20%"}}>
              <select style={{width:"100%"}} value={department} onChange={(e) => setDepartment(e.target.value)}>
                {/* your options for department dropdown go here */}
                <option name="Select Cources" value="selectcources">Select Cources</option>
                <option name="Computer Science" value="computerscience">Computer Science </option>
                <option name="Computer Engineering" value="computerengineering">Computer Engineering </option>
                <option name="Mechanical Engineering" value="mechanicalengineering">Mechanical Engineering</option>
                <option name="Electrical Engineering" value="electricalengineering">Electrical Engineering</option>

              </select>
            </td>
            <td style={{width:"10%"}}>
              <input style={{width:"100%"}} type="number" placeholder="Enter Merit" value={applyMerit} onChange={(e) => setapplyMerit(e.target.value)} />
            </td>
          </tr>
        </Table>
        <button type="submit">Submit</button>
      </form>

      <div style={{ width: "70%", background: "#FFF2CC", color:"#FC2947",margin: "15px" }}>
        <DataSection dep_Name={"department Name"} _id={"_id"} applyMerit={"applyMerit"} universityId={"universityId"} />

        {result.map((element) => {
          const { dep_Name, applyMerit, fee, _id } = element;
          return <div key={_id} >
            <DataSection dep_Name={dep_Name} _id={_id} applyMerit={applyMerit} fee={fee} />
          </div>
        })}
      </div>
    </div>
  );
}

export default MiddleSection;
