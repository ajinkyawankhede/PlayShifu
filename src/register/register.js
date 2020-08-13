import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      emailInput: null,
    });
  };

  handlePasssword = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      passwordInput: null,
    });
  };

  handleSubmitSignUpForm = (event) => {
    event.preventDefault();

    if (
      this.state.password === null ||
      this.state.password === "" ||
      this.state.password === undefined ||
      this.state.email === null ||
      this.state.email === "" ||
      this.state.email === undefined
    ) {
      alert("Please Provide All Information");
      return false;
    }

    axios({
      method: "POST",
      url: `http://localhost:8888/api/signUp`,
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    }).then(function (response) {
      if (response.data.s) {
        alert(response.data.m);
        window.location = "/login";
      } else {
        alert(response.data.m);
      }
    });
  };

  render() {
    return (
      <div className="signup-content">
        <div className="row">
          <div
            className="col-md-3"
            style={{ marginLeft: "550px", marginTop: "145px" }}
          >
            <div className="signup-form" style={{ marginLeft: "20px" }}>
              <h2>Sign up</h2>
              <form onSubmit={this.handleSubmitSignUpForm}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control input"
                    name="email"
                    placeholder="Email ID"
                    onChange={this.handleEmail}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control input"
                    name="password"
                    placeholder="Password"
                    onChange={this.handlePasssword}
                  />
                </div>

                <div className="form-group margin-top-30">
                  <button
                    type="submit"
                    // onClick={this.handleSubmitSignUpForm}
                    className="btn btn-success btn-shadow btn-md"
                    style={{ float: "right" }}
                  >
                    Create Account
                  </button>
                  <p className="login-link">
                    Already signed up? <Link to="/login">Log in</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
