import React, { Component, Fragment } from "react";
import Helper from '../Helper.js';
import FormTask from '../components/FormTask.js';
import imageTask from "../../imgs/clipboard.svg"

class Task extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <div className="container-image-task my-5">
                    <img className="d-block" src={imageTask} alt="logo"></img>
                </div>
                <FormTask></FormTask>
            </Fragment>
        );
    }
}

export default Task;