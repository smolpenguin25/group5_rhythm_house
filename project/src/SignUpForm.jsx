import "./Login.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function SignUpForm() {
    return (
        <div className="form-background">
            <form action="">
                <input type="text" placeholder="Username or Email Address" className="inputbox" />
                <input type="text" placeholder="Phone Number (not required)" className="inputbox" />
                <input type="text" placeholder="Password" className="inputbox" />
                <div className="birthday-input">
                    <span className="inline-text">Date of birth: </span>
                    <input type="date" id="birthday" name="birthday" className="date-picker"/>
                </div>
                <div className="radio-flex-box">
                    <div><input type="radio" name="gender" defaultChecked/><span className="inline-text">Male</span></div>
                    <div><input type="radio" name="gender" /><span className="inline-text">Female</span></div>
                    <div><input type="radio" name="gender" /><span className="inline-text">Other</span></div> 
                </div>
                <div className="top-thirty">
                    <Button variant="primary" className="login-button">Sign Up</Button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;