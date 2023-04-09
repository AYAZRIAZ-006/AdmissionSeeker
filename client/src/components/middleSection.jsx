import axios from "axios"
import { React, useState } from 'react';
import Table from 'react-bootstrap/Table';
import BasicTable from "./table";
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
                <option name="Select Type" value="SelectType">Select Type</option>
                <option name="Social Science" value="SocialScience">Social Science</option>
                <option name="Computer Science & IT" value="ComputerScience&IT">Computer Science & IT </option>
                <option name="Computer Science" value="Computer Science">Computer Science </option>
                <option name="Engineering" value="Engineering">Engineering</option>
                <option name="Medical Science" value="MedicalScience">Medical Science</option>
              </select>
            </td>
            <td style={{width:"20%"}}>
              <select style={{width:"100%"}} value={level} onChange={(e) => setlevel(e.target.value)}>
                {/* your options for department dropdown go here */}
                <option name="Select Level" value="SelectLevel">Select Level</option>
                <option name="Bachelor" value="bachelor">Bachelor </option>
                <option name="Master" value="master">Master </option>
                <option name="Phd" value="phd">Phd</option>
                <option name="M Phil" value="mphil">M Phil</option>
              </select>
            </td>
            <td style={{width:"20%"}}>
              <select style={{width:"100%"}} value={department} onChange={(e) => setDepartment(e.target.value)}>
                {/* your options for department dropdown go here */}
                <option name="Select Cources" value="select cources">Select Cources</option>
                <option name="Computer Science" value="computer science">Computer Science </option>
                <option name="Computer Engineering" value="computer engineering">Computer Engineering </option>
                <option name="Mechanical Engineering" value="mechanical engineering">Mechanical Engineering</option>
                <option name="Electrical Engineering" value="electrical engineering">Electrical Engineering</option>

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
        <BasicTable dep_Name={"department Name"} _id={"_id"} applyMerit={"applyMerit"} universityId={"universityId"} />

        {result.map((element) => {
          const { dep_Name, applyMerit, universityId, _id } = element;
          return <div key={_id} >
            <BasicTable dep_Name={dep_Name} _id={_id} applyMerit={applyMerit} universityId={universityId} />
          </div>
        })}
      </div>
    </div>
  );
}

export default MiddleSection;
