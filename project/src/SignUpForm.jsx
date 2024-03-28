import "./Login.css";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useNavigate } from "react-router-dom";


function SignUpForm() {
    const navigate = useNavigate();

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const userUrl = new URL('https://65d55b833f1ab8c63436c5fa.mockapi.io/user');
    const [UserErrorLabel, setUserErrorLabel] = useState("");
    const [PassErrorLabel, setPassErrorLabel] = useState("");
    
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPass, setConfirmPass] = useState("");
    const [ConfirmError, setConfirmError] = useState("");
    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }

    const handleSignUp = () => {
        setPassErrorLabel("");
        setUserErrorLabel("");
        setConfirmError("");

        if (Username === "") {
            setUserErrorLabel("Please fill in username");
            return;
        }
        
        if (ConfirmPass !== Password) {
            setConfirmError("Confrim Password doesnt match");
            return;
        }

        if (Password.length < 8) {
            setPassErrorLabel("Password must be 8 or longer");
            return;
        }

        userUrl.searchParams.append('username', Username);

        fetch(userUrl, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            const usrname = Object.values(tasks[0])[0]; //force error ?
            console.log("check", usrname);
            if (usrname === Username) {
                setUserErrorLabel("Username already exists");
                return;
            }
            else {
                const newUser = {
                    "username": Username,
                    "password": Password,
                    "membership": "none"
                }

                fetch('https://65d55b833f1ab8c63436c5fa.mockapi.io/user', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    // Send your data in the request body as JSON
                    body: JSON.stringify(newUser)
                }).then(res => {
                    if (res.ok) {
                        return res.json();
                    }
                    // handle error
                }).then(task => {
                    // do something with the new task
                    navigate("/success");
                }).catch(error => {
                    // handle error
                    console.log("cannot add user")
                })
            }
        }).catch(error => {
            // handle error
            console.log("ok");
            const newUser = {
                "username": Username,
                "password": Password,
                "membership": "none"
            }

            fetch('https://65d55b833f1ab8c63436c5fa.mockapi.io/user', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                // Send your data in the request body as JSON
                body: JSON.stringify(newUser)
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
            }).then(task => {
                // do something with the new task
                navigate("/success");
            }).catch(error => {
                // handle error
                console.log("cannot add user")
            })
        })

    }
    return (
        <div className="form-background">
            <form action="">
                <input type="text" placeholder="Username or Email Address" className="inputbox top-thirty width-eighty" value={Username} onChange={(e) => { setUsername(e.target.value) }} />
                <label className="errorLabel">{UserErrorLabel}</label>
                <input type="text" placeholder="Phone Number (not required)" className="inputbox top-thirty width-eighty" />
                <div className="input-container">
                    <input type={type} placeholder="Password" className="inputbox"
                        value={Password} onChange={(e) => setPassword(e.target.value)} />
                    <span className="icon-container" onClick={handleToggle}>
                        <Icon className="icon-content" icon={icon} size={25} />
                    </span>
                    <label className="errorLabel">{PassErrorLabel}</label>
                </div>
                <div className="input-container">
                    <input type={type} placeholder="Confirm Password" className="inputbox"
                        value={ConfirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
                    <span className="icon-container" onClick={handleToggle}>
                        <Icon className="icon-content" icon={icon} size={25} />
                    </span>
                    <label className="errorLabel">{ConfirmError}</label>
                </div>
                <div className="birthday-input">
                    <span className="inline-text">Date of birth: </span>
                    <input type="date" id="birthday" name="birthday" className="date-picker" />
                </div>
                <div className="radio-flex-box">
                    <div><input type="radio" name="gender" defaultChecked /><span className="inline-text">Male</span></div>
                    <div><input type="radio" name="gender" /><span className="inline-text">Female</span></div>
                    <div><input type="radio" name="gender" /><span className="inline-text">Other</span></div>
                </div>
                <div className="top-thirty">
                    <Button variant="primary" className="login-button" onClick={handleSignUp}>Sign Up</Button>
                </div>
            </form>
        </div>
    );
}

export default SignUpForm;
