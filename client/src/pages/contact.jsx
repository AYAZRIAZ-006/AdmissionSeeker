import React, { useContext } from "react";
import NavBar from "../components/Navbar";
import { UserContext } from "../components/userContext";
function Contact(){
    const {userData} = useContext(UserContext)
    return (
        <>
        <NavBar />
        {JSON.stringify(userData)}
    <h1>welcome to contact page</h1>
        </>
     )
}

export default Contact;