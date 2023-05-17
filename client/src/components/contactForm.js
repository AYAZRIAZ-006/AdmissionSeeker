import React, { useState } from "react";
import "../components/contactform.css";
import { useNavigate } from 'react-router-dom';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        message: ""
    });
    const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/v1/admin/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        alert("your message sucessfully send");
        console.log(data);
        navigate("/");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
