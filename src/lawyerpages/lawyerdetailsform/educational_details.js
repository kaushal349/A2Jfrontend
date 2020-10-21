import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
class EducationalDetails extends React.Component {
  Educational_details = () => {
    return (
      <div className="block">
        <div className="row">
          <div className="col">
            <p className="bold">step-2: Educational Details</p>
          </div>
        </div>

        <div className="pl-md-5 table-4-box">
          <table class="table table-sm table-4-controller">
            <thead>
              <tr>
                <th scope="col">
                  Name of Degree
                </th>
                <th scope="col">
                  Completion year
                </th>
                <th scope="col">
                  College/University name
                </th>
                <th scope="col">
                  Pass Certificate
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.educational_details.map((val, idx) => {
                return (
                  <tr key={val.index}>
                    <td className="table-padding">
                      <input
                        type="text"
                        name="degree_name"
                        onChange={e =>
                          this.props.handleEducationalDetailsChange(e, idx)
                        }
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td className="table-padding">
                      <input
                        type="text"
                        name="completion_year"
                        onChange={e =>
                          this.props.handleEducationalDetailsChange(e, idx)
                        }
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td className="table-padding">
                      <input
                        type="text"
                        name="college_name"
                        onChange={e =>
                          this.props.handleEducationalDetailsChange(e, idx)
                        }
                        className="form-control form-control-sm"
                      />
                    </td>
                    <td className="table-padding">
                      <input type="file" name="certificate" />
                    </td>
                    {idx === 0 ? null : (
                      <td>
                        <FontAwesomeIcon
                          icon={faMinusCircle}
                          onClick={e =>
                            this.props.removeEducationalDetailsRow(e, idx)
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
              onClick={this.props.addEducationalDetailsRow}
            >
              Add new
            </button>
          </table>
        </div>
      </div>
    );
  };
  render() {
    return <React.Fragment>{this.Educational_details()}</React.Fragment>;
  }
}

export default EducationalDetails;
