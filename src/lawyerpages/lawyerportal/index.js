import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../../navbar'

class LawyerPortal extends Component{
    constructor(){
        super()
        this.state={
            lawyer:false,
            switched:false
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange = event => {
        const userId = this.props.user_id
        axios.get('lawyer/checkiflawyer/'+this.props.user_id + '/',{
            'headers': {
                'Authorization': `Token ${this.props.token}`
            }}).then(res => {
                this.setState({lawyer:res.data.lawyer,switched:true})
                console.log(this.state.lawyer)
            })
    }


    render(){
        return(
            <div>
                <NavBar />
               <div className="container" style={{marginTop:"5%",textAlign:"center"}}>
                    <div className = "row" >
                        {this.props.isAuthenticated?
                        <div>
                            <div style={{textAlign:"center",textDecorationColor:"red"}}>
                                <h2>Switch Account to Lawyer <button onClick={this.handleChange}>Switch</button> </h2>
                                <h3>Not registered as Lawyer Yet? Register <Link to='/lawyerdetailsform'>here</Link></h3>
                                {(this.state.lawyer)?
                                <Redirect to='/lawyersidebar'></Redirect>
                                :
                                this.state.switched?
                                <h4 style={{color:"red"}}>You are not registered as lawyer yet....Click  <Link to='/lawyerdetailsform'>here</Link> to Register</h4>:null
                                }
                            </div>
                        </div>:
                        <div style={{textAlign:"center",textDecorationColor:"red",marginLeft:"40%"}}>
                            <Link to='/lawyersignin'>Login</Link> OR <Link to='/lawyersignup'>Register</Link>
                        </div>}
                    </div>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token:state.token,
        user_id: state.user_id,
        user_email: state.user_email,
        isAuthenticated: state.token !== null
    }
}
 

export default connect(mapStateToProps)(LawyerPortal);