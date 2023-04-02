import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Navbar from './components/Navbar';
// import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
   <React.StrictMode>
    <App />
   </React.StrictMode> 
  // {/* </BrowserRouter>, */}
  ,root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
