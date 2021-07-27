import React, { Component } from "react";
import Login from "./componenents/login/Login";
import "./App.css";
import Signup from "./componenents/signup/Signup";
import ForogotPassword from "./componenents/login/ForogotPassword";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "login",
    };
  }
  render() {
    const { page } = this.state;
    return (
      <div>
        {page === "login" ? (
          <React.Fragment>
            <Login />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                alignItems: "center",
                width: "50%",
                marginLeft: "25%",
              }}
            >
              <button
                className="btn btn-outline-primary form-control"
                style={{
                  marginRight: "10px",
                }}
                onClick={() =>
                  this.setState({
                    page: "signup",
                  })
                }
              >
                <i className="bi bi-arrow-right-circle-fill"></i> Sign Up
              </button>
              <button
                className="btn btn-outline-primary form-control"
                onClick={() =>
                  this.setState({
                    page: "forogotPassword",
                  })
                }
              >
                <i className="bi bi-unlock"></i> Forgot Password
              </button>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}

        {page === "signup" ? (
          <React.Fragment>
            <Signup />{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                alignItems: "center",
                width: "50%",
                marginLeft: "25%",
              }}
            >
              <button
                className="btn btn-outline-primary form-control"
                style={{
                  marginRight: "10px",
                }}
                onClick={() =>
                  this.setState({
                    page: "login",
                  })
                }
              >
                <i className="bi bi-arrow-left-circle"></i> Back To Login
              </button>
              <button
                className="btn btn-outline-primary form-control"
                onClick={() =>
                  this.setState({
                    page: "forogotPassword",
                  })
                }
              >
                <i className="bi bi-unlock"></i> Forgot Password
              </button>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
        {page === "forogotPassword" ? (
          <React.Fragment>
            <ForogotPassword />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                alignItems: "center",
                width: "50%",
                marginLeft: "25%",
              }}
            >
              <button
                className="btn btn-outline-primary form-control"
                onClick={() =>
                  this.setState({
                    page: "login",
                  })
                }
              >
                <i className="bi bi-arrow-left-circle"></i> Back To Login
              </button>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    );
  }
}
