import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";
import { NavLink } from "react-router-dom";
import * as actions from '../../store/actions/auth'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import NavBar from '../../navbar'

const LoginSchema = Yup.object().shape({
  login_id: Yup.string().required("This field is required"),
  password: Yup.string().required("Password is required")
});

class LawyerLogin extends React.Component {
  constructor(){
    super()
    {
      this.state = {
        login_id: "",
        password: "",
       
      }
    }
    
  }



  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.props.token?<Redirect to="/lawyerportal"></Redirect>:null}
        <div className="container" id="login-client">
          <div className="row">
            <div className="col-6 align-items-center d-none d-lg-flex">
              <img src={require("../../Images/logo.png")} alt="" />
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div className="login-card">
                <div className="buttons">
                  <NavLink to="/login">
                    <button type="button" className="btn btn-active">
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button type="button" className="btn btn-sec">
                      Register
                    </button>
                  </NavLink>
                </div>
                <br />
                <Formik
                  initialValues={{
                    login_id: "",
                    password: ""
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    let email = values.login_id.includes('@')
                    this.setState({submitted:true})
                   
                    if(email)
                    {
                      this.props.onAuth(values.login_id,values.password,'email')
                      console.log('email')
                    }
                    else{
                      this.props.onAuth(values.login_id,values.password,'mobile')
                      console.log('mobile')
                    }
                    
                   

                    setSubmitting(false);
                    // resetForm();
                  }}
                >
                  {({ handleChange, touched, errors, isSubmitting }) => (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="login_id">
                          Email Address/ Mobile Number
                        </label>
                        <Field
                          type="text"
                          name="login_id"
                          placeholder="mark546@gmail.com"
                          onChange = {e => {
                            handleChange(e)   
                            this.setState({
                              login_id:e.target.value
                            })       
                            console.log(this.state.login_id)                                            
                          }}
                          className={`form-control ${
                            touched.login_id && errors.login_id
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="login_id"
                          className="invalid-feedback"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="password"
                          name="password"
                          onChange = { e => {
                            handleChange(e)
                            this.setState({
                              password: e.target.value
                            })
                          }}
                          placeholder="your password..."
                          className={`form-control ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>

                      <span>Forgot Password?</span>
                      <br />

                      <div className="form-group">
                        <input type="checkbox" name="remember_me" /> &nbsp;
                        <label htmlFor="remember_me">Remember me!</label>
                      </div>

                      <div className="form-group">
                        <input type="checkbox" name="login_with_otp" /> &nbsp;
                        <label htmlFor="remember_me">Login with OTP</label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Please wait..." : "Login"}
                      </button>
                      
                      {this.props.error?
                      <p id="error_received">
                        {this.props.error.data.non_field_errors?this.props.error.data.non_field_errors=='Mobile number is not verified yet'?
                        <h6>{this.props.error.data.non_field_errors}. Click <a href="verifymobile/">here</a> to verify.</h6>
                        :
                          this.props.error.data.non_field_errors == 'Email is not verified yet'?
                          <h6>{this.props.error.data.non_field_errors}. Click <a href="verifyemail/">here</a> to verify.</h6>
                          :
                          <h6>{this.props.error.data.non_field_errors}</h6>
                        :
                        null}
                      </p>
                      :null}


                    </Form>
                  )}
                </Formik>
                <br />
                <button type="button" className="btn btn-danger button-margin">
                  Login with Gmail
                </button>
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
      token: state.token,
      error: state.error,
      user_id: state.user_id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAuth: (login_id,password,method) => dispatch(actions.authLogin(login_id, password, method)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LawyerLogin);
