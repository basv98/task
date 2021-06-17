import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Layout from "./Layout";
import 'font-awesome/css/font-awesome.min.css';
import Task from '../pages/Task';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Layout>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/task" component={Task}></Route>
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}
export default App;
