import NavBar from "../components/Navbar";
import axios from "../config/axios";
import { React, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Footer from "../components/footer";
import { Link, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// import dotenv from "dotenv"

function Dashboard() {
    // const { auth }= useSelector(state=>state.auth);
    const [result, setResults] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/api/v1/department/show")
            .then(response => {
                setResults(response.data.results);
                console.log("sucess", response);
            })
            .catch(data => {
                console.log("error", data);
                setResults(data.data.results);
            });
    }, []); // Empty dependency array means it will only run once on component mount

    return (
        <>
            <div style={{ height: "750px" }}>

                <NavBar />
                {/* {isLoggedIn ? <ProtectedRoute component={MiddleSection} /> : <div>
                <h1>Welcome to admission seeker</h1>
                <p>This is admission's seekers home page here you will get to know what -admission seeker is</p>
                <p>Futhermore please signup or signin to continue</p>
            </div>} */}
                <h1 style={{ color: "green" }}>Well Come to your Dashboard page</h1>
                <p style={{ color: "greenyellow", margin:"5px" }}><strong>help the students to chose your university for themby adding more details about your university
                </strong>
                </p>
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