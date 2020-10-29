import React from "react";
import "./ChamberSidebar.css";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import ArticleFeed from "./ArticleFeed";
import ClientStories from "./ClientStories";
import ListOfAdvocates from "./ListOfAdvocates";
import ChamberNavbar from '../chambernavbar'

class ChamberSidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      display: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (display_var, event) => {
    this.setState({ display: display_var });
  };

  handleChange2 = (display_var, event) => {
    this.setState({ display: display_var });
    document.getElementById("chamber-accordian-toggler").click();
  };

  render() {
    return (
      <React.Fragment>
        {/* <ChamberNavbar /> */}
        <div className="container-fluid px-0" id="chamber-dashboard">
          {/* create dashboard accordian */}
          <div className="row">
            <div className="col">
              <Accordion className="accordian">
                <div className="d-flex justify-content-center">
                  <Accordion.Toggle
                    // as={Button0}
                    eventKey="0"
                    id="chamber-accordian-toggler"
                    className="accordian-btn"
                  >
                    Your dashboard
                    <FontAwesomeIcon
                      icon={faAngleDoubleDown}
                      className="ml-3"
                    />
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse eventKey="0">
                  <div>
                    <ul className="list-group ">
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleChange2("article_feed")}
                      >
                        Article feed
                      </li>
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleChange2("my_cases")}
                      >
                        Our cases
                      </li>
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleChange2("question_corner")}
                      >
                        Question corner
                      </li>
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleChange2("publish_article")}
                      >
                        Publish an article
                      </li>
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          this.handleChange2("view_client_stories")
                        }
                      >
                        View client stories
                      </li>
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleChange2("register_query")}
                      >
                        Register a query
                      </li>
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleChange2("settings")}
                      >
                        settings
                      </li>
                      <li
                        className="list-group-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleChange2("list_advocates")}
                      >
                        List of Advocates
                      </li>
                    </ul>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
          </div>
          {/* dashboard accordian ends */}
          <div className="row">
            <div className="sidebar">
              <div className="row justify-content-center align-items-center sidebar-header">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={require("../Images/law1.png")}
                    alt=""
                    className="img-enhance"
                  />
                </div>
                <div className="col d-flex justify-content-center pt-2">
                  Mr/Mrs XYZ
                </div>
              </div>
              <hr />

              <div
                className="sidebar-btn"
                id="chamber-artcle-feed-link"
                onClick={() => this.handleChange("article_feed")}
              >
                Article feed
              </div>
              <div
                className="sidebar-btn"
                id="chamber-my-cases-link"
                onClick={() => this.handleChange("my_cases")}
              >
                Our cases
              </div>
              <div
                className="sidebar-btn"
                id="chamber-question-corner-link"
                onClick={() => this.handleChange("question_corner")}
              >
                Question corner
              </div>
              <div
                className="sidebar-btn"
                id="chamber-publish-article-link"
                onClick={() => this.handleChange("publish_article")}
              >
                Publish an article
              </div>
              <div
                className="sidebar-btn"
                id="chamber-view-client-stories-link"
                onClick={() => this.handleChange("view_client_stories")}
              >
                View client stories
              </div>
              <div
                className="sidebar-btn"
                id="chamber-register-query-link"
                onClick={() => this.handleChange("register_query")}
              >
                Register a query
              </div>
              <div
                className="sidebar-btn"
                id="chamber-settings-link"
                onClick={() => this.handleChange("settings")}
              >
                Settings
              </div>
              <div
                className="sidebar-btn"
                id="chamber-list-advocates-link"
                onClick={() => this.handleChange("list_advocates")}
              >
                List of Advocates
              </div>
            </div>
            <div className="col content">
              {this.state.display === "view_client_stories" ? (
                <ClientStories />
              ) : this.state.display === "list_advocates" ? (
                <ListOfAdvocates />
              ) : (
                <ArticleFeed />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChamberSidebar;
