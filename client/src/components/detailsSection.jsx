import axios from "axios"
import Table from 'react-bootstrap/Table';
import { React, useState } from 'react';

const initialFormData = Object.freeze({
    dep_Name: "",
    deciplineType: "",
    applyMerit:"",
    level:"",
  });


const DetailsSection = (props) => {
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
    // console.log("pro",props);
    let data = [];
    
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("form data", formData);
      const body =  {
        dep_Name: formData.dep_Name,
        deciplineType:formData.deciplineType,
        applyMerit:formData.applyMerit,
        level:formData.level,
      }
      console.log("api data", body);
      data = await axios.post("http://localhost:5000/api/v1/Department/ConditionalShow", {
        dep_Name: formData.dep_Name,
        deciplineType:formData.deciplineType,
        applyMerit:formData.applyMerit,
        level:formData.level,
      })
      console.log("api data", data);
      if (data.data.status === 200) {
        // console.log("done", data.data.results);
        // setResults(data.data.results);
      }
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
          <select style={{width:"100%"}} name="deciplineType" onChange={handleChange}>
            {/* your options for discipline type dropdown go here */}
            <option  value="SelectType">Select Type</option>
            <option  value="SocialScience">Social Science</option>
            <option  value="ComputerScience&IT">Computer Science & IT </option>
            <option  value="Computer Science">Computer Science </option>
            <option  value="Engineering">Engineering</option>
            <option  value="MedicalScience">Medical Science</option>
          </select>
        </td>
        <td style={{width:"20%"}}>
          <select style={{width:"100%"}} name="level" onChange={handleChange}>
            {/* your options for department dropdown go here */}
            <option  value="SelectLevel">Select Level</option>
            <option  value="bachelor">Bachelor </option>
            <option  value="master">Master </option>
            <option  value="phd">Phd</option>
            <option  value="mphil">M Phil</option>
          </select>
        </td>
        <td style={{width:"20%"}}>
          <select style={{width:"100%"}} name="dep_Name" onChange={handleChange}>
            {/* your options for department dropdown go here */}
            <option value="select cources">Select Cources</option>
            <option  value="computer science">Computer Science </option>
            <option  value="computer engineering">Computer Engineering </option>
            <option  value="mechanical engineering">Mechanical Engineering</option>
            <option  value="electrical engineering">Electrical Engineering</option>

          </select>
        </td>
        <td style={{width:"10%"}}>
          <input style={{width:"100%"}} type="number" name="applyMerit" placeholder="Enter Merit" onChange={handleChange} />
        </td>
      </tr>
    </Table>
    <button type="submit">Submit</button>
  </form>
  </div>
  );
}

export default DetailsSection;