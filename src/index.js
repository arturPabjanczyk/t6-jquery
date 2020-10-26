import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.datepickerContainer = React.createRef();
  }

  componentDidMount() {
    window.$(this.datepickerContainer.current).datepicker();
  }

  render() {
    return <div ref={this.datepickerContainer}/>
  }
}

function App() {
  return (
    <div className="App">
      <h1>Hello jQueryUI</h1>
      <DatePicker />
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);