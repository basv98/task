import React, { Component } from "react";
import ListTask from "../components/ListTask.js";
import Search from "../components/Search.js";
import Helper from '../Helper.js';
import Api from "../Api.js"
import { Redirect } from "react-router-dom";

class Home extends Component {

    state = {
        tasks: [],
        redirect: {
            handle: false,
            to: ""
        },
        isLoading: true
    }

    componentDidMount() {
        this.tasks();
    }

    deleteTask = async (task_id, event) => {
        event.stopPropagation();
        const response = await Api.ajx('http://127.0.0.1/api/delete', {
            task_id
        });
        if (response.success) {
            this.tasks();
            Helper.message(`Se eliminĂ³ la tarea ${task_id}`);
        } else {
            Helper.message(response.messagge, true);
        }
    }

    tasks = async () => {
        const response = await Api.ajxGet("http://127.0.0.1/api/show", {}, "GET");
        if (response.success) {
            const tasks = response.data;
            this.setState({
                tasks: tasks,
                isLoading: false
            });
        } else {
            Helper.message("Ha ocurrido un error al cargar los datos", true);
        }
    }

    viewTask = (task_id) => {
        this.redirect(`/task/${task_id}`);
    }

    redirect(url) {
        this.setState({
            redirect: {
                handle: true,
                to: url
            }
        });
    }

    render() {
        if (this.state.redirect.handle) {
            return <Redirect to={this.state.redirect.to} />;
        }
        return (
            <div className="my-5" >
                <Search />
                <ListTask isLoading={this.state.isLoading} deleteTask={this.deleteTask} viewTask={this.viewTask} tasks={this.state.tasks}></ListTask>
                <button onClick={() => this.redirect("/task")} type="button" className="btn btn-primary my-4">
                    New task<i className="fa fa-plus-square-o ml-2" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

export default Home;