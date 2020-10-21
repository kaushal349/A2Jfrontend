import React,{Component} from 'react'
import './index.scss'
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class BasicProfile extends Component {
    constructor(){
        super()
        this.state = {
            lawyer:null,
            loading:true,
            stories:null,
            questions:null,
            lawyer1:{
                Photo: './images/person.jpg',
                FirstName:'Sample',
                MiddleName:'',
                LastName:'Name',
                Education: 'Education info',
                Specialization: 'Specialization info',
                YearOfExp: 'x Years of Experience',
                verified: 'Advocate Registration verified',
                Rating: 4,
                Pictures:[1,2,3,4],
                Languages:'English Hindi Punjabi',
                BarCouncilMemberships:'Membership 1 Membership 2',
                AwardsRecgn: 'Award1 Award2',
                AppearsBefore:'Appear1 Appear2',
                Registrations: 'Reg1 Reg2',
                Experience: '5 Years',
                PracticeAreas: 'Prac1 Prac2 Prac3',
                ShortNote:'A lawyer or attorney is a person who practices law, as an advocate, attorney, attorney at law, barrister, barrister-at-law, bar-at-law, canonist, canon lawyer, civil law notary, counsel, counselor, counsellor, solicitor, legal executive, or public servant preparing, interpreting and applying law, but not as a paralegal',
            },
            lawchambers:[
                {
                    Name: 'Law Chamber 1'
                },
                {
                    Name: 'Law Chamber 2'
                }
            ],
            feedbacks: [
                {
                    Title: 'Title of Feedback',
                    Recommendation: 'Yes, I Recommend this advocate',
                    FeedbackContent: 'Happy with advocate friendliness, Legal Explanations, interaction',
                    Story: 'This is content of the story',
                    Time: '2 days ago',
                },
                {
                    Title: 'Title of Feedback',
                    Recommendation: 'Yes, I Recommend this advocate',
                    FeedbackContent: 'Happy with advocate friendliness, Legal Explanations, interaction',
                    Story: 'This is content of the story',
                    Time: '2 days ago',
                },
                {
                    Title: 'Title of Feedback',
                    Recommendation: 'Yes, I Recommend this advocate',
                    FeedbackContent: 'Happy with advocate friendliness, Legal Explanations, interaction',
                    Story: 'This is content of the story',
                    Time: '2 days ago',
                }
            ],
            question: [
                {
                Question:'Question content',
                Answer: 'Answer content'
                },
                {
                    Question:'Question content',
                    Answer: 'Answer content'
                },
                {
                    Question:'Question content',
                    Answer: 'Answer content'
                },
            ],
            buttonindex: null,
            ask:false,
            quest: null,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = event => {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }

    handleClick1 = event => {
        this.setState({ask:true})
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log('ehhefvbv')
        const quest_add={
            content : this.state.quest,
            lawyer : this.props.id,
            user : this.props.user_id,
        }  
        axios.post('questioncorner/viewquestion/',quest_add,{
        'headers': {
            'Authorization': 'Token '+this.props.token
        }}).then(res => {
            this.setState({submitted:true})
            console.log(res)
        }).catch(err => {
            console.log(err.response)
        })
    }
    async componentDidMount(){
        const num=this.props.id
        axios.get('lawyer/viewlawyer/'+num+'/',{
            'headers': {
                'content-type': 'multipart/form-data'
            }}).then(res => {
                this.setState({lawyer:res.data,loading:false})
                console.log(res)
                axios.get('lawchamber/lawyerlawchambers/'+num+'/',{
                    'headers': {
                        'content-type': 'multipart/form-data'
                    }}).then(resp => {
                        this.setState({lawchambers:resp.data,loading:false})
                        console.log(res)
                    }).catch(err => {
                        console.log(err.response)
                    })
                axios.get('questioncorner/lawyerquestions/'+num+'/').then(res => {
                    this.setState({questions:res.data,num:0})
                    console.log(res.data)
                    }).catch(err => {
                        console.log(err.response)
                    })
                axios.get('clientstory/lawyerclientstories/'+num+'/').then(res => {

                        this.setState({stories:res.data,num:0})
                        console.log(res.data)
                    }).catch(err => {
                        console.log(err.response)
                    })
                    
            }).catch(err => {
                console.log(err.response)
        })
    }
        

    handleClick = (buttonid) => {
        console.log(buttonid)
        this.setState({buttonindex:buttonid})
    }


    render(){

        const mystyle = {
            border: "solid",
            borderWidth: "thin",
            padding: "1%",
            margin:"2%",
        }

        let divarr = [
            <div className="row" style={mystyle} >
                <div className="col-sm-6">
                    <h6><i class="fa fa-map-marker icon"></i>Location</h6>
                    <h6>Law Chambers' names</h6>
                    <h6>Detailed Address</h6>
                    <a href="/">Get Directions</a>
                </div>
                <div class="col-sm-6" >
                    <h6>Available days:</h6>
                    <h6>Available timings:</h6>
                    <h6>Approximate fee</h6> <br />
                    <a href="/" class="btn btn-primary"><h6>Book Appointment with Advocate</h6><small>No booking fee</small></a>
                </div>
            </div>,

            <div className="row" style={mystyle}>
                <div className="row" className="bgdivrow">
                        Specialization: &nbsp;&nbsp;&nbsp;
                        <select className="selectpicker">
                            <option>Spl1</option>
                            <option>Spl2</option>
                            <option>Spl3</option>
                        </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Sort By: &nbsp;&nbsp;&nbsp;
                        <select className="selectpicker">
                            <option>Relevance</option>
                            <option>Recent</option>
                            <option>Famous</option>
                        </select>
                </div>
                    <div className="row">
                        {this.state.stories?
                    this.state.stories.map(story => (
                        <div className="row" style={{margin:"2%"}}>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-3">
                                <div style={{width:"8rem"}}>
                                    <img  src={require('./images/person.jpg')} alt='Feedback' style={{width:"100%"}}/>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <h5><strong>{story.title}</strong></h5>
                                <h5 style={{textAlign:"right"}}>{story.days}</h5>
                                <h6>{story.recommend}</h6>
                                <h6>{story.keywords}</h6>
                                <div style={{border:"solid",borderWidth:"thin"}}>
                                    {story.content}
                                </div>
                            </div>
                        </div> 
                    )):null}
                </div>

            </div>,

            <div className="row" style={mystyle}>
            <div className="row" className="bgdivrow">
                    Specialization: &nbsp;&nbsp;&nbsp;
                    <select className="selectpicker">
                        <option>Spl1</option>
                        <option>Spl2</option>
                        <option>Spl3</option>
                    </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Sort By: &nbsp;&nbsp;&nbsp;
                    <select className="selectpicker">
                        <option>Relevance</option>
                        <option>Recent</option>
                        <option>Famous</option>
                    </select>
            </div>
            

            <div className="row">
                {this.state.questions?
                this.state.questions.map(question => (
                    <div  className="row" style={{margin:"2%"}}>
                            <h6 style={{textAlign:"left"}}>Question: {question.content}</h6>
                          
                            <h6 style={{marginLeft:"70%"}}>{question.upvotes} upvotes   {question.downvotes} downvotes</h6>
                           
                            <p>Answer: {question.answer}</p>
                        
                    </div>
                )):null}
            </div>

            </div>,

        ]

        return(
            this.state.loading?<h5>Loading</h5>:
            <div className="container" style={{marginLeft:"5%"}}>
                <div className="row" id="basicprofile">
                    <div className="col-sm-2" style={{textAlign:"center"}}>
                        <div id="profileimageparent">
                        <img  src={require('./images/person.jpg')} alt={this.state.lawyer.name} id="profileimage"/>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="row" style={{marginLeft:"2%"}}>
                            <div className="col-sm-8" style={{color:"gray"}}>
                                <div className="row"><h4 style={{color:"red"}}>{this.state.lawyer.name} </h4></div>
                                <div className="row">Education: {this.state.lawyer.education}</div>
                                <div className="row">Specialization: {this.state.lawyer.specialization}</div>
                                <div className="row">Experience (in years): {this.state.lawyer.year_of_exp}</div>
                                <div className="row">{this.state.lawyer.verified}</div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <h6>Rating of advocate:  
                                    &nbsp;
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span></h6>
                                </div>
                                <div className="row"><br /></div>
                                <div className="row">
                                    Associated Law Chambers:
                                    <div className="container">
                                        {/*{this.state.lawchambers.map(lawchamber => (
                                            <div className="row">
                                                <a href="/">{lawchamber.name}</a>
                                            </div>
                                        ))}*/}
                                    </div>
                                </div>
                                <div class="row text-center buttondiv">
                                    <a href="/bookappointment" class="btn btn-primary">Book Appointment with Advocate</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="shortnote">
                                <p>{this.state.lawyer.shortnote}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle eventKey="0">
                        <button type="button" class="btn btn-light">Info</button>
                    </Accordion.Toggle>
                    <Accordion.Toggle eventKey="1">
                        <button type="button" class="btn btn-light">Stories</button>
                    </Accordion.Toggle>
                    <Accordion.Toggle eventKey="2">
                        <button type="button" class="btn btn-light">Consult Q&A</button>
                    </Accordion.Toggle>
                    <Accordion.Toggle eventKey="3">
                        <button type="button" class="btn btn-light">Knowledge Center</button>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div>{divarr[0]}</div>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <div>{divarr[1]}</div>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="2">
                        <div>
                        {divarr[2]}
                            <button onClick={this.handleClick1}>Ask a new Question</button>   
                            {this.state.ask?
                            <div>
                                {this.props.isAuthenticated?
                                <form onSubmit = {this.handleSubmit}>
                                <input type="text" name="quest" placeholder="Enter Question" onChange={this.handleChange}/>
                               <button type="submit">Submit</button>
                                </form>:
                                <div>
                                    <h4>You are not authenticated yet. </h4>
        <h4 >Click  <Link to='/login'>here</Link> Login or Click  <Link to='/register'>here</Link>Register</h4>
                                </div>}
                            </div>:null}    
                        </div>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="3">
                        <div>{divarr[3]}</div>
                    </Accordion.Collapse>
                </Accordion>
                </div>

             
                
                <div className="row" id ="photogallery">
                    <h5>Photo Gallery: </h5>
                    <div className="container">
                        <div className="row justify-content-center">
                        {this.state.lawyer1.Pictures.map(pic => (
                            <div className="col-sm-2">
                                <div class="pictureparent">
                                    <img src={require('./images/person.jpg')} alt="Profile pic" class="extrapicture"/>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Languages Known:</b></h5>
                        <p>{this.state.lawyer.languages}</p>
                    </div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Bar Council Memberships:</b></h5>
                        <p>{this.state.bar_council_memberships}</p>
                    </div>
                </div>  
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Education Details:</b></h5>
                        <p>{this.state.lawyer.education}</p>
                    </div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Registrations</b></h5>
                        <p>{this.state.lawyer1.Registrations}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Practice Areas / Specialization:</b></h5>
                        <p>{this.state.lawyer.practiceAreas}</p>
                    </div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Experience</b></h5>
                        <p>{this.state.lawyer.year_of_exp}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Awards and Recognitions:</b></h5>
                        <p>{this.state.lawyer.awards_recognitions}</p>
                    </div>
                    <div className="col-sm-5 profileblocks">
                        <h5><b>Appears Before:</b></h5>
                        <p>{this.state.lawyer1.AppearsBefore}</p>
                    </div>
                </div>
                <div className="row justify-content-end" id ="errorblock">
                    <a href="/" style={{color:"red"}}>Report an error</a>
                </div>
                
            </div>
        
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token,
        isAuthenticated: state.token!=null,
        user_id: state.user_id,
    }
  }
  
  
  export default connect(mapStateToProps)(BasicProfile);
  