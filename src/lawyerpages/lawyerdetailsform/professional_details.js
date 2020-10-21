import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles(theme => ({
  tooltip: {
    //backgroundColor: theme.palette.common.white,
    //color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);

const practiceAreasList = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
  "option7",
  "option8",
  "option9",
  "option10"
];

const specializationList = [
  "option1",
  "option2",
  "option3",
  "option4",
  "option5",
  "option6",
  "option7",
  "option8",
  "option9",
  "option10"
];

class ProfessionalDetails extends React.Component {
  Professional_details = () => {
    return (
      <div className="block">
        <div className="row">
          <div className="col">
            <p className="bold">step-3: Professional Details</p>
          </div>
        </div>

        <div className="pl-md-5">
          <label className="bold size-09">Practice Areas:</label>
          {/* custom select */}
          <select
            className="selectpicker my-3 my-dropdown form-control "
            onChange={this.props.addPracticeArea}
          >
            <option value="">-----</option>
            {practiceAreasList.map((val, idx) => {
              return (
                <option key={idx} value={val}>
                  {val}
                </option>
              );
            })}
          </select>

          <div className="box-shadow box-list">
            {this.props.practice_areas.map((val, idx) => {
              return (
                <React.Fragment>
                  <LightTooltip title="Remove">
                    <Button
                      className="basic-list-appearance list-appearance"
                      onClick={e => this.props.removePracticeArea(e, idx)}
                    >
                      {val}
                    </Button>
                  </LightTooltip>
                </React.Fragment>
              );
            })}
          </div>

          <label className="bold size-09">Specialization:</label>
          {/* custom select */}
          <select
            className="selectpicker  my-3 my-dropdown form-control "
            onChange={this.props.addSpecialization}
          >
            <option value="">-----</option>
            {specializationList.map((val, idx) => {
              return (
                <option key={idx} value={val}>
                  {val}
                </option>
              );
            })}
          </select>

          <div className="box-shadow box-list">
            {this.props.specialization.map((val, idx) => {
              return (
                <React.Fragment>
                  <LightTooltip title="Remove">
                    <Button
                      className="basic-list-appearance list-appearance-2"
                      onClick={e => this.props.removeSpecialization(e, idx)}
                    >
                      {val}
                    </Button>
                  </LightTooltip>
                </React.Fragment>
              );
            })}
          </div>

          <label className="bold size-09">Law Chamber associated to:</label>
          {/* custom select */}
          <select
            className="selectpicker my-3 my-dropdown form-control"
            name="law_chamber"
            onChange={this.props.handleChange}
          >
            <option value="">-----</option>
            {practiceAreasList.map((val, idx) => {
              return (
                <option key={idx} value={val}>
                  {val}
                </option>
              );
            })}
          </select>

          <div className="form-group pt-3">
            <label className="bold size-09">Law chamber address:</label>
            <input
              type="text"
              name="law_chamber_address"
              placeholder="Enter address of the chamber"
              className="form-control my-2 my-input-field"
              onChange={this.props.handleChange}
            />
          </div>

          <div className="form-group pt-3">
            <label className="bold size-09">Google maps link:</label>
            <input
              type="text"
              name="google_map_link"
              placeholder="Enter google link of the chamber"
              className="form-control my-2 my-input-field"
              onChange={this.props.handleChange}
            />
          </div>
        </div>
      </div>
    );
  };
  render() {
    return <React.Fragment>{this.Professional_details()}</React.Fragment>;
  }
}

export default ProfessionalDetails;
