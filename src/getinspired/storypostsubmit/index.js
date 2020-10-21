import React,{Component} from 'react'
import Search from '../../home/components/search'
import './index.scss'
import NavBar from '../../navbar'

class StoryPostSubmit extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <NavBar />
                <div><Search /></div>
                <hr style={{border:"solid",borderWidth:"thin"}}/>
                <div id="thankyou" >
                   <h5>Thank You.</h5>
                   <p>Your story has been successfully submitted. It will be posted online subsequent to the approval from admin.
                       Please check your e-mail for any communication with the admin.
                   </p>
                </div>
                <hr style={{border:"solid",borderWidth:"thin"}}/>
                <div id="advvertical2">
                    <h4>ADVERTISEMENT OF VERTICAL 2 ---- WILL COME UP SOON</h4>
                </div>
            </div>
        )
    }
}

export default StoryPostSubmit