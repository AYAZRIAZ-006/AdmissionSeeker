import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about.js";
import Contact from "./pages/contact";
import Home from "./pages/home";
// const url = "https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-green-education-blackboard-stereoscopic-image_20770.jpg"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/about" element={ <About />} />
    </Routes>
  );
};

export default App;