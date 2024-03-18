import "./Login.css";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useNavigate } from "react-router-dom";



function LoginForm() {

    const userUrl = new URL('https://65d55b833f1ab8c63436c5fa.mockapi.io/user');

    //useNavigate
    const navigate = useNavigate();

    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [errorLabel, seterrorLabel] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleLogin = () => {
        //todo
        seterrorLabel('');

        if ('' === userName || '' === password) {
            seterrorLabel('Please enter your username or password');
            return;
        }

        if (password.length < 7) {
            seterrorLabel('Password must be 8 characters or longer');
            return;
        }

        //validate login
        userUrl.searchParams.append('username', userName);
        fetch(userUrl, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            const usrname = Object.values(tasks[0])[1];
            const pss = Object.values(tasks[0])[2];
            console.log(usrname);

            if (usrname === userName) {
                console.log('ok');
            }
            else {
                seterrorLabel('Incorrect Username');
                return;
            }

            if (pss === password){
                console.log('ok');
                navigate('/');
            }
            else{
                seterrorLabel('Incorrect Password');
                return
            }

        }).catch(error => {
            // handle error
            console.log("unable to get");
            seterrorLabel('Incorrect Username');
            return;
        })

    }

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

    return (
        <div className="form-background">
            <form action="">

                <div>
                    <input type="text" placeholder="Username or Email Address" className="inputbox top-thirty width-eighty"
                        value={userName} onChange={(e) => setuserName(e.target.value)} />
                </div>

                <div className="input-container">
                    <input type={type} placeholder="Password" className="inputbox"
                        value={password} onChange={(e) => setpassword(e.target.value)} />
                    <span className="icon-container" onClick={handleToggle}>
                        <Icon className="icon-content" icon={icon} size={25} />
                    </span>
                    <label className="errorLabel">{errorLabel}</label>
                </div>

                <div className="top-thirty">
                    <Button variant="primary" className="login-button" onClick={handleLogin}>Login</Button>
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