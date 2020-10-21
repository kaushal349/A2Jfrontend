import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Timer from "react.timer";
import "./index.css";
import { NavLink, Redirect } from "react-router-dom";
import * as actions from '../../store/actions/auth'
import {connect} from 'react-redux'
import NavBar from '../../navbar'

const LoginSchema = Yup.object().shape({
  first_name: Yup.string().required("This field is required"),
  password1: Yup.string().required('Password is required'),
  password2: Yup.string()
     .oneOf([Yup.ref('password1'), "Passwords dont match"])
     .required('Password confirm is required')
});

class LawyerSignup extends React.Component {
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
        {this.props.otpverified?<Redirect to="/filllawyerdetails"></Redirect>:null}
        <div className="container" id="register-advocate">
          <div className="row">
            {/* <div className="col-6 align-items-center justify-content-start d-none d-lg-flex flex-column"> */}
            <div className="col-6 left-pane">
              <p className="heading1">Prove your POTENTIAL</p>
              <p className="heading1">
                A2J provides an ever expanding network of advocates. We are
                dedicated to simplify your procedures
              </p>
              <img src={require("../../Images/logo.png")} alt="" />
              <p>Join the network to improve your practice</p>
              <p>
                We provide various services to increase client satisfaction with
                you.
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="login-card">
                <div className="buttons">
                  <NavLink to="/login">
                    <button type="button" className="btn btn-sec">
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button type="button" className="btn btn-active">
                      Register
                    </button>
                  </NavLink>
                </div>
                {/* join A2J header */}
                <div className="pb-3 advocate-header">
                  <span className="join-a2j">Join our Advocates Network</span>
                  <span>
                    Not an advocate?<sup> Register here!</sup>
                  </span>
                </div>
                {/* Join A2J header ends */}
                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    mobile_number: "",
                    password1: "",
                    password2: "",
                    is_otp_button: false,
                    is_create_account_button: false
                  }}
                   validationSchema={LoginSchema}
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
                        <label htmlFor="first_name">First Name</label>
                        <Field
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          className={`form-control ${
                            touched.first_name && errors.first_name
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="first_name"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <Field
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          className={`form-control ${
                            touched.last_name && errors.last_name
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="last_name"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="mobile_number">Mobile Number</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">+91</span>
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
                          type="password"
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
                          type="password"
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
                            <input
                              type="text"
                              name="otp"
                              className="form-control"
                            />
                            <span>
                              <Timer countDown startTime={30} />
                            </span>
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
                            this.props.non_field_errors:null
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

export default connect(mapStateToProps, mapDispatchToProps)(LawyerSignup);

