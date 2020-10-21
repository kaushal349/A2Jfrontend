import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.css";
import {connect} from 'react-redux'
import axios from 'axios' 
import {Link, Redirect} from 'react-router-dom'
import NavBar from '../../navbar'

const LoginSchema = Yup.object().shape({
  title: Yup.string()
    .required("This field is required")
    .min(8, "Title must contain minimum of 8 characters")
    .max(30, "Title can contain maximum of 30 characters"),
  content: Yup.string()
    .required("This field is required")
    .min(150, "Please eplain your story in detail"),
  name: Yup.string()
    .required("This field is required")
    .min(3, "Name must contain minimum of 3 characters"),
  gender: Yup.string()
    .required("This field is required")
    .oneOf(["male", "female", "other"]),
  email_id: Yup.string().required("This field is required"),
  //phone_number: Yup.string().required("This field is required")
});

class GetInspiredNewStory extends React.Component {
  constructor(){
    super()
    this.state={
        submitted:false
    }
}

  render() {
    return (
      this.props.isAuthenticated?
      this.props.submitted?<Redirect to="/storypostsubmit" />:
      <React.Fragment>
        <NavBar />
        <div className="container" id="new-story">
          <div className="row">
            <div className="col header">Share your Story</div>
          </div>
          <div className="row py-3">
            <div className="col">
              Sometimes you face difficulties not because you are doing
              something wrong, but because you are doing something right. You
              have to be your strongest when you are feeling at your weakest.
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Formik
                initialValues={{
                  title: "",
                  content: "",
                  name: "",
                  gender: "",
                  email_id: "",
                  phone_number: "",
                  picture1:"",
                  picture2:"",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log(this.props.user_id)
                  let formdata = new FormData()
                  formdata.append('name',values.name)
                  console.log(formdata)
                  formdata.append('email',values.email_id)
                  formdata.append('title',values.title)
                  formdata.append('content',values.content)
                  formdata.append('user',this.props.user)
                  formdata.append('user_gender',values.gender)
                  
                  axios.post('getinspired/viewgetinspiredstory/'+this.props.user_id+'/',formdata,{
                  'headers': {
                      'content-type': 'multipart/form-data',
                  }}).then(res => {
                    this.setState({submitted:true})
                    alert('Submitted')
                  }).catch(err => {
                      console.log(err.response)
                  })
                  setSubmitting(false);
                  // resetForm();
                }}
              >
                {({
                  setFieldValue,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors,
                  isSubmitting
                }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="title" className="label-enhance">
                        Title:
                      </label>
                      <Field
                        type="text"
                        name="title"
                        onBlur={handleBlur("title")}
                        placeholder="Story Title..."
                        className={`form-control ${
                          touched.title && errors.title ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="title"
                        className="invalid-feedback"
                      />
                    </div>
                   
                    <div className="form-group">
                      <label htmlFor="content" className="label-enhance">
                        Content:
                      </label>
                      <Field
                        type="text"
                        name="content"
                        onBlur={handleBlur("content")}
                        placeholder="Story content..."
                        className={`form-control ${
                          touched.content && errors.content ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="content"
                        className="invalid-feedback"
                      />
                    </div>

                    {/* <p>{touched.content} hello</p> */}
                    {/*<div className="form-group">
                      <label htmlFor="content" className="label-enhance">
                        Content:
                      </label>
                      <Editor
                        init={{
                          height: 500,
                          menubar: false,
                          fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",
                          plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount"
                          ],
                          toolbar:
                            "sizeselect | undo redo | formatselect | fontselect | fontsizeselect|  bold italic backcolor |  alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
                        }}
                        type="text"
                        onEditorChange={ev => {
                          setFieldValue("content", ev);
                          console.log(errors.content);
                        }}
                        name="content"
                        onBlur={handleBlur("content")}
                        // onChange={handleChange}
                        className={`${
                          touched.content && errors.content ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback d-block">
                        {touched.content ? errors.content : null}
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="picture1" className="label-enhance">
                        Picture 1:
                      </label>
                      <Field
                        type="file"
                        accept="image/png, image/jpg"
                        name="picture1"
                        onBlur={handleBlur("picture1")}
                        placeholder="Story picture1..."
                        className={`form-control ${
                          touched.picture1 && errors.picture1 ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="picture1"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="picture2" className="label-enhance">
                        Picture 2:
                      </label>
                      <Field
                        type="file"
                        name="picture2"
                        onBlur={handleBlur("picture2")}
                        placeholder="Story picture2..."
                        className={`form-control ${
                          touched.picture2 && errors.picture2 ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="picture2"
                        className="invalid-feedback"
                      />
                      </div>*/}

                    <div className="form-group">
                      <label htmlFor="name" className="label-enhance">
                        Name:
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={`form-control name-field ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender" className="label-enhance">
                        Gender:
                      </label>
                      <select
                        name="gender"
                        placeholder="Gender"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className={`form-control gender-field ${
                          touched.gender && errors.gender ? "is-invalid" : ""
                        }`}
                      >
                        <option value="">---</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>

                      <ErrorMessage
                        component="div"
                        name="gender"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email_id" className="label-enhance">
                        Email ID:
                      </label>
                      <Field
                        type="text"
                        name="email_id"
                        placeholder="Email ID"
                        className={`form-control name-field ${
                          touched.email_id && errors.email_id
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="email_id"
                        className="invalid-feedback"
                      />
                    </div>

                    {/*<div className="form-group">
                      <label htmlFor="phone_number" className="label-enhance">
                        Phone Number:
                      </label>
                      <Field
                        type="text"
                        name="phone_number"
                        placeholder="Phone Number"
                        className={`form-control name-field ${
                          touched.phone_number && errors.phone_number
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="phone_number"
                        className="invalid-feedback"
                      />
                      </div> */}

                    <button
                      type="submit"
                      className="btn btn-info custom-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </React.Fragment>:
      <React.Fragment>
        <NavBar />
        <h4>You are not authenticated yet. </h4>
        <h4 >Click  <Link to='/login'>here</Link> Login or Click  <Link to='/register'>here</Link>Register</h4>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      token: state.token,
      isAuthenticated: state.token!=null,
      user_id: state.user_id,
  }
}


export default connect(mapStateToProps)(GetInspiredNewStory);
