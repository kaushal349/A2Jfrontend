import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import * as  actions from './store/actions/auth'
import {connect} from 'react-redux'

//Pages
import Home from './home'
import StoryPostSubmit from './getinspired/storypostsubmit';
import BookAppointments from './bookappointments';
import Login from './authentication/login';
import Register from './authentication/register';
import VerifyMobile from './authentication/verifymobile'
import GetInspiredNewStory from './getinspired/getinspirednewstory';
import VerifyEmail from './authentication/verifyemail'


//Footer
import Footer from './footer/index'

//Lawyer
import LawyerSidebar from './lawyerpages/lawyersidebar';
import LawyerQuestionCorner from './lawyerpages/lawyerquestioncorner';
import LawyerClientStory from './lawyerpages/lawyerclientstory';
import LawyerSignup from './lawyerpages/lawyersignup';
import LawyerList from './lawyerpages/lawyerlist'
import LawyerProfile from './lawyerpages/advocateprofile'
import LawyerPortal from './lawyerpages/lawyerportal'
import LawyerSignin from './lawyerpages/lawyersignin'

//Chamber
import ChamberSidebar from './Chamber/ChamberSidebar';
import ChamberRegister from './Chamber/ChamberRegister'
import ChamberPortal from './Chamber/ChamberPortal'

//article 
import ReadArticle from './article/readarticle/index'
import GetInspiredHome from './getinspired/getinspiredhome';
import GetInspiredFullStory from './getinspired/getinspiredfullstory';
import LawyerDetailsForm from './lawyerpages/lawyerdetailsform';
import InformationCenter from './article/informationcenter';
import BookAppointments2 from './bookappointments/bookappointments2';


class App extends React.Component {

  componentDidMount(){
    this.props.onTryAutoSignup();
  }

  render(){return(
    <div>
      
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/lawyersidebar" component={LawyerSidebar} />
        <Route exact path="/lawyerquestioncorner" component={LawyerQuestionCorner} />
        <Route exact path="/lawyerclientstory" component={LawyerClientStory} />
        <Route exact path="/lawyersignup" component={LawyerSignup} />
        <Route exact path="/lawyersignin" component={LawyerSignin} />
        <Route exact path="/storypostsubmit" component = {StoryPostSubmit} />
        <Route exact path="/bookappointments" component = {BookAppointments} />
        <Route exact path="/lawyerprofile/:id" component = {LawyerProfile} />
        <Route exact path="/getinspiredhome" component = {GetInspiredHome} />
        <Route exact path="/getinspiredfullstory/:id" component = {GetInspiredFullStory} />
        <Route exact path="/login" component = {Login} />
        <Route exact path="/register" component = {Register} />
        <Route exact path="/verifymobile" component = {VerifyMobile} />
        <Route exact path="/verifyemail" component = {VerifyEmail} />
        <Route exact path="/getinspirednewstory" component = {GetInspiredNewStory} />
        <Route exact path="/lawyerlist/:location/:keyword" component = {LawyerList} />
        <Route exact path="/chamberpage" component = {ChamberSidebar} />
        <Route exact path="/chamberregister" component = {ChamberRegister} />
        <Route exact path="/chamberportal" component = {ChamberPortal} />
        <Route exact path="/readarticle/:id" component = {ReadArticle} />
        <Route exact path="/lawyerportal" component = {LawyerPortal} />
        <Route exact path="/lawyerdetailsform" component = {LawyerDetailsForm} />
        <Route exact path="/informationcenter" component = {InformationCenter} />
        <Route exact path="/bookappointments2" component = {BookAppointments2} />
      </Switch>

      <Footer />
    </div>
  )};
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

