import React from "react";
import "./index.css";
// import { ThemeProvider } from "@zendeskgarden/react-theming";
// import { Pagination } from "@zendeskgarden/react-pagination";
import axios from 'axios'
import NavBar from '../../navbar'

class GetInspiredHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      stories:null,
      // index_of_last_post : this.state.posts_per_page*this.state.current_page,
    };
  }

  async componentDidMount(){
    axios.get('getinspired/allgetinspiredstories/').then(res => {
            this.setState({stories:res.data})
        }).catch(err => {
            console.log(err.response)
        })
  }

  customCard = (story) => {
    return (
      <React.Fragment>
        {/* create card like component */}
        <div className="row custom-card px-2 mx-2">
          <div className="col d-flex align-items-start pt-2">
            <img src={require("./images/law1.png")} alt="" />
          </div>
          <div className="col">
            <div className="row pl-1">
              <div className="col">
                <p className="story-title">
                  {story.title}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="truncate-overflow story-content py-2">
                 {story.content}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a href={`/getinspiredfullstory/${story.id}`}>
                <button type="button" className="btn custom-btn btn-info">
                  Read full story
                </button> 
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* card like component ends */}
      </React.Fragment>
    );
  };

  render() {
    return (
      this.state.stories?
      <React.Fragment>
        <NavBar />
        <div className="container" id="get-inspired-all-stories">
          <div className="row justify-content-center">
            {this.state.stories.map(story => (
                <div className="col-lg-6">{this.customCard(story)}</div>
            ))}
          </div>
          <div className="row block1">
            <div className="col">
              <p>Got a story to Share?</p>
            </div>
          </div>
          <div className="row block2">
            <div className="col">
              <p>
                Determination and sheer grit are a must while braving tough
                situations
              </p>
            </div>
          </div>
          <div className="row block2">
            <div className="col">
              <p>
                The entire A2J community is waiting to hear from you. We are
                always happy to collaborate :)
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <a href="/getinspirednewstory">
              <button className="btn btn-primary btn-lg share-btn">
                Share your story
              </button>
              </a>
            </div>
            
          </div>
        </div>
        {/* <ThemeProvider>
          <Pagination
            totalPages={11}
            currentPage={this.state.currentPage}
            onChange={currentPage => this.setState({ currentPage })}
          />
        </ThemeProvider>
        ; */}
      </React.Fragment>:
      <div>
        <NavBar />
        <h3>No stories available</h3>
      </div>
    );
  }
}

export default GetInspiredHome;
