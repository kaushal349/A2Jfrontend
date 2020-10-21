import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
class OtherDetails extends React.Component {
  Professional_details = () => {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <p className="bold">step-4: Other Details</p>
          </div>
        </div>

        <div className="pl-md-5">
          <p className="size-09">Awards and Recognition</p>
          <div className="table-3-box">
            <table class="table table-sm table-3-controller">
              <thead>
                <tr>
                  <th scope="col">Name of the Award</th>
                  <th scope="col">Recieved in</th>
                  <th scope="col">Supporting Document</th>
                </tr>
              </thead>
              <tbody>
                {this.props.other_details.map((val, idx) => {
                  return (
                    <tr key={val.index}>
                      <td>
                        <input
                          type="text"
                          name="award_name"
                          onChange={e =>
                            this.props.handleOtherDetailsChange(e, idx)
                          }
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="received_in"
                          onChange={e =>
                            this.props.handleOtherDetailsChange(e, idx)
                          }
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input type="file" name="supporting_document" />
                      </td>

                      {idx === 0 ? null : (
                        <td>
                          <FontAwesomeIcon
                            icon={faMinusCircle}
                            onClick={e =>
                              this.props.removeOtherDetailsRow(e, idx)
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
                onClick={this.props.addOtherDetailsRow}
              >
                Add new
              </button>
            </table>
          </div>

          <div class="form-group pt-5">
            <label className="bold size-09">
              A short note that describes you:
            </label>

            <textarea
              name="short_note"
              rows="10"
              class="form-control"
              onChange={this.props.handleChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.Professional_details()}</React.Fragment>;
  }
}
export default OtherDetails;
