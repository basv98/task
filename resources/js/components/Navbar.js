import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Navbar extends Component {
    
    logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand" >Task</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end">
                        <i className="fa fa-sign-out text-white fa-2x mr-4 cursor-pointer" onClick={this.logout} title="Logout" aria-hidden="true"></i>
                    </div>
                </div>
            </nav>
        );

    }
}

export default Navbar;