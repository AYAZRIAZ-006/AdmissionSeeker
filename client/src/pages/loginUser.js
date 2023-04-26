// import React, { useContext } from "react";
// import axios from "axios";
// import NavBar from "../components/Navbar";
// import { Alert } from '@mui/material'
// // import DataSection from "../components/table";
// import { UserContext } from "../components/userContext";
// const Url = "http://localhost:5000/api/v1/department/show";
// async function LoginUser(){

//     const { userData } = useContext(UserContext);
//     let [error, setError] = React.useState("");
//     let [result, setResults] = React.useState("");
//     try {

//         if(userData.accessToken) {
//             const headers = {
//                 authorization : `Bearer ${userData.accessToken}`
//     }
//     const config = {Method:"GET", url: Url, headers}
//     const data = await axios(config);
//     console.log("123", data);
// }
// } catch(err) {
//     console.log(err.response.data.message)
//     setError(err);
// }
// // axios.get("http://localhost:5000/api/v1/department/show", {
//     //     authorization: userData.accessToken
//     // }).then((res) => {
//         //     if (res.status === 200) {
//             //         setResults(res.data.results);
//     //         console.log(res.data.results);
//     //     } else {
//     //        console.log("error in finding data")
//     //     }
//     // })
//     //     .catch(err => {
//     //         console.log("err", err);
//     //         setError((err.response.data.message || err.message).toString());

//     //     })

//     return (
//         <>
//     <NavBar />
//     {error && <Alert severity="error">{error}</Alert>}
//     {/* {result.map((element) => {
//           const { dep_Name, applyMerit, universityId, _id } = element;
//           return <div key={_id} >
//             <DataSection dep_Name={dep_Name} _id={_id} applyMerit={applyMerit} universityId={universityId} />
//           </div>
//         })} */}
//         </>
//      )
// }

// export default LoginUser;


import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/Navbar";
import { Alert } from "@mui/material";
import { UserContext } from "../components/userContext";

const Url = "http://localhost:5000/api/v1/department/show";

const LoginUser = () => {
  const { userData } = useContext(UserContext);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData.accessToken) {
          const headers = {
            authorization: `Bearer ${userData.accessToken}`,
          };
          const config = { method: "GET", url: Url, headers };
          const response = await axios(config);
          setResults(response.data.results);
        }
      } catch (err) {
        console.log(err.response.data.message);
        setError(err);
      }
    };

    fetchData();
  }, [userData.accessToken]);

  return (
    <>
      <NavBar />
      {error && <Alert severity="error">{error}</Alert>}
      {results.map((element) => {
        const { dep_Name, applyMerit, universityId, _id } = element;
        return (
          <div key={_id}>
            <p>
              Department Name: {dep_Name}, Apply Merit: {applyMerit},
              University Id: {universityId}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default LoginUser;
