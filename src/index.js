import React from 'react';
import ReactDOM from 'react-dom';
import moment from "moment";

import './index.css';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.datepickerContainer = React.createRef();
  }

  componentDidMount() {
    window.$(this.datepickerContainer.current).datepicker({
      onSelect: this.props.onDateChange
    });
    window.$(this.datepickerContainer.current).datepicker('setDate', `${this.props.initialDate}`);
  }

  componentWillUnmount() {
    window.$(this.datepickerContainer.current).datepicker("destroy");
  }

  render() {
    return <div ref={this.datepickerContainer}/>
  }
}

function DateDetails({date, format}) {
  moment.locale("fr");
  const theDate = moment(date, format).locale("pl");
  const now = moment().hour(0).minute(0).seconds(0);
  const nextValentine = moment([theDate.year(), 1, 14]);
  if (nextValentine.isSameOrBefore(theDate)) {
    nextValentine.add(1, "year");
  }
  const summerStart = theDate.clone().startOf("year").add(5, "months").add(20, "days");
  const summerEnd = moment(summerStart).month(8).date(23);
  const programmersDay = moment(theDate).startOf("year").dayOfYear(256).add(3, "seconds");
  return (
    <div className="DateDetails">
      <h2>Fun facts about this date</h2>
      <ol>
        <li>The date is: {theDate.format("ll")}</li>
        <li>Counting from now ({now.format("ll")}), it would be {
          Math.abs(theDate.format("x") - now.format("x")) < 1000 ? "the same day" : theDate.from(now)
        }.</li>
        <li>Next valentine's day ({nextValentine.format("ll")}) will be {theDate.to(nextValentine)}.</li>
        <li>It {theDate.isLeapYear()? "does" : "does not"} fall within a leap year.</li>
        <li>It is {theDate.isBetween(summerStart - 1, summerEnd) ? "": "not"} a summer day (it's between {summerStart.format("ll")} and {summerEnd.format("ll")}).</li>
        <li>It is {theDate.isSame(programmersDay, "day") ? "" : "not"} Programmer's Day ({programmersDay.format("ll")}).</li>
      </ol>
    </div>
  )
}

class App extends React.Component {
  state = {
    selectedDate: "10/28/2020"
  }

  render() {
    const {selectedDate} = this.state;
    return (
      <div className="App">
        <h1>Hello jQueryUI</h1>
        <h2>
          {selectedDate ? selectedDate : "Pick date"}
        </h2>
        <DatePicker
          onDateChange={(date => this.setState({selectedDate: date}))}
          initialDate={selectedDate}
        />
        {selectedDate ? (
          <DateDetails date={selectedDate} format="MM/DD/YYYY"/>
        ) : null}
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);