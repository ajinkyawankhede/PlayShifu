import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Topbar from "./home";
import Select from "react-select";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
      mobile: "",
      address: "",
    };
  }

  handleNumber = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ mobile: e.target.value });
    } else {
      alert("Please Use Only Numeric Value");
      e.preventDefault();
    }
  };

  handleInput = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  submitQuery = (e) => {
    e.preventDefault();
    const re = /^[0-9\b]+$/;

    if (!re.test(this.state.mobile)) {
      alert("Mobile Number can only be numeric");
      return;
    }
    if (
      this.state.name === null ||
      this.state.name === "" ||
      this.state.name === undefined ||
      this.state.address === null ||
      this.state.address === "" ||
      this.state.address === undefined ||
      this.state.mobile === null ||
      this.state.mobile === "" ||
      this.state.mobile === undefined ||
      this.state.message === null ||
      this.state.message === "" ||
      this.state.message === undefined
    ) {
      alert("Please provide all the information");
      return;
    }

    let token = localStorage.getItem("userToken");
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      url: `http://localhost:8888/api/submitForm`,
      data: {
        name: this.state.name,
        address: this.state.address,
        mobile: this.state.mobile,
        message: this.state.message,
      },
    }).then((response) => {
      if (response.data.s) {
        alert(response.data.m);
        window.location = "/feedbackList";
      } else {
        alert("Something went wrong");
      }
    });
  };

  handleMessage = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <section>
          <Topbar active={"Form"} />
        </section>
        <section className="newform">
          <div className="container-fluid">
            <div className="box">
              <h3
                style={{
                  textAlignLast: "center",
                  background: "silver",
                  fontFamily: "monospace",
                }}
              >
                FEEDBACK FORM
              </h3>
              <div className="row">
                <div className="col-md-12">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          required={true}
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>

                    <div class="form-group">
                      <div class="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          placeholder="Address"
                          required={true}
                          onChange={this.handleInput}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-9">
                        <input
                          maxLength="15"
                          type="Text"
                          className="form-control"
                          name="mobile"
                          placeholder="Mobile No."
                          required={true}
                          onChange={this.handleNumber}
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Email ID"
                          required={true}
                          value={localStorage.getItem("email")}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-9">
                        <textarea
                          className="form-control"
                          rows="5"
                          name="message"
                          onChange={this.handleInput}
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </form>
                  <button
                    onClick={this.submitQuery}
                    type="submit"
                    className="btn btn-success btn-shadow btn-md"
                    style={{ marginRight: "390px", float: "right" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
