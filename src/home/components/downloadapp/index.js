import React,{Component} from 'react'
import './index.scss'

class DownloadApp extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div class="container" id="downloadapp">
                <div class="row">
                    <div class="col-sm-6 text-center">
                        <img src={require('./images/downloadapp.jpg')}/>
                    </div> 
                    <div class="col-sm-6 text-center">
                        <div class="row">
                            <h5>Download the app</h5>
                            <p>Book appointments, chat with experts and consult advocates online</p>
                            <br /><br />
                            <h6>Get the link to download app</h6>
                        </div>
                        <div class="row">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">+91</span>
                                </div>
                                <input type="text" class="form-control" placeholder="Mobile Number" aria-label="Mobile Number" aria-describedby="basic-addon1"/>
                                <button>Get Link</button>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-6"><button class="btn btn-custom" >Get on Google Play</button></div>
                            <div class="col-sm-6"><button class="btn btn-custom" style={{marginTop:"1%"}}>Get on App Store</button></div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default DownloadApp 