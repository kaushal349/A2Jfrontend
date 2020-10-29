import React from "react";
import "./index.css";
import {connect} from 'react-redux'
import axios from 'axios' 
import LawyerNavbar from '../../lawyernavbar'

class LawyerQuestionCorner extends React.Component {
    constructor(){
      super()
      this.state = {
          questions:null,
          display:0,
          answer:null,
         num:1,
      }  
      this.handleAnswer = this.handleAnswer.bind(this)
  }

   componentDidUpdate = (user_id) => {
      if(this.state.num)
      {
        axios.get('questioncorner/lawyerquestions/'+this.props.user_id+'/').then(res => {
          this.setState({questions:res.data,num:0})
          console.log(res.data)
          }).catch(err => {
              console.log(err.response)
          })
      }
      
  }

  handleAnswer = (ques_id) => {
    this.setState({display:ques_id})
  }

  handleChange = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (ques_id) => {
    const answer = {
      'answer': this.state.answer
    }
    axios.post('questioncorner/enteranswer/'+ques_id+'/',answer)
    .then(res => {
      console.log(res)
      this.setState({display:-1})
    })
    .catch(err=> {
      console.log(err.response)
    })
  }

  tileBlock = (question) => {
    return (
      <div>
        <div className="tile-block">
          <div className="row tile-block-header">
            {/* <div className="col"> */}
            <img
              src={require("../../Images/law1.png")}
              className="tile-block-img"
              alt=""
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <blockquote className="blockquote">
              <p className="mb-0">{question.client}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{question.days} days ago</cite>
              </footer>
            </blockquote>
            {/* </div> */}
          </div>
          <div className="row tile-content">
            <div className="col-12">
              <p>
              <b>Question</b>: {question.content} <br /><br />
              </p>
              {question.answer?
              <p><b>Already Answered: </b>{question.answer}</p>:null}
            </div>
            <div className="col block-tile-report d-flex justify-content-end">
              Report Question
            </div>
            <div className="col-12">
              <button type="button" className="btn tile-block-btn" onClick={() => this.handleAnswer(question.id)}>
                connect
              </button> 
              <button type="button" className="btn tile-block-btn">
                share
              </button>
              <button type="button" className="btn tile-block-btn">
                View client information
              </button>
            </div>
          </div>
        </div>
        {this.state.display===question.id?this.tileBlockAnswer(question):null}
      </div>
    );
  };

  tileBlockAnswer = (question) => {
    return (
        <div className="row" style={{marginTop:"4%"}} >
          <div className="col-12">
            <form>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Enter your Answer or Edit your Answer</label>
                <textarea name="answer" onChange={this.handleChange} class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
              </div>
              <div style={{textAlign:"right"}}>
                <button type="button" class="btn btn-custom" onClick = {() => this.handleSubmit(question.id)}>Submit</button>
              </div>
            </form>
          </div>
        </div>

    );
  };

  render() {
    return (
      <React.Fragment>
        {/* <LawyerNavbar /> */}
        <div id="lawyer-portal-3">
          {/* <div className="sidebar">
            <div className="row justify-content-center align-items-center sidebar-header">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <img
                  src={require("../../Images/law1.png")}
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
              <a href="/lawyerquestioncorner" className="active">
                Question corner
              </a>
              <a href="/lawyerarticlefeed">Publish an article</a>
              <a href="/lawyerclientstory">View client stories</a>
              <a href="#about">Register a query</a>
            </div>
          </div>

          <div className="content"> */}
            <h2 className="content-header">Questions posted to Mr/Mrs. XYZ</h2>
            <hr />
            <div>
              {this.state.questions?
              this.state.questions.map(question => (
                this.tileBlock(question)
              ))
              :<h4>Loading...</h4>}
            </div>
          </div>
        {/* </div> */}
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


export default connect(mapStateToProps)(LawyerQuestionCorner);
