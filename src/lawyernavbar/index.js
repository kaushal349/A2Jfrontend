import React, { Component } from "react";
import './index.css'
import * as actions from '../store/actions/auth'
import {connect} from 'react-redux'

class LawyerNavbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="a2jnavbar">
        <nav className="navbar navbar-custom navbar-expand-lg navbar-dark ">
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
            <ul className="navbar-nav">
              <li>
                <form class="form-inline my-2 my-lg-6" style={{width:"50px"}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search for Lawyers,Specialization and Law Chambers" aria-label="Search" />
                </form>
                </li>
            </ul>
            <ul className="navbar-nav justify-content-end w-100">
              <li className="nav-item active" style={{marginRight:"3%"}}>
                <a className="nav-link" href="/informationcenter">
                  Information Center
                </a>
              </li>
              <li className="nav-item active"  style={{marginRight:"3%"}}>
                <a className="nav-link " href="/filllawyerdetails">
                  My Profile
                </a>
              </li>
              <li className="nav-item active"  style={{marginRight:"3%"}}>
               <a className="nav-link" href="/" onClick = {this.props.logout}>
                 Logout
               </a>
             </li>
             
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

export default connect(mapStateToProps,mapDispatchToProps)(LawyerNavbar);

