import React,{Component} from 'react'
import './index.scss'
import axios from 'axios'


class Articles extends Component {
    constructor(){
        super()
        this.state = {
            articles:null
        }
    }

    async componentDidMount(){
        axios.get('article/top2articles/').then(res => {
                this.setState({articles:res.data})
                console.log(res.data)
            }).catch(err => {
                console.log(err.response)
            })
    }

    render(){
        return(
            this.state.articles?
            <div class="container" id="toparticles">
                <div class="row">
                    <div class="col-sm-4">
                        <br /><br />
                        <div class="row">
                             <h4 style={{fontSize:"2em"}}><b>Read top articles from law experts</b></h4>
                             <h5>Law articles that keep you informed about the latest updates in the country</h5>
                        </div>
                        <br /><br />
                        <div class="row">
                            <a href="/informationcenter" class="btn btn-custom" style={{marginLeft:"12%"}}>Go somewhere</a>
                        </div>
                        <br /><br />
                    </div>
                    <div class="col-sm-4">
                        <div class="card cardd">
                            <div class="card-body d-flex justify-content-center" >
                                <div>
                                    <a href={`/readarticle/${this.state.articles[0].id}`}><img src={require('./images/pil.jpg')} alt="Meet an advocate" class="article_image"/></a>
                                    <h3>{this.state.articles[0].title}</h3>
                                    <h5><i> - {this.state.articles[0].lawyer}</i></h5>
                                    <small>{this.state.articles[0].days} days ago</small>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card cardd">
                            <div class="card-body d-flex justify-content-center">
                                <div>
                                    <a href={`/readarticle/${this.state.articles[1].id}`}><img src={require('./images/rti.jpg')} alt="Meet an advocate" class="article_image"/></a>
                                    <h3>{this.state.articles[0].title}</h3>
                                    <h5><i> - {this.state.articles[0].lawyer}</i></h5>
                                    <small>{this.state.articles[0].days} days ago</small>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>:<div>Loading...</div>
        )
    }
}

export default Articles 