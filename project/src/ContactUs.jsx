import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contain">
      <div className="form-background-contact">
        <form action="">
          <div className="form-group-2">
            <div className="form-group">
              <label htmlFor="Name">Name*</label>
              <input
                type="text"
                name="FirstName"
                placeholder="First Name"
                className="form-control"
                required
              />
              <br />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              name="email"
              className="form-control email-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              name="message"
              className="form-control message-control"
              required
            />
          </div>

          <div className="form-group-2">
            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <input
                type="text"
                name="subject"
                className="form-control subject-control"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;