import React, { Component } from "react";

class Login extends Component {

    render() {
        return (
            <div className="caja-login-container">
                <div className="card mx-auto w-25">
                    <div className="card-header text-center">
                        Login
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password"></input>
                            </div>
                            <button type="button" className="btn btn-primary btn-lg btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;