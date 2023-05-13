import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import NavBar from "../components/Navbar";
import { Alert } from "@mui/material";
import { UserContext } from "../components/userContext";
import DataSection from "../components/table";

const Url = "http://localhost:5000/api/v1/department/show";

const LoginUser = () => {
  const userDatanew = useSelector((state) => state.user);
  console.log("new loginuser data", userDatanew);
  const { userData } = useContext(UserContext);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("token", userDatanew.accessToken);
        if (userDatanew.accessToken) {
          const headers = {
            authorization: `Bearer ${userDatanew.accessToken}`,
          };
          const config = { method: "GET", url: Url, headers };
          const response = await axios(config);
          console.log("dep", response);
          setResults(response.data.results);
        }
      } catch (err) {
        console.log(err.response.data.message);
        setError(err);
      }
    };

    fetchData();
  }, [userDatanew.accessToken]);

  return (
    <>
      <NavBar />
      <h1>my name is ayaz</h1>
      {error && <Alert severity="error">{error}</Alert>}
      <DataSection dep_Name={"dep_Name"} _id={"_id"} applyMerit={"applyMerit"} fee={"universityId"} />
      {results.map((element) => {
        const { dep_Name, applyMerit, universityId, _id } = element;
        return (
          <div key={_id}>
          <DataSection dep_Name={dep_Name} _id={_id} applyMerit={applyMerit} fee={universityId} />
          </div>
        );
      })}
    </>
  );
};

export default LoginUser;
