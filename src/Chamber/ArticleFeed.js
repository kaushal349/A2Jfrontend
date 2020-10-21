import React from "react";
import "./ArticleFeed.css";
import {connect} from 'react-redux'
import axios from 'axios' 

class ArticleFeedChamber extends React.Component {
    constructor(){
      super()
      this.state = {
          articles:null,
         num:1,
         upvotes:{},
        downvotes:{},
        ind:null,
        article_id:null
      }
     this.handleClick1 = this.handleClick1.bind(this)
     this.handleClick2 = this.handleClick2.bind(this)
  }

   componentDidUpdate = (user_id) => {
      
      if(this.state.num)
      {
        
        axios.get('article/articleswrtuser/'+this.props.user_id+'/').then(res => {

            this.setState({articles:res.data.articles,num:0,upvotes:res.data.upvotes,downvotes:res.data.downvotes})
            console.log(res.data)
        }).catch(err => {
            console.log(err.response)
        })
      }
      
  }

  handleClick1 = (ind,article_id) => {
    let temp=this.state.upvotes 
    let temp1 = this.state.downvotes
    if(temp[ind]==0)
    {
      let upvote = {
        'user':this.props.user_id,
        'article':article_id
      }
      axios.post('article/viewupvote/',upvote).then(res => {
      }).catch(err => {
          console.log(err.response)
      })

      temp[ind]=1
      temp1[ind]=0
    }
    else 
    {
      temp[ind]=0
      axios.delete('article/viewupvote/',{
        params:{
          'user':this.props.user_id,
          'article':article_id
        }
      }).then(res => {
      }).catch(err => {
          console.log(err.response)
      })
    }
    this.setState({upvotes:temp})
  }

  handleClick2 = (ind, article_id) => {
    let temp=this.state.upvotes 
    let temp1 = this.state.downvotes
    if(temp1[ind]==0)
    {
      let downvote = {
        'user':this.props.user_id,
        'article':article_id
      }
      axios.post('article/viewdownvote/',downvote).then(res => {
      }).catch(err => {
          console.log(err.response)
      })

      temp1[ind]=1

      temp[ind]=0
    }
    else 
    {
      temp1[ind]=0
      axios.delete('article/viewdownvote/',{
        params:{
          'user':this.props.user_id,
          'article':article_id
        }
      }).then(res => {
      }).catch(err => {
          console.log(err.response)
      })
    }
    this.setState({downvotes:temp1})
  }

  

  render() {
    return (
      <React.Fragment>
         <div ref={this.myRef} id="lawyer-article-feed">
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
              </ul>
            </form>
            <hr />
    
        <div>
              {this.state.articles?
            this.state.articles.map((article,ind) => (
              <div className="tile-block">
                <div className="row tile-block-header">
                {/* <div className="col"> */}
                <img
                  src={require("../Images/law1.png")}
                  className="tile-block-img"
                  alt=""
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <blockquote className="blockquote">
                  <p className="mb-0">{article.title}</p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">{article.days} days ago</cite>
                  </footer>
                </blockquote>
                {/* </div> */}
              </div>
              <div className="row tile-content">
                <div className="col-12 d-flex justify-content-center">
                  <img
                    src={require("../Images/law2.png")}
                    alt=""
                    className="article-img"
                  />
                </div>
                <div className="col-12">
                  <p>
                    {article.content}
                  </p>
                </div>
                <div className="col block-tile-report d-flex justify-content-end">
                  Upvotes: {article.upvotes} <br />
                  Downvotes: {article.downvotes}
                </div>
                <div className="col-12">
                    {this.state.upvotes[ind]?
                          <button type="button" className="btn tile-block-btn" style={{backgroundColor:"red"}} onClick={() => this.handleClick1(ind,article.id)}>
                            Upvote
                          </button>
                        :
                        <button type="button" className="btn tile-block-btn" onClick={() => this.handleClick1(ind,article.id)}>
                          Upvote
                      </button>
                    }
                    {this.state.downvotes[ind]?
                          <button type="button" className="btn tile-block-btn" style={{backgroundColor:"red"}} onClick={() => this.handleClick2(ind,article.id)}>
                            Downvote
                          </button>
                        :
                        <button type="button" className="btn tile-block-btn" onClick={() => this.handleClick2(ind,article.id)}>
                          Downvote
                      </button>
                    }
                </div>
              </div>
                    </div>
              
            )):null}
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


export default connect(mapStateToProps)(ArticleFeedChamber);
