import "./Login.css"
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

function LoginForm() {
    return (
        <div className="form-background">
            <form action="">
                <input type="text" placeholder="Username or Email Address" className="inputbox" />
                <input type="text" placeholder="Password" className="inputbox" />
                <div className="top-thirty">
                    <Button variant="primary" className="login-button">Login</Button>
                </div>
                <div className="top-thirty">
                    <Link to="/forgotpassword" className="forgot-link">Forgotten Password?</Link>
                </div>
                <div className="account-button">
                    <Button href="#/signup">Create New Account</Button>
                </div>


            </form>
        </div>
    );
}

export default LoginForm;