import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
// import ContactForm from "../components/contactForm";

function Contact(){
    return (
        <>
        <div style={{height:"750px"}}>

        <NavBar />
    <h1>welcome to contact page</h1>
    <ContactForm />
        </div>
    <Footer />
        </>
     )
}

export default Contact;