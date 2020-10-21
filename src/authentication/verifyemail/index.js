import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import Timer from 'react.timer'
import "./index.css";
import { NavLink } from "react-router-dom";
import * as actions from '../../store/actions/auth'
import {connect} from 'react-redux'
import NavBar from '../../navbar'

class VerifyEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container" id="verifymobile">
          <div className="row">
            <div className="col-6 align-items-center d-none d-lg-flex">
              <img src={require("../../Images/logo.png")} alt="" />
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="login-card">
                <div className="buttons">
                  <NavLink to="/login">
                    <button type="button" className="btn btn-sec">
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="register">
                    <button type="button" className="btn btn-active">
                      Register
                    </button>
                  </NavLink>
                </div>
                {/* join A2J header */}
                <div className="pb-3 advocate-header">
                  <span className="join-a2j">Join A2J</span>

                  <span>
                    Are you an advocate?<sup> Register here!</sup>
                  </span>
                </div>
                {/* Join A2J header ends */}
                <Formik
                  initialValues={{
                   email:""
                  }}
                  // validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                  
                    this.props.verifyEmail(values.email)
                     
                    
                    setSubmitting(false);
                    // resetForm();
                  }}
                >
                  {({
                    handleSubmit,
                    setFieldValue,
                    touched,
                    errors,
                    isSubmitting
                  }) => (
                    <Form>
                     
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <div className="input-group">
                          <Field
                            type="text"
                            name="email"
                            placeholder="Email address"
                            className={`form-control ${
                              touched.email && errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
    
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                          onClick={e => {
                            handleSubmit(e);
                          }}
                        >
                          {isSubmitting ? "Please wait..." : "Send verification link"}
                        </button>
                      
                        <p id="error_received">
                            {this.props.error?
                            this.props.error:
                            <h6> Email Verified. Click <a href="/">here</a> to Login. </h6>
                            }
                        </p>
                    
                    </Form>
                    
                  )}
                </Formik>
                <br />
                <button type="button" className="btn btn-danger button-margin">
                  Login with Gmail
                </button>
                &nbsp;
                <button type="button" className="btn btn-info button-margin">
                  Connect with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
    return{
        error:state.error
    }
}

const mapDispatchToProps = dispatch => {
  return {
      verifyEmail: (email) => dispatch(actions.verifyEmail(email)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
