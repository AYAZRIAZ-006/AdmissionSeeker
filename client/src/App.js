import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about.js";
import Contact from "./pages/contact";
import Home from "./pages/home";
import ProtectedRoute from "../src/components/ProtectedRoutes.js"
import University from "./pages/university.js";
import Dashboard from "./pages/dashboard.js";
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/university" element={<University />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Dashboard />} path="/dashboard" />
      </Route>
    </Routes>
  );
};

export default App;