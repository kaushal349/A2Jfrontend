import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Timer from 'react.timer'
import "./index.css";
import { NavLink, Redirect } from "react-router-dom";
import * as actions from '../../store/actions/auth'
import {connect} from 'react-redux'
import NavBar from '../../navbar'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_otp_div: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.props.otpverified?<Redirect to="/login"></Redirect>:null}
        <div className="container" id="register-client">
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
                    firstname: "",
                    middlename:"",
                    lastname: "",
                    mobile_number: "",
                    password1: "",
                    password2: "",
                    otp:"",
                    is_otp_button: false,
                    is_create_account_button: false
                  }}
                  // validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (values.is_otp_button) {
                      console.log("I am otp button");
                      this.setState({
                        show_otp_div: true
                      });
                      this.props.onAuth( values.firstname,values.middlename,values.lastname,'+91',values.mobile_number, values.password1, values.password2)
                      console.log(values)
                    } else {
                      console.log("I am create account button");
                      this.props.verifyOTP(values.otp,values.mobile_number)
                      console.log(values.otp)
                    }
                    
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
                        <label htmlFor="firstname">Firstname</label>
                        <Field
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          className={`form-control ${
                            touched.firstname && errors.firstname
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="firstname"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="middlename">Middlename</label>
                        <Field
                          type="text"
                          name="middlename"
                          placeholder="Last Name"
                          className={`form-control ${
                            touched.middlename && errors.middlename
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="middlename"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="lastname">Lastname</label>
                        <Field
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          className={`form-control ${
                            touched.lastname && errors.lastname
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="lastname"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mobile_number">Mobile Number</label>
                        <div className="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">+91</span>
                          </div>
                          <Field
                            type="text"
                            name="mobile_number"
                            placeholder="Mobile Number"
                            className={`form-control ${
                              touched.mobile_number && errors.mobile_number
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="mobile_number"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="password1">Create Password</label>
                        <Field
                          type="password1"
                          name="password1"
                          placeholder="Create Password"
                          className={`form-control ${
                            touched.password1 && errors.password1
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password1"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <Field
                          type="password2"
                          name="password2"
                          placeholder="Confirm Password"
                          className={`form-control ${
                            touched.password2 && errors.password2
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password2"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <input type="checkbox" name="promotional_offers" />{" "}
                        &nbsp;
                        <label
                          htmlFor="promotional_offers"
                          style={{ fontSize: "0.8em" }}
                        >
                          Receive relevant offers and promotional communication
                          from A2J
                        </label>
                      </div>

                      <div className="form-group">
                        <p>By signing up, I agree to the terms & conditions</p>
                      </div>

                      {this.state.show_otp_div && !this.props.error? (
                  
                        <div className="otp-div">
                          <div className="form-group">
                            <label htmlFor="otp">Enter OTP</label>
                              <Field
                              type="text"
                              name="otp"
                              className={`form-control ${
                                touched.otp && errors.otp
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                          <span><Timer countDown startTime={30} /></span>
                          <ErrorMessage
                            component="div"
                            name="otp"
                            className="invalid-feedback"
                          />
                    
                          </div>
                        </div>
                      ) : null}

                      {this.state.show_otp_div && !this.props.error? (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                          onClick={e => {
                            setFieldValue("is_create_account_button", true);
                            setFieldValue("is_otp_button", false);
                            handleSubmit(e);
                          }}
                        >
                          {isSubmitting ? "Please wait..." : "Create Account"}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                          onClick={e => {
                            setFieldValue("is_otp_button", true);
                            setFieldValue("is_create_account_button", false);
                            handleSubmit(e);
                          }}
                        >
                          {isSubmitting ? "Please wait..." : "Get OTP"}
                        </button>
                      )}

                      <p id="error_received">
                        {this.props.error?
                          <p>
                            {this.props.error.username?
                            this.props.error.username
                            :
                            null}
                            <br />
                            {this.props.error.password1?
                            this.props.error.password1
                            :
                            <p>
                              {this.props.error.message?
                                this.props.error.message:
                                this.props.error.non_field_errors?
                                this.props.error.non_field_errors:null
                                  }
                            </p>
                            }
                          </p>
                        :
                        null}
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
  return {
      error: state.error,
      otpverified: state.otpverified,
  }
}



const mapDispatchToProps = dispatch => {
  return {
      onAuth: (firstname,middlename,lastname,country_code, mobile_number, password1, password2) => dispatch(actions.authSignup( firstname,middlename,lastname,country_code,mobile_number,password1, password2)),
      verifyOTP: (otp,mobile_number) => dispatch(actions.verifyOTP(otp,mobile_number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
