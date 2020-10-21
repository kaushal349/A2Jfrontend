
import React,{ Component } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../../navbar' 

class ChamberPortal extends Component{
    constructor(){
        super()
        this.state={
            lawchamber:false,
            switched:false
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange = event => {
        axios.get('lawchamber/checkiflawchamber/'+this.props.user_id + '/').then(res => {
                this.setState({lawchamber:res.data.lawchamber,switched:true})
            }).catch(err => {
                console.log(err.response)
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
                                <h2>Switch Account to your Chamber Portal <button onClick={this.handleChange}>Switch</button> </h2>
                                <h3>Your Chamber is not registered Yet? Register <Link to='/chamberregister'>here</Link></h3>
                                {(this.state.lawchamber)?
                                <Redirect to='/chamberpage'></Redirect>
                                :
                                this.state.switched?
                                <h4 style={{color:"red"}}>You are not registered as chamber yet....Click  <Link to='/chamberregister'>here</Link> to Register</h4>:null
                                }
                            </div>
                        </div>:
                        <div style={{textAlign:"center",textDecorationColor:"red",marginLeft:"40%"}}>
                            <Link to='/login'>Login</Link> OR <Link to='/register'>Register</Link>
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
 

export default connect(mapStateToProps)(ChamberPortal); 