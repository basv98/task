import React, { Component } from "react";
import ListTask from "../components/ListTask.js";
import Search from "../components/Search.js";
import Helper from '../Helper.js';

class Home extends Component {
    state = {
        tasks: [
            { id: 1, description: "Esto es una prueba" },
            { id: 2, description: "Esto es una prueba numero 2" },
        ]
    }

    componentDidMount() {
        Helper.message("Hola mundo");
    }

    deleteTask(task_id) {
        Helper.message(`Se eliminó la tarea ${task_id}`);
    }

    render() {
        return (
            <div className="my-5" >
                <Search />
                <ListTask deleteTask={this.deleteTask} tasks={this.state.tasks}></ListTask>
            </div>
        );
    }
}

export default Home;