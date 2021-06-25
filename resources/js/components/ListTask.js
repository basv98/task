import React, { Component, Fragment } from "react";
import EskeletonListTask from "./EskeletonListTask.js";

class ListTask extends Component {

    render() {
        const tasks = this.props.tasks;
        const deleteTask = this.props.deleteTask;
        const viewTask = this.props.viewTask;

        if (this.props.isLoading) {
            return <EskeletonListTask></EskeletonListTask>;
        }

        return (
            <Fragment>
                {tasks.map(function (task) {
                    return (
                        <div key={task.id} className="list-group mt-3" onClick={() => viewTask(task.id)}>
                            <div className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{task.task_name}</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p className="mb-1">{task.description}</p>
                                <div className="d-flex justify-content-end">
                                    <button onClick={(event) => { deleteTask(task.id, event) }} className="btn btn-danger">
                                        Delete<i className="fa fa-trash-o ml-2" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Fragment>
        );

    }
}

export default ListTask;