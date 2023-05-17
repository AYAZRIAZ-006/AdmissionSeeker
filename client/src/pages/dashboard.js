import NavBar from "../components/Navbar";
import axios from "../config/axios";
import { React, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Footer from "../components/footer";
import { Link, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import dotenv from "dotenv"

function Dashboard() {
    // const {auth}=useSelector(state=>state.auth)
    const authToken = JSON.parse(localStorage.getItem("login"));
    console.log("token", authToken);
    const [result, setResults] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/department/show", {
            headers: {
                Authorization: `Bearer ${authToken.store}`,
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                setResults(response.data.results);
                console.log("resp", response);
            })
            .catch(data => {
                console.log("data", data);
                setResults(data.data.results);
            });
    }, []); // Empty dependency array means it will only run once on component mount

    return (
        <>
        <div style={{height:"750px"}}>

            <NavBar />
            {/* {isLoggedIn ? <ProtectedRoute component={MiddleSection} /> : <div>
                <h1>Welcome to admission seeker</h1>
                <p>This is admission's seekers home page here you will get to know what -admission seeker is</p>
                <p>Futhermore please signup or signin to continue</p>
            </div>} */}
                <h1>Well Come to Admission Seeker</h1>
                {/* <p><strong>
      Welcome to our innovative website designed to simplify the process of applying to universities.
       Our platform provides a smart algorithm that matches students with universities based on their academic qualifications,
        making it easier than ever to find the right institution to continue your education. In addition,
         universities can register on our website and manage their departments, admission requirements, 
         and other details, making it a one-stop-shop for both students and institutions.
          Join us today and take the first step towards your academic success!
      </strong>
      </p> */}
            <div style={{ background: "white", padding: "10px 20px" }}>

                <div style={{ width: "80%" }}>
                    {/* <BasicTable dep_Name={"department Name"} _id={"_id"} applyMerit={"applyMerit"} universityId={"universityId"} /> */}
                    <TableContainer component={Paper} size="small" alignitems={"center"} width={"50%"}>
                        <Table className={"table"} aria-label="simple table" size={"small"} stickyHeader={true} >
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">department</TableCell>
                                    <TableCell align="right">applyMerit</TableCell>
                                    <TableCell align="right">Level</TableCell>
                                    <TableCell align="right">closingDate</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {result.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell align="right">{row.dep_Name}</TableCell>
                                        <TableCell align="right">{row.applyMerit}</TableCell>
                                        <TableCell align="right">{row.level}</TableCell>
                                        <TableCell align="right">{row.closingDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        </div>
            <Footer />
        </>
    )
}

export default Dashboard;