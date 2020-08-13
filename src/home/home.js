import React, { Component } from "react";
import "./home.css";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "",
      pending: "",
      approved: "",
    };
  }

  handleLogOut = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location = "/login";
  };

  render() {
    return (
      <div className="wrapper">
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a
                href="/form"
                className={this.state.form}
                style={{ marginRight: "20px" }}
              >
                Form
              </a>
            </li>
            <li className="nav-item ">
              <a
                href="/feedbackList"
                className={this.state.pending}
                style={{ marginRight: "20px" }}
              >
                {" "}
                Feedback
              </a>
            </li>
          </ul>

          <div class="logout" style={{ marginLeft: "20px" }}>
            <button
              onClick={this.handleLogOut}
              style={{ marginLeft: "1248px" }}
              class="btn btn-primary btn-shadow"
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Topbar;
