import React from "react";
class PersonalDetails extends React.Component {
  Personal_details = () => {
    return (
      <div className="block">
        <div className="row">
          <div className="col">
            <p className="bold">step-1: Personal Details</p>
          </div>
        </div>

        <div className="pl-md-5 px-3 min-size-personal-details d-none d-md-block">
          <div class="input-group py-2">
            <div class="input-group-prepend">
              <span class="input-group-text input-group-width">Name:</span>
            </div>
            <input
              type="text"
              name="name"
              class="form-control"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="input-group py-2">
            <div class="input-group-prepend">
              <span class="input-group-text input-group-width">
                Mobile number:
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="mobile_number"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="input-group py-2">
            <div class="input-group-prepend">
              <span class="input-group-text input-group-width">Email Id:</span>
            </div>
            <input
              type="text"
              class="form-control"
              name="email_id"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="input-group py-2">
            <div class="input-group-prepend">
              <span class="input-group-text input-group-width">ID proof:</span>
            </div>
            <input
              type="text"
              class="form-control"
              name="id_proof"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="input-group py-2">
            <div class="input-group-prepend">
              <span class="input-group-text input-group-width">
                Id card number:
              </span>
            </div>
            <input
              type="text"
              id="group-username-1"
              class="form-control"
              name="id_card_number"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="input-group py-2">
            <div class="input-group-prepend">
              <span class="input-group-text input-group-width">
                Languages known:
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="languages_known"
              onChange={this.props.handleChange}
            />
          </div>
        </div>

        {/* optimization for small size screen */}

        <div className="pl-md-5 px-3 min-size-personal-details d-block d-md-none">
          <div class="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              class="form-control form-control-sm"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="form-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              class="form-control form-control-sm"
              name="mobile_number"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="form-group">
            <label>Email ID:</label>
            <input
              type="text"
              class="form-control form-control-sm"
              name="email_id"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="form-group">
            <label>ID proof:</label>
            <input
              type="text"
              class="form-control form-control-sm"
              name="id_proof"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="form-group">
            <label>ID card number:</label>
            <input
              type="text"
              id="group-username-1"
              class="form-control form-control-sm"
              name="id_card_number"
              onChange={this.props.handleChange}
            />
          </div>

          <div class="form-group">
            <label>Languages known:</label>
            <input
              type="text"
              class="form-control form-control-sm"
              name="languages_known"
              onChange={this.props.handleChange}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <React.Fragment>{this.Personal_details()}</React.Fragment>;
  }
}

export default PersonalDetails;
