import React from "react";

class Disclaimer extends React.Component {
  Disclaimer_details = () => {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <p className="bold">step-6: Disclaimer</p>
          </div>
        </div>
        <div className="pl-md-5 d-flex">
          <div>
            <input
              type="checkbox"
              name="disclaimer"
              onChange={this.props.handleDisclaimerChange}
            />
          </div>
          <div className="pl-2">
            <label>
              I solemnly declare that all the information furnished in this
              document is free of errors to the best of my knowledge.
            </label>
          </div>
          <br />
        </div>
      </div>
    );
  };
  render() {
    return <React.Fragment>{this.Disclaimer_details()}</React.Fragment>;
  }
}

export default Disclaimer;
