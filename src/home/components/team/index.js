import React,{Component} from 'react'
import './index.scss'

class Team extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
        <div class="container" id="team">
            <div id="heading">We the Team :)</div>
            <div class="row">
                
                <div class="col-sm-2.4">
                    <div class="card">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/person1.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div>
                                <br />
                                <div style={{color:"#0e2f56"}}>
                                    <b>Name of Person</b> <br />
                                    <medium>Role of Person</medium>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2.4">
                    <div class="card">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                <img src={require('./images/person2.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div>
                                <br />
                                <div style={{color:"#0e2f56"}}>
                                    <b>Name of Person</b> <br />
                                    <medium>Role of Person</medium>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2.4">
                    <div class="card">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/person3.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div>
                                <br />
                                <div style={{color:"#0e2f56"}}>
                                    <b>Name of Person</b> <br />
                                    <medium>Role of Person</medium>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2.4">
                    <div class="card">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/person4.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div>
                                <br />
                                <div style={{color:"#0e2f56"}}>
                                    <b>Name of Person</b> <br />
                                    <medium>Role of Person</medium>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2.4">
                    <div class="card">
                        <div class="card-body d-flex justify-content-center">
                            <a href="/">
                                <div class="imgparentdiv">
                                    <img src={require('./images/person5.jpg')} alt="Meet an advocate" class="my_image"/>
                                </div>
                                <br />
                                <div style={{color:"#0e2f56"}}>
                                    <b>Name of Person</b> <br />
                                    <medium>Role of Person</medium>
                                </div>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Team 