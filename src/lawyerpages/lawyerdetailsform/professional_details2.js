import React from "react";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

class ProfessionalDetails2 extends React.Component {
  Professional_details = () => {
    return (
      <React.Fragment>
        <div className="pl-md-5">
          <p className="bold size-09">Available Timmings:</p>
          <div  className="table-3-box">
            <table class="table table-sm table-3-controller">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">From</th>
                  <th scope="col">to</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Monday</th>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "monday_from")
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "monday_to")
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Tuesday</th>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "tuesday_from")
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "tuesday_to")
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Wednesday</th>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "wednesday_from")
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "wednesday_to")
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Thursday</th>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "thursday_from")
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "thursday_to")
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Friday</th>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "friday_from")
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "friday_to")
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Saturday</th>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "saturday_from")
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "saturday_to")
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Sunday</th>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "sunday_from")
                          }
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row">
                      <div className="col">
                        <TimePicker
                          showSecond={false}
                          format={this.props.format}
                          use12Hours
                          onChange={e =>
                            this.props.handleTimeChange(e, "sunday_to")
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
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

export default ProfessionalDetails2;
