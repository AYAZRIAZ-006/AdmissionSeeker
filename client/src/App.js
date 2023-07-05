import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about.js";
import Contact from "./pages/contact";
import Home from "./pages/home";
// import ProtectedRoute from "../components/ProtectedRoutes";
// import ProtectedRoute from "../src/components/ProtectedRoutes.js"
import University from "./pages/university.js";
import Dashboard from "./pages/dashboard.js";
// import { useSelector } from "react-redux";
import PrivateRoute from "../src/components/ProtectedRoutes.js";
// const url = "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-green-education-blackboard-stereoscopic-image_20770.jpg"

const App = () => {



  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/about" element={ <About />} />
      {/* <ProtectedRoute  path="/dashboard" component={Dashboard} /> */}
      {/* <PrivateRoute  path="/dashboard" component={Dashboard} /> */}
      <Route path="/dashboard" element={ <Dashboard />} />
      <Route path="/university" element={ <University />} />

    </Routes>
  );
};

export default App;