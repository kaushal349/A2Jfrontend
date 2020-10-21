import React from "react";

class MyTimer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 60 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    // let hours = Math.floor(secs / (60 * 60));
    let hours = 0;

    // let divisor_for_minutes = secs % (60 * 60);
    // let minutes = Math.floor(divisor_for_minutes / 60);
    let minutes = 0;

    // let divisor_for_seconds = divisor_for_minutes % 60;
    // let seconds = Math.ceil(divisor_for_seconds);
    let seconds = secs;

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  initializeTimer = () => {
    this.setState(
      () => ({
        seconds: 60
      }),
      () => {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
        this.startTimer();
      }
    );
  };
  componentDidMount() {
    this.initializeTimer();
  }

  startTimer() {
    if (this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.state.time.s === 0 ? (
          <button
            className="btn"
            style={{
              backgroundColor: "#009ACD",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px"
            }}
            onClick={this.initializeTimer}
          >
            Resend OTP
          </button>
        ) : (
          <button
            className="btn"
            style={{
              backgroundColor: "#009ACD",
              color: "white",
              padding: "6px 12px",
              borderRadius: "20px"
            }}
          >
            Wait for {this.state.time.s} seconds
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default MyTimer;
