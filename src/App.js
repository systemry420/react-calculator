import React, { Component } from 'react';
import './App.css';

const nums = [7,8,9,4,5,6,1,2,3,0]
const ops = ['/', '*',  '-', '+', '=']

class App extends React.Component {
  state = {
    lastPressed: undefined,
    currentNumber: '0',
    calc: undefined,
    operation: undefined
  }

  handleClick = (e) => {
    const { lastPressed, currentNumber, calc, operation } = this.state;
    const { innerText } = e.target;

    if(!Number.isNaN(Number(innerText))){
      if(currentNumber === '0'){
        this.setState({
          currentNumber: innerText
        })
      }
      else {
        this.setState({
          currentNumber: currentNumber + innerText
        })
      }

      return;
    }

    switch (innerText) {
      case "AC":{
        this.setState({
          currentNumber: '0',
          calc: undefined,
          operation: undefined
        })
      }
        break;

      case ".":{
        if(!currentNumber.includes('.')){
          this.setState({
            currentNumber: currentNumber + innerText
          })
        }
        break;
      }
      default: {
        if(!operation){
          this.setState({
            operation: innerText,
            calc: currentNumber,
            currentNumber: '0'
          })
        }
        else if(innerText === '='){
          const evalued = eval(`${calc} ${operation} ${currentNumber}`)
          // console.log(evalued);

          this.setState({
            operation: undefined,
            calc: evalued,
            currentNumber: evalued
          })
        }
        else {
          this.setState({
            operation: innerText
          })
        }
      }
        break;
    }


  }
  
  render(){
    const { currentNumber, calc, operation } = this.state;
    return (
      <div className="app">
        <p style={{position: "absolute", top: 0}}>
          {JSON.stringify(this.state, null, 2)}
        </p>
        <div id="display" className="display">
          {currentNumber}
          <small >{calc} {operation}</small>
        </div>
        
        {/* Generate buttons */}

        <div className="nums-container">
          <button onClick={this.handleClick} className="ac bg-light-gray big-h">AC</button>
          {nums.map(num => {
            return(
              <button onClick={this.handleClick} className={`bg-gray ${num == 0 && "big-h"}`} key={num}>
                {num}
              </button>
            )
          })}
          <button onClick={this.handleClick} className="bg-gray">.</button>
        </div>

        <div className="ops-container">
          {ops.map(op => {
            return(
              <button onClick={this.handleClick} className="bg-orange" key={op}>
                {op}
              </button>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
