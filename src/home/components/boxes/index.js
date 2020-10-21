import React,{Component} from 'react'
import './index.scss'

class Boxes extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
               <div class="row" id = "boxes">
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body row">
                            <div class="col-sm-6 imgparentdiv">
                                <img src={require('./images/meetanadvocate.jpg')} alt="Meet an advocate" />
                            </div>
                            <div class="col-sm-6 " >
                                <p class="card-title"><b>Meet an Advocate</b></p>
                                <p class="card-text">Book appointments online and avoid waiting</p>
                                <a href="/bookappointments" class="btn btn-custom">Book Appointment</a>
                            </div>     
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body row">
                            <div class="col-sm-6 imgparentdiv">
                                <img src={require('./images/chat.jpg')} alt="Meet an advocate" />
                            </div>
                            <div class="col-sm-6 ">
                                <p class="card-title"><b>Chat with our law experts</b></p>
                                <p class="card-text">Get opinions from experts in the field</p>
                                <a href="/" class="btn btn-custom">Chat now</a>
                            </div>     
                        </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                        <div class="card-body row">
                            <div class="col-sm-6 imgparentdiv" >
                                <img src={require('./images/joinnetwork.jpg')} alt="Meet an advocate" />
                            </div>
                            <div class="col-sm-6">
                                <p class="card-title"><b>Join the Network</b></p>
                                <p class="card-text">Interact with people who braved similar situations</p>
                                <a href="/" class="btn btn-custom">Join now</a>
                            </div>     
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Boxes 