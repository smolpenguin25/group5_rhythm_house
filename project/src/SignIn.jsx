import React from "react";
import "./SignIn.css";

export const SignIn = () => {
  return (
    <div className='background_signin'>
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="overlap">
            <div className="text-wrapper">Login</div>
            <div className="div">Already Have An Account?</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">Confirm Password*</div>
          </div>
          <div className="text-wrapper-3">Create An Account</div>
          <p className="p">Create an account to enjoy all the services without any ads for free!</p>
          <div className="overlap-2">
            <div className="text-wrapper-4">Email*</div>
          </div>
          <div className="overlap-3">
            <div className="text-wrapper-5">Password*</div>
          </div>
          <div className="overlap-4">
            <div className="text-wrapper-6">Create Account</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};