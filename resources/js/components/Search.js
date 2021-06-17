import React, { Component, Fragment } from "react";

class Search extends Component {
    render() {
        return (
            <div className="row my-3">
                <div className="col-md-10">
                    <input className="form-control form-control-lg" type="text" placeholder="Searching..."></input>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary btn-lg btn-block">
                        Search<i className="fa fa-search ml-2" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );

    }
}

export default Search;

