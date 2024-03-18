import React from 'react';
import './MembershipForm.css';

const MembershipForm = () => {
  return (
    <div className="container">
      <h2>Gym's Membership Registration</h2>
      <form>
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
          <label htmlFor="Weight">Your current weight (lbs)*</label>
          <input type="number" name="Weight" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="DesiredWeight">Your desired Weight*</label>
          <input type="number" name="DesiredWeight" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="Height">Height*</label>
          <input type="number" name="Height" className="form-control" required />
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
          <input type="radio" id="RankMember" name="membership" value="RankMember" required />
          <label htmlFor="RankMember">Rank Member</label><br />
          <input type="radio" id="Sliver" name="membership" value="Sliver" required />
          <label htmlFor="Sliver">Sliver - $20/month</label><br />
          <input type="radio" id="Gold" name="membership" value="Gold" required />
          <label htmlFor="Gold">Gold - $30/month</label><br />
          <input type="radio" id="Platinum" name="membership" value="Platinum" required />
          <label htmlFor="Platinum">Platinum - $40/month</label><br />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default MembershipForm;