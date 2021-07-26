import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div id="login">
        <h1>Login</h1>
        <label for="uname">
          <b>Username</b>
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <button type="button" className="btn btn-outline-primary form-control">
          Login
        </button>
      </div>
    );
  }
}
