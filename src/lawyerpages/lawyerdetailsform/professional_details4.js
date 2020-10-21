import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
class ProfessionalDetails4 extends React.Component {
  Professional_details = () => {
    return (
      <React.Fragment>
        <div className="pl-md-5 pt-5">
          <p className="bold size-09">Bar council Membership Details:</p>

          <div className="table-3-box">
            <table class="table table-sm table-3-controller">
              <thead>
                <tr>
                  <th scope="col">Experience Details</th>
                  <th scope="col">Registration Number</th>
                  <th scope="col">Supporting Document</th>
                </tr>
              </thead>
              <tbody>
                {this.props.membership_details.map((val, idx) => {
                  return (
                    <tr key={val.index}>
                      <td className="table-padding">
                        <input
                          type="text"
                          name="experience_name"
                          onChange={e =>
                            this.props.handleMembershipDetailsChange(e, idx)
                          }
                          className="form-control form-control-sm"
                        />
                      </td>
                      <td className="table-padding">
                        <input
                          type="text"
                          name="registration_number"
                          onChange={e =>
                            this.props.handleMembershipDetailsChange(e, idx)
                          }
                          className="form-control form-control-sm"
                        />
                      </td>
                      <td className="table-padding">
                        <input type="file" name="supporting_document" />
                      </td>

                      {idx === 0 ? null : (
                        <td>
                          <FontAwesomeIcon
                            icon={faMinusCircle}
                            onClick={e =>
                              this.props.removeMembershipDetailsRow(e, idx)
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
                onClick={this.props.addMembershipDetailsRow}
              >
                Add new
              </button>
            </table>
          </div>

          <div className="d-none d-md-block mt-5">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text bold">
                  Approximate consultation fee:
                </span>
              </div>
              <input
                type="text"
                name="approximate_consultation_fee"
                className="form-control"
                onChange={this.props.handleChange}
              />
            </div>
          </div>

          {/* optimization for small screen size */}
          <div className="d-block d-md-none mt-5">
            <div class="form-group">
              <label className="bold">Approximate consultation fee:</label>

              <input
                type="text"
                name="approximate_consultation_fee"
                className="form-control form-control-sm"
                onChange={this.props.handleChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.Professional_details()}</React.Fragment>;
  }
}
export default ProfessionalDetails4;
