import React from 'react';
import ReactDOM from 'react-dom';

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
  const theDate =  new Date(date);
  return(
    <div className="DateDetails">
      <h2>Fun facts about this date</h2>
      <ol>
        <li>The date is: {theDate.toString()}</li>
        <li>Counting from now ({"XXXX"}, it would be {"6 years ago"}.</li>
        <li>Next valentine's day ({"XXXX"} will be {"in 3 weeks"}.</li>
        <li>It does not fall within a leap year.</li>
        <li>It is a summer day (it's between {"XXXX"} and {"YYYY"}.</li>
        <li>It is not Programmer's Day ({"XXXX"}).</li>
      </ol>
    </div>
  )
}

class App extends React.Component {
  state = {
    selectedDate: "02/18/1971"
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
        {selectedDate? (
          <DateDetails date={selectedDate} format="MM/DD/YYYY"/>
        ): null}
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);