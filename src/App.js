import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
// import Register from "./components/Register";
// import ResetPassword from "./components/ResetPassword";
export default class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Login />
        {/* <Register />
        <ResetPassword /> */}
      </div>
    );
  }
}
