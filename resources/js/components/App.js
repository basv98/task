import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css"

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/home" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;
