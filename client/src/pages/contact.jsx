import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";
// import ContactForm from "../components/contactForm";

function Contact(){
    return (
        <>
        <NavBar />
    <h1>welcome to contact page</h1>
    <ContactForm />
    <Footer />
        </>
     )
}

export default Contact;