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
  }

  render() {
    return <div ref={this.datepickerContainer}/>
  }
}

class App extends React.Component {
  state = {
    selectedDate: null
  }

  render() {
    const {selectedDate} = this.state;
    return (
      <div className="App">
        <h1>Hello jQueryUI</h1>
        <h2>
          {selectedDate ? selectedDate : "Pick date"}
        </h2>
        <DatePicker onDateChange={(date => this.setState({selectedDate: date}))}/>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);