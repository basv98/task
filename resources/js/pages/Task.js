import React, { Component } from "react";
import Helper from '../Helper.js';

class Task extends Component {

    componentDidMount() {
        Helper.message("Hola mundo");
    }

    render() {
        return (
            <div className="my-5" >
              
            </div>
        );
    }
}

export default Task;