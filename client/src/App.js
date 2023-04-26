import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import About from "./pages/about.js";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard.js";
import LoginUser from "./pages/loginUser.js";
import { UserContext } from "./components/userContext.js";

const App = () => {
  const [userData, setUserData] = useState([]);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/loginUser" element={<LoginUser />} />
        </Routes>
      </UserContext.Provider>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;