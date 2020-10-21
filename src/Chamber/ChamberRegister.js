import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Timer from "react.timer";
import "./ChamberRegister.css";
import { NavLink, Redirect } from "react-router-dom";
import NavBar from '../navbar'
import axios from "axios";
import {connect} from 'react-redux'

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  password1: Yup.string().required("Password is required")
});

class ChamberRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_otp_div: false,
      registered:false,
    };
  }

  render() {
    return (
      this.state.registered?<Redirect to="/chamberportal" />:
      <React.Fragment>
        <NavBar />
        <div className="container" id="register-chamber">
          <div className="row">
            {/* <div className="col-6 align-items-center justify-content-start d-none d-lg-flex flex-column"> */}
            <div className="col-6 left-pane">
              <p className="heading1">It's all about visibility</p>
              <p className="heading1">
                A2J provides an ever expanding network of advocates. We are
                dedicated to simplify your procedures.
              </p>
              <img src={require("../Images/logo.png")} alt="" />
              <p>Join the network to improve your practice</p>
              <p>
                We provide various services to increase client satisfaction with
                you.
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="login-card">
                <div className="buttons">
                  <NavLink to="register">
                    <button type="button" className="btn btn-active">
                      Register
                    </button>
                  </NavLink>
                </div>
                {/* join A2J header */}
                <div className="pb-3 advocate-header">
                  <span className="join-a2j">Join our Chambers Network</span>

                  <span>
                    Chamber not registered yet?<sup> Register here!</sup>
                  </span>
                </div>
                {/* Join A2J header ends */}
                <Formik
                  initialValues={{
                    name: "",
                    location:"",
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
                    } else {
                      console.log("I am create account button");
                    }

                    const chamber = {
                      'name':values.name,
                      'location':values.location,
                    }
                    axios.post('lawchamber/viewlawchamber/'+this.props.user_id+'/',chamber)
                    .then(res => {
                      alert('Chamber Registered !')
                      this.setState({registered:true})
                    })
                    .catch(err=> console.log(err.response))

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
                        <label htmlFor="name">Name of the Chamber</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="First Name"
                          className={`form-control ${
                            touched.name && errors.name
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="name"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <div className="input-group">
                          <Field
                            type="text"
                            name="location"
                            placeholder="Location of Chamber"
                            className={`form-control ${
                              touched.location && errors.location
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="location"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      {/*<div className="form-group">
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

                      {this.state.show_otp_div ? (
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

                        

                      {this.state.show_otp_div ? (
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
                        )} */}

                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          disabled={isSubmitting}
                          onClick={e => {
                            handleSubmit(e);
                          }}
                        > 
                        {isSubmitting ? "Please wait..." : "Submit"}

                        </button>

                    </Form>
                  )}
                </Formik>
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
      token:state.token,
      user_id: state.user_id,
  }
}


export default connect(mapStateToProps)(ChamberRegister);

