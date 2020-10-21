import axios from 'axios'
import React from "react";
import "./index.css";
import NavBar from '../../navbar'

class ReadArticle extends React.Component {
    constructor(){
        super()
        this.state = {
            article:null
        }
    }

    async componentDidMount(){
        axios.get('article/viewarticle/'+this.props.match.params.id+'/').then(res => {
                this.setState({article:res.data,loading:false})
                console.log(res.data)
            }).catch(err => {
                console.log(err.response)
            })
    }

  render() {
    return (
        this.state.article?
      <React.Fragment>
          <NavBar />
        <div className="container-fluid" id="article-page">
          <div className="picture-div">
            <img
              alt=""
              className="picture rounded"
              src={require("../../Images/law1.png")}
            />
          </div>
          <div className="">
            <div className="row">
              <div className="col-8 content shadow rounded p-5">
                <h4 className="h-4">{this.state.article.title}</h4>
                <h6>by advocate</h6>
                <div className="content-img pt-5">
                  <img
                    className="px-4"
                    width="600px"
                    max-height="600px"
                    src={require("../../Images/law1.png")}
                    alt=""
                  />
                </div>
                <p className="pt-5 readable text-justify">
                  {this.state.article.content}
                </p>
              </div>
              <div className="col p-5 ">
                <div className="row">
                  <div className="col shadow rounded p-4">
                    <p>
                      get unlimited online consultations starting at Rs
                      500/month
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="text-center btn btn-lg btn-rounded"
                      >
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col shadow promotion-div rounded p-4">
                    <h5 className="text-center">Popular Articles</h5>

                    <p class="mb-0 font-weight-bold pt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer">15 upvotes</footer>

                    <p class="mb-0 font-weight-bold pt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer">15 upvotes</footer>

                    <p class="mb-0 font-weight-bold pt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer">15 upvotes</footer>
                  </div>
                </div>

                <div className="row ">
                  <div className="col shadow promotion-div rounded p-4">
                    <p className="text-center font-weight-bold">
                      Get tips to your inbox
                    </p>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter email"
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="text-center btn btn-lg btn-rounded"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row ">
                  <div className="col shadow promotion-div rounded p-4">
                    <p className="text-center font-weight-bold">
                      Chat with Advocate
                    </p>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="text-center btn btn-lg btn-rounded"
                      >
                        chat now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col shadow promotion-div rounded p-4">
                    <h5 className="text-center">Related Questions</h5>
                    <p className="font-weight-bold pt-4">
                      Title of the Question
                    </p>
                    <p>some content as the answer of the Question</p>

                    <p className="font-weight-bold pt-4">
                      Title of the Question
                    </p>
                    <p>some content as the answer of the Question</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>:
      <diV>
          <NavBar />
          <h3>Loading...</h3>
      </diV>
      
    );
  }
}

export default ReadArticle;
