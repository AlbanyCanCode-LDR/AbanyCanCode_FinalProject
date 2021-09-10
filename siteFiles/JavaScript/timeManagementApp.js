/* 
  ********************************************************************************

  Authors: Lawrence Darwin Reid

  ********************************************************************************
 */

/* /////////////////////////////////////////////////////////////////// */

function timerSequence(event) {
  // This will be used for de-bugging
  console.log("timerSequence");
  // This helps to prevent page reload
  event.preventDefault();
  //This re-sets the counter for another run
  iterations = 0;
  //These function take user input and return the value to the timerSequence function
  timeOne = getInputInMilliseconds("duration1");
  timeTwo = getInputInMilliseconds("duration2");
  maxIterations = getInputValueAsInt("iterations");

  howMany();

  //Helps prevent page reload
  return false;
}

/* /////////////////////////////////////////////////////////////////// */

// 

/* /////////////////////////////////////////////////////////////////// */
function getInputInMilliseconds(elementId) {
  let elemValue = getInputValueAsInt(elementId);

  return elemValue * 1000* 60 ; // Converts milliseconds to minutes
}
function getInputValueAsInt(elementId) {
  let elem = document.getElementById(elementId);
  let elemValue = parseInt(elem.value);
  return elemValue;
}
/* /////////////////////////////////////////////////////////////////// */
function howMany() {
  iterations += 1;
  if (iterations <= maxIterations) {
    first();
  }
}

//This creates a new promise object that allows for a .then method to be used in the function named "first".
//The promise has been fulfilled after the setTimeout function is done running
function sleep(ms) {
  function timeoutFunc(resolve) {
    setTimeout(resolve, ms);
  }

  let newProm = new Promise(timeoutFunc);
  return newProm;
}

function first() {
  sleep(timeOne).then(() => {
    alert("Great Work!, Start Your Break");
    second();
  });
}

function second() {
  sleep(timeTwo).then(() => {
    alert("You Have Been On Break Long Enough, Time To Get Back To Work");
    howMany();
  });
}

//////////////////////////////////////////////////////////


