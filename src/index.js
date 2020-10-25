import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return(
    <div className="App">
      <h1>Hello CodeSandBox</h1>
      <h2>Start editing to see some magic happens</h2>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);