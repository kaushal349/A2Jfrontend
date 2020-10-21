import React from "react";
import "./index.css";
import {connect} from 'react-redux'
import axios from 'axios' 
import LawyerNavbar from '../../lawyernavbar'

class LawyerClientStory extends React.Component {

  constructor(){
    super()
    this.state = {
        stories:null,
       num:1,
    }
   
}


componentDidUpdate = (user_id) => {
      
  if(this.state.num)
  {
    
    axios.get('clientstory/lawyerclientstories/'+this.props.user_id+'/').then(res => {

        this.setState({stories:res.data,num:0})
        console.log(res.data)
    }).catch(err => {
        console.log(err.response)
    })
  }
  
}

  tileBlock = (story) => {
    return (
      <div className="tile-block">
        <div className="row tile-block-header">
          {/* <div className="col"> */}
          <img
            src={require("../../Images/law1.png")}
            className="tile-block-img"
            alt=""
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <blockquote className="blockquote pt-3">
            <p className="mb-0">{story.title}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">
                {story.recommend?<p>Yes, I recommend this Advocate</p>:<p>No, I do not recommend this advocate</p>}

                {story.recommend?<p>Happy with:{story.keywords}</p>:<p>Not satisfied with:{story.keywords}</p>}
                
              </cite>
            </footer>
          </blockquote>
          <span className="feedback-date">
            <p>{story.days} days ago</p>
          </span>
          {/* </div> */}
        </div>
        <div className="row tile-content">
          <div className="col-12">
            <p>
             {story.content}
            </p>
          </div>
        </div>
      </div>
    );
  };


  render() {
    return (
      <React.Fragment>
      <LawyerNavbar />
        <div id="lawyer-portal-2">
          <div className="sidebar">
            <div className="row justify-content-center align-items-center sidebar-header">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img
                  src={require("../../Images/law2.png")}
                  alt=""
                  className="img-enhance"
                />
              </div>
              <div className="col d-flex justify-content-center pt-2">
                Mr/Mrs XYZ
              </div>
            </div>
            <div>
              <a href="/lawyerarticlefeed">Article feed</a>
              
              <a href="#contact">My cases</a>
              <a href="/lawyerquestioncorner">Question corner</a>
              <a href="#about">Publish an article</a>
              <a className="active" href="/lawyerclientstory">
                View client stories
              </a>
              <a href="#about">Register a query</a>
            </div>
          </div>

          <div className="content">
            <h2 className="client-stories-heading">Your client stories</h2>
            <form>
              <ul className="content-header">
                <li className="flex-item">
                  <label for="specialization" className="content-option">
                    specialization:
                  </label>
                  {/* custom select */}
                  <select class="selectpicker">
                    <option>Mustard</option>
                    <option>Ketchup</option>
                    <option>Relish</option>
                  </select>

                  {/* custom select ends */}
                </li>
                <li className="flex-item">
                  <label for="specialization" className="content-option">
                    sortby:
                  </label>
                  {/* custom select */}
                  <select class="selectpicker">
                    <option>Mustard</option>
                    <option>Ketchup</option>
                    <option>Relish</option>
                  </select>

                  {/* custom select ends */}
                </li>
              </ul>
            </form>
            <hr />
            <div>
              {this.state.stories?
              this.state.stories.map(story => (
                  this.tileBlock(story)
              )):<h4>Loading...</h4>}
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


export default connect(mapStateToProps)(LawyerClientStory);
