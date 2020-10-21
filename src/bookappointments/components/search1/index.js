import './index.scss'
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Search1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      keyword: '',
      lawyers: null,
      law_chambers: null,
      userNo: null
    };
    this.cancel = "";
    this.handleChange = this.handleChange.bind(this);
    this.fetchSearchResults = this.fetchSearchResults.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton = event => {
    this.setState({ visible: true, userNo: event.target.value });
    this.render();
  };

  fetchSearchResults() {
    const searchUrl = `lawyer/searchlawyerslawchambers/`;

    if (this.cancel) {
      // Cancel the previous request before making a new request
      this.cancel.cancel();
    }
    // Create a new CancelToken
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
        params: {
          location: this.state.location,
          keyword: this.state.keyword
        }
      })
      .then(res => {
        console.log(res);
        this.setState({
          lawyers: res.data["lawyers"],
          law_chambers: res.data["law_chambers"]
        });
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.fetchSearchResults();
      }
    );
  }

  render() {
    return (
      <React.Fragment>
           <div className="container" >
                <div className="row">
                    <div className="col-sm-6 text-center input-icons">
                        <i className="fa fa-map-marker icon"></i> 
                        <input className="input-field" type="text" placeholder="Location" name="location" onChange={this.handleChange}/> 
                    </div> 
                    <div className="col-sm-6 text-center input-icons ">
                        <i className="fa fa-search icon"></i> 
                        <input className="input-field" type="text" name="keyword" onChange={this.handleChange} placeholder="    Search for lawyers,chambers,specialization etc"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        
                        <div>
                        {this.state.lawyers?
                            <div className="searchresults">
                              <div className="row">
                                  <h4>Lawyers</h4>
                              </div>
                                {this.state.lawyers.map(lawyer => (
                                    <div>
                                        <Link to={`lawyerprofile/${lawyer.user}`} style={{color:"blue"}}>{lawyer.firstname} {lawyer.middlename} {lawyer.lastname}</Link><br />
                                    </div>
                                ))}
                                <div>
                                  <br />
                                    {this.state.location?
                                    <Link
                                    to={`/lawyerlist/${
                                    this.state.location
                                    }/${this.state.keyword}`}>
                                    View All Lawyers
                                    </Link>:
                                     <Link
                                     to={`/lawyerlist/all/${this.state.keyword}`}>
                                     View All Lawyers
                                     </Link>
                                    }
                                </div>
                                <br />
                            </div>
                        :null}
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                       
                            <div>
                              {this.state.law_chambers?(
                                <div>
                                  <div className="row">
                                    <h4>Law Chambers</h4>
                                  </div>
                                  <div>
                                  {this.state.law_chambers.map(eachLawChamber => (
                                      <div>
                                          {eachLawChamber.name}<br />
                                      </div>
                                  ))}
                                  </div>
                                  <div>
                                    <br />
                                    {this.state.location?
                                      <Link
                                      to={`/lawchamberlist/${
                                      this.state.location
                                      }/${this.state.keyword}`}>
                                      View All Law Chambers
                                      </Link>:
                                      <Link
                                      to={`/lawchamberlist/all/${this.state.keyword}`}>
                                      View All Law Chambers
                                      </Link>
                                      }
                                      <br />
                                  </div>
                                </div>
                              ):null}
                            </div>
                           
                    </div>
                </div>
            </div>
            
      </React.Fragment>
    );
  }
}
export default Search1;
