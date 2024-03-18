import React from 'react';
import './MembershipForm.css';

const MembershipForm = () => {
  return (
    <div className="contain">
      <h2>Music Membership Registration</h2>
      <div className="form-background">
        <form action="">
          <div className="form-group">
            <label htmlFor="Name">Name*</label>
            <input type="text" name="FirstName" placeholder="First Name" className="form-control" required />
            <input type="text" name="LastName" placeholder="Last Name" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="Gender">Gender*</label><br />
            <input type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label><br />
            <input type="radio" id="female" name="gender" value="female" required />
            <label htmlFor="female">Female</label><br />
          </div>

          <div className="form-group">
          <label htmlFor="Instrument">Favorite Type of Music*</label>
            <select name="Instrument" className="form-control" required>
              <option value="">Select a type of music</option>
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              <option value="jazz">Jazz</option>
              <option value="blues">Blues</option>
              <option value="country">Country</option>
              <option value="classical">Classical</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Address">Address*</label>
            <input type="text" name="Address" placeholder="Address" className="form-control" required />
            <input type="text" name="City" placeholder="City" className="form-control" required />
            <input type="text" name="State" placeholder="State" className="form-control" required />
            <input type="number" name="ZipCode" placeholder="Zip Code" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email*</label>
            <input type="email" name="Email" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Phone*</label>
            <input type="tel" name="Phone" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="Membership">Membership Type*</label><br />
            <input type="radio" id="Basic" name="membership" value="Basic" required />
            <label htmlFor="Basic">Basic - $10/month</label><br />
            <input type="radio" id="Premium" name="membership" value="Premium" required />
            <label htmlFor="Premium">Premium - $20/month</label><br />
            <input type="radio" id="Platinum" name="membership" value="Platinum" required />
            <label htmlFor="Platinum">Platinum - $30/month</label><br />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MembershipForm;