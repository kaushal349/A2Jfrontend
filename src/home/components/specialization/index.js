import React,{Component} from 'react'
import './index.scss'

class Specialization extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
        <div id="specialization">
            <div id="heading">Find advocates in top specialization</div>
            <div class="row">
                <div class="col-sm-2">
                    <div class="card cardd">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/criminal.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div>  
                                <div class="textparentdiv">
                                    <p class="card-title"><b>Criminal Cases</b></p>
                                    <p class="card-text">Description about specialization</p>
                                </div>
                                
                            </a>      
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card cardd">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/civil.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div> 
                                <div class="textparentdiv">
                                    <p class="card-title "><b>Civil Cases</b></p>
                                    <p class="card-text ">Description about specialization</p>  
                                </div>
                                                                                  
                            </a>
                            </div>
                        </div>
                </div>
                <div class="col-sm-2">
                    <div class="card cardd">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/traffic.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div> 
                                <div class="textparentdiv">
                                    <p class="card-title"><b>Traffic Cases</b></p>
                                    <p class="card-text">Description about specialization</p>
                                </div>
                                    
                            </a>
                            </div>
                        </div>
                </div>
                <div class="col-sm-2">
                    <div class="card cardd">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/dowry.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div> 
                                <div class="textparentdiv">
                                    <p class="card-title"><b>Dowry Cases</b></p>
                                    <p class="card-text">Description about specialization</p>
                                </div>
                                    
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="card cardd">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/housing.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div> 
                                <div class="textparentdiv">
                                    <p class="card-title "><b>Housing Cases</b></p>
                                    <p class="card-text ">Description about specialization</p>
                                </div>
                                
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 holding_button d-flex justify-content-center">
                    <button type="button" class="btn btn-primary">View All Specializations</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Specialization 