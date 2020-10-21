import React,{Component} from 'react'
import './index.css'
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import NavBar from '../../navbar'
import StarRatings from 'react-star-ratings';
 

class LawyerProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
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
            lawyer:null,
            education:null,
            experience:null,
            awardsandrecognitions:null,
            barcouncilmembershipdetails:null,
            timings:null,
            stories:null,
            questions: [
                {
                    content:'Question content',
                    answer: 'Answer content',
                    upvotes: 14,
                    downvotes: 2,
                },
                {
                    content:'Question content',
                    answer: 'Answer content',
                    upvotes: 14,
                    downvotes: 2,
                },
                {
                    content:'Question content',
                    answer: 'Answer content',
                    upvotes: 14,
                    downvotes: 2,
                },
            ],
        }
    }

    async componentDidMount(){
        console.log(this.props.match.params.id)
        const num=this.props.match.params.id
        axios.get('lawyer/viewlawyer/'+num+'/',{
            'headers': {
                'content-type': 'multipart/form-data'
            }}).then(res => {
                console.log(res.data)
                this.setState({lawyer:res.data['lawyer'],barcouncilmembershipdetails:res.data['barcouncilmembershipdetails'],education:res.data['education'],experience:res.data['experience'],awardsandrecognitions:res.data['awardsandrecognitions'],timings:res.data['timings']})
                    
            }).catch(err => {
                console.log(err.response)
        })
        axios.get('clientstory/lawyerclientstories/'+num+'/')
        .then(res => {
            console.log(res.data)
            this.setState({stories:res.data})
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    getStars = (rating) => {

        // Round to nearest half
        rating = Math.round(rating * 2) / 2;
        let output = [];
      
        // Append all the filled whole stars
        for (var i = rating; i >= 1; i--)
          output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>')
      
        // If there is a half a star, append it
        if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>')
      
        // Fill the empty stars
        for (let i = (5 - rating); i >= 1; i--)
          output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>')
        
          console.log(output)
        return output.join('');
      
       
      }
    


    render(){

        let info  = () => {
                return <div id="lawyerinfo">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row"> <i className="fa fa-commenting"></i> Location</div>
                            <div className="row">
                                <b>Law Chambers: </b>
                            </div>
                            <div className="row">
                                <b>Detailed Address: {this.state.lawyer.loaction}</b>
                            </div>
                            <div className="row">
                                <a href="#">Get Directions</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <b>Available Timings:</b>
                                {this.state.timings.map(entry => (
                                    <div>{entry.day} - {entry.from_time} to {entry.to_time}</div>
                                ))}
                            </div>
                            <div className="row">
                                <b>Approximate Fee:</b> Rs. {this.state.lawyer.fee}
                            </div>
                            <div className="row">
                                <a href="/bookappointments" className="btn btn-custom">Book Appointment with Advocate <br />(No Booking Fee)</a>
                            </div>
                        </div>
                    </div>
            </div>
        }
       
        let stories = () => {
            return <div>
                <div className="row">
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
                    <div className="row" id="stories" >
                        {this.state.stories?
                        <div>
                            {this.state.stories.map(story => (
                                <div className="row " style={{marginTop:"3%",textAlign:"left"}}>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-3">
                                        <div >
                                            <img  src={require('../../Images/law1.png')} alt='Feedback' style={{width:"100%"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="row">
                                           <div className="col-md-9">
                                               <strong>{story.title}</strong>
                                            </div>
                                            <div className="col-md-3">
                                                <i>{story.days} days ago</i>
                                            </div>
                                        </div>
                                        <medium>
                                        {story.recommend} <br />
                                        {story.keywords}
                                        </medium>
                                        <div style={{border:"solid",borderWidth:"thin"}}>
                                            {story.content}
                                        </div>
                                    </div>
                                </div> 
                            ))}
                        </div>:null}
                     </div>
                     </div>
                </div>
        }

        let qanda = () => {
            return <div >
                <div className="row">
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
                    <div className="row" id="qanda">
                        {this.state.questions?
                        <div>
                            {this.state.questions.map(question => (
                                <div  className="row"  style={{marginTop:"3%",textAlign:"left",width:"100%",border:"solid",borderWidth:"thin",paddingLeft:"5%"}}>
                                    <div className="row">
                                        <div className="col-md-8">
                                            {question.content}
                                        </div>
                                        <div className="col-md-2">
                                            {question.upvotes} Upvotes
                                        </div>
                                        <div className="col-md-2">
                                            {question.downvotes} Downvotes
                                        </div>
                                    </div>
                                    <div className="row" style={{padding:"2%",border:"solid",borderWidth:"thin"}}>
                                        {question.answer}
                                    </div>
                                </div>
                            ))}
                        </div>:null}
                    </div>
                </div>
            </div>
        }

        let knowledgecenter = () => {
            return <div>
                Knowledge Center
            </div>
        }

        let displayaccordian = () => {
            return <div>
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
                        <div>
                        {info()}
                        </div>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        {stories()}
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="2">
                        {qanda()}
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="3">
                    {knowledgecenter()}
                    </Accordion.Collapse>
                </Accordion>
            </div>
        } 

        return(
            <div>
                <NavBar />
            {this.state.lawyer?
                <div clasName="container" id="lawyerprofile">
                    <div className="row imp_details">
                            <div className="col-md-2" id="profileimageparent">
                                <img id="profileimage" src={require('../../Images/law1.png')} alt="Profile Picture" />
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-6" style={{textAlign:"left"}}>
                                        <h4 style={{color:"red"}}><b>{this.state.lawyer.name}</b></h4>
                                        <medium>
                                            <b>Education</b>:{this.state.education?
                                            this.state.education.map(entry => (
                                                '   ' + entry.degree 
                                            )):null}
                                        </medium>
                                        <br />
                                        <medium>
                                            <b>Specialization:</b>{this.state.lawyer.specialization?
                                            this.state.lawyer.specialization.map(entry => (
                                                '   ' + entry
                                            )):null}
                                        </medium>
                                        <br />
                                        <medium>
                                            <b>Experience:</b>{this.state.experience?
                                            this.state.experience.map(entry => (
                                                '   '+ entry.position + ' (' + entry.from_date +' - ' +entry.to_date + ')\n'
                                            )):null}
                                        </medium>
                                        <br />
                                        {this.state.lawyer.verified?
                                        <medium style={{color:"green"}}><b>Verified</b></medium>:
                                        <medium style={{color:"red"}}><b>Not Verified</b></medium>}
                                        
                                    </div>
                                    <div className="col-md-6" style={{textAlign:"center"}}>
                                        <h6>
                                            <b>Rating of Advocate: &nbsp;</b>
                                            <StarRatings
                                                rating={this.state.lawyer.rating}
                                                starRatedColor="blue"
                                                numberOfStars={5}
                                                starDimension="2rem"
                                                starSpacing="0"
                                            />
                                        </h6>
                                        <medium> <b>Law Chambers: </b></medium>
                                        <br /><br />
                                        <a href="/bookappointments" className="btn btn-custom">Book Appointment with Advocate <br />(No Booking Fee)</a>
                                    </div>
                                </div>
                                <div className="row shortnote">
                                    <p>
                                        {this.state.lawyer.shortnote}
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="row lawyer_accordian">
                        {displayaccordian()} 
                    </div>
                    <div className="row" id ="photogallery">
                        <h5>Photo Gallery: </h5>
                        <div className="container">
                            <div className="row justify-content-center">
                            {this.state.lawyer1.Pictures.map(pic => (
                                <div className="col-sm-2">
                                    <div class="pictureparent">
                                        <img src={require('../../Images/law1.png')} alt="Profile pic" class="extrapicture"/>
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
                            {this.state.barcouncilmembershipdetails.map(entry => (
                                <div>{entry.experience_name}</div>
                            ))}
                        </div>
                    </div>  
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5 profileblocks">
                            <h5><b>Education Details:</b></h5>
                            {this.state.education.map(entry => (
                                <div>{entry.degree} ( {entry.institute_name} )</div>
                            ))}
                        </div>
                        <div className="col-sm-5 profileblocks">
                            <h5><b>Registrations</b></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5 profileblocks">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5><b>Practice Areas:</b></h5>
                                    {this.state.lawyer.practice_areas.map(entry => (
                                        <div>{entry}</div>
                                    ))}
                                </div>
                                <div className="col-sm-6">
                                    <h5><b>Specialization: </b></h5>
                                    {this.state.lawyer.specialization.map(entry => (
                                        <div>{entry}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 profileblocks">
                            <h5><b>Experience</b></h5>
                            {this.state.experience.map(entry => (
                                <div> {entry.position} ( {entry.from_date} - {entry.to_date} )</div>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-5 profileblocks">
                            <h5><b>Awards and Recognitions:</b></h5>
                            {this.state.awardsandrecognitions.map(entry => (
                                <div> {entry.award_name} ( {entry.received_in} )</div>
                            ))}
                        </div>
                        <div className="col-sm-5 profileblocks">
                            <h5><b>Appears Before:</b></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="row justify-content-end" id ="errorblock">
                        <a href="/" style={{color:"red"}}>Report an error</a>
                    </div>
                    
                </div>
            :
            <div>
                Loading...b
                {this.props.id}
            </div>}
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
  
  
  export default connect(mapStateToProps)(LawyerProfile);
  