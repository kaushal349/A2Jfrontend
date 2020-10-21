import React from "react";
import "./index.css";
import axios from 'axios' 
import NavBar from '../../navbar'

class GetInspiredFullStory extends React.Component {
    constructor(){
      super()
      this.state = {
          story:null
      }
  }

  async componentDidMount(){
      axios.get('getinspired/viewgetinspiredstory/'+this.props.match.params.id+'/').then(res => {
              this.setState({story:res.data})
              console.log(res.data)
          }).catch(err => {
              console.log(err.response)
          })
  }

  render() {
    return (
      this.state.story?
      <React.Fragment>
        <NavBar />
        <div className="container" id="full-story">
          <div className="row">
            <div className="col">
              <p className="title">
                {this.state.story.title}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img className="img1" src={require("./images/law1.png")} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col content">
              <p>
                {this.state.story.content}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img className="img1" src={require("./images/law1.png")} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-primary connect-btn btn-lg"
              >
                Connect with {this.state.story.person}
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>:
      <div>
        <NavBar />
        <h3>Loading...</h3>
      </div>
    );
  }
}

export default GetInspiredFullStory;
