import React from "react";
import NavBar from "../components/Navbar";
import MiddleSection from "../components/middleSection";
import Footer from "../components/footer";
function Home() {
    return (
        <>
        <div style={{height:"auto"}}>

            <NavBar />
            <MiddleSection/>
        </div>
            <Footer />
        </>
    )
}

export default Home;