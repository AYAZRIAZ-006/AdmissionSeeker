import NavBar from "../components/Navbar";
import axios from "../config/axios";
import { React, useState, useEffect, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import Footer from "../components/footer";
import { Link, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Department from "../components/department";
// import dotenv from "dotenv"

function Dashboard() {
    // const { auth }= useSelector(state=>state.auth);
  const modalRefDepartment = useRef();

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
   const handleDeleteDepartment = async (id) => {
    console.log("dep delete successfull", id);
   }
   const handleUpdateDepartment = async (id) => {
    console.log("dep delete successfull", id);
    localStorage.setItem("depId", id);
    // modalRefDepartment.current.id= id;
    modalRefDepartment.current.departmentOpen();
   }
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

                    <div style={{ width: "100%" }}>
                        {/* <BasicTable dep_Name={"department Name"} _id={"_id"} applyMerit={"applyMerit"} universityId={"universityId"} /> */}
                        <TableContainer component={Paper} size="small" alignitems={"center"} width={"50%"}>
                            <Table className={"table"} aria-label="simple table" size={"small"} stickyHeader={true} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">department</TableCell>
                                        <TableCell align="right">semester</TableCell>
                                        <TableCell align="right">fee</TableCell>
                                        <TableCell align="right">applyMerit</TableCell>
                                        <TableCell align="right">Level</TableCell>
                                        <TableCell align="right">openingDate</TableCell>
                                        <TableCell align="right">closingDate</TableCell>
                                        <TableCell align="right">Delete</TableCell>
                                        <TableCell align="right">update</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {result.map((row) => (
                                        <TableRow key={row._id}>
                                            <TableCell align="right">{row.dep_Name}</TableCell>
                                            <TableCell align="right">{row.semester}</TableCell>
                                            <TableCell align="right">{row.fee}</TableCell>
                                            <TableCell align="right">{row.applyMerit}</TableCell>
                                            <TableCell align="right">{row.level}</TableCell>
                                            <TableCell align="right">{row.openingDate}</TableCell>
                                            <TableCell align="right">{row.closingDate}</TableCell>
                                            <TableCell align="right">
                                            <button style={{ backgroundColor: "#d11a2a", color: "white" }} onClick={() => handleDeleteDepartment(row._id)}>Delete</button>
                                            </TableCell>
                                            <TableCell align="right">
                                            <button style={{ backgroundColor: "#FFE569", color: "black" }} onClick={() => handleUpdateDepartment(row._id)}>Update</button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                </div>
            </div>
            <Department ref={modalRefDepartment} />
            <Footer />
        </>
    )
}

export default Dashboard;