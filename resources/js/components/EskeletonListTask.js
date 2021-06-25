import React, { Component, Fragment } from "react";
import Skeleton from "react-loading-skeleton";

class EskeletonListTask extends Component {

    render() {
        return (
            <Fragment>
                {new Array(3).fill(1).map((_, i) => {
                    return (
                        <div key={i} className="list-group mt-3">
                            <div className="list-group-item list-group-item-action">
                                <Skeleton className="my-2" variant="text" height={30} />
                                <Skeleton variant="rect" height={118} />
                            </div>
                        </div>
                    );
                })}
            </Fragment>
        );

    }
}

export default EskeletonListTask;
