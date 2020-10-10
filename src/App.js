import React from 'react';
import './App.css';

function App() {
  const nums = [7,8,9,4,5,6,1,2,3,0]
  const ops = ['/', 'x',  '-', '+', '=']

  return (
    <div className="app">
      <div id="display" className="display">123</div>

      {/* Generate buttons */}

      <div className="nums-container">
        <button className="ac bg-light-gray big-h">AC</button>
        {nums.map(num => {
          return(
            <button className={`bg-gray ${num == 0 && "big-h"}`} key={num}>
              {num}
            </button>
          )
        })}
        <button className="bg-gray">.</button>
      </div>

      <div className="ops-container">
        {ops.map(op => {
          return(
            <button className="bg-orange" key={op}>
              {op}
            </button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
