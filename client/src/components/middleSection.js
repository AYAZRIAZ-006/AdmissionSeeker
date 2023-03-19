import axios from "axios"
import React from "react";
import { useState } from 'react';

// const url = "http://localhost:5000/api/v1/Department/ConditionalShow";
// const method = "POST";
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
if (data.data.status === 200 ) {
    // console.log("done", data.data.results);
    setResults(data.data.results);
} else {
  setResults({
    dep_Name: "not found",
    deciplineType:"not found",
    applyMerit:"not found",
    level:"not found",
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
    <table>
    <thead>
    <tr>
        <td><h3>Discipline type</h3></td>
        <td><h3>level</h3></td>
        <td><h3>Cources</h3></td>
        <td><h3>merit</h3></td>
      </tr>
      </thead>
      <tr>
      <td>
          <select value={deciplineType} onChange={(e) => setDeciplineType(e.target.value)}>
            {/* your options for discipline type dropdown go here */}
            <option name="Select Type" value="SelectType">Select Type</option>
            <option name="Social Science" value="SocialScience">Social Science</option>
            <option name="Computer Science & IT" value="ComputerScience&IT">Computer Science & IT </option>
            <option name="Engineering" value="Engineering">Engineering</option>
            <option name="Medical Science" value="MedicalScience">Medical Science</option>
          </select>
          </td>
          <td>
          <select value={level} onChange={(e) => setlevel(e.target.value)}>
            {/* your options for department dropdown go here */}
            <option name="Select Level" value="SelectLevel">Select Level</option>
            <option name="Bachelor" value="Bachelor">Bachelor </option>
            <option name="Master" value="Master">Master </option>
            <option name="Phd" value="Phd">Phd</option>
            <option name="M Phil" value="MPhil">M Phil</option>

          </select>
          </td>
          <td>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            {/* your options for department dropdown go here */}
            <option name="Select Cources" value="SelectCources">Select Cources</option>
            <option name="Computer Science" value="Computer Science">Computer Science </option>
            <option name="Computer Engineering" value="Computer Engineering">Computer Engineering </option>
            <option name="Mechanical Engineering" value="Mechanical Engineering">Mechanical Engineering</option>
            <option name="Electrical Engineering" value="Electrical Engineering">Electrical Engineering</option>

          </select>
          </td>
          <td>
          <input type="number" placeholder="Enter Merit" value={applyMerit} onChange={(e) => setapplyMerit(e.target.value)} />
          </td>
      </tr>
    </table>
        <button type="submit">Submit</button>
      </form>
     
      <div>
      <table>
        <tr>
        <td>department Name</td>
        <td>_id</td>
        <td>applyMerit</td>
        <td>universityId</td>
        </tr>
        {/* <tr> */}
        {result.map((element) => {
          const { dep_Name, isAdmissionOpen, applyMerit, universityId, _id} = element;
          return <div key={_id} >
          <tr>
          <td>{dep_Name}</td>
            <td>{_id}</td>
            <td>{applyMerit}</td>
            <td>{universityId}</td>
            </tr>
          </div>

        })}
            {/* <td>{result.dep_Name}</td>
            <td>{result.isAdmissionOpen}</td>
            <td>{result.applyMerit}</td>
            <td>{result.universityId}</td>
        </tr> */}
      </table>
        {/* your component for displaying the results goes here */}
      </div>
    </div>
  );
}

export default MiddleSection;
