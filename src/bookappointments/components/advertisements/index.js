import React,{Component} from 'react'
import './index.scss'

class Advertisements extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" >
                <div className="row advertisementblock">
                    <div className="col-sm-6 ">
                        <h4><b>Keeping your data secure is our top priority</b></h4>
                        <ul className="advlist">
                            <li><i className="fa fa-check"></i> Multiple-level security checkups</li>
                            <li><i className="fa fa-check"></i> Multiple data backups</li>
                            <li><i className="fa fa-check"></i> Stringent data privacy policies</li>
                        </ul>
                        <a href="/" className="btn btn-primary" style={{marginLeft:"7%",marginBottom:"5%"}}>Read More</a>
                    </div> 
                    <div className="col-sm-6" style={{textAlign:"center"}}>
                        <img src={require('./images/security.jpg')} alt="security"/>
                    </div>
                </div>
                <div className="row advertisementblock">
                    <div className="col-sm-6 ">
                        <h4><b>Instant appointments with advocates guaranteed</b></h4>
                        <ul className="advlist">
                            <li><i className="fa fa-check"></i> 100% verified advocates</li>
                            <li><i className="fa fa-check"></i> Hassle-free booking process</li>
                            <li><i className="fa fa-check"></i> Skip wasting time in waiting</li>
                        </ul>
                        <a href="/" className="btn btn-primary" style={{marginLeft:"7%",marginBottom:"5%"}}>Find me the right advocate</a>
                    </div> 
                    <div className="col-sm-6" style={{textAlign:"center"}}>
                        <img src={require('./images/appointment.jpg')} alt="appointment"/>
                    </div>
                </div>
                <div className="row advertisementblock">
                    <div className="col-sm-6 ">
                        <h4><b>We can take care of any documentation</b></h4>
                        <ul  className="advlist">
                            <li><i className="fa fa-check"></i> Almost all bureaucratic processes are covered</li>
                            <li><i className="fa fa-check"></i> Hassle-free documentation</li>
                            <li><i className="fa fa-check"></i> Skip wasting time in waiting</li>
                        </ul>
                        <a href="/" className="btn btn-primary" style={{marginLeft:"7%",marginBottom:"5%"}}>Read More</a>
                    </div> 
                    <div className="col-sm-6" style={{textAlign:"center"}}>
                        <img src={require('./images/documentation.jpg')} alt="documentation"/>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default Advertisements