import React from "react";
import "./App.css";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Responsive from "react-responsive";

class App extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    endDateFormatted: null,
    startDateFormatted: null,
  };
  hundleDateChange(startDate, endDate) {
    this.setState(() => ({
      endDate,
      startDate,
    }));
    if (startDate != null) {
      this.setState(() => ({
        startDateFormatted: startDate.format("D-MM-Y"),
      }));
    }
    if (endDate != null) {
      this.setState(() => ({
        endDateFormatted: endDate.format("D-MM-Y"),
      }));
    }
  }

  render() {
    return (
      <div className="App">
        <h2>React DateRangePicker</h2>
        <pre style={{ textAlign: "left" }}>
          <p> start date : {JSON.stringify(this.state.startDate)} </p>
          <p> start date Formatted: {this.state.startDateFormatted} </p>
          <p> end date : {JSON.stringify(this.state.endDate)} </p>
          <p> end date Formatted : {this.state.endDateFormatted} </p>
        </pre>

        <Mobile>
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="start_date_id"
            endDate={this.state.endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              this.hundleDateChange(startDate, endDate)
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            numberOfMonths={1}
            orientation="horizontal"
          />
        </Mobile>

        <Default>
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="start_date_id"
            endDate={this.state.endDate}
            endDateId="end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              this.hundleDateChange(startDate, endDate)
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={(focusedInput) => this.setState({ focusedInput })}
            numberOfMonths={2}
            orientation="horizontal"
          />
        </Default>
      </div>
    );
  }
}
export default App;

export const Mobile = (props) => <Responsive {...props} maxWidth={767} />;
export const Default = (props) => <Responsive {...props} minWidth={768} />;
