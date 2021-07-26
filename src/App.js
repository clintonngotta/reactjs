import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "login",
    };
  }
  render() {
    const { page } = this.state;
    let formElements = "";
    if (page === "login") {
      formElements = (
        <div id="login">
          <h1>Login</h1>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button
            type="button"
            className="btn btn-outline-primary form-control"
          >
            <i className="bi bi-box-arrow-in-right"></i> Login
          </button>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button className="btn btn-outline-primary">
              <i className="bi bi-arrow-right-circle"></i> Register
            </button>
            <button className="btn btn-outline-primary">
              <i className="bi bi-unlock"></i> Forgot Password
            </button>
          </div>
        </div>
      );
    } else if (page === "register") {
      formElements = (
        <div id="register">
          <h1>Register</h1>
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button
            type="button"
            className="btn btn-outline-primary form-control"
          >
            <i className="bi bi-arrow-right-circle"></i> Register
          </button>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button className="btn btn-outline-primary">
              <i className="bi bi-arrow-left-circle"></i> Back To Login
            </button>
          </div>
        </div>
      );
    } else {
      formElements = (
        <div id="forgotpassword">
          <h1>Reset Password</h1>
          <label htmlFor="uname">
            <b>Email</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Email"
            name="email"
            required
          />
          <button
            type="button"
            className="btn btn-outline-primary form-control"
          >
            <i className="bi bi-unlock"></i> Reset
          </button>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button className="btn btn-outline-primary">
              <i className="bi bi-arrow-left-circle"></i> Back
            </button>
          </div>
        </div>
      );
    }

    return <div className="wrap">{formElements}</div>;
  }
}
