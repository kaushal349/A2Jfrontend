import React,{Component} from 'react'
import './index.scss'

class Carousel extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{backgroundColor:"gray"}}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={require('./images/service1.jpg')} alt="First slide" class="carousel-images"/>
                    </div>
                    <div class="carousel-item">
                    <img src={require('./images/service2.jpg')} alt="Second slide" class="carousel-images"/>
                    </div>
                    <div class="carousel-item">
                    <img src={require('./images/service1.jpg')} alt="Third slide" class="carousel-images"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel