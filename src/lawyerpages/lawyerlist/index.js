import React,{Component} from 'react'
import './index.css'
import Search from '../../home/components/search'
import axios from 'axios'
import {Link} from 'react-router-dom'
import NavBar from '../../navbar'

class LawyerList extends Component{
    constructor(props){
        super(props)
        this.state={
            lawyers:[],
            loading :true,
            keyword:this.props.match.params.keyword,
            location:this.props.match.params.location, 
        }
    }

    async componentDidMount(){
        console.log(this.state.keyword)
        axios.get('lawyer/lawyersearchdetails/',{
            params: {
                keyword:this.state.keyword,
                location:this.state.location,
            }
        }).then(res => {
                this.setState({lawyers:res.data,loading:false})
            }).catch(err => {
                console.log(err.response)
            })
    }
    
    render(){

        
        return (
            <div>
                <NavBar />
            <div id = "advocatelist">
                <div>
                    <Search />
                </div>
                <div>
                    <div className="row selectrow">
                        <div id="select1">
                            <select className="selectpicker">
                                <option>option1</option>
                                <option>option2</option>
                                <option>option3</option>
                            </select>
                        </div>
                        <div id="select2">
                            <select className="selectpicker" id="select2">
                                <option>option1</option>
                                <option>option2</option>
                                <option>option3</option>
                            </select>
                        </div>
                        <div id="select3">
                            Sort by:&nbsp;&nbsp;
                            <select className="selectpicker" id="select2">
                                <option>option1</option>
                                <option>option2</option>
                                <option>option3</option>
                            </select>
                        </div>  
                    </div>
                    <div>
                        {this.state.lawyers.map(lawyer => (
                             <div className="eachadvocate">
                                <div className="row">
                                    <div className="col-md-6 col1">
                                        <div className="row">
                                            <div className="col-md-6 col11">
                                                <div className="imgparentdiv">
                                                    <img src={require('./images/profile1.jpg')} alt="My Picture"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col12">
                                              <p>
                                                <h3 ><Link to={`/lawyerprofile/${lawyer.user}`} style={{color:"blue"}}>{lawyer.name}</Link></h3> 
                                                <h6>Specialization: {lawyer.specialization}</h6>
                                                <h6>Experience (in years): {lawyer.year_of_exp}</h6>
                                                <h6>Location: {lawyer.location}</h6>
                                                <h6>Chambers: </h6>
                                                <p><a href="/" className="btn btn-success" style={{height:"2em"}}>Verified</a> <a href="/" style={{height:"2em"}} className="btn btn-info">Client Stories</a></p>
                                              </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col2">
                                        <p>
                                            <h5 style={{textAlign:"left"}}><Link to={`/lawyerprofile/${lawyer.user}`} ><button>View Profile</button></Link></h5>
                                            <h6><i className="fa fa-clock-o"></i> Appointment Prices</h6>
                                            <h6><i className="fa fa-money"></i> Available Timings</h6>
                                            <h6><i className="fa fa-balance-scale"></i> Specialization</h6>
                                            <div className="col-sm-6">
                                                <a href="/" className="btn btn-primary">Book Appointment with an Advocate</a>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                         
                        ))}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default LawyerList

