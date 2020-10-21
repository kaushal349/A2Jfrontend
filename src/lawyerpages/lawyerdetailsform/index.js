import React from "react";
import PersonalDetails from "./personal_details";
import EducationalDetails from "./educational_details";
import ProfessionalDetails from "./professional_details";
import ProfessionalDetails2 from "./professional_details2";
import ProfessionalDetails3 from "./professional_details3";
import ProfessionalDetails4 from "./professional_details4";
import ProfessionalDetails5 from "./professional_details5";
import OtherDetails from "./other_details";
import "./lawyer_profile.css";
import Disclaimer from "./disclaimer";
import { validate_name } from "./validations";
import NavBar from '../../navbar'
import axios from 'axios'
import {connect} from 'react-redux'

class LawyerDetailsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mobile_number: "",
      email_id: "",
      id_proof: "",
      id_card_number: "",
      languages_known: "",

      educational_details: [
        {
          index: Math.random(),
          degree_name: "",
          completion_year: "",
          college_name: "",
          certificate: ""
        }
      ],

      practice_areas: [],
      specialization: [],
      law_chamber: "",
      law_chamber_address: "",
      google_map_link: "",
      timmings: {
        monday_from: "",
        monday_to: "",
        tuesday_from: "",
        tuesday_to: "",
        wednesday_from: "",
        wednesday_to: "",
        thursday_from: "",
        thursday_to: "",
        friday_from: "",
        friday_to: "",
        saturday_from: "",
        saturday_to: "",
        sunday_from: "",
        sunday_to: ""
      },
      experience_details: [
        {
          index: Math.random(),
          experience_name: "",
          from: null,
          to: null
        }
      ],
      membership_details: [
        {
          index: Math.random(),
          experience_name: "",
          registration_number: "",
          supporting_document: ""
        }
      ],
      approximate_consultation_fee: "",
      courts_list: [],
      other_details: [
        {
          index: Math.random(),
          award_name: "",
          received_in: "",
          supporting_document: ""
        }
      ],
      disclaimer_accepted: false
    };
  }

  handleSubmit = e => {

    const timings = [
      {
        'day':'monday',
        'from_time':this.state.monday_from,
        'to_time':this.state.monday_to
      },
      {
        'day':'tuesday',
        'from_time':this.state.tuesday_from,
        'to_time':this.state.tuesday_to
      },
      {
        'day':'wednesday',
        'from_time':this.state.wednesday_from,
        'to_time':this.state.wednesday_to
      },
      {
        'day':'thursday',
        'from_time':this.state.thursday_from,
        'to_time':this.state.thursday_to
      },
      {
        'day':'friday',
        'from_time':this.state.friday_from,
        'to_time':this.state.friday_to
      },
      {
        'day':'saturday',
        'from_time':this.state.saturday_from,
        'to_time':this.state.saturday_to
      },
      {
        'day':'sunday',
        'from_time':this.state.sunday_from,
        'to_time':this.state.sunday_to
      },
      
    ]
    console.log(this.state);
    const formdata = new FormData()

    formdata.append('name',this.state.name)
    formdata.append('email',this.state.email_id)
    formdata.append('id_proof',this.state.id_proof)
    formdata.append('id_card_number',this.state.id_card_number)
    formdata.append('languages',this.state.languages_known)
    formdata.append('education',this.state.educational_details)
    formdata.append('practice_areas',this.state.practice_areas)
    formdata.append('specialization',this.state.specialization)
    formdata.append('timings',timings)
    formdata.append('experience',this.state.experience_details)
    formdata.append('bar_council_membership_details',this.state.membership_details)
    formdata.append('fee',this.state.approximate_consultation_fee)
    formdata.append('courts',this.state.courts_list)
    formdata.append('awards_and_recognitions',this.state.other_details)
    console.log(formdata)
    alert(formdata)

    axios.post('lawyer/viewlawyer/'+this.props.user_id+'/',formdata,{
      'headers': {
          'content-type': 'multipart/form-data',
      }}).then(res => {
        this.setState({submitted:true})
        alert('Submitted')
      }).catch(err => {
          console.log(err.response)
      })
    

  };

  handleDisclaimerChange = e => {
    this.setState({ disclaimer_accepted: !this.state.disclaimer_accepted });
  };

  addOtherDetailsRow = e => {
    this.setState(prevState => ({
      other_details: [
        ...prevState.other_details,
        {
          index: Math.random(),
          award_name: "",
          received_in: "",
          supporting_document: ""
        }
      ]
    }));
  };

  removeOtherDetailsRow = (e, idx) => {
    this.setState({
      other_details: this.state.other_details.filter(
        (s, sindex) => idx !== sindex
      )
    });
  };

  handleOtherDetailsChange = (e, idx) => {
    const updatedArray = [...this.state.other_details];
    updatedArray[idx][e.target.name] = e.target.value;
    this.setState({ other_details: updatedArray });
  };

  removeCourtsList = (e, idx) => {
    this.setState({
      courts_list: this.state.courts_list.filter((s, sindex) => idx !== sindex)
    });
  };

  addCourtsList = e => {
    if (this.state.courts_list.includes(e.target.value)) {
      return;
    }
    const updatedArray = [...this.state.courts_list, e.target.value];
    this.setState({
      courts_list: updatedArray
    });
  };

  handleDateChange = (e, idx, name) => {
    const updatedArray = [...this.state.experience_details];
    updatedArray[idx][name] = e;
    this.setState({ experience_details: updatedArray });
  };

  addMembershipDetailsRow = e => {
    this.setState(prevState => ({
      membership_details: [
        ...prevState.membership_details,
        {
          index: Math.random(),
          experience_name: "",
          registration_number: "",
          supporting_document: ""
        }
      ]
    }));
  };

  removeMembershipDetailsRow = (e, idx) => {
    this.setState({
      membership_details: this.state.membership_details.filter(
        (s, sindex) => idx !== sindex
      )
    });
  };

  handleMembershipDetailsChange = (e, idx) => {
    const updatedArray = [...this.state.membership_details];
    updatedArray[idx][e.target.name] = e.target.value;
    this.setState({ membership_details: updatedArray });
  };

  addExperienceDetailsRow = e => {
    this.setState(prevState => ({
      experience_details: [
        ...prevState.experience_details,
        {
          index: Math.random(),
          experience_name: "",
          from: "",
          to: ""
        }
      ]
    }));
  };

  removeExperienceDetailsRow = (e, idx) => {
    this.setState({
      experience_details: this.state.experience_details.filter(
        (s, sindex) => idx !== sindex
      )
    });
  };

  handleExperienceDetailsChange = (e, idx) => {
    const updatedArray = [...this.state.experience_details];
    updatedArray[idx][e.target.name] = e.target.value;
    this.setState({ experience_details: updatedArray });
  };

  handleTimeChange = (value, target) => {
    if (value === null) {
      const time = "";

      const updatedArray = { ...this.state.timmings };
      updatedArray[target] = time;
      this.setState({
        timmings: updatedArray
      });
    } else {
      const time = value.format("h:mm a");

      const updatedArray = { ...this.state.timmings };
      updatedArray[target] = time;
      this.setState({
        timmings: updatedArray
      });
    }
  };

  removeSpecialization = (e, idx) => {
    this.setState({
      specialization: this.state.specialization.filter(
        (s, sindex) => idx !== sindex
      )
    });
  };

  addSpecialization = e => {
    if (this.state.specialization.includes(e.target.value)) {
      return;
    }
    const updatedArray = [...this.state.specialization, e.target.value];
    this.setState({
      specialization: updatedArray
    });
  };

  removePracticeArea = (e, idx) => {
    this.setState({
      practice_areas: this.state.practice_areas.filter(
        (s, sindex) => idx !== sindex
      )
    });
  };

  addPracticeArea = e => {
    if (this.state.practice_areas.includes(e.target.value)) {
      return;
    }
    const updatedArray = [...this.state.practice_areas, e.target.value];
    this.setState({
      practice_areas: updatedArray
    });
  };

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        validate_name(this.state.name)
      }
    );
  };

  handleEducationalDetailsChange = (e, idx) => {
    const updatedArray = [...this.state.educational_details];
    updatedArray[idx][e.target.name] = e.target.value;
    this.setState({ educational_details: updatedArray });
  };

  removeEducationalDetailsRow = (e, idx) => {
    this.setState({
      educational_details: this.state.educational_details.filter(
        (s, sindex) => idx !== sindex
      )
    });
  };

  addEducationalDetailsRow = e => {
    this.setState(prevState => ({
      educational_details: [
        ...prevState.educational_details,
        {
          index: Math.random(),
          degree_name: "",
          completion_year: "",
          college_name: "",
          certificate: ""
        }
      ]
    }));
  };

  render() {
    return (
      <div>
        <NavBar />
      
      <div className="container" id="lawyer-profile">
        <div className="row">
          <div className="col">
            <p>
              Please update your profile to use the full range of services
              provided by A2J.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="my-profile">My Profile:</p>
          </div>
        </div>
        <PersonalDetails
          form_data={this.state}
          handleChange={this.handleChange}
        />
        <EducationalDetails
          addEducationalDetailsRow={this.addEducationalDetailsRow}
          removeEducationalDetailsRow={this.removeEducationalDetailsRow}
          educational_details={this.state.educational_details}
          handleEducationalDetailsChange={this.handleEducationalDetailsChange}
        />
        <ProfessionalDetails
          addPracticeArea={this.addPracticeArea}
          practice_areas={this.state.practice_areas}
          removePracticeArea={this.removePracticeArea}
          addSpecialization={this.addSpecialization}
          removeSpecialization={this.removeSpecialization}
          specialization={this.state.specialization}
          handleChange={this.handleChange}
        />
        <ProfessionalDetails2
          format={"h:mm a"}
          handleTimeChange={this.handleTimeChange}
        />
        <ProfessionalDetails3
          experience_details={this.state.experience_details}
          handleExperienceDetailsChange={this.handleExperienceDetailsChange}
          removeExperienceDetailsRow={this.removeExperienceDetailsRow}
          addExperienceDetailsRow={this.addExperienceDetailsRow}
          handleDateChange={this.handleDateChange}
        />
        <ProfessionalDetails4
          membership_details={this.state.membership_details}
          handleMembershipDetailsChange={this.handleMembershipDetailsChange}
          addMembershipDetailsRow={this.addMembershipDetailsRow}
          removeMembershipDetailsRow={this.removeMembershipDetailsRow}
          handleChange={this.handleChange}
        />
        <ProfessionalDetails5
          removeCourtsList={this.removeCourtsList}
          addCourtsList={this.addCourtsList}
          courts_list={this.state.courts_list}
        />
        <OtherDetails
          other_details={this.state.other_details}
          addOtherDetailsRow={this.addOtherDetailsRow}
          removeOtherDetailsRow={this.removeOtherDetailsRow}
          handleChange={this.handleChange}
          handleOtherDetailsChange={this.handleOtherDetailsChange}
        />

        <Disclaimer handleDisclaimerChange={this.handleDisclaimerChange} />

        <button
          type="button"
          className="btn btn-info"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      token: state.token,
      isAuthenticated: state.token!=null,
      user_id: state.user_id,
  }
}


export default connect(mapStateToProps)(LawyerDetailsForm);
