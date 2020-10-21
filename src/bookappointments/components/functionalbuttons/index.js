import React,{Component} from 'react'
import './index.scss'

class FunctionalButtons extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="container" >
                <div className="row">
                    <div className="col-sm-12">
                        <button type="button" className="btn btn-primary functionalbtn" ><i className="fa fa-commenting"></i><br />Chat with an advocate</button>
                        <button type="button" className="btn btn-secondary functionalbtn"><i className="fa fa-file"></i><br />View case records</button>
                        <button type="button" className="btn btn-success functionalbtn"><i className="fa fa-book"></i><br />Read Articles</button>
                        <button type="button" className="btn btn-danger functionalbtn"><i className="fa fa-trophy"></i><br />Case success predictor</button>
                        <button type="button" className="btn btn-warning functionalbtn"><i className="fa fa-balance-scale"></i><br />For advocates/law experts</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default FunctionalButtons