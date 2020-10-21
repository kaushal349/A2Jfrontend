import React from "react";
import $ from "jquery";
import "./index.css";
import { Editor } from "@tinymce/tinymce-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import {connect} from 'react-redux'

const LoginSchema = Yup.object().shape({
  title: Yup.string()
    .required("This field is required")
    .min(8, "Title must contain minimum of 8 characters")
    .max(30, "Title can contain maximum of 30 characters"),
  content: Yup.string()
    .required("This field is required")
    .min(150, "Please eplain your story in detail"),
  topic: Yup.string()
    .required("This field is required")
    .oneOf(["topic1", "topic2", "other"], "Select appropriate option")
});

class PublishArticle extends React.Component {
  componentDidMount() {
    $("#lawyer-publish-article-link").addClass("active");
  }
  componentWillUnmount() {
    $("#lawyer-publish-article-link").removeClass("active");
  }

  render() {
    return (
      <React.Fragment>
        <div id="lawyer-publish-article">
          <h2 className="content-header">Publish an Article</h2>
          <hr />
          <Formik
            initialValues={{
              title: "",
              content: "",
              topic: "",
              gender: ""
            }}
          // validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("I am here to submit");
              console.log(values);
              

              axios.post('./article/viewarticle/'+this.props.user_id+'/',{
                'user':this.props.user_id,
                'title':values.title,
                'content':values.content
              })
              .then(res => {
                console.log(res)
              })
              .catch(err => {
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
                    Title of the article:
                  </label>
                  <Field
                    type="text"
                    name="title"
                    onBlur={handleBlur("title")}
                    placeholder="Enter title of the article"
                    className={`form-control title-field ${
                      touched.title && errors.title ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="title"
                    className="invalid-feedback"
                  />
                </div>
               {/*
                  
                <div className="form-group">
                  <label htmlFor="topic" className="label-enhance">
                    Topic:
                  </label>
                  <select
                    name="topic"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control topic-field ${
                      touched.topic && errors.topic ? "is-invalid" : ""
                    }`}
                  >
                    <option value="">---</option>
                    <option value="topic1">topic 1</option>
                    <option value="topic2">topic 2</option>
                    <option value="other">Other</option>
                  </select>

                  <ErrorMessage
                    component="div"
                    name="topic"
                    className="invalid-feedback"
                  />
                  </div> */}

                <div className="form-group">
                  <label htmlFor="content" className="label-enhance">
                    Content:
                  </label>
                  <Field
                    type="text"
                    component = "textarea"
                    name="content"
                    onBlur={handleBlur("content")}
                    placeholder="Enter content of the article"
                    className={`form-control content-field ${
                      touched.content && errors.content ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="content"
                    className="invalid-feedback"
                  />
                </div>
                  {/*
                  <Editor
                    initialValue="<p >Enter content of the article</p>"
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


export default connect(mapStateToProps)(PublishArticle);

