import React, { useState } from "react";
import "./ContactUs.css";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    advice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contain">
      <div className="form-background-con">
        <form onSubmit={handleSubmit}>
          <div className="form-group-con">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-control"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-con">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-control"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-con">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-con">
            <label htmlFor="phone">Phone*</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group-con">
            <label htmlFor="advice">Content requiring advice*</label>
            <textarea
              name="advice"
              className="form-control"
              value={formData.advice}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
