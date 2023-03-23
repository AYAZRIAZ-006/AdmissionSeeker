import React from "react";
import NavBar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
import MiddleSection from "./components/middleSection";
import Signup from "./components/SignUp";
const url = "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-green-education-blackboard-stereoscopic-image_20770.jpg"

const App = () => {
  return (
    <div>
    <div style={{ height: "170px", backgroundImage: `url(${url})` }}>
    {/* <NavBar /> */}
    <Signup />
    </div>
       {/* <MiddleSection /> */}
    </div>
  );
};

export default App;