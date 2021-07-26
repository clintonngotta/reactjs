import React, { Component } from "react";

export default class ResetPassword extends Component {
  render() {
    return (
      <div id="forgotpassword">
        <h1>Reset Password</h1>
        <label for="uname">
          <b>Email</b>
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        />
        <button type="button" className="btn btn-outline-primary form-control">
          Reset
        </button>
      </div>
    );
  }
}
