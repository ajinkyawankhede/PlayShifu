import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Topbar from "./home";
import Select from "react-select";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackList: [],
    };
  }

  getFeedbackForms() {
    let token = localStorage.getItem("userToken");
    axios({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      url: `http://localhost:8888/api/feedbackForms `,
    }).then((response) => {
      if (response.data.s) {
        this.setState({ feedbackList: response.data.d });
      } else {
        alert("Something went wrong");
      }
    });
  }

  componentDidMount() {
    this.getFeedbackForms();
  }

  delete = (e, id) => {
    let token = localStorage.getItem("userToken");
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      data: { id: id },
      url: `http://localhost:8888/api/deleteFeedback `,
    }).then((response) => {
      if (response.data.s) {
        alert(response.data.m);
        window.location = "/feedbackList";
      } else {
        alert("Something went wrong");
      }
    });
  };

  render() {
    return (
      <div>
        <section>
          <Topbar active={"Form"} />
        </section>
        <section className="request-access margin-top-30" id="feedbackForms">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="box request-access-list">
                  <h3
                    style={{
                      textAlignLast: "center",
                      background: "silver",
                      fontFamily: "monospace",
                    }}
                  >
                    FEEDBACKS SENT
                  </h3>
                  <table className="table custom-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.feedbackList.map((feedback, i) => {
                        return (
                          <tr className="tr-shadow">
                            <td>{feedback.name}</td>
                            <td>{feedback.email}</td>
                            <td>{feedback.message}</td>
                            <td>
                              {feedback.email ===
                              localStorage.getItem("email") ? (
                                <button
                                  className="btn btn-danger btn-shadow"
                                  style={{ width: "100px" }}
                                  data-toggle="modal"
                                  data-target="#hold"
                                  onClick={(e) => {
                                    const id = feedback._id;
                                    this.delete(e, id);
                                  }}
                                >
                                  Delete
                                </button>
                              ) : null}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Feedback;
