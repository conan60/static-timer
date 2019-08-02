import React from 'react';
import './App.css';

function Hour() {
  return (
    <div className="time">
      <h1>00:</h1>
      <p>Hour</p>
    </div>
  );
}

function Minute() {
  return (
    <div className="time">
      <h1>30:</h1>
      <p>Minute</p>
    </div>
  );
}

function Second() {
  return (
    <div className="time">
      <h1>00</h1>
      <p>Second</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hour/>
      <Minute/>
      <Second/>
    </div>
  );
}

export default App;
