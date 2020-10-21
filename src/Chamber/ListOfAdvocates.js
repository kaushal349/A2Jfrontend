import React from "react";
import "./ListOfAdvocates.css";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import ChamberNavbar from '../chambernavbar'

const advocateTile = () => {
  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="advocate-tile-heading">
              #
            </th>
            <th scope="col" className="advocate-tile-heading">Name</th>
            <th scope="col" className="advocate-tile-heading">Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>7</td>
          </tr>
          {/* duplicating */}
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>7</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>7</td>
          </tr>
          {/* duplicating ends */}
        </tbody>
      </table>
    </React.Fragment>
  );
};

class ListOfAdvocates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
  }

  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };

  render() {
    return (
      <div>
        <ChamberNavbar />
      <div id="chamber-list-advocates" className="container-fluid">
        <div className="row">
          <div className="col">
            <h2 className="client-stories-heading">Add an Advocate</h2>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-12 pb-0">
            <p className="">
              Please update the list of Advocates in your chamber
            </p>
          </div>
          <div className="col-12">
            <p>
              An Adovate should have already created a personal profile to be
              added here.
            </p>
          </div>
        </div>

        <section className="mt-5">
          <div className="row">
            <div className="col">
              <p>search using:</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="lawyer-name">Name of Advocate:</label>
                <input
                  type="text"
                  placeholder="Search.."
                  className="form-control name-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lawyer-name">Date of Birth:</label>
                <br />
                <DatePicker
                  value={this.state.date}
                  onChange={this.handleDateChange}
                  inputClassName="form-control date-field"
                  inputPlaceholder="Select a day"
                  shouldHighlightWeekends
                />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <p className="existing-advocate-heading">
                List of existing advocates:
              </p>
            </div>
            <div className="col-12 advocate-tile">{advocateTile()}</div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default ListOfAdvocates;
