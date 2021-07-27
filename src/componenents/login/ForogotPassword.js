import React, { Component } from "react";

export default class ForogotPassword extends Component {
  render() {
    return (
      <div className="wrap">
        <div id="reset">
          <h1>Forgot Password</h1>
          <label htmlFor="username">
            <b>Username/Email</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="enter username"
          />

          <button className="btn btn-outline-primary form-control">
            <i class="bi bi-unlock"></i> Reset Password
          </button>
        </div>
      </div>
    );
  }
}
