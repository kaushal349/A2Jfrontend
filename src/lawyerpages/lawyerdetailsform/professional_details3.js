import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
class ProfessionalDetails3 extends React.Component {
  Professional_details = () => {
    return (
      <React.Fragment>
        <div className="pl-md-5 mt-5">
          <p className="bold size-09">Practice Experience Details:</p>

          <div className="table-3-box">
            <table class="table table-sm table-3-controller">
              <thead>
                <tr>
                  <th scope="col">Experience Details</th>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                </tr>
              </thead>
              <tbody>
                {this.props.experience_details.map((val, idx) => {
                  return (
                    <tr key={val.index}>
                      <td className="table-padding">
                        <input
                          type="text"
                          name="experience_name"
                          onChange={e =>
                            this.props.handleExperienceDetailsChange(e, idx)
                          }
                          className="form-control form-control-sm"
                        />
                      </td>
                      <td className="table-padding">
                        <DatePicker
                          onChange={e =>
                            this.props.handleDateChange(e, idx, "from")
                          }
                          inputClassName="form-control date-field"
                          value={val.from}
                          shouldHighlightWeekends
                        />
                      </td>
                      <td className="table-padding">
                        <DatePicker
                          onChange={e =>
                            this.props.handleDateChange(e, idx, "to")
                          }
                          value={val.to}
                          inputClassName="form-control date-field"
                          shouldHighlightWeekends
                        />
                      </td>

                      {idx === 0 ? null : (
                        <td className="table-padding">
                          <FontAwesomeIcon
                            icon={faMinusCircle}
                            onClick={e =>
                              this.props.removeExperienceDetailsRow(e, idx)
                            }
                          />
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.props.addExperienceDetailsRow}
              >
                Add new
              </button>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.Professional_details()}</React.Fragment>;
  }
}
export default ProfessionalDetails3;
