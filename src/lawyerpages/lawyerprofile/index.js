import React,{Component} from 'react'
import './index.scss'
import BasicProfile from './components/basicprofile'
import Search from '../../home/components/search'
import NavBar from '../../navbar'

class LawyerProfile extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <NavBar />
                <div>
                    <Search />
                </div>
                <div>
                    <BasicProfile id={this.props.match.params.id}/>
                </div>
            </div>
            
        )
    }
}

export default LawyerProfile