import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

class EskeletonFormTask extends Component {
    render() {
        return (
            <div className="my-5" >
                <div className="form-group">
                    <Skeleton className="my-2" variant="text" height={50} />
                </div>
                <div className="form-group">
                    <Skeleton className="my-2" variant="text" height={200} />
                </div>
                <div className="row">
                    <div className="form-group col-md-6">
                        <Skeleton className="my-2" variant="text" height={50} />
                    </div>
                    <div className="form-group col-md-6">
                        <Skeleton className="my-2" variant="text" height={50} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EskeletonFormTask;