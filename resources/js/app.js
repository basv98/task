import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App.js"
import "bootstrap/dist/css/bootstrap.css"
import "../css/app.css";

const app = document.querySelector("#app")
ReactDOM.render(<App />, app);