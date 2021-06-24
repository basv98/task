import React, { Component } from "react";
import Api from '../Api.js';
import { Redirect } from "react-router-dom";
import Helper from "../Helper.js";

class Login extends Component {

    state = {
        login: {
            email: "",
            password: "",
        },
        redirectHome: false
    }

    handleClande = (event) => {
        this.setState({
            login: {
                ... this.state.login,
                [event.target.id]: event.target.value
            }
        })
    }

    login = async () => {
        const response = await Api.ajx('http://127.0.0.1/api/login', {
            email: this.state.login.email,
            password: this.state.login.password
        });

        if (response.success) {
            localStorage.setItem('token', `Bearer ${response.data.token}`);
            this.setState({
                redirectHome: true
            });
        } else {
            Helper.message(response.messagge, true);
        }
    }

    render() {
        if (this.state.redirectHome || localStorage.getItem('token') != null) {
            return <Redirect to="/home" />;
        }
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
                                <input type="email" className="form-control" onChange={this.handleClande} value={this.state.login.email} id="email" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" onChange={this.handleClande} value={this.state.login.password} id="password"></input>
                            </div>
                            <button type="button" onClick={this.login} className="btn btn-primary btn-lg btn-block">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

