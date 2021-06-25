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
        let task_id = this.props.match.params.task_id;
        task_id && this.chargeTask(task_id);
    }

    chargeTask = async (task_id) => {
        const response = await Api.ajxGet(`http://127.0.0.1/api/task?task_id=${task_id}`);
        if (response.success) {
            this.setState({
                form: {
                    taskName: response.data.task_name,
                    descriptionTask: response.data.description,
                    date: response.data.date_programation,
                    time: response.data.hour_programation,
                }
            });
        } else {
            Helper.message(response.messagge, true);
        }
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
        let url = "http://127.0.0.1/api/save";
        let task_id = this.props.match.params.task_id;
        let request = {
            task_name: this.state.form.taskName,
            task_description: this.state.form.descriptionTask,
            date_programation: `${this.state.form.date} ${this.state.form.time}`,
        };

        if (task_id) {
            url = "http://127.0.0.1/api/update"
            request = {
                ...request,
                task_id
            }
        }
        
        const response = await Api.ajx(url, request);

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
                <FormTask formValues={this.state.form} onChange={this.handleChanfe} saveTask={this.saveTask} ></FormTask>
            </Fragment>
        );
    }
}

export default Task;