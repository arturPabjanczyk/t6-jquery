import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

function App() {
  return(
    <div className="App">
      <h1>Hello jQueryUI</h1>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// eslint-disable-next-line no-undef
$( function() {
  // eslint-disable-next-line no-undef
  $( "#datepicker" ).datepicker({
    onSelect: date => console.log(date)
  });
} );