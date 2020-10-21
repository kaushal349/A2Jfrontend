import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))(Tooltip);

const courtsList = [
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

class ProfessionalDetails5 extends React.Component {
  Professional_details = () => {
    return (
      <React.Fragment>
        <div className="pl-md-5 mt-5">
          <label className="bold size-09">
            Courts before which you appear:
          </label>
          {/* custom select */}
          <select
            className="selectpicker form-control my-3 my-dropdown"
            onChange={this.props.addCourtsList}
          >
            <option value="">-----</option>
            {courtsList.map((val, idx) => {
              return (
                <option key={idx} value={val}>
                  {val}
                </option>
              );
            })}
          </select>

          <div className="box-shadow box-list">
            {this.props.courts_list.map((val, idx) => {
              return (
                <React.Fragment>
                  <LightTooltip title="Remove">
                    <Button
                      onClick={e => this.props.removeCourtsList(e, idx)}
                      className="basic-list-appearance list-appearance-3"
                    >
                      {val}
                    </Button>
                  </LightTooltip>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.Professional_details()}</React.Fragment>;
  }
}

export default ProfessionalDetails5;
