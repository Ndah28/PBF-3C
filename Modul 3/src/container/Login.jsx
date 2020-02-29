import React from 'react';
import './Login.css';

class Login extends React.Component{
    render(){
        return (
            <div className="form-login">
                <h2 className="title-login">Form Login</h2>
                <div className="card">
                    <h1 className="title-card">Tugas Pertemuan Ketiga</h1>
                    <form method="post" action="#" class="login-form">
                        <div>
                            <label id="username"><b>Username </b></label>
                            <input type="text" placeholder="masukkan username"></input>
                        </div>
                        <br></br>
                        <div>
                            <label id="password"><b>Password </b></label>
                            <input type="password" placeholder="masukkan password"></input>
                        </div>
                        <div>
                        <button className="btn-login">Login</button>
                        </div>
                        <input type="checkbox" id="remember"/>Remember Me<br/>
                        <br></br>
                        <button className="btn-cancel">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;