import React, { Component } from "react";
import Navbar from "./Navbar";

class Layout extends Component {
    render() {
        if (!localStorage.getItem("token")) {
            return window.location.href = "/";
        }
        return (
            <div>
                <Navbar menu=""></Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );

    }
}

export default Layout;