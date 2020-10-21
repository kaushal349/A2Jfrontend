import React, { Component } from "react";
import "./index.css";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid footer" id="footer">
          <div className="row">
            <div className="col-md col-sm-4 pt-3 col-6 class-1">
              <div className="wrapper">
                <p className="heading">A2J</p>
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Contact us</p>
              </div>
            </div>
            <div className="col-md col-sm-4 col-6 pt-3 class-1">
              <div className="wrapper">
                <p className="heading">For Clients</p>
                <p>Search for advocates</p>
                <p>Search for law chambers</p>
                <p>Read legal articles</p>
                <p>Legal App</p>
                <p>A2J drive</p>
              </div>
            </div>
            <div className="col-md col-sm-4 col-6 pt-3">
              <div className="row">
                <div className="col-12 class-1">
                  <div className="wrapper">
                    <p className="heading">For Advocates</p>
                    <p>A2J profile</p>
                  </div>
                </div>
                <div className="col-12 class-1 pt-4">
                  <div className="wrapper">
                    <p className="heading">For chambers</p>
                    <p>xyz</p>
                    <p>xyz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md col-sm-6 pt-3 col-6  class-1">
              <div className="wrapper">
                <p className="heading">More</p>
                <p>Help</p>
                <p>Developers</p>
                <p>Privacy Policy</p>
                <p>Terms and conditions</p>
                <p>Legal Directory</p>
              </div>
            </div>
            <div className="col-md col-sm-6 pt-3 col class-1">
              <div className="wrapper">
                <p className="heading">Social</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>YouTube</p>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
