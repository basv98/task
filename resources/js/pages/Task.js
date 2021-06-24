import React, { Component, Fragment } from "react";
import Helper from '../Helper.js';
import Api from '../Api.js';
import FormTask from '../components/FormTask.js';
import imageTask from "../../imgs/clipboard.svg"
import { Redirect } from "react-router-dom";

class Task extends Component {

    state = {
        form: {
            taskName: "",
            descriptionTask: "",
            date: "",
            time: "",
        },
        redirectHome: false
    }

    componentDidMount() {
    }

    handleChanfe = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.id]: event.target.value
            }
        });
    }

    saveTask = async () => {
        const response = await Api.ajx('http://127.0.0.1/api/save', {
            task_name: this.state.form.taskName,
            task_description: this.state.form.descriptionTask,
            date_programation: `${this.state.form.date}`,
        });

        if (response.success) {
            this.setState({
                redirectHome: true
            });
        } else {
            Helper.message(response.messagge, true);
        }
    }

    render() {
        if (this.state.redirectHome) {
            return <Redirect to="/home" />;
        }
        return (
            <Fragment>
                <div className="container-image-task my-5">
                    <img className="d-block" src={imageTask} alt="logo"></img>
                </div>
                <FormTask onChange={this.handleChanfe} saveTask={this.saveTask} ></FormTask>
            </Fragment>
        );
    }
}

export default Task;