import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="wrap">
        <div id="login">
          <h1>Login</h1>
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="enter username"
          />
          <label htmlFor="username">
            <b>Password</b>
          </label>
          <input
            className="form-control"
            type="password"
            placeholder="enter password"
          />
          <button className="btn btn-outline-primary form-control">
            <i className="bi bi-box-arrow-in-right"></i> Login
          </button>
        </div>
      </div>
    );
  }
}
