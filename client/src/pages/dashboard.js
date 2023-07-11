import NavBar from "../components/Navbar";
import axios from "../config/axios";
import { React, useState, useEffect, useRef, } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Footer from "../components/footer";
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Department from "../components/department";

function Dashboard() {
    // const { auth }= useSelector(state=>state.auth);
    console.log("in dashboard");
    const modalRefDepartment = useRef();
    const navigate = useNavigate();
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
    }, [result]); // Empty dependency array means it will only run once on component mount
    // if i ass result variable in [] then its render automatically continuosly 
    const handleDeleteDepartment = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this department?');
        if (confirmed) {

            axios.delete(`department?_id=${id}`)
                .then((res) => {
                    if (res.status === 200) {
                        console.log("sucess in dep", res);
                        // setResults(res);
                        alert("action done sucessfully");
                        navigate("/dashboard");
                    } else {
                        // setError((res.response).toString());
                        console.log("in else case error");
                    }
                })
                .catch(err => {
                    console.log("err", err.response.data.message);
                    // setError((err.response.data.message).toString());
                    // setOpen(true)

                })
            console.log("dep delete successfull", id);
        } else {
            console.log("delete cancel successfull", id);
            navigate("/dashboard")
        }
    }
    const handleUpdateDepartment = async (row) => {

        console.log("dep update successfull", row);
        localStorage.setItem("rowData", JSON.stringify(row));
        // modalRefDepartment.current.id= id;
        modalRefDepartment.current.departmentOpen();
    }
    return (
        <>
            <div style={{ height: "100%" }}>

                <NavBar />
                {/* {isLoggedIn ? <ProtectedRoute component={MiddleSection} /> : <div>
                <h1>Welcome to admission seeker</h1>
                <p>This is admission's seekers home page here you will get to know what -admission seeker is</p>
                <p>Futhermore please signup or signin to continue</p>
            </div>} */}
                <h1 style={{ color: "green" }}>Well Come to your Dashboard page</h1>
                <p style={{ color: "greenyellow", margin: "5px" }}><strong>help the students to chose your university for them by adding more details about your university
                </strong>
                </p>
                <div style={{ background: "white", padding: "10px 20px" }}>

                    <div style={{ width: "100%" }}>
                        {/* <BasicTable dep_Name={"department Name"} _id={"_id"} applyMerit={"applyMerit"} universityId={"universityId"} /> */}
                        <TableContainer component={Paper} size="small" alignitems={"center"} width={"50%"}>
                            <Table className={"table"} aria-label="simple table" size={"small"} stickyHeader={true} >
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">Department</TableCell>
                                        <TableCell align="right">Semester</TableCell>
                                        <TableCell align="right">Fee</TableCell>
                                        <TableCell align="right">ApplyMerit</TableCell>
                                        <TableCell align="right">Level</TableCell>
                                        <TableCell align="right">Opening Date</TableCell>
                                        <TableCell align="right">Closing Date</TableCell>
                                        <TableCell align="right">Delete</TableCell>
                                        <TableCell align="right">Update</TableCell>
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
                                                <button style={{ backgroundColor: "#FFE569", color: "black" }} onClick={() => handleUpdateDepartment(row)}>Update</button>
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