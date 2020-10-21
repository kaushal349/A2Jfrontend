import React,{Component} from 'react'
import Search from '../home/components/search'
import './index.scss'
import Search1 from './components/search1'
import FunctionalButtons from './components/functionalbuttons'
import Advertisements from './components/advertisements'
import UserExperience from '../home/components/userexperience'
import NavBar from '../navbar'

class BookAppointments extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div >
                <NavBar />
                <div id="searchdiv"><Search /></div>
                <hr style={{border:"solid",borderWidth:"thin"}}/>   
                <div id="bookappointment" >
                   <h3 style={{color:"white"}}><b>Book Appointments</b></h3>
                   <br />  
                   <h3 style={{color:"white"}}>Quality Assured</h3>
                   <div id="search1">
                        <Search1 />
                   </div>
                   <div id="functionalbuttons">
                        <FunctionalButtons />
                   </div>
                </div>
                <hr style={{border:"solid",borderWidth:"thin"}}/>   
                <div id="advertisements">
                       <Advertisements />
                </div>
                <hr style={{border:"solid",borderWidth:"thin"}}/>   
                <div id="userexp">
                    <UserExperience />
                </div>
            </div>
        )
    }
}

export default BookAppointments