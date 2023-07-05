import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";

function About() {
    return (
        <>
            <div style={{ height: "100%" }}>

                <NavBar />
                <div style={{ margin: "1% 20%" }}>
                    <h1>welcome to about page</h1>
                    <h3>Introduction:</h3>
                    <h5>Discover Your Path to Higher Education: Find the Perfect University with Our Website</h5>
                    <h3>Empowering Students for Informed Decisions:</h3>
                    <h5>At <strong>AdmissionSeeker</strong>, we understand the importance of making informed decisions when
                        it comes to choosing the right university. We believe that every student deserves
                        a platform that simplifies the search process, providing a tailored list of universities
                        that best suit their needs. Our goal is to empower you with the information and tools
                        necessary to embark on a successful higher education experience.</h5>
                    <h3>Find Your Perfect Match:</h3>
                    <h5>
                        One of the key features of our website is the intuitive search functionality.
                        With just a few clicks, you can select your discipline type, level, course name,
                        and enter your percentage marks. Our intelligent algorithm will then analyze your inputs
                        and generate a comprehensive list of universities where you can apply based on your academic merit.
                        This saves you precious time and
                        effort that would have been spent researching and comparing various university options.</h5>
                    <h3> Accurate and Relevant Data:</h3>
                    <h5>
                        What sets us apart is our commitment to accuracy and relevance.
                        We understand that university admission criteria can change over time,
                        and we strive to keep our database up to date. By integrating with reliable sources and APIs,
                        we ensure that the information
                        provided on our website is current and reliable, giving you confidence in your decision-making process.
                    </h5>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About;