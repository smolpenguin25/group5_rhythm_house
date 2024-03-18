import "./Login.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function ForgotPasswordForm() {
    return (
        <div className="form-background">
            <form action="">
                <input type="text" placeholder="Username or Email Address" className="inputbox" />
                <div className="top-thirty">
                    <Button variant="primary" className="login-button">Send Reset Link</Button>
                </div>
                <div className="bottom-thirty">
                    <Link to="/login" className="inline-text">Back to Login</Link>
                </div>
            </form>
        </div>
    );
}

export default ForgotPasswordForm;