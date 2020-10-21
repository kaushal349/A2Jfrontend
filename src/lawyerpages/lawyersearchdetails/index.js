import React,{ Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
//import styled from 'styled-components';
import {Link} from 'react-router-dom'


class LawyerSearchDetails extends Component{
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
        
        
        return(
            <div>
               
                {this.state.loading?null:(
                    <div className="container" style={{marginTop:"5%"}}>
                        {
                            this.state.lawyers.map(lawyer => (
                                <div className="row" style={{borderTop:"solid"}}>
                                    <div className="col-md-3">
                                        <t/><img src={require('../../Images/logo.png')} width="150" height="150" style={{borderRadius:"50%"}}/>
                                    </div>
                                    <div className="col-md-6">
                                       <Link to ={`/lawyerprofile/${lawyer.user}`} ><h2>{lawyer.firstname} {lawyer.middlename} {lawyer.lastname}</h2></Link>
                                        <h4>Year of Experience: <b style={{color:"gray"}}>{lawyer.year_of_exp}</b></h4>
                                        <h4>Location: <b style={{color:"gray"}}>{lawyer.location}</b></h4>
                                        <h4>Rating: <b style={{color:"gray"}}>{lawyer.rating}</b></h4>
                                    </div>
                                    <div className="col-md-3">
                                        <br /><br /><br /><br />
                                        <h4 style={{textAlign:"right"}}><button>Ask Question</button></h4>
                                        <h4 style={{textAlign:"right"}}><Link to={`/advocateprofile/${lawyer.user}`} ><button>View Profile</button></Link></h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token:state.token,
        user_id:state.user_id,
        user_type:state.user_type,
    }
}



export default connect(mapStateToProps)(LawyerSearchDetails);


