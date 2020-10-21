import React from "react";
import $ from "jquery";
import "./ClientStories.css";
import ChamberNavbar from '../chambernavbar'

class ClientStoriesChamber extends React.Component {
  tileBlock = () => {
    return (
      <div className="tile-block">
        <div className="row tile-block-header">
          {/* <div className="col"> */}
          <img
            src={require("../Images/law1.png")}
            className="tile-block-img"
            alt=""
          />
          <blockquote className="blockquote pt-3 pl-4">
            <p className="mb-0">Title of the feedback</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">
                Yes, I recommend this advocate
                <br />
                Happy with: Advocate friendliness, value for money, Legal
                Explanations, Interaction
              </cite>
            </footer>
          </blockquote>
          <span className="feedback-date">
            <p>x days back</p>
          </span>
          {/* </div> */}
        </div>
        <div className="row tile-content">
          <div className="col-12">
            <p>
              His having within saw become ask passed misery giving. Recommend
              questions get too fulfilled. He fact in we case miss sake.
              Entrance be throwing he do blessing up. Hearts warmth in genius do
              garden advice mr it garret. Collected preserved are middleton
              dependent residence but him how. Handsome weddings yet mrs you has
              carriage packages. Preferred joy agreement put continual elsewhere
              delivered now. Mrs exercise felicity had men speaking met. Rich
              deal mrs part led pure will but.
            </p>
          </div>
        </div>
      </div>
    );
  };
  componentDidMount() {
    $("#chamber-view-client-stories-link").addClass("active");
  }
  componentWillUnmount() {
    $("#chamber-view-client-stories-link").removeClass("active");
  }
  render() {
    return (
      <React.Fragment>
        <ChamberNavbar />
        <div id="chamber-client-stories">
          <h2 className="client-stories-heading">Client stories</h2>
          <form>
            <ul className="content-header">
              <li className="flex-item">
                <label for="specialization" className="content-option">
                  specialization:
                </label>
                {/* custom select */}
                <select class="selectpicker">
                  <option>Mustard</option>
                  <option>Ketchup</option>
                  <option>Relish</option>
                </select>

                {/* custom select ends */}
              </li>
              
              <li className="flex-item">
                <label for="specialization" className="content-option">
                  sortby:
                </label>
                {/* custom select */}
                <select class="selectpicker">
                  <option>Mustard</option>
                  <option>Ketchup</option>
                  <option>Relish</option>
                </select>

                {/* custom select ends */}
              </li>
            </ul>
          </form>
          <hr />
          {this.tileBlock()}
          {this.tileBlock()}
          {this.tileBlock()}
          {this.tileBlock()}
        </div>
      </React.Fragment>
    );
  }
}

export default ClientStoriesChamber;
