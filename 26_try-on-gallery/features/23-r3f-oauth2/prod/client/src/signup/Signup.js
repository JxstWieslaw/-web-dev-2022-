import React, { Component } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      logdata:""
    };
  }

  submithandler = async (e) => {
    e.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      this.senddata = {
        username: this.state.username,
        email: this.state.email,
        mobile: this.state.mobile,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      };
      await axios
        .post("http://localhost:5000/signup", this.senddata)
        .then((Response) => alert(Response.data))
        .catch((Error) => {
          alert(Error);
        });
        this.setState({logdata:"registered"})
    } else {
      alert("Passwords do not match");
    }
  };

  inputhandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    if (this.state.logdata === "registered") {
      return <Navigate to="/" replace={true} />;
    }
    return (
      <div>
        <div className="container" onSubmit={this.submithandler}>
          <form className="form" id="createAccount">
            <h1 className="form__title">Create Account</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.inputhandler}
                className="form__input"
                placeholder="Username"
              />
              <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.inputhandler}
                className="form__input"
                placeholder="Email Address"
              />
              <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
              <input
                type="text"
                name="mobile"
                value={this.state.mobile}
                onChange={this.inputhandler}
                className="form__input"
                placeholder="Mobile Number"
              />
              <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.inputhandler}
                className="form__input"
                placeholder="Password"
              />
              <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.inputhandler}
                className="form__input"
                placeholder="Confirm Password"
              />
              <div className="form__input-error-message"></div>
            </div>
            <button className="form__button">Continue</button>
            <p className="form__text">
              <Link id="linkLogin" to="/" className="form__link">
                Already have an account? Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
