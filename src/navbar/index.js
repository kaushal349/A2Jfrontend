import React, { Component } from "react";
import './index.scss'
import * as actions from '../store/actions/auth'
import {connect} from 'react-redux'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="a2jnavbar">
        <nav className="navbar navbar-custom navbar-expand-lg  navbar-dark">
          <a className="navbar-brand" href="/">
            <div>
              <img width="170" src={require('../Images/logoa2j.jpg')}  alt="" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" 
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto  nav-justified w-100">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/getinspiredhome">
                  Get Inspired
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link " href="/lawyerportal">
                  For advocates
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link " href="/chamberportal">
                  For clients
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/informationcenter">
                  Information Center
                </a>
              </li>
              {this.props.isAuthenticated?
              <li className="nav-item active">
               <a className="nav-link" onClick = {this.props.logout}>
                 Logout
               </a>
             </li>
              :
              <li className="nav-item dropdown active">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login/Register
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/login">
                    Login
                  </a>
                  <a className="dropdown-item" href="/register">
                    Register
                  </a>
                </div>
              </li>
              }

             
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      token: state.token,
      isAuthenticated: state.token!==null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);

