import React from "react";
import "./index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyTimer from "./mytimer";

const DateTimeSelecter = ({ value, onClick }) => (
  <button className="btn btn-primary btn-rounded" onClick={onClick}>
    Change Date/Time
  </button>
);

class BookAppointments2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time: "",
      appointment_type: "online",
      otp_sent: false
    };
  }

  changeAppointmentType = () => {
    if (this.state.appointment_type === "online") {
      this.setState({ appointment_type: "In person" });
    } else {
      this.setState({ appointment_type: "online" });
    }
  };

  handleDateTimeChange = e => {
    this.setState({ date: e }, () => {
      console.log(this.state.date);
      console.log(typeof this.state.date);
    });
  };

  showOtpDiv = () => {
    this.setState(prevState => ({
      otp_sent: !prevState.otp_sent
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" id="book-appointments-2">
          <div className="outer-box">
            <div className="box-1 shadow rounded">
              {/* again row and col */}
              <div className="box-1-inner">
                <img
                  className="img-1"
                  alt=""
                  src={require("../../Images/logo.png")}
                />

                <div className="appointment-details ">
                  <p>
                    <span className="font-weight-bold">Appointment Time:</span>{" "}
                    12:00pm
                  </p>
                  <p>
                    <span className="font-weight-bold">Appointment Date:</span>{" "}
                  </p>
                  <p>
                    <span className="font-weight-bold">Online/In person:</span>{" "}
                    <button
                      className="btn btn-rounded-2"
                      onClick={this.changeAppointmentType}
                    >
                      {this.state.appointment_type}
                    </button>
                  </p>
                  <br />
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.handleDateTimeChange}
                    closeOnScroll={e => e.target === document}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    // dateFormat="MMMM d, yyyy h:mm aa"
                    customInput={<DateTimeSelecter />}
                  />
                </div>
              </div>

              <div className="row py-4">
                <div className="col advocate-details">
                  <p>
                    <span className="font-weight-bold">Advocate Name:</span>{" "}
                  </p>
                  <p>
                    <span className="font-weight-bold">Specializations:</span>{" "}
                  </p>
                  <p className="font-weight-bold" style={{ color: "#00008b" }}>
                    Practising in High Court of Telangana
                  </p>
                  <p className="font-weight-bold" style={{ color: "#00008b" }}>
                    Associated with law chambers
                  </p>
                </div>
              </div>
              {/* again ends */}
            </div>
            <div className="box-2">
              {!this.state.otp_sent ? (
                <div class="form-group">
                  <label className="font-weight-bold">
                    Enter your Mobile Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Mobile number"
                  />
                  <br />
                  <button
                    onClick={this.showOtpDiv}
                    className="btn btn-rounded btn-primary"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div class="form-group">
                  <label className="font-weight-bold">Enter OTP</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter OTP"
                  />
                  <div className="timer">
                    <MyTimer />
                  </div>
                  <br />
                  <button className="btn btn-rounded btn-primary">
                    Submit
                  </button>
                </div>
              )}

              <br />

              <p className="form-text text-muted">
                Appointment details will be sent to this number.
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-rounded">Back to results</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BookAppointments2;
