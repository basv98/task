import React, { Component, Fragment } from "react";

class FormTask extends Component {
    render() {
        return (
            <div className="my-5" >
                <form>
                    <div className="form-group">
                        <label htmlFor="taskName">Task name</label>
                        <input onChange={this.props.onChange} type="text" className="form-control" id="taskName" placeholder="title" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionTask">Description task</label>
                        <textarea onChange={this.props.onChange} className="form-control" id="descriptionTask" rows="3" required></textarea>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label className="d-block" htmlFor="time">Date</label>
                            <input onChange={this.props.onChange} className="form-control" type="date" id="date" name="date" required></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="d-block" htmlFor="time">Time</label>
                            <input onChange={this.props.onChange} className="form-control" type="time" id="time" name="time" required></input>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="button" onClick={this.props.saveTask} className="btn btn-primary btn-lg px-5">
                            Save <i className="fa fa-floppy-o ml-2" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormTask;