import React,{Component} from 'react'
import './index.scss'
import axios from 'axios'

class UserExperience extends Component {
    constructor(){
        super()
        this.state = {
            experiences:null
        }
    }

    async componentDidMount(){
        axios.get('client/top2clientexperiences/').then(res => {
                this.setState({experiences:res.data})
                console.log(res.data)
            }).catch(err => {
                console.log(err.response)
            })
    }

    render(){
        return(
            this.state.experiences?
            <div class="container" id="userexp">
                <div style={{fontSize:"2em",marginBottom:"5%"}}>What our users say...</div>
               <div class="row">
                    
                   <div class="col-sm-4">
                   <div class="col-sm-1"></div>
                       <div class="row user_exp">
                            <div class="col-md-4 ">
                                <div>
                                    <img src={require('./images/person3.jpg')} alt="My Picture" class="user_image"/>
                                </div>
                            </div>
                            <div class="col-md-8 contact ">
                                <p style={{textAlign:"center"}}>{this.state.experiences[0].content}</p>
                            </div>
                       </div>
                   </div>
                   <div class="col-sm-1"></div>
                   <div class="col-sm-4">
                        <div class="row user_exp">
                            <div class="col-md-4 ">
                                <div>
                                    <img src={require('./images/person2.jpg')} alt="My Picture" class="user_image"/>
                                </div>
                            </div>
                            <div class="col-md-8 contact ">
                                <p style={{textAlign:"center"}}>{this.state.experiences[1].content} </p>
                            </div>
                       </div>
                   </div>
                   
                   <div class="col-sm-1 user_exp user_button">
                        <button type="button" class="btn btn-custom">Share Your Experience</button>
                    </div>
               </div>
            </div>:<h4>Loading....</h4>
        )
    }
}

export default UserExperience