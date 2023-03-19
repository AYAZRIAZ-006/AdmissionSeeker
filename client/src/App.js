// // import logo from './logo.svg';
// // import '../public/App.css';
// import Header from "./components/header";

// function App() {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
// import { Routes, Route } from "react-router-dom";
import MiddleSection from "./components/middleSection";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Subscribe to </p>
//         <h1>Thapa Technical Home Page</h1>
//       </section>
//     </>
//   );
// };

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical About Page</h1>
//       </section>
//     </>
//   );
// };

// const Service = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Service Page</h1>
//       </section>
//     </>
//   );
// };

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical Contact Page</h1>
//       </section>
//     </>
//   );
// };

const App = () => {
  return (
    <div>
    <Navbar />
    <MiddleSection />
    {/* <Routes> */}
    {/* <h1> ayaz</h1> */}
      {/* <Route path="/home" component={Home} />

      <Route path="/home" component={Home} />

      <Route path="/home" component={Home} />

      <Route path="/home" component={Home} /> */}
    {/* </Routes> */}
    </div>
  );
};

export default App;