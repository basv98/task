import React, { Component } from "react";
import ListTask from "../components/ListTask.js";
import Search from "../components/Search.js";
import Helper from '../Helper.js';
import { Redirect } from "react-router-dom";

class Home extends Component {

    state = {
        tasks: [
            { id: 1, description: "Esto es una prueba" },
            { id: 2, description: "Esto es una prueba numero 2" },
        ],
        redirect: {
            handle: false,
            to: ""
        }
    }

    componentDidMount() {
        // Helper.message("Hola mundo");
    }

    deleteTask(task_id, event) {
        event.stopPropagation();
        Helper.message(`Se eliminó la tarea ${task_id}`);
    }

    viewTask = (task_id) => {
        this.setState({
            redirect: {
                handle: true,
                to: `/task/${task_id}`
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
                <ListTask deleteTask={this.deleteTask} viewTask={this.viewTask} tasks={this.state.tasks}></ListTask>
            </div>
        );
    }
}

export default Home;