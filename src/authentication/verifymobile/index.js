import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import * as Yup from "yup";
import Timer from 'react.timer'
import "./index.css";
import { NavLink, Redirect } from "react-router-dom";
import * as actions from '../../store/actions/auth'
import {connect} from 'react-redux'
import NavBar from '../../navbar'

class VerifyMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_otp_div: false
    };
  }

  render() {
    return (
     
      <React.Fragment>
        <NavBar />
        {this.props.otpverified?<Redirect to="/login"></Redirect>:null}
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
                    mobile_number: "",
                    otp:"",
                    is_otp_button: false,
                    send_otp: false
                  }}
                  // validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    if (values.is_otp_button) {
                      console.log("I am otp button");
                      this.setState({
                        show_otp_div: true
                      });
                      this.props.sendOTP(values.mobile_number)
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
                    
                      {this.state.show_otp_div ? (
                  
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

                      {this.state.show_otp_div ? (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                          onClick={e => {
                            setFieldValue("send_otp", true);
                            setFieldValue("is_otp_button", false);
                            handleSubmit(e);
                          }}
                        >
                          {isSubmitting ? "Please wait..." : "Verify OTP"}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                          onClick={e => {
                            setFieldValue("is_otp_button", true);
                            setFieldValue("send_otp", false);
                            handleSubmit(e);
                          }}
                        >
                          {isSubmitting ? "Please wait..." : "Send OTP"}
                        </button>
                      )}

                    {this.props.error?
                    <p id="error_received">
                          {this.props.error.message?
                          this.props.error.message:
                          <p>
                            OTP verified. Click <a href="/login">here</a> to Login.
                          </p>}
                    </p>:
                    null}

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
        error:state.error,
        otpverified:state.otpverified,
    }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (firstname,middlename,lastname,country_code, mobile_number, password1, password2) => dispatch(actions.authSignup( firstname,middlename,lastname,country_code,mobile_number,password1, password2)),
      verifyOTP: (otp,mobile_number) => dispatch(actions.verifyOTP(otp,mobile_number)),
      sendOTP: (mobile_number) => dispatch(actions.sendOTP(mobile_number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyMobile);
