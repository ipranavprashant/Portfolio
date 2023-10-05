import React, { useState } from "react";
import "./FormStyles.css"; // Import your CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully!");
      } else {
        // Handle error
        console.error("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleClear = () => {
    // Create an object with empty values for all form fields
    const emptyFormData = {
      name: "",
      email: "",
      address: "",
      message: "",
    };
    
    // Set the form data to the empty object
    setFormData(emptyFormData);
    alert("Thanks for getting in touch!")
  };
  

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="name">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="name">Message</label>
        <textarea
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          className="input-field"
        />
        <button className="btn" type="submit" onClick={handleClear}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
