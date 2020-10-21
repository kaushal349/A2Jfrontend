import React,{Component} from 'react'
import './index.scss'

import Search from './components/search/index'
import Carousel from './components/carousel/index'
import Boxes from './components/boxes/index'
import Specialization from './components/specialization/index'
import Articles from './components/articles/index'
import Team from './components/team/index'
import UserExperience from './components/userexperience'
import DownloadApp from './components/downloadapp'
import NavBar from '../navbar'

class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <NavBar />
                <div >
                    <Search />
                </div>
                
                <div className="divisions">
                    <Carousel />
                </div>
                <div className="divisions">
                    <Boxes />
                </div>
                <div className="divisions">
                    <Specialization />
                </div>
                <div className="divisions">
                    <Articles />
                </div>
                <div className="divisions">
                    <Team />
                </div>
                <div className="divisions"> 
                    <UserExperience />
                </div>
                <div className="divisions">
                    <hr style={{border:"solid",marginTop:"5%",borderWidth:"thin",borderColor:"rgb(18, 112, 175)"}}/>   
                </div>
                
                <div className="divisions"> 
                    <DownloadApp />
                </div>
                <div className="divisions">
                    <hr style={{border:"solid",borderWidth:"thin"}}/>
                </div>
            </div>
        )
    }
}

export default Home 