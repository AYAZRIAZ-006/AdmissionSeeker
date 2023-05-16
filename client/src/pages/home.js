import React from "react";
import NavBar from "../components/Navbar";
import MiddleSection from "../components/middleSection";
import ProtectedRoute from "../components/ProtectedRoutes";
import { useSelector } from "react-redux";
import Footer from "../components/footer";

function Home() {
    const { isLoggedIn } = useSelector(state => state.auth)
    return (
        <>
            <NavBar />
            <MiddleSection/>
            <Footer />
            {/* {isLoggedIn ? <ProtectedRoute component={MiddleSection} /> : <div>
                <h1>Welcome to admission seeker</h1>
                <p>This is admission's seekers home page here you will get to know what -admission seeker is</p>
                <p>Futhermore please signup or signin to continue</p>
            </div>} */}
        </>
    )
}

export default Home;