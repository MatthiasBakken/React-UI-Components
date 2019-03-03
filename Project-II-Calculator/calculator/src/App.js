import React from 'react';
import './App.css';

// buttonPush1 contains first set of numbers before operator is clicked
// buttonPush1 contains total after equals or a second operator is clicked
let buttonPush1 = [];
// buttonPush2 contains second set of numbers after operator or equals is clicked
let buttonPush2 = [];
// operatorPush turns to true after an operator is clicked
// turns false when clear is clicked
let operatorPush = false;
// operatorType contains the last type of operator clicked
let operatorType = '';

function log(arg) {
  console.log(arg);
};

// This function manages the clear button functionality
function clearClick() {
  // clears both sets of numbers
  buttonPush1 = [];
  buttonPush2 = [];
  // returns operatorPush to false so buttonPush1 can accept numbers
  operatorPush = false;
  // clears the output to an empty string
  return document.querySelector('.outputResult').innerHTML = '';
}

// This function manages number clicks
function numberClick(event) {
  // setting a variable to use later to access outputs innerHTML - Global doesn't work
  let outputResult = document.querySelector(".outputResult");
  // if an operator has not been clicked
  if (operatorPush !== true) {
    // push the value of the button clicked to the button1Push array
    buttonPush1.push(event.target.value);
    // set the inner html of output to equal the button clicked value
    return outputResult.innerHTML += event.target.value;
  } else {
    // if operator has been clicked push to 2nd array
    buttonPush2.push(event.target.value);
    // set the inner html of output to equal the button clicked value
    return outputResult.innerHTML += event.target.value;
  }
};

// this function manages operator clicks
function operatorClick(event) {
  // setting a variable to use later to access outputs innerHTML - Global doesn't work
  let outputResult = document.querySelector(".outputResult");
  // if operator hasn't been pushed, do the following
  if (!operatorPush) {
    // saves the operator clicked as a string value
    operatorType = event.target.value;
    // changes the operator pushed value to true allowing the 2nd array to accept input
    operatorPush = true;
    // adds the operator to the output screen
    return outputResult.innerHTML += operatorType;
    // if operator clicked and 2nd array has numbers do the following
  } else if (operatorPush && buttonPush2.length > 0) {
    // run the equals function to give us an output before adding new operator
    equalsClick();
    // saves new operator value
    operatorType = event.target.value;
    // keeps operatorPush at true
    operatorPush = true;
    // adds operator to output screen
    return outputResult.innerHTML += operatorType;
  }
};

// This function handles the equals click
function equalsClick() {
  // saves variable to be used later to access innerHTML of output
  let outputResult = document.querySelector(".outputResult");
  // a is now equal to buttonPush1 - example: [4,2,5,4] to 4254
  let a = parseInt(buttonPush1.join(''));
  // b is now equal to buttonPush1 - example: [2,2] to 22
  let b = parseInt(buttonPush2.join(''));
  switch (operatorType) {
    // if division operator, do the following code block
    case '/':
      // saves total to buttonPush1
      buttonPush1 = [`${a / b}`];
      // clears buttonPush2
      buttonPush2 = [];
      // sets operatorPush to false
      operatorPush = false;
      // sets operatorType back to empty string
      operatorType = '';
      // returns the output screen to total of a / b
      return outputResult.innerHTML = a / b;
      break;
    // if multiplication operator, do the following code block
    case 'x':
      // saves total to buttonPush1
      buttonPush1 = [`${a * b}`];
      // clears buttonPush2
      buttonPush2 = [];
      // sets operatorPush to false
      operatorPush = false;
      // sets operatorType back to empty string
      operatorType = '';
      // returns the output screen to total of a * b
      return outputResult.innerHTML = a * b;
      break;
    // if subtraction operator, do the following code block
    case '-':
      // saves total to buttonPush1
      buttonPush1 = [`${a - b}`];
      // clears buttonPush2
      buttonPush2 = [];
      // sets operatorPush to false
      operatorPush = false;
      // sets operatorType back to empty string
      operatorType = '';
      // returns the output screen to total of a - b
      return outputResult.innerHTML = a - b;
      break;
    // if addition operator, do the following code block
    case '+':
      // saves total to buttonPush1
      buttonPush1 = [`${a + b}`];
      // clears buttonPush2
      buttonPush2 = [];
      // sets operatorPush to false
      operatorPush = false;
      // sets operatorType back to empty string
      operatorType = '';
      // returns the output screen to total of a + b
      return outputResult.innerHTML = a + b;
      break;
    default:
      break;
  }
};

// component holding all the buttons
const NumKeys = () => {
  return (
    <div className="numPad">
      <p className="outputResult"></p>
      <button className="clears" onClick={clearClick}>clear</button>
      <button className="operators" value="/" onClick={(event) => operatorClick(event)}>/</button>
      <button className="numbers" value="7" onClick={(event) => numberClick(event)}>7</button>
      <button className="numbers" value="8" onClick={(event) => numberClick(event)}>8</button>
      <button className="numbers" value="9" onClick={(event) => numberClick(event)}>9</button>
      <button className="operators" value="x" onClick={(event) => operatorClick(event)}>x</button>
      <button className="numbers" value="4" onClick={(event) => numberClick(event)}>4</button>
      <button className="numbers" value="5" onClick={(event) => numberClick(event)}>5</button>
      <button className="numbers" value="6" onClick={(event) => numberClick(event)}>6</button>
      <button className="operators" value="-" onClick={(event) => operatorClick(event)}>-</button>
      <button className="numbers" value="1" onClick={(event) => numberClick(event)}>1</button>
      <button className="numbers" value="2" onClick={(event) => numberClick(event)}>2</button>
      <button className="numbers" value="3" onClick={(event) => numberClick(event)}>3</button>
      <button className="operators" value="+" onClick={(event) => operatorClick(event)}>+</button>
      <button className="numbers numZero" value="0" onClick={(event) => numberClick(event)}>0</button>
      <button className="operators" onClick={equalsClick}>=</button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="container">
      <NumKeys />
    </div>
  )
};

export default App;
